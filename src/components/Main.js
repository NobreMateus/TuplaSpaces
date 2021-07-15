import React, { useContext } from 'react';
import { Paper } from '@material-ui/core';
import Contacts from './Contacts';
import Chat from './Chat'
import { LancesContext } from '../providers/LancesProvider'
import Checkbox from '@material-ui/core/Checkbox';

export default function Main() {

  const { selectedChat, online, toogleOnline, name } = useContext(LancesContext)

  return <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 16, height: "calc(100vh - 32px)", backgroundColor: "#DCE6FF" }}>
    <Paper style={{ width: "calc(25% - 8px)", height: "calc(100vh - 32px)" }}>
      <div style={{display: "flex", marginTop: 16, justifyContent:"space-between", alignItems:"center", paddingLeft:16, paddingRight:16}}>
        <h3>{name}</h3>
        <div>
          <Checkbox checked={online} onChange={e=> toogleOnline()} style={{color: online?"green":"red"}} />
        </div>
      </div>
      <h2 style={{ marginLeft: 16, marginTop:0 }}>Contatos</h2>
      <Contacts />
    </Paper>
    <Paper style={{ width: "calc(75% - 8px)", height: "calc(100vh - 32px)" }}>
      {selectedChat ?
        <Chat />
        : <div style={{ display: "flex", width: "100%", height: "100%", justifyContent: "center", alignItems: "center", color: "grey" }} ><h2>Selecione uma Conversa</h2></div>
      }
    </Paper>
  </div>
}