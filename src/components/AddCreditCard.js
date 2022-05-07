import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import TextField from '@mui/material/TextField'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { t } from 'i18next'
import Grid from '@mui/material/Grid'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  borderRadius: '20px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

export const AddCreditCard = () => {
  const [state, setState] = useState({
    isOpen: false,
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: ''
  })


  const handleInputFocus = (e) => {
    setState({ ...state, focus: e.target.name, open: false })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setState({ ...state, [name]: value })
  }
  const handleAddNewCard = () => {
    setState({
      ...state,
      isOpen: !state.isOpen
    })
  }

  function handleClose() {
    setState({
      ...state,
      isOpen: false
    })
  }

  return <div>
    <Button variant="contained" onClick={handleAddNewCard}>{t('COMMON.ADD_CARD')}</Button>
    <Modal
      open={state.isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="form" noValidate onSubmit={() => {
      }} sx={style}>
        <div>
          <Cards
            cvc={state.cvc}
            expiry={state.expiry}
            focused={state.focus}
            name={state.name}
            number={state.number}
          /></div>
        <div style={{ marginTop: 10 }}>
          <Grid item xs={{ marginTop: 10, width: '100%' }}>
            <TextField
              type="text"
              name="name"
              fullWidth
              label="Card holder name"
              onChange={(e) => handleInputChange(e)}
              onFocus={(e) => handleInputFocus(e)}
            />
          </Grid>
          <Grid item xs={{ marginTop: 10, width: '100%' }}>
            <TextField
              xs={12}
              type="tel"
              name="number"
              fullWidth
              label="Card Number"
              onChange={(e) => handleInputChange(e)}
              onFocus={(e) => handleInputFocus(e)}
            />
          </Grid>
          <Grid item xs={{ marginTop: 10, width: '100%' }}>
            <TextField
              type="number"
              name="cvc"
              fullWidth
              label="CVC code"
              maxLength="3"
              onChange={(e) => handleInputChange(e)}
              onFocus={(e) => handleInputFocus(e)}
            />
          </Grid>
          <Grid item xs={{ marginTop: 10, width: '100%' }}>
            <TextField
              type="tel"
              name="expiry"
              label="Card expires"
              onChange={(e) => handleInputChange(e)}
              onFocus={(e) => handleInputFocus(e)}
            />
          </Grid>
        </div>
        <Button variant="contained" onClick={handleAddNewCard}>{t('COMMON.SAVE')}</Button>
      </Box>
    </Modal>
  </div>
}
