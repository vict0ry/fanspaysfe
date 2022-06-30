import { SharedLeftMenu } from '../../layout/components/SharedLeftMenu'
import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { FinanceChart } from './finance-chart'
export const Finance = () => {
  return <div>
    <Box sx={{ 'mt': 2 }}>
      <Box className="profileGrid" sx={{
        display: 'grid', gridTemplateColumns: {
          sm: '1fr 1fr 3fr',
          xs: '1fr'
        }, gap: 2
      }} xs={{
        display: 'none'
      }}>
        <SharedLeftMenu />
        <Box sx={{width: '186%'}}>
          <Box sx={{ ml: {md: '10%', xs: 0}, background: 'linear-gradient(#4776E6, #8E54E9)', width: {xs: '396px', md: '60%'}}}>
            <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
              <h3 style={{color: 'white'}}>Your finance statistics, User :)</h3>
              <Box>
              <FormControl fullWidth>
                <InputLabel sx={{mt: 0.5}} id="weeks-id">
                  <img style={{paddingRight: 10, marginTop: 0, width: 21, height: 21}} src='/images/icons/calendar.svg'/>Weeks</InputLabel>
              <Select labelId={"weeks-id"} sx={{width: 150, height: 30, mt: 2, background:"white"}}>
              </Select>
              </FormControl>
              </Box>
            </Box>
     <Box sx={{ display: {md: 'flex', xs: 'grid'}, top: 40, width: '700px', justifyContent: 'space-between', position: 'relative'}}>
        <Card sx={{width: 300, mr: 2,  ml: 2}}>
          <CardContent sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
            <Box>
              <img src='/images/icons/briefcase.svg'/>
            </Box>
            <Box>
              <Typography variant={'h5'}>$ 1306</Typography>
              <Typography variant={'caption'}>All</Typography>
            </Box>
          </CardContent>
        </Card>
       <Card sx={{width: 300, mr: 2,  ml: 2}}>
         <CardContent sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
           <Box>
             <img style={{width: 40, height: 40}} src='/images/icons/copper-coin.svg'/>
           </Box>
           <Box>
             <Typography variant={'h5'}>$ 41.2</Typography>
             <Typography variant={'caption'}>Tips</Typography>
           </Box>
         </CardContent>
       </Card>
       <Card sx={{width: 300, mr: 2,  ml: 2}}>
         <CardContent sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
           <Box>
             <img src='/images/icons/crown.svg'/>
           </Box>
           <Box>
             <Typography variant={'h5'}>$ 52.2</Typography>
             <Typography variant={'caption'}>Followers</Typography>
           </Box>
         </CardContent>
       </Card>
       <Card sx={{width: 300, mr: 2,  ml: 2}}>
         <CardContent sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
           <Box>
             <img src='/images/icons/store.svg'/>
           </Box>
           <Box>
             <Typography variant={'h5'}>$ 98</Typography>
             <Typography variant={'caption'}>Products</Typography>
           </Box>
         </CardContent>
       </Card>
     </Box>
            </Box>
          <Typography sx={{mt: 10, ml: '10%'}} variant={'h5'}>Add new founds</Typography>
          <Box sx={{mt: 5, ml: '10%', width: '60%', display: 'flex', justifyContent: 'space-between'}}>
            <Box sx={{width: '30%'}}>
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
            <Box sx={{width: '65%'}}>
              <Card sx={{height: '117px'}}>
                <CardContent sx={{display: 'flex'}}>
                  <Typography sx={{fontWeight: 'bold'}} variant={'h6'}>You should to add the deposit method</Typography>
                </CardContent>
                <CardActions>
                  <Button sx={{width: '50%', background: '#E8EFFF', color: '#4776E6', fontWeight: 'bold'}} variant={'outlined'}>Add method</Button>
                  <Typography sx={{ml: 1}} variant={'caption'}>Funds are withdrawn automatically once a week if the balance is more than $ 50.
                    The service takes a commission of 15%</Typography>
                </CardActions>
              </Card>
            </Box>
          </Box>
          <Typography sx={{mt: 8, ml: '10%'}} variant={'h5'}>Incoming Analitics</Typography>
          <Box sx={{mt: 2, mb: 10, ml: '9%', width: '60%', display: 'flex', justifyContent: 'space-between'}}>
            <Box sx={{width: '60%'}}>
              <Card>
                <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
                  <Typography variant={'h6'}>Incoming Funds</Typography>
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel sx={{mt: 0.5}} id="weeks-id">
                        <img style={{paddingRight: 10, marginTop: 0, width: 21, height: 21}} src='/images/icons/calendar.svg'/>Weeks</InputLabel>
                      <Select labelId={"weeks-id"} sx={{width: 150, height: 30, mt: 2, background:"white"}}>
                      </Select>
                    </FormControl>
                  </Box>
                </CardActions>
                <CardContent>
              <FinanceChart/>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{width: '30%'}}>
             <Card sx={{height: '322px'}}>
               <CardActions>
                 <Typography>Transactions</Typography>
               </CardActions>
             </Card>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </div>
}
