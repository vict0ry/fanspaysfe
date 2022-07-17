import * as React from 'react'
import { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import FormControl from '@mui/material/FormControl'
import { FormGroup } from '@material-ui/core'
import { showSuccessSnackbar } from '../../../redux/actions/snackbar.actions'

const style = {
  position: 'absolute',
  top: '50%',
  borderRadius: '20px',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

export default function AddDemandModal() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { username } = useParams()
  const loggedUser = useSelector(state => state.user)
  const { t } = useTranslation()
  const isAllowed = () => {
    return !!(!username || username === loggedUser?.userData?.username)
  }
  const user = useSelector(state => state.profile.profile);
  const dispatch = useDispatch();
  const submitForm = (event) => {
    event.preventDefault()
    const { price, description } = event.target.elements
    debugger;
    return axios.post('/api/demands',{
      price: +price.value,
      description: description.value,
      recipient: user.profileUser._id
    }).then(demands => {
      handleClose();
      dispatch(showSuccessSnackbar("Success!"));
    })
  }


  return (
    <div>
      {isAllowed() ?
        <Button variant="contained" onClick={handleOpen}>{t('COMMON.ADD_DEMAND')}</Button> : ''}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component={'form'} onSubmit={submitForm} sx={style}>
          <FormGroup>
          <FormControl style={{marginBottom: '10px'}}>
            <TextField
              name={'price'}
              type={'number'}
              sx={{ width: '100%', padding: '0', margin: 0 }} id="outlined-basic" label={t('PROFILE.OFFERED_AMOUNT')} required />

          </FormControl>
         <FormControl>
           <TextField
                      multiline
                      name={'description'}
                      maxRows={3}
                      minRows={3}
                      sx={{ width: '100%', padding: '0', margin: 0 }} id="outlined-basic" label={t('PROFILE.OFFERED_MESSAGE')}
                      variant="outlined" />
         </FormControl>
            <FormControl>
              <Button
                type={'submit'}
                sx={{ maxWidth: '100px', marginTop:'10px', float: 'right' }} variant="outlined">{t('COMMON.SEND')}
              </Button>

            </FormControl>
          </FormGroup>
        </Box>
      </Modal>
    </div>
  )
}
