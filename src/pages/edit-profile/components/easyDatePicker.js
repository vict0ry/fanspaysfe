import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import React, { useEffect, useState } from 'react'
import { t } from 'i18next'
import moment from 'moment'
import { Box } from '@material-ui/core'

export const EasyDatePicker = (props) => {
  const [day, setDay] = useState(0)
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(0)
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December']
  const fillDate = (sign, value) => {
    switch (sign) {
      case 'DAY':
        return setDay(value)
      case 'MONTH':
        return setMonth(value)
      case 'YEAR':
        return setYear(value)
    }
  }
  const handleChange = (sign, value) => {
    fillDate(sign, value)
  }

  useEffect(() => {
    if (props.valueDate) {
      const parsedDate = moment(props.valueDate, 'YYYY-MM-DD')
      fillDate('DAY', parsedDate.get('day'))
      fillDate('MONTH', parsedDate.format('MMMM'))
      fillDate('YEAR', parsedDate.get('year'))
    }
  }, [props.valueDate])
  useEffect(() => {
    if (day && month && year) {
      const date = moment(`${year}-${months.indexOf(month) + 1}-${day}`, 'YYYY-MM-DD').toDate()
      if (!props.chosenAgeCallback) {
        console.error('You forget to pass the callback : chosenAgeCallback')
      }
      props.chosenAgeCallback(date.toISOString())
    }
  })

  const years = (back) => {
    const year = new Date().getFullYear() - 12;
    return Array.from({ length: back }, (v, i) => year - back + i + 1)
  }
  return (
    <Box sx={{ display: 'flex', justifyContent: "start" }}>
      <Box sx={{
        width: '80px',
        height: '48px',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #ECE9F1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '8px'
      }}>
        <Select
          labelId="day-label"
          id="day-select"
          value={day}
          onChange={(e) => handleChange('DAY', e.target.value)}
          sx={{
            width: '80px',
            height: '50px',
            fontSize: "16px",
            fontWeight: 600,
            color: "#1A051D",
            '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
              border: "none"
            }
          }}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: "124px",
                borderRadius: "8px"
              }
            }
          }}
          variant="outlined"
        >
          {Array.from(Array(31).keys())
            .filter(i => i !== 0)
            .map(i => {
              return <MenuItem value={i}>{i}</MenuItem>
            })}
        </Select>
      </Box>
      <Box sx={{
        width: '80px',
        height: '48px',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #ECE9F1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '8px'
      }}>
        <Select
          labelId="month-label"
          id="month-select"
          value={month}
          onChange={(e) => handleChange('MONTH', e.target.value)}
          sx={{
            width: '80px',
            height: '50px',
            fontSize: "16px",
            fontWeight: 600,
            color: "#1A051D",
            '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
              border: "none"
            }
          }}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: "124px",
                borderRadius: "8px"
              }
            }
          }}
          variant="outlined"
        >
          {months.map(i => {
              return <MenuItem value={i}>{i}</MenuItem>
            })}
        </Select>
      </Box>
      <Box sx={{
        width: '80px',
        height: '48px',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #ECE9F1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Select
          labelId="year-select"
          id="year-select"
          value={year}
          onChange={(e) => handleChange('YEAR', e.target.value)}
          sx={{
            width: '80px',
            height: '50px',
            fontSize: "16px",
            fontWeight: 600,
            color: "#1A051D",
            '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
              border: "none"
            },
            '& .css-11w4h94-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root': {
              color: "#B3B3B3"
            }
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
          {years(60)
            .map(i => {
              return <MenuItem value={i}>{i}</MenuItem>
            })}
        </Select>
      </Box>
    </Box>
  );
}
