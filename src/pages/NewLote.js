import React from "react"
import { TextField, Button, Paper } from "@material-ui/core"
import Title from "../components/Title"

export default function NewLote() {
    return <div style={{display: "flex", padding: 16, flexDirection: "column", height: "100vh", backgroundColor: "#DCE6FF" }}>
        <Paper style={{display: "flex", flexDirection: "column", padding: 16}}>
            <Title>Novo Lote</Title>
            <label>Titulo</label>
            <TextField />
            <label>Descrição</label>
            <TextField />
            <label>Vendedor</label>
            <TextField />
            <label>Valor</label>
            <TextField />
            <Button style={{marginTop: 16}} color="primary" variant="contained" >Adicionar</Button>
        </Paper> 
    </div>
}