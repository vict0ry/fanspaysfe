import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { sendMessage } from '../modules/messages.action'
import { useDispatch } from 'react-redux'
import ImageIcon from '@mui/icons-material/Image'
import PollIcon from '@mui/icons-material/Poll'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 200,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

export default function AddPostModel() {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
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
      <Button variant="contained" onClick={handleOpen}>Add story</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField onKeyUp={() => handleMessageOnKeyDown(event.target.value)}
                     multiline
                     maxRows={3}
                     minRows={3}
                     sx={{ width: '100%', padding: '0', margin: 0 }} id="outlined-basic" label="Message"
                     variant="outlined" />
          <div className="action" style={{ marginTop: 10 }}>
            <ImageIcon style={{ color: '#5c9edf', cursor: 'pointer' }} />
            <PollIcon style={{ color: '#5c9edf', cursor: 'pointer' }} />

            <Button
              onClick={() => handleAddMessage()}
              sx={{ padding: 0, marginLeft: '5px', float: 'right' }} variant="outlined">Send</Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
