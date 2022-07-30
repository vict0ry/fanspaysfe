import * as React from 'react'
import { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { useDispatch, useSelector } from 'react-redux'
import ImageIcon from '@mui/icons-material/Image'
import PollIcon from '@mui/icons-material/Poll'
import axios from 'axios'
import { postAdded } from '../../../redux/actions/posts.action'
import { useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import Grid from '@mui/material/Grid'
import { Icon } from '../../messages/Icon'

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

export default function AddPostModal() {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const inputFile = useRef(null)
  const onFileUploadClick = () => {
    inputFile.current.click()
  }
  const { username } = useParams()
  const loggedUser = useSelector(state => state.user)
  const [postMessage, setPostMessage] = useState('')
  const { t } = useTranslation()
  const isAllowed = () => {
    return !!(!username || username === loggedUser?.userData?.username)
  }

  function handlePostMessageOnKeyDown(value) {
    setPostMessage(value)
  }

  const [state, setState] = useState([])


  const formData = new FormData()

  function handleAddMessage() {
    formData.append('content', postMessage)
    state.forEach(file => {
      formData.append('images[]', file.img)
    })
    return axios({
      method: 'post',
      url: '/api/posts',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(post => {
      dispatch(postAdded(post.data))
      handleClose()
    })
  }

  let onFileUploadChange = (event) => {
    const objectUrlImgs = [...event.target.files].map(i => {
      return {
        img: i
      }
    })
    setState([...state, ...objectUrlImgs])
  }
  return (
    <div>
      {isAllowed() ?
        <Button variant="contained" onClick={handleOpen}>{t('COMMON.ADD_STORY')}</Button> : ''}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField onKeyUp={() => handlePostMessageOnKeyDown(event.target.value)}
                     multiline
                     maxRows={3}
                     minRows={3}
                     sx={{ width: '100%', padding: '0', margin: 0 }} id="outlined-basic" label="Message"
                     variant="outlined" />
          <Grid sx={{ maxHeight: '500px', overflowY: 'scroll', marginTop: '20px' }} container spacing={1}>
            {state?.map((s, index) => {
              return <Grid item xs={4} sm={4} sx={{
                position: 'relative'
              }}>
                <Button
                  sx={{
                    minWidth: 0,
                    minHeight: 0,
                    position: 'absolute',
                    right: '0',
                    top: '0',
                    background: '#fff',
                    zIndex: 1,
                    '&:hover': {
                      backgroundColor: '#E7E7E7'
                    }
                  }}
                  onClick={() => {
                    setState([...state.slice(0, index), ...state.slice(index + 1, state.length)])
                  }}
                >
                  <Icon name="x" />
                </Button>
                <img style={{ maxWidth: '100%' }} src={URL.createObjectURL(s?.img)} />
              </Grid>
            })}
          </Grid>

          <div className="action" style={{ marginTop: 10 }}>
            <ImageIcon onClick={onFileUploadClick} style={{ color: '#5c9edf', cursor: 'pointer' }}>

            </ImageIcon>
            <input
              type="file"
              multiple
              accept=".png,.jpg,.jpeg"
              onChange={onFileUploadChange}
              ref={inputFile} style={{ display: 'none' }}
            />
            {/*<PollIcon style={{ color: '#5c9edf', cursor: 'pointer' }} />*/}

            <Button
              onClick={() => handleAddMessage()}
              sx={{ padding: 0, marginLeft: '5px', float: 'right' }} variant="outlined">Send</Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
