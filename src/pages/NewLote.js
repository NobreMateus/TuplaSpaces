import React, { useCallback, useState, useEffect, useContext } from "react"
import { TextField, Button, Paper } from "@material-ui/core"
import Title from "../components/Title"
import { LancesContext } from '../providers/LancesProvider'
// const socket = io("http://localhost:3001")

export default function NewLote() {

    const [title, setTitle] = useState("")
    const [descricao, setDescricao] = useState("")
    const [valor, setValor] = useState("")

    const { newLote, username } = useContext( LancesContext )

    useEffect(() => {
        
    }, [])

    const sendNewLote = useCallback(()=>{
        newLote(title, descricao, valor, username)
        setTitle("")
        setDescricao("")
        setValor("")
    },[descricao, title, valor, username, newLote]) 

    return <div style={{display: "flex", padding: 16, flexDirection: "column", height: "100vh", backgroundColor: "#DCE6FF" }}>
        <Paper style={{display: "flex", flexDirection: "column", padding: 16}}>
            <Title>Novo Lote</Title>
            <label>Titulo</label>
            <TextField value = { title } onChange = {(e)=>setTitle(e.target.value)} />
            <label>Descrição</label>
            <TextField value = { descricao } onChange = {(e) => setDescricao(e.target.value)} />
            {/* <label>Vendedor</label>
            <TextField value = {vendedor} onChange = {(e) => setVendedor(e.target.value) } /> */}
            <label>Valor Inicial</label>
            <TextField  value = {valor} onChange = {(e) => setValor(e.target.value) } />
            <Button onClick={sendNewLote} style={{marginTop: 16}} color="primary" variant="contained" >Adicionar</Button>
        </Paper> 
    </div>
}