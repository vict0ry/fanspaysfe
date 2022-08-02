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
import MenuItem from '@mui/material/MenuItem'
import { Select } from '@mui/material'

const tabStyles = {
  padding: "12px",
  '&.Mui-selected': {
    color: '#4776E6'
  },
  fontSize: "16px",
  fontWeight: 600,
  textTransform: "none",
  color: "#5D5E65"
}

const tabStylesDiv = {
  width: "100%",
  display: "flex",
  alignItems: "center"
}

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
  const [email, setEmail] = useState(profileUser.email);
  const [checkboxes, setCheckboxes] = useState({});

  console.log(userForm)

  useEffect(() => {
    setUserForm(profileUser)
    if (profileUser.profilePic) {
      setAvatar({ img: beURL + profileUser.profilePic })
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


  const [avatar, setAvatar] = useState({ img: '/noavatar.png' })
  const [fileAvatar, setFileAvatar] = useState([]);


  function handleImageChange(event) {
    setAvatar({ img: URL.createObjectURL(event.target.files[0]) })
    setFileAvatar(event.target.files);
  }

  const submitForm = (event) => {
    //uploading photo

    if(avatar.img !== beURL + profileUser.profilePic) {
      const formData = new FormData()
      formData.append('croppedImage', fileAvatar[0])

      axios({
        method: 'post',
        url: '/api/users/profilePicture',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
      }, () => {
        console.log('avatar uploaded')
      })
    }

    //uploading other data

    event.preventDefault()
    const {
      username,
      firstName,
      lastName,
      description
    } = event.target.elements

    const checked = [];
    Object.keys(checkboxes).forEach(tag => {
      if(checkboxes[tag]){
        checked.push(tag);
      }
    })

    const data = {
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value,
      description: description.value,
      birthDate: birthDate,
      email: email,
      checkboxes: checked
    }
    return axios.put('/api/users/updateprofile', data).then(() => {
      console.log('done')
    })
  }

  return <div>
    <Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr', borderRadius: "8px", overflow: "hidden"}}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          background: "#fff",
          minWidth: "200px",
          borderRight: "1px solid #ECE9F1"
        }}>
          <Box sx={{
            margin: "16px 0 12px 12px",
            fontSize: "20px",
            fontWeight: 700
          }}>{t("USERMENU.SETTINGS")}</Box>
          <Tabs
            style={{
              flexGrow: 1
            }}
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
          >
            <Tab
              sx={tabStyles}
              label={
                <div style={tabStylesDiv}>
                  <img style={{marginRight: "14px"}}
                       src="/images/icons/user.svg"
                       alt="about me"
                  />
                  {t('COMMON.ABOUT_ME')}
                </div>}
              {...a11yProps(0)}
            />
            <Tab
              sx={tabStyles}
              label={
                <div style={tabStylesDiv}>
                  <img style={{marginRight: "14px"}}
                       src="/images/icons/currency-dollar.svg"
                       alt="price settings"
                  />
                  {t('COMMON.PRICE_SETTINGS')}
                </div>}
              {...a11yProps(1)}
            />
            <Tab
              sx={tabStyles}
              label={
                <div style={tabStylesDiv}>
                  <img
                    style={{marginRight: "14px"}}
                    src="/images/icons/settings.svg"
                    alt="price settings"
                  />
                  {t('COMMON.PARAMETERS')}
                </div>}
              {...a11yProps(2)}
            />
            <Tab
              sx={tabStyles}
              label={
                <div style={tabStylesDiv}>
                  <img
                    style={{marginRight: "14px"}}
                    src="/images/icons/bank-card.svg"
                    alt="price settings" />
                  {t('PROFILE.CREDIT_CARDS')}
                </div>}
              {...a11yProps(3)}
            />
            <Tab
              sx={tabStyles}
              label={
                <div style={tabStylesDiv}>
                  <img
                    style={{marginRight: "14px"}}
                    src="/images/icons/account.svg"
                    alt="price settings" />
                  {t('COMMON.CONTACTS')}
                </div>}
              {...a11yProps(4)}
            />
          </Tabs>
        </Box>

        <div style={{background: '#fff', maxHeight: "70vh", overflowY: "scroll"}}>
          <TabPanel value={value} index={0}>
            <Box component="form" noValidate onSubmit={submitForm} sx={{}}>
              <Box>
                <Box sx={{display: "flex", alignItems: "center", marginBottom: "24px"}} item xs={12} sm={12}>
                  <Box sx={{
                    width: "112px",
                    height: "128px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    borderRadius: "8px",
                    marginRight: "32px"
                  }}>
                    <img style={{ width: "100%"}} src={avatar.img} alt="" />
                  </Box>
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start"
                  }}>
                    <Button
                      variant="contained"
                      component="label"
                      sx={{
                        marginBottom: "16px",
                        background: "#4776E6",
                        color: "#fff",
                        fontSize: "14px",
                        fontWeight: 700,
                        padding: "10px 24px",
                        lineHeight: "20px",
                        borderRadius: "8px"
                      }}
                    >
                      {t('PROFILE.UPLOAD_AVATAR')}
                      <input
                        onChange={handleImageChange}
                        type="file"
                        hidden
                      />
                    </Button>

                    <Button
                      // variant="contained"
                      sx={{
                        background: "#E8EFFF",
                        color: "#4776E6",
                        fontSize: "14px",
                        fontWeight: 700,
                        padding: "10px 24px",
                        lineHeight: "20px",
                        borderRadius: "8px",
                        textTransform: "none"
                      }}
                    >
                      {t('PROFILE.DELETE_AVATAR')}
                    </Button>
                  </Box>
                </Box>
                <Box sx={{display: "flex", marginBottom: "24px"}}>
                  <Box sx={{marginRight: "24px", flexGrow: 1}}>
                    <Box sx={{marginBottom: "8px", fontSize: "14px", fontWeight: 700, color: "#5D5E65"}}>{t('COMMON.FIRST_NAME')}</Box>
                    <TextField
                      sx={{
                        '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                          border: "1px solid #ECE9F1",
                          borderRadius: "8px"
                        },
                        '& .css-jx703g-MuiInputBase-root-MuiOutlinedInput-root': {
                          fontSize: "16px",
                          fontWeight: 600
                        },
                        '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                          padding: "10px 12px"
                        }
                      }}
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      value={userForm.firstName}
                      onChange={handleFormChange}
                      id="firstName"
                      autoFocus
                    />
                  </Box>
                  <Box sx={{flexGrow: 2}}>
                    <Box sx={{marginBottom: "8px", fontSize: "14px", fontWeight: 700, color: "#5D5E65"}}>{t('COMMON.LAST_NAME')}</Box>
                    <TextField
                      sx={{
                        '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                          border: "1px solid #ECE9F1",
                          borderRadius: "8px",
                        },
                        '& .css-jx703g-MuiInputBase-root-MuiOutlinedInput-root': {
                          fontSize: "16px",
                          fontWeight: 600
                        },
                        '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                          padding: "10px 12px"
                        }
                      }}
                      required
                      fullWidth
                      id="lastName"
                      onChange={handleFormChange}
                      value={userForm.lastName}
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Box>
                </Box>
                <Box sx={{marginBottom: "24px"}}>
                  <Box sx={{marginBottom: "8px", fontSize: "14px", fontWeight: 700, color: "#5D5E65"}}>{t('COMMON.USERNAME')}</Box>
                  <TextField
                    sx={{
                      '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                        border: "1px solid #ECE9F1",
                        borderRadius: "8px",
                      },
                      '& .css-jx703g-MuiInputBase-root-MuiOutlinedInput-root': {
                        fontSize: "16px",
                        fontWeight: 600
                      },
                      '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                        padding: "10px 12px"
                      }
                    }}
                    required
                    fullWidth
                    id="username"
                    value={userForm.username}
                    onChange={handleFormChange}
                    name="username"
                    autoComplete="username"
                  />
                </Box>
                <Box sx={{marginBottom: "24px"}}>
                  <Box sx={{
                    marginBottom: "8px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#5D5E65",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}>
                    {t('COMMON.DESCRIPTION')}
                    <Box sx={{color: "#B3B3B3", fontSize: "14px", fontWeight: 500}}>{userForm.description.length}/200</Box>
                  </Box>
                  <TextField
                    sx={{
                      '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                        border: "1px solid #ECE9F1",
                        borderRadius: "8px",
                      },
                      '& .css-1cicz4d-MuiInputBase-root-MuiOutlinedInput-root': {
                        fontSize: "16px",
                        fontWeight: 600,
                        padding: "10px 12px"
                      }
                    }}
                    multiline
                    required
                    fullWidth
                    id="description"
                    onChange={(e) => {
                      e.target.value.length <= 200 ? handleFormChange(e) : null
                    }}
                    value={userForm.description}
                    name="description"
                    minRows={3}
                    autoComplete="description"
                  />
                </Box>
                <Box sx={{marginBottom: "24px"}}>
                  <Box sx={{marginBottom: "8px", fontSize: "14px", fontWeight: 700, color: "#5D5E65"}}>{t('COMMON.LOCATION')}</Box>
                  <TextField
                    sx={{
                      '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                        border: "1px solid #ECE9F1",
                        borderRadius: "8px",
                      },
                      '& .css-jx703g-MuiInputBase-root-MuiOutlinedInput-root': {
                        fontSize: "16px",
                        fontWeight: 600
                      },
                      '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                        padding: "10px 12px"
                      }
                    }}
                    required
                    fullWidth
                    id="username"
                    value="Praha, Czech"
                    // onChange={handleFormChange}
                  />
                </Box>
                <Box sx={{marginBottom: "24px"}}>
                  <Box sx={{marginBottom: "8px", fontSize: "14px", fontWeight: 700, color: "#5D5E65"}}>{t('PROFILE.BIRTH_DATE')}</Box>
                  <EasyDatePicker
                    valueDate={userForm.birthDate}
                    chosenAgeCallback={chosenAgeCallback.bind(this)}
                  />
                </Box>
                <Box sx={{marginBottom: "24px"}}>
                  <Box sx={{marginBottom: "8px", fontSize: "14px", fontWeight: 700, color: "#5D5E65"}}>{t('COMMON.SEX')}</Box>
                  <Box sx={{
                    width: '240px',
                    height: '40px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid #ECE9F1',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Select
                      value="Female"
                      // onChange={(e) => handleChange('YEAR', e.target.value)}
                      sx={{
                        width: '240px',
                        height: '38px',
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#1A051D",
                        '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                          border: "none"
                        },
                        '& svg': {
                          display: "none"
                        },
                      }}
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxHeight: "124px",
                            borderRadius: "8px",
                            overflowY: "auto"
                          }
                        }
                      }}
                      variant="outlined"
                    >
                      <MenuItem sx={{fontSize: "14px", fontWeight: 700}} value="Female">Female</MenuItem>
                      <MenuItem sx={{fontSize: "14px", fontWeight: 700}} value="Male">Male</MenuItem>
                      <MenuItem sx={{fontSize: "14px", fontWeight: 700}} value="Other">Other</MenuItem>
                    </Select>
                  </Box>
                </Box>

                <Box sx={{marginBottom: "24px"}}>
                  <Box sx={{marginBottom: "8px", fontSize: "14px", fontWeight: 700, color: "#5D5E65"}}>{t('COMMON.PERSONAL_SITE')}</Box>
                    <TextField
                      sx={{
                        '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                          border: "1px solid #ECE9F1",
                          borderRadius: "8px",
                        },
                        '& .css-jx703g-MuiInputBase-root-MuiOutlinedInput-root': {
                          fontSize: "16px",
                          fontWeight: 600
                        },
                        '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                          padding: "10px 12px"
                        }
                      }}
                      required
                      fullWidth
                      id="username"
                      value="cbdsvet.cz"
                      // onChange={handleFormChange}
                    />
                </Box>

                <Box sx={{marginBottom: "24px"}}>
                  <Box sx={{marginBottom: "8px", fontSize: "14px", fontWeight: 700, color: "#5D5E65"}}>{t('COMMON.SOCIAL_NETWORKS')}</Box>
                  <TextField
                    sx={{
                      '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                        border: "1px solid #ECE9F1",
                        borderRadius: "8px",
                      },
                      '& .css-jx703g-MuiInputBase-root-MuiOutlinedInput-root': {
                        fontSize: "16px",
                        fontWeight: 600
                      },
                      '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                        padding: "10px 12px"
                      },
                      marginBottom: "8px"
                    }}
                    required
                    fullWidth
                    value="twitter.com/anncatjoy"
                    // onChange={handleFormChange}
                  />

                  <Button sx={{
                    minWidth: 0,
                    minHeight: 0,
                    padding: 0,
                    color: "#4776E6",
                    background: "#fff",
                    fontSize: "16px",
                    fontWeight: 700,
                    textDecoration: "underline",
                    textTransform: "none"
                  }}>{t("COMMON.ADD_MORE")}</Button>
                </Box>

              </Box>


              <Button
                type="submit"
                variant="contained"
                sx={{ background: "#4776E6", color: "#fff", textTransform: "none", padding: "10px 24px", lineHeight: "20px" }}
              >
                {t('COMMON.SAVE')}
              </Button>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <UserPricesFormTab />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <UserParametersTab
              user={profileUser}
              email={email}
              setEmail={setEmail}
              checkboxes={checkboxes}
              setCheckboxes={setCheckboxes}
            />
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
