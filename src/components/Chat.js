import React, {useState, useContext, useCallback, useEffect} from "react"
import { Divider, TextField, Button } from "@material-ui/core"
import Icon from '@material-ui/core/Icon';
import MessageBox from "./MessageBox";
import { LancesContext } from '../providers/LancesProvider'

export default function Chat() {

    const {
        username, name, socketManager, selectedChat, online, messages, setMessages
    } = useContext(LancesContext)

    // const [messages, setMessages] = useState([
    // ])

    const [currentMessage, setCurrentMessage] = useState("")

    const sendMessage = useCallback(()=>{
        // setMessages(oldMessages => {
        //     let newMessage = oldMessages.concat()
        //     newMessage.push({username: username, name: name, message: currentMessage})
        //     return newMessage
        // })
        if(!socketManager.socket) return

        socketManager.socket.emit('new-message', {
            sender: username, receiver: selectedChat, content: currentMessage, time: new Date()
        })
        setCurrentMessage("")

    }, [socketManager.socket, username, selectedChat, currentMessage])

    useEffect(()=>{
        if(!socketManager.socket) return

        // socketManager.socket.on('chat-messages', (data)=>{
        //     debugger
        //     //const orderedMessages = data.messages.map(message => ({username: message.sender, name: message.sender, message: message.content}))
        //     setMessages(data.messages)
        // })

        // socketManager.socket.on('get-new-message', (data)=>{
        //     console.log(data)
        //     //const orderedMessages = data.messages.map(message => ({username: message.sender, name: message.sender, message: message.content}))
        //     setMessages(old => {
        //         let newMess = old.concat()
        //         newMess.push(data.message)
        //         return newMess
        //     })
        // })
        
    },[socketManager.socket])

    return <div style={{display: "flex", flexDirection:"column", height:"100%"}}>
        <div style={{display:"flex", flexDirection:"column", justifyContent: "flex-end", height: "calc(94% - 32px)", padding: 16, overflowY: "auto"}}>
            
            {messages.filter(m => m.receiver === selectedChat || m.sender === selectedChat).map(message => (
                <MessageBox 
                    isSending={message.username === username}
                    username={message.sender}
                    message={message.content}
                />
            ))}
        </div>
        <Divider />
        <div style={{display:"flex", justifyContent:"space-between", padding:8, height: "6%", width:"calc(100% - 16px)", overflowY: "hidden"}}>
            <TextField 
                multiline
                rows={4}
                placeholder="Mensagem..."
                style={{width:"90%", padding: 8}}
                value={currentMessage}
                onChange={e=>setCurrentMessage(e.target.value)}
            />
            <Button
                color="primary" 
                variant="contained"
                onClick={sendMessage}
                disabled={!online}
            >
                Enviar
            </Button>
        </div>
    </div>
}