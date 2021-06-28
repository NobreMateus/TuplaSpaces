import React, { useState } from "react"
import Title from "../components/Title"
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Button, TextField, Checkbox, FormControlLabel } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function NewLote() {

    const [newLanceNome, setNewLanceNome] = useState("")
    const [newLanceValor, setNewLanceValor] = useState(0)
    const [isLancePrivate, setIsLancePrivate] = useState(false)

    const rows = [
        {valor: "10", data: "21/03/2021", proprietario: "Mateus Nobre"},
        {valor: "10", data: "21/03/2021", proprietario: "Mateus Nobre"},
        {valor: "10", data: "21/03/2021", proprietario: "Mateus Nobre"},
        {valor: "10", data: "21/03/2021", proprietario: "Mateus Nobre"},
        {valor: "10", data: "21/03/2021", proprietario: "Mateus Nobre"},
        {valor: "10", data: "21/03/2021", proprietario: "Mateus Nobre"},
        {valor: "10", data: "21/03/2021", proprietario: "Mateus Nobre"},
        {valor: "10", data: "21/03/2021", proprietario: "Mateus Nobre"},
        {valor: "10", data: "21/03/2021", proprietario: "Mateus Nobre"},
        {valor: "10", data: "21/03/2021", proprietario: "Mateus Nobre"},
    ]

    return <div style={{display: "flex", padding: 16, flexDirection: "column", backgroundColor:"#DCE6FF", height: "calc(100vh - 32px)"}}>
        <Paper style={{height: "calc(50vh - 24px)", padding: "8px"}}>
           <Title>Detalhes do Lote</Title>
            <h4>Lote</h4>
            <div>Teste</div>
            <h4>Data</h4>
            <div>Teste</div>
            <h4>Descrição</h4>
            <div>Teste</div>
            <h4>Vendedor</h4>
            <div>Teste</div>
            <h4>Valor Atual</h4>
            <div>Teste</div>
        </Paper>
        <div style={{display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", marginTop: "16px", height: "calc(50vh - 24px)"}}>
            <Paper style={{width:"calc(50% - 24px)", padding: "8px", display: "flex", flexDirection:"column"}} >
                <Title>Novo Lance</Title>
                <label>Nome</label>
                <TextField value={newLanceNome} onChange={e => setNewLanceNome(e.target.value)} />
                <label>Valor</label>
                <TextField value={newLanceValor} onChange={e => setNewLanceValor(e.target.value)} />
                <FormControlLabel
                    value={isLancePrivate}
                    onChange={e => setIsLancePrivate(e.target.checked)}
                    label="Lance Privado"
                    control={<Checkbox />}
                />
                <Button variant="contained" color="primary" style={{marginTop: 16}} >Fazer Lance</Button>   
            </Paper>
            <Paper style={{width:"calc(50% - 24px)", padding: "8px", overflowY: "auto"}} >
                <Title>Lances Feitos</Title>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Valor</TableCell>
                            <TableCell>Data</TableCell>
                            <TableCell>Proprietario</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(item => (
                            <TableRow>
                                <TableCell>{item.valor}</TableCell>
                                <TableCell>{item.data}</TableCell>
                                <TableCell>{item.proprietario}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper> 
        </div>
    </div>
}