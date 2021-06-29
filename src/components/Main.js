import React from 'react';
import Orders from './Orders';
import Grid from '@material-ui/core/Grid'
import Title from './Title';
import { Button, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Main() {
    return <div style={{padding: 16, height: "100vh", backgroundColor: "#DCE6FF"}}>
      <Paper>
        <div style={{height: "64px"}}>
          <Grid style={{display: "flex", padding: "12px 12px", justifyContent:"space-between", alignItems: "center" }}>
              <div>
                <Title>Ofertas</Title>
              </div>
              <div xl={6}>
                <Link to="/newLote" style={{textDecoration: "none"}}>
                    <Button variant="contained" color="primary" >
                        Adicionar Lote
                    </Button>
                </Link>
              </div>
          </Grid>
        </div>
        <Grid style={{padding:16, backgroundColor: "white"}}>
          <Orders></Orders>
        </Grid>
      </Paper>
    </div>
}