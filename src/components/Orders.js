import React, { useContext } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {
  Link
} from "react-router-dom";
import {LancesContext} from '../providers/LancesProvider' 

// Generate Order Data

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {

  const { lances } = useContext( LancesContext )

  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Lote</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>Vendedor</TableCell>
            <TableCell align="right">Valor Atual</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lances.map((row) => (
            <TableRow key={row.id}>
                <TableCell>{new Date(row.date).toDateString()}</TableCell>
                <TableCell>
                  <Link to={`details/${row.id}`}>
                    {row.title}
                  </Link>
                  </TableCell>
                <TableCell>{row.descricao}</TableCell>
                <TableCell>{row.autor}</TableCell>
                <TableCell align="right">{`$${row.valor}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
