import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import IconButton from '@mui/material/IconButton'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import { MiniUser } from '../components/MiniUser'
import axios from 'axios'

const style = {
  position: 'absolute',
  top: '50%',
  borderRadius: '20px',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 350,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

export default function SendTipModal({ recipient, children, type = 'TIP', wishId }) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { username } = useParams()
  const loggedUser = useSelector(state => state.user)
  const { t } = useTranslation()
  const isAllowed = () => {
    return true
    // return !(!username || username === loggedUser?.userData?.username)
  }
  const submitForm = (event) => {
    event.preventDefault()
    const { amount, description } = event.target.elements
  }
  const [formData, setFormData] = useState({})
  const formChange = (event) => {
    event.preventDefault()
    formData[event.target.name] = event.target.value
    setFormData({ ...formData })
  }


  function handleCreditSend(recipient) {
    let data = {
      description: formData.description,
      amount: +formData.amount,
      recipient: recipient._id,
      category: 'TIP',
      sender: loggedUser.userData._id
    };
    if (type === 'WISH') {
      data = {
        ...data,
        category: 'WISH',
        wishId: wishId
      }
    }
    axios.post('/api/credit', data).then(_ => {
      axios.get('/api/credit').then(response => {
        setOpen(false)
      })
    })
  }

  return (
    <>
      {isAllowed() ?
        <Box onClick={handleOpen}>{children}</Box> : ''}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component={'form'} onChange={formChange} onSubmit={submitForm} sx={style}>
          <MiniUser user={recipient} />
          <TextField
            name={'amount'}
            type={'number'}
            sx={{ width: '100%', padding: '0', margin: 0 }} id="outlined-basic" label={t('PROFILE.TIP_AMOUNT')} required />
          <Divider />
          <TextField style={{ marginTop: 10 }}
                     name={'description'}
                     multiline
                     minRows={2}
                     sx={{ width: '100%', padding: '0', margin: 0 }} id="outlined-basic" label={t('COMMON.MESSAGE')} />

          <Button onClick={() => handleCreditSend(recipient)}
                  disabled={!formData.amount}
                  variant="contained"
                  style={{ margin: '10px 0', float: 'right' }}>{t('COMMON.SEND')}</Button>

        </Box>
      </Modal>
    </>
  )
}
