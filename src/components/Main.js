import React from 'react';
import { Paper } from '@material-ui/core';
import Contacts from './Contacts';
import Chat from './Chat'

export default function Main() {
    return <div style={{display: "flex", flexDirection:"row", justifyContent:"space-between", padding: 16, height: "calc(100vh - 32px)", backgroundColor: "#DCE6FF"}}>
      <Paper style={{width:"calc(25% - 8px)", height:"calc(100vh - 32px)"}}>
        <h2 style={{marginLeft: 16}}>Contatos</h2>
        <Contacts />
      </Paper>
      <Paper style={{width:"calc(75% - 8px)", height:"calc(100vh - 32px)"}}>
        <Chat />
      </Paper>
    </div>
}