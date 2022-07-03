import Box from '@mui/material/Box'
import { MiniUser } from '../pages/profile/components/MiniUser'
import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { useState } from 'react'
import { showSuccessSnackbar } from '../redux/actions/snackbar.actions'
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
export const AddWishModal = ({myProfile}) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { username } = useParams()
  const dispatch = useDispatch();
  const loggedUser = useSelector(state => state.user)
  const { t } = useTranslation()
  const isAllowed = () => {
    return true
    // return !(!username || username === loggedUser?.userData?.username)
  }
  const submitForm = (event) => {
    event.preventDefault()
    const { amount, name } = event.target.elements
  }
  const [formData, setFormData] = useState({})
  const formChange = (event) => {
    event.preventDefault()
    formData[event.target.name] = event.target.value
    setFormData({ ...formData })
  }


  function handleWishCreate() {
    axios.post('/api/wish/add', {
      name: formData.name,
      amount: +formData.amount,
    }).then(i => {
      handleClose();
      dispatch(showSuccessSnackbar("Success!"));
    })
  }
  return <div>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component={'form'} onChange={formChange} onSubmit={submitForm} sx={style}>
        <h3 style={{fontSize: '24px'}}>Add wish</h3>
        <TextField
          name={'name'}
          type={'text'}
          sx={{ width: '100%', padding: '0', margin: 0 }} id="outlined-basic" label={t('NAME')} required />
        <Divider />
        <TextField
          name={'amount'}
          type={'number'}
          sx={{ width: '100%', marginTop: '10px' }} id="outlined-basic" label={t('AMOUNT')} required />
        <Divider />

        <Button onClick={() => handleWishCreate()}
                disabled={!formData.amount}
                variant="contained"
                style={{ margin: '10px 0', float: 'right' }}>{t('COMMON.SEND')}</Button>

      </Box>
    </Modal>
    {myProfile ? <div onClick={() => setOpen(true)} style={{background: '#E8EFFF',
      marginTop: '10px',
      maxWidth: '204px',
      textAlign: 'center',
      padding: '5px 10px', borderRadius: '10px', border: '1px dashed #4776E6'}}>
      <img src="/images/icons/plus.svg" alt="add" />
      <span style={{color: '#4776E6', marginLeft: '5px'}}>{t('Add new')}</span>
    </div> : '' }
  </div>
}