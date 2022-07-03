import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import IconButton from '@mui/material/IconButton'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import { MiniUser } from '../components/MiniUser'
import axios from 'axios'
import { t } from 'i18next'
import { showSuccessSnackbar } from '../../../redux/actions/snackbar.actions'

const style = {
  position: 'absolute',
  top: '50%',
  borderRadius: '20px',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 250,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

export default function AddRemoveBalance({ recipient, children }) {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { username } = useParams()
  const loggedUser = useSelector(state => state.user)
  const { t } = useTranslation()
  const isAllowed = () => {
    if (loggedUser.userData.role === 'admin') {
      return true;
    } return false;
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


  function handleAddRemoveCredit(recipient) {
    axios.post('/api/credit/addremove', {
      description: formData.description,
      amount: +formData.amount,
      recipient: recipient._id,
      sender: loggedUser.userData._id
    }).then(_ => {
      handleClose();
      dispatch(showSuccessSnackbar("Success!"));
    })
  }

  return (
    <div>
      {isAllowed() ?
        <Box sx={{ display: 'flex',
          flexDirection: 'column',
          marginTop: '10px', justifyAlign: 'center', alignItems: 'center', cursor: 'pointer' }}>
          <Button onClick={handleOpen} variant="contained">{t('ADD / Remove balance')}</Button>
          <Button style={{margin: '10px 0', background: 'red'}} variant="contained">{t('Block user')}</Button>
        </Box> : ''}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component={'form'} onChange={formChange} onSubmit={submitForm} sx={style}>
          <TextField
            name={'amount'}
            type={'number'}
            sx={{ width: '100%', padding: '0', margin: 0 }} id="outlined-basic" label={t('PROFILE.TIP_AMOUNT')} required />
          <Divider />
          <TextField style={{ marginTop: 10 }}
                     name={'description'}
                     multiline
                     minRows={2}
                     sx={{ width: '100%', padding: '0', margin: 0 }} id="outlined-basic" label={t('COMMON.MESSAGE')}/>

          <Button onClick={() => handleAddRemoveCredit(recipient)}
                  disabled={!formData.amount}
                  variant="contained"
                  style={{ marginTop: 10, float: 'right' }}>{t('COMMON.SEND')}</Button>
        </Box>
      </Modal>
    </div>
  )
}
