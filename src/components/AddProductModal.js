import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { sendMessage } from '../modules/messages.action'
import { useDispatch } from 'react-redux'
import Grid from '@mui/material/Grid'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

export default function AddProductModal() {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [userMessage, setUserMessage] = useState('')


  function handleMessageOnKeyDown(value) {
    setUserMessage(value)
  }

  function handleAddMessage() {
    dispatch(sendMessage(userMessage)).then(scrollMessagesDown)
    setUserMessage('')
    socket.emit('notification received', selectedChatId)
  }

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Add product</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid item xs={12}>
            <img style={{ width: 100, marginRight: 20 }}
                 src="https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg"
                 alt="" />
            <Button
              variant="contained"
              component="label"
            >
              Upload product image
              <input
                type="file"
                hidden
              />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="productName"
              label="Product name"
              name="productName"
              autoComplete="productName"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type={'number'}
              fullWidth
              id="productPrice"
              label="Product price"
              name="productPrice"
              autoComplete="productPrice"
            />
          </Grid>
          <TextField onKeyUp={() => handleMessageOnKeyDown(event.target.value)}
                     sx={{ width: '100%', padding: '0', margin: 0 }} id="outlined-basic" label="Description"
                     variant="outlined" />
          <Button
            onClick={() => handleAddMessage()}
            sx={{ padding: 0, marginLeft: '5px' }} variant="outlined">Send</Button>
        </Box>
      </Modal>
    </div>
  )
}
