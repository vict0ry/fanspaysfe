import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import React from 'react'


export const FinanceStatistics = ({tips, followers, products, total}) => {

  return(
    <Box sx={{
      ml: {md: '10%', xs: 0},
      height:{xs: '670px', md: '190px'},
      background: 'linear-gradient(#4776E6, #8E54E9)',
      width: {xs: '396px', md: '60%'}}}>
      <Box sx={{
        display: 'flex',
        flexDirection:{xs: 'column', md: 'row'},
        justifyContent: 'space-around'}}>
        <Typography
          variant={'h6'}
          sx={{
          color: 'white',
          mt: 2,
          ml: {xs: '17%', md: 0}}}>Your finance statistics, User :)</Typography>
        <Box>
          <FormControl fullWidth>
            <InputLabel
              sx={{
              mt: 0.5,
              ml:{xs: '30%'}}}
              id="weeks-id">
              <img style={{
                paddingRight: 10,
                marginTop: 0,
                width: 21,
                height: 21}} src='/images/icons/calendar.svg'/>Weeks</InputLabel>
            <Select labelId={"weeks-id"} sx={{
              width: 150,
              height: 30,
              mt: 2,
              background:"white",
              ml: {xs: '30%'}}}>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: {xs: 'column', md: 'row'},
        height: {xs: '500px', md: '88px'},
        top: {xs: '26px', md: 71},
        left: {xs: '6%', md: 0},
        width: '700px',
        justifyContent: 'space-between',
        position: 'relative'}}>
        <Card sx={{
          width: 300,
          mr: 2,
          ml: 2}}>
          <CardContent sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'}}>
            <Box>
              <img src='/images/icons/briefcase.svg'/>
            </Box>
            <Box>
              <Typography variant={'h5'}>{total}</Typography>
              <Typography variant={'caption'}>All</Typography>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{width: 300, mr: 2,  ml: 2}}>
          <CardContent sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'}}>
            <Box>
              <img style={{width: 40, height: 40}} src='/images/icons/copper-coin.svg'/>
            </Box>
            <Box>
              <Typography variant={'h5'}>{tips}</Typography>
              <Typography variant={'caption'}>Tips</Typography>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{width: 300, mr: 2,  ml: 2}}>
          <CardContent sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
            <Box>
              <img src='/images/icons/crown.svg'/>
            </Box>
            <Box>
              <Typography variant={'h5'}>{followers}</Typography>
              <Typography variant={'caption'}>Followers</Typography>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{width: 300, mr: 2,  ml: 2}}>
          <CardContent sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
            <Box>
              <img src='/images/icons/store.svg'/>
            </Box>
            <Box>
              <Typography variant={'h5'}>{products}</Typography>
              <Typography variant={'caption'}>Products</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}
