import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { UserPricesFormTab } from '../../components/userPricesFormTab'
import { UserParametersTab } from '../../components/UserParametersTab'
import { t } from 'i18next'
import { AddCreditCard } from '../../components/AddCreditCard'
import { EasyDatePicker } from './components/easyDatePicker'
import { TabContacts } from '../../components/TabContacts'
import { loadProfile } from '../../redux/actions/profile.action'
import { beURL } from '../../config'
import { SharedLeftMenu } from '../../layout/components/SharedLeftMenu'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export function EditProfile(props) {
  const loggedUser = useSelector(state => state.user)

  const username = useParams().username || loggedUser?.userData?._id
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadProfile(username))
  }, [])
  const { profileUser } = useSelector(state => state.profile.profile)

  const [userForm, setUserForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    description: '',
    birthDate: '',
    profilePic: ''
  })

  useEffect(() => {
    setUserForm(profileUser)
    if (profileUser.profilePic) {
      setAvatar({ img: beURL + '/' + profileUser.profilePic })
    }
  }, [])
  const handleFormChange = (evt) => {
    const value = evt.target.value
    setUserForm({
      ...userForm,
      [evt.target.name]: value
    })
  }

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`
    }
  }

  const [value, setValue] = useState(0)
  const [birthDate, setBirthDate] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const chosenAgeCallback = (dateIsoString) => {
    setBirthDate(dateIsoString)
  }

  const submitForm = (event) => {
    event.preventDefault()
    const {
      username,
      firstName,
      lastName,
      description
    } = event.target.elements
    const data = {
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value,
      description: description.value,
      birthDate: birthDate
    }
    return axios.put('/api/users/updateprofile', data).then(() => {
      console.log('done')
    })
  }
  const [avatar, setAvatar] = useState({ img: '/noavatar.png' })


  function handleImageChange(event) {
    setAvatar({ img: URL.createObjectURL(event.target.files[0]) })
    const formData = new FormData()
    formData.append('croppedImage', event.target.files[0])

    axios({
      method: 'post',
      url: '/api/users/profilePicture',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    }, () => {
      console.log('avatr uploaded')
    })
  }

  return <div>
    <Box sx={{ 'mt': 2 }}>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 3fr', gap: 2 }}>
        <Tabs
          style={{background:'white'}}
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label={<div><img src="/images/icons/user.svg" alt="about me" /> {t('COMMON.ABOUT_ME')}</div>} {...a11yProps(0)} />
          <Tab label={<div><img src="/images/icons/currency-dollar.svg" alt="price settings" /> {t('COMMON.PRICE_SETTINGS')}</div>} {...a11yProps(1)} />
          <Tab label={<div><img src="/images/icons/settings.svg" alt="price settings" /> {t('COMMON.PARAMETERS')}</div>} {...a11yProps(2)} />
          <Tab label={<div><img src="/images/icons/bank-card.svg" alt="price settings" /> {t('PROFILE.CREDIT_CARDS')}</div>} {...a11yProps(3)} />
          <Tab label={<div><img src="/images/icons/account.svg" alt="price settings" />{t('COMMON.CONTACTS')}</div>} {...a11yProps(4)} />

        </Tabs>
        <div style={{background: 'white'}}>
          <TabPanel value={value} index={0}>
            <Box component="form" noValidate onSubmit={submitForm} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <img style={{ width: 100, marginRight: 20 }}
                       src={avatar.img}
                       alt="" />
                  <Button
                    variant="contained"
                    component="label"
                  >
                    {t('PROFILE.UPLOAD_AVATAR')}
                    <input
                      onChange={handleImageChange}
                      type="file"
                      hidden
                    />
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    value={userForm.firstName}
                    onChange={handleFormChange}
                    id="firstName"
                    label={t('COMMON.FIRST_NAME')}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label={t('COMMON.LAST_NAME')}
                    onChange={handleFormChange}
                    value={userForm.lastName}
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label={t('COMMON.USERNAME')}
                    value={userForm.username}
                    onChange={handleFormChange}
                    name="username"
                    autoComplete="username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    multiline
                    required
                    fullWidth
                    id="description"
                    label={t('COMMON.DESCRIPTION')}
                    onChange={handleFormChange}
                    value={userForm.description}
                    name="description"
                    minRows={3}
                    autoComplete="description"
                  />
                </Grid>
                <Grid item xs={12}>
                  <EasyDatePicker
                    valueDate={userForm.birthDate}
                    chosenAgeCallback={chosenAgeCallback.bind(this)} />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {t('COMMON.SAVE')}
              </Button>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <UserPricesFormTab />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <UserParametersTab />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <AddCreditCard />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <TabContacts />
          </TabPanel>
        </div>

      </Box>
    </Box>
  </div>
}
