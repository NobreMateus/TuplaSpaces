import React, { useCallback, useState, useEffect, useContext } from "react"
import { TextField, Button, Paper } from "@material-ui/core"
import Title from "../components/Title"
import { LancesContext } from '../providers/LancesProvider'
import { Link } from "react-router-dom"
import SocketManager from "../SocketManager"

export default function Login() {

    const {
        username,
        setUsername,
        name,
        setName,
        longitude,
        setLongitude,
        latitude,
        setLatitude,
        distanceRadius,
        setDistanceRadius
    } = useContext(LancesContext)

    const login = useCallback(()=>{
        SocketManager.shared.login(name, username, longitude, latitude, distanceRadius)        
    }, [latitude, longitude, name, username, distanceRadius])

    return <div style={{ display: "flex", padding: 16, flexDirection: "column", height: "100vh", backgroundColor: "#DCE6FF" }}>
        <Paper style={{ display: "flex", flexDirection: "column", padding: 16 }}>
            <Title>Login</Title>
            <label>Username</label>
            <TextField value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Name</label>
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
            <div style={{display:"flex", flexDirection: "row", width: "100%", justifyContent:"space-between"}}>
                <div style={{display:"flex", flexDirection:"column", width: "calc(33% - 8px)"}}>
                    <label>Latitude</label>
                    <TextField value={latitude} onChange={(e) => setLatitude(parseInt(e.target.value))} />
                </div>
                <div style={{display:"flex", flexDirection:"column", width: "calc(33% - 8px)"}}>
                    <label>Longitude</label>
                    <TextField value={longitude} onChange={(e) => setLongitude(parseInt(e.target.value))} />
                </div>
                <div style={{display:"flex", flexDirection:"column", width: "calc(33% - 8px)"}}>
                    <label>Raio de Distancia</label>
                    <TextField value={distanceRadius} onChange={(e) => setDistanceRadius(parseInt(e.target.value))} />
                </div>
            </div>
            <Link to="/main" style={{ width: "100%" }}>
                <Button onClick={login} style={{ marginTop: 16, width: "100%" }} color="primary" variant="contained" >Entrar</Button>
            </Link>
        </Paper>
    </div>
}