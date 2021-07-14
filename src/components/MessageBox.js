import React from 'react'

export default function MessageBox(props) {
    return <div style={{backgroundColor: "grey", marginTop:"8px", padding: 8, borderRadius: 8, minWidth: "20%", maxWidth: "50%", alignSelf:props.isSending ? "flex-end" : "flex-start"}}>
            <h5 style={{marginBottom: 4, marginTop:0, padding: 0, color: "white"}}>
                {props.username}
            </h5>
            <p style={{marginTop: 0, marginBottom:0,  padding: 0, color: "white"}}>
                {props.message}
            </p>
        </div>
}