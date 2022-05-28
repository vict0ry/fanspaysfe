import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useSelector } from 'react-redux'
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
  const [userForm, setUserForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    description: ''
  })

  useEffect(() => {
    console.log('herewego')
    debugger;
    setUserForm(loggedUser.userData)
  }, [])
  const username = useParams().username || loggedUser.userData._id
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

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const submitForm = (event) => {
    event.preventDefault()
    const { username, firstName, lastName, description } = event.target.elements
    const data = {
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value,
      description: description.value
    }
    return axios.put('/api/users/updateprofile', data).then(() => {
      console.log('done')
    })
  }
  const [state, setState] = useState({ img: 'https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg' })


  function handleImageChange(event) {
    setState({ img: URL.createObjectURL(event.target.files[0]) })
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

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 2 }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label={t('COMMON.ABOUT_ME')} {...a11yProps(0)} />
          <Tab label={t('COMMON.PRICE_SETTINGS')} {...a11yProps(1)} />
          <Tab label={t('COMMON.PARAMETERS')} {...a11yProps(2)} />
          <Tab label={t('PROFILE.CREDIT_CARDS')} {...a11yProps(3)} />
          <Tab label={t('COMMON.CONTACTS')} {...a11yProps(4)} />

        </Tabs>
        <div>
          <TabPanel value={value} index={0}>
            <Box component="form" noValidate onSubmit={submitForm} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <img style={{ width: 100, marginRight: 20 }}
                       src={state.img}
                       alt="" />
                  <Button
                    variant="contained"
                    component="label"
                  >
                    Upload avatar
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
                  <EasyDatePicker />
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
