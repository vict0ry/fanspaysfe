import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import { SearchInput } from '../components/SearchInput'
import Paper from '@mui/material/Paper'
import { t } from 'i18next'
import { Posts } from './profile/components/post/Posts'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'


const UserCard = () => {
  return <Link to={'/'} style={{ cursor: 'pointer' }}>
    <CardContent>
      <CardMedia
        style={{ borderRadius: '50%' }}
        component="img"
        image="https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg"
        alt="Paella dish"
      />
      <div style={{
        textAlign: 'center',
        color: 'black'
      }}>Victor<br />Eliot
      </div>
    </CardContent>
  </Link>
}
export const Home = () => {
  const [posts, setPosts] = useState([])
  const user = useSelector(state => state.profile.profile)
  useEffect(() => {
    const data = axios.get('/api/posts?followingOnly=true').then(posts => {
      setPosts(posts.data)
    })
  }, [])
  return <div>
    <Box sx={{ 'mt': 2 }}>
      <Box className="profileGrid" sx={{
        display: 'grid', gridTemplateColumns: {
          sm: '1fr 3fr',
          xs: '1fr 1fr'
        }, gap: 2
      }} xs={{
        display: 'none'
      }}>
        <div>
          <div>
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              width: { xs: '393px', md: '800px' }
            }}>
              <GridList style={{ flexWrap: 'nowrap', background: 'white', transform: 'translateZ(0)' }} cols={2.5}>
                <GridListTile style={{ height: '100%', width: '100px' }}>
                  <UserCard />
                </GridListTile>
                <GridListTile style={{ height: '100%', width: '100px' }}>
                  <UserCard />
                </GridListTile>
                <GridListTile style={{ height: '100%', width: '100px' }}>
                  <UserCard />
                </GridListTile>
                <GridListTile style={{ height: '100%', width: '100px' }}>
                  <UserCard />
                </GridListTile>
                <GridListTile style={{ height: '100%', width: '100px' }}>
                  <UserCard />
                </GridListTile>
                <GridListTile style={{ height: '100%', width: '100px' }}>
                  <UserCard />
                </GridListTile>
                <GridListTile style={{ height: '100%', width: '100px' }}>
                  <UserCard />
                </GridListTile>
                <GridListTile style={{ height: '100%', width: '100px' }}>
                  <UserCard />
                </GridListTile>
              </GridList>
            </Box>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '20px 50px 0 0px '
            }}>
              <span style={{ color: 'black', fontSize: 19, fontWeight: 'bold' }}>TOP autoru</span>
              <Button sx={{ background: 'linear-gradient (#4776E6, #8E54E9)' }}
                      variant="contained">{t('Chci do topu')}</Button>
            </div>
          </div>
          <div>
            <Box className="profileGrid" sx={{
              display: 'grid', gridTemplateColumns: {
                sm: '3fr 1fr',
                xs: '3fr 1fr'
              }, gap: 2
            }} xs={{
              display: 'none'
            }}>
              <Box sx={{ width: { xs: '393px', md: 'auto' } }}>
                <Posts disableAdd={true} posts={posts.slice(0, 10)} profileUser={user?.profileUser} />
              </Box>
              <Box sx={{ width: '300px', mr: 6, mt: 0.9, display: { md: 'block', xs: 'none' } }}>
                <Paper style={{
                  padding: 5,
                  justifyContent: 'center',
                  margin: '10px 0',
                  maxWidth: '500px',
                  height: '50vh',
                  alignItems: 'center',
                  justifyAlign: 'center'

                }}>
                  <Box sx={{ mt: 3 }}>
                    <SearchInput />
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <p style={{ marginLeft: 25 }}>QUERIES</p>
                    <Box display="flex" alignItems={'center'} justifyContent={'space-around'}
                         sx={{ mr: 2, width: '50%' }}>
                      <img src="/images/icons/price-tag.svg" />
                      <img src="/images/icons/refresh.svg" />
                      <img src="/images/icons/refresh.svg" />
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </Box>

          </div>
        </div>
      </Box>
    </Box>
  </div>
}
