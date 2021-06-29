import React, { useCallback, createContext, useState, useEffect}  from 'react'
import { io } from "socket.io-client";

export const LancesContext = createContext({lances: [], newLote: undefined, newLance: undefined })

const socket = io("http://localhost:3001")

export default function LancesProvider(props) {

    const [lances, setLances] = useState([])

    useEffect(()=> {
        socket.on("new-data", (data) => {
            setLances(data)
            console.log(data)
        })

        socket.on("start", (data) => {
            setLances(data)
        })

        socket.on("invalid-data", (data) => {
            alert("Dados Inválidos: " + data.message)
        })
    },[])

    const newLote = useCallback((title, descricao, valor, vendedor)=>{
        socket.emit("new-lote", {
            title: title,
            descricao: descricao,
            valor: valor,
            autor: vendedor 
        })
    },[])

    const newLance = useCallback((id, nome, isPrivate, valor) => {
        console.log("entrei")
        socket.emit(id+"new-lance", {
            user: nome, 
            isPrivate: isPrivate,
            valor: valor 
        })
    }, [])

    return (
        <LancesContext.Provider value = {{lances: lances, newLote: newLote, newLance: newLance }}>
            {props.children}
        </LancesContext.Provider>
    )
}