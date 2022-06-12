import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import React, { useEffect, useState } from 'react'
import { t } from 'i18next'
import moment from 'moment'

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
    const year = new Date().getFullYear()
    return Array.from({ length: back }, (v, i) => year - back + i + 1)
  }
  return <div>
    <div style={{ display: 'flex' }}>
      <FormControl style={{ marginRight: '10px' }} fullWidth>
        <InputLabel id="day-label">{t('COMMON.DAY')}</InputLabel>
        <Select
          labelId="day-label"
          id="day-select"
          value={day}
          label="day"
          onChange={(e) => handleChange('DAY', e.target.value)}
        >
          {Array.from(Array(31).keys())
            .filter(i => i !== 0)
            .map(i => {
              return <MenuItem value={i}>{i}</MenuItem>
            })}
        </Select>
      </FormControl>
      <FormControl style={{ marginRight: '10px' }} fullWidth>
        <InputLabel id="month-label">{t('COMMON.MONTH')}</InputLabel>
        <Select
          labelId="month-label"
          id="month-select"
          value={month}
          label="month"
          onChange={(e) => handleChange('MONTH', e.target.value)}
        >
          {months
            .map(i => {
              return <MenuItem value={i}>{i}</MenuItem>
            })}
        </Select>
      </FormControl>
      <FormControl style={{ marginRight: '10px' }} fullWidth>
        <InputLabel id="demo-simple-select-label">{t('COMMON.YEAR')}</InputLabel>
        <Select
          labelId="year-select"
          id="year-select"
          value={year}
          label="year"
          onChange={(e) => handleChange('YEAR', e.target.value)}
        >
          {years(70)
            .map(i => {
              return <MenuItem value={i}>{i}</MenuItem>
            })}
        </Select>
      </FormControl>
    </div>
  </div>
}
