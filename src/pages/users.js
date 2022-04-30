import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import { SearchInput } from '../components/SearchInput'
import CardMedia from '@mui/material/CardMedia'
import { Link } from 'react-router-dom'
import axios from 'axios'

export function Users() {

  useEffect(() => {
    axios.get('/api/users').then(res => setUsers(res.data))
  }, [])

  const [users, setUsers] = useState([])

  return (
    <div>
      <div style={{ 'paddingTop': '20px' }}>
        <SearchInput style={{ width: '100%' }} />
      </div>
      <CardContent>
        <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(6, 1fr)' }}>
          {users.map(user => {
            const profileLink = `/profile/${user.username}`
            return (
              <Link to={profileLink} style={{ cursor: 'pointer' }}>
                <CardMedia
                  component="img"
                  image="https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg"
                  alt="Paella dish"
                />
                <div style={{
                  textAlign: 'center',
                  textDecoration: 'underline',
                  color: 'blue'
                }}>{user.firstName} {user.lastName}</div>
              </Link>
            )
          })}
        </Box>
      </CardContent>
    </div>
  )
}
