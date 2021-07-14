import React, { useState, useContext, useEffect, useCallback } from "react"
import Title from "../components/Title"
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Button, TextField, Checkbox, FormControlLabel } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useParams } from "react-router-dom";
import { LancesContext } from "../providers/LancesProvider";

export default function NewLote() {

    const { id } = useParams()
    const { lances, newLance, username } = useContext(LancesContext)
    const [newLanceValor, setNewLanceValor] = useState(0)
    const [isLancePrivate, setIsLancePrivate] = useState(false)
    const [selectedLance, setSelectedLance] = useState()
    const [rows, setRows] = useState([])
    
    useEffect(() => {
        const lanceId = parseInt(id)
        setSelectedLance(lances[lanceId])
    }, [id, lances])

    useEffect(()=>{
        if(!selectedLance) return
        const newRows = selectedLance.lances.map(lance => ({
            valor: lance.valor,
            data: new Date(lance.date).toString(),
            proprietario: lance.user,
            isPrivate: lance.isPrivate
        }))

        setRows(newRows)

    }, [selectedLance])

    const sendNewLance = useCallback(()=> {
        newLance(id, username, isLancePrivate, newLanceValor)
        setNewLanceValor("")
    }, [id, isLancePrivate, newLance, username, newLanceValor])

    if(!selectedLance)
        return <div>Loading...</div>

    return <div style={{ display: "flex", padding: 16, flexDirection: "column", backgroundColor: "#DCE6FF", height: "calc(100vh - 32px)" }}>
        <Paper style={{ height: "calc(50vh - 24px)", padding: "8px" }}>
            <Title>Detalhes do Lote</Title>
            <h4>Lote</h4>
            <div>{selectedLance.title}</div>
            <h4>Data</h4>
            <div>{new Date(selectedLance.date).toDateString()}</div>
            <h4>Descrição</h4>
            <div>{selectedLance.descricao}</div>
            <h4>Vendedor</h4>
            <div>{selectedLance.autor}</div>
            <h4>Valor Atual</h4>
            <div>{selectedLance.valor}</div>
        </Paper>
        <div style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", marginTop: "16px", height: "calc(50vh - 24px)" }}>
            <Paper style={{ width: "calc(50% - 24px)", padding: "8px", display: "flex", flexDirection: "column" }} >
                <Title>Novo Lance</Title>
                {/* <label>Nome</label>
                <TextField value={newLanceNome} onChange={e => setNewLanceNome(e.target.value)} /> */}
                <label>Valor</label>
                <TextField value={newLanceValor} onChange={e => setNewLanceValor(e.target.value)} />
                <FormControlLabel
                    onChange={e => setIsLancePrivate(e.target.checked)}
                    label="Lance Privado"
                    control={<Checkbox />}
                />
                <Button variant="contained" color="primary" style={{ marginTop: 16 }} onClick={sendNewLance}  >Fazer Lance</Button>
            </Paper>
            <Paper style={{ width: "calc(50% - 24px)", padding: "8px", overflowY: "auto" }} >
                <Title>Lances Feitos</Title>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Propritario</TableCell>
                            <TableCell>Valor</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(item => (
                            <TableRow>
                                <TableCell>{item.data}</TableCell>
                                <TableCell>{ 
                                    item.isPrivate ? 
                                        (item.proprietario === username || selectedLance.autor === username) ? item.proprietario : "Privado" 
                                        : item.proprietario
                                }</TableCell>
                                <TableCell>${item.valor}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    </div>
}