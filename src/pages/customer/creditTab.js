import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 150,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`
  },
  {
    field: 'amount',
    headerName: 'amount',
    width: 150,
    type: 'number'
  },
  {
    field: 'description',
    headerName: 'description',
    width: 110
  },
  {
    field: 'type',
    headerName: 'type',
    sortable: false,
    width: 160
  }
]


export default function DataGridDemo({ rows }) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}


export const CreditTab = () => {
  const [state, setState] = useState({})
  const [rows, setRows] = useState([])

  useEffect(() => {
    axios.get('/api/credit').then(({ data }) => {
      const rowsMapper = data.transactions.map(({ amount, description, recipient, sender }, index) => {
        return { amount, description, lastName: recipient.lastName, firstName: recipient.firstName, id: index + 1 }
      })
      setRows(rowsMapper)
      setState(data)
    })
  }, [])
  return <div>
    <h1>Credit tab</h1>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper sx={{ p: 2 }}>
            <strong>Transakční historie</strong>
            <DataGridDemo rows={rows} />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 2 }}>
            <h1 style={{ textAlign: 'center' }}>{state?.total},-</h1>
            <br />
            <div className={'payment-way'}>
              Způsob platby:
              Bankovním převodem
              (trvá 1 pracovní den)
            </div>
            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
            <div className={'payment-detail'}>
              Číslo účtu: 2800817464 / 2010
              Variabilní symbol: 1415361
              Částka: (libovolná)
              1 Kč = 1 kredit
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </div>
}
