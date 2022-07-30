import * as React from 'react'
import { useEffect, useState } from 'react'
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
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import { beURL } from '../../../config'
import { Link } from 'react-router-dom'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Card from '@mui/material/Card'
import moment from 'moment'

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
  const isMyProfile = () => {
    return !(!username || username === loggedUser?.userData?.username)
  }
  const user = useSelector(state => state.profile.profile)
  const dispatch = useDispatch()
  const submitForm = (event) => {
    event.preventDefault()
    const { price, description } = event.target.elements
    return axios.post('/api/demands', {
      price: +price.value,
      description: description.value,
      recipient: user.profileUser._id
    }).then(demands => {
      handleClose()
      dispatch(showSuccessSnackbar('Success!'))
    })
  }
  const [demands, setDemands] = useState([])
  useEffect(() => {
    axios.get('/api/demands/' + user.profileUser._id).then(({ data }) => {
      setDemands(data)
    })
  }, [])
  const handleDemandAction = (action, demandId) => {
    axios.put('/api/demands/change-status', {
      demandId, action
    }).then(console.log)
  }


  return (
    <div>
      {isMyProfile() ?
        <Button variant="contained" onClick={handleOpen}>{t('COMMON.ADD_DEMAND')}</Button> : ''}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component={'form'} onSubmit={submitForm} sx={style}>
          <FormGroup>
            <FormControl style={{ marginBottom: '10px' }}>
              <TextField
                name={'price'}
                type={'number'}
                sx={{ width: '100%', padding: '0', margin: 0 }} id="outlined-basic" label={t('PROFILE.OFFERED_AMOUNT')}
                required />

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
                sx={{ maxWidth: '100px', marginTop: '10px', float: 'right' }} variant="outlined">{t('COMMON.SEND')}
              </Button>
            </FormControl>
          </FormGroup>
        </Box>
      </Modal>
      {
        demands.map(demand => {
          return <div style={{ marginTop: '20px' }}>
            <div>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar sx={{ width: '55px', height: '55px' }} aria-label="recipe">
                      <img style={{ width: '100%' }} src={beURL + demand.postedBy?.profilePic} />
                    </Avatar>
                  }
                  title={
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Link
                        to={'/profile/' + demand.postedBy.username}>{demand.postedBy.firstName + ' ' + demand.postedBy.lastName}</Link>
                      {moment(demand.createdAt).fromNow()}
                    </div>
                  }
                  subheader={demand.postedBy.username}
                >
                </CardHeader>
                <CardContent>
                  <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    {demand.description}
                  </div>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{
                    background: 'linear-gradient(94.04deg, #4776E6 10.41%, #8E54E9 77.48%)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    'background-clip': 'text',
                    'text-fill-color': 'transparent',
                    fontWeight: 'bold',
                    fontSize: '24px'
                  }}>{demand.price} CZK
                  </div>
                  <div>
                    {!isMyProfile() ? <div>
                      <Button onClick={() => handleDemandAction('accepted', demand._id)} variant={'success'}>
                        <img src="/images/icons/accept.svg" style={{ marginRight: '10px' }} alt="" />
                        {t('COMMON.ACCEPT')}
                      </Button>
                      <Button onClick={() => handleDemandAction('declined', demand._id)} variant={'cancel'}
                              sx={{ marginLeft: '10px' }}>
                        <img src="/images/icons/remove.svg" style={{ marginRight: '10px' }} alt="" />
                        {t('COMMON.REFUSE')}
                      </Button>
                    </div> : <div style={{
                      background: demand.status === 'request' ? 'dark-yellow' : 'green',
                      padding: '5px 10px',
                      color: 'black',
                      borderRadius: '5px'
                    }}>{demand.status}</div>}

                  </div>
                </CardActions>
              </Card>
            </div>

          </div>
        })
      }
    </div>)
}

