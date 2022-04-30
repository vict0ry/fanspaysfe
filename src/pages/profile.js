import ProfileCard from '../layout/user-card'
import Box from '@mui/material/Box'
import AboutCard from '../layout/about-card'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Posts } from '../components/Posts'
import Paper from '@mui/material/Paper'
import { useSelector } from 'react-redux'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AddProductModal from '../components/AddProductModal'


export function Profile(props) {
  const loggedUser = useSelector(state => state.user)
  const username = useParams().username || loggedUser.userData._id
  useEffect(() => {
    axios.get('/profile/' + username).then(res => {
      return setUser(res.data)
    })
  }, [])

  const [user, setUser] = useState({})
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
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

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    }
  }

  const [value, setValue] = React.useState(0)

  return <div>
    <Box sx={{ 'mt': 2 }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 2 }}>
        <ProfileCard profileUser={user?.profileUser} />
        <AboutCard user={user} />
        <div>
          <Paper style={{
            height: 50,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyAlign: 'center'
          }}>
            <div>
              Followers : {user?.profileUser?.followers.length}
            </div>
            <div>
              Following : {user?.profileUser?.following.length}
            </div>
          </Paper>
          <Paper style={{
            padding: 5,
            justifyContent: 'center',
            marginTop: 10,
            display: 'flex',
            alignItems: 'center',
            justifyAlign: 'center'
          }}>
            <Button variant="contained">Subscribe for 7$ in a month</Button>
          </Paper>
          <Paper style={{
            padding: 5,
            justifyContent: 'center',
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyAlign: 'center'
          }}>
            <b>You may also like :</b>
            <div style={{ flexDirection: 'column', marginTop: 10 }}>
              <div>
                <img style={{ width: 60, marginBottom: 10 }}
                     src="https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg"
                     alt="" /> Victor Eliot
              </div>
              <div>
                <img style={{ width: 60, marginBottom: 10 }}
                     src="https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg"
                     alt="" /> Karel Kulhan
              </div>
              <div>
                <img style={{ width: 60, marginBottom: 10 }}
                     src="https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg"
                     alt="" /> Ondrej Peterka
              </div>
              <div>
                <img style={{ width: 60, marginBottom: 10 }}
                     src="https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg"
                     alt="" /> Honza newmann
              </div>

            </div>
          </Paper>
        </div>
        <div></div>
        <div>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Stories" {...a11yProps(0)} />
              <Tab label="Shop" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Posts userId={user?.profileUser?._id} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AddProductModal />
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </div>

      </Box>
    </Box>
  </div>
}
