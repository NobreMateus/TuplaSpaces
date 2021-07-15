import React, { useCallback, createContext, useState, useEffect, useMemo}  from 'react'
import { io } from "socket.io-client";
import SocketManager from '../SocketManager';

export const LancesContext = createContext({
    username: "", 
    setUsername: undefined,
    name: "",
    setName: undefined,
    latitude: "",
    setLatitude: undefined,
    longitude: "",
    setLongitude: undefined,
    distanceRadius: undefined,
    setDistanceRadius: undefined,
    selectedChat: undefined,
    setSelectedChat: undefined,
    socketManager: undefined,
    contacts: [],
    setContacts: undefined,
    online: true,
    setOnline: undefined,
    toogleOnline: undefined,
    messages: [],
    setMessages: undefined
})

export default function LancesProvider(props) {

    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [distanceRadius, setDistanceRadius] = useState(0)
    const [selectedChat, setSelectedChat] = useState("")
    const [contacts, setContacts] = useState([])
    const [online, setOnline] = useState(true)
    const [messages, setMessages] = useState([])

    const socketManager = useMemo(()=>{
        return SocketManager.shared
    }, [])

    useEffect(()=> {
        
        SocketManager.shared.socket.on('new-contacts', (data)=>{
            setContacts(data.contacts)
        })
        
        SocketManager.shared.socket.on('new-contact', (data)=>{
            setContacts((old) => {
                const contactIndex = old.findIndex(cont => cont.username === data.contact.username) 
                let newCont = old.concat()
                if(contactIndex === -1) {
                    newCont.push(data.contact) 
                } else {
                    newCont[contactIndex].name = data.contact.name
                    newCont[contactIndex].latitude = data.contact.latitude
                    newCont[contactIndex].longitude = data.contact.longitude
                    newCont[contactIndex].distanceRadius = data.contact.distanceRadius
                    newCont[contactIndex].online = true
                }
                return newCont
            })
        })

        SocketManager.shared.socket.on('off-user', (data)=>{
            setContacts((old) => {
                const contactIndex = old.findIndex(cont => cont.username === data.contact.username) 
                let newCont = old.concat()
                if(contactIndex === -1) return newCont
                newCont[contactIndex].online = false
                return newCont
            })
        })  

        SocketManager.shared.socket.on('chat-messages', (data)=>{
            debugger
            //const orderedMessages = data.messages.map(message => ({username: message.sender, name: message.sender, message: message.content}))
            setMessages(data.messages)
        })

        SocketManager.shared.socket.on('get-new-message', (data)=>{
            console.log(data)
            //const orderedMessages = data.messages.map(message => ({username: message.sender, name: message.sender, message: message.content}))
            setMessages(old => {
                let newMess = old.concat()
                newMess.push(data.message)
                return newMess
            })
        })
        
    },[])

    const toogleOnline = useCallback(()=>{
        setOnline(old => {
            if(!old) {
                SocketManager.shared.socket.emit('toogle-on', {
                    username: username,
                    name: name,
                    latitude: latitude,
                    longitude: longitude
                })
            } else {
                SocketManager.shared.socket.emit('toogle-off', {})
            }
            return !old 
        })

    }, [latitude, longitude, name, username])

    useEffect(()=>{
        


    }, [online])

    return (
        <LancesContext.Provider value = {{
            username: username, 
            setUsername: setUsername,
            name: name,
            setName: setName, 
            latitude: latitude,
            setLatitude: setLatitude,
            longitude: longitude,
            setLongitude: setLongitude,
            distanceRadius: distanceRadius,
            setDistanceRadius: setDistanceRadius,
            selectedChat: selectedChat,
            setSelectedChat: setSelectedChat,
            socketManager: socketManager,
            contacts: contacts, 
            setContacts: setContacts,
            online: online,
            setOnline: setOnline,
            toogleOnline: toogleOnline,
            messages: messages,
            setMessages: setMessages
        }}>
            {props.children}
        </LancesContext.Provider>
    )
}