import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import CardContent from '@mui/material/CardContent'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'none'
    },
    title: {

      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 2',
      data: ['100', '200', '300', '400', '200', '300', '400'],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const FinanceChart =  () =>  {
  return (
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
          <Line options={options} data={data} />
        </CardContent>
      </Card>
    </Box>
    );
}
