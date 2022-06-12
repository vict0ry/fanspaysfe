import React from 'react'
import { Link } from 'react-router-dom'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import { SearchInput } from '../components/SearchInput'

const UserCard = () => {
  return <Link to={'/'} style={{ cursor: 'pointer' }}>
    <CardContent>
      <CardMedia
        component="img"
        image="https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg"
        alt="Paella dish"
      />
      <div style={{
        textAlign: 'center',
        textDecoration: 'underline',
        color: 'blue'
      }}>Victor Eliot
      </div>
    </CardContent>
  </Link>
}
export const Home = () => {
  return <div>
    <Box sx={{ marginTop: '20px' }}>
      <SearchInput />
    </Box>
    <Box sx={{ marginTop: '20px' }}>
      <h2>Recently registered :</h2>
      <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(6, 1fr)' }}>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
      </Box>
    </Box>
    <Box sx={{ marginTop: '20px' }}>
      <h2>Recently added products :</h2>
      <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(6, 1fr)' }}>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
      </Box>
    </Box>
  </div>
}
