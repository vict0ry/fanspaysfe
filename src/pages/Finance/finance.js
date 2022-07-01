import { SharedLeftMenu } from '../../layout/components/SharedLeftMenu'
import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { FinanceChart } from './finance-chart'
import { FinanceStatistics } from './finance-statistics'
import { NewFounds } from './new-founds'

export const Finance = () => {
  return <>
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
          <FinanceStatistics/>
            <Typography sx={{mt: 10, ml: '10%'}} variant={'h5'}>Add new founds</Typography>
          <NewFounds/>
          <Typography sx={{mt: 8, ml: '10%'}} variant={'h5'}>Incoming Analytics</Typography>
          <Box sx={{mt: 2, mb: 10, ml: '9%', width: '60%', display: 'flex', justifyContent: 'space-between', flexDirection: {xs: 'column', md: 'row'}}}>
            <FinanceChart />
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
  </>
}
