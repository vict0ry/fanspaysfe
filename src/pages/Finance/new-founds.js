import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import React from 'react'


export const NewFounds = () => {

  return(
    <Box sx={{mt: 5,
      ml: {xs: 0, md: '10%'},
      width: {xs: '53%', md: "60%"},
      alignItems: 'center',
      height:{xs: '17%'},
      display: 'flex',
      flexDirection:{xs:'column', md:'row'},
      justifyContent: 'space-between'}}>
      <Box sx={{width: {xs: '60%', md: '30%'}}}>
        <Card>
          <CardContent sx={{display: 'flex'}}>
            <Typography variant={'h5'}>Balance:</Typography>
            <Typography sx={{mt: 0.8, ml: 1}} variant={'body1'}>$ 1500</Typography>
          </CardContent>
          <CardActions>
            <Button sx={{background: '#4776E6'}} variant={'contained'}>Deposit</Button>
          </CardActions>
        </Card>
      </Box>
      <Box sx={{width: {md: '65%', xs: '100%'}}}>
        <Card sx={{height: {md: '117px', xs: '150px'}}}>
          <CardContent sx={{display: 'flex'}}>
            <Typography sx={{fontWeight: 'bold'}} variant={'h6'}>You should to add the deposit method</Typography>
          </CardContent>
          <CardActions>
            <Button sx={{
              width: '50%',
              background: '#E8EFFF',
              color: '#4776E6',
              fontWeight: 'bold'}} variant={'outlined'}>Add method</Button>
            <Typography sx={{ml: 1}} variant={'caption'}>Funds are withdrawn automatically once a week if the balance is more than $ 50.
              The service takes a commission of 15%</Typography>
          </CardActions>
        </Card>
      </Box>
    </Box>
  )
}
