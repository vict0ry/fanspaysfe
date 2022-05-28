import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import React, { useState } from 'react'

export const EasyDatePicker = () => {
  const [age, setAge] = useState(0)
  const handleChange = (value) => setAge(value)
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December']
  const years = (back) => {
    const year = new Date().getFullYear()
    return Array.from({ length: back }, (v, i) => year - back + i + 1)
  }
  return <div style={{ display: 'flex' }}>
    <FormControl style={{ marginRight: '10px' }} fullWidth>
      <InputLabel id="demo-simple-select-label">Day</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={(e) => handleChange(e.target.value)}
      >
        {Array.from(Array(31).keys())
          .filter(i => i !== 0)
          .map(i => {
            return <MenuItem value={i}>{i}</MenuItem>
          })}
      </Select>
    </FormControl>
    <FormControl style={{ marginRight: '10px' }} fullWidth>
      <InputLabel id="demo-simple-select-label">Month</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={(e) => handleChange(e.target.value)}
      >
        {months
          .map(i => {
            return <MenuItem value={i}>{i}</MenuItem>
          })}
      </Select>
    </FormControl>
    <FormControl style={{ marginRight: '10px' }} fullWidth>
      <InputLabel id="demo-simple-select-label">Year</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={(e) => handleChange(e.target.value)}
      >
        {years(70)
          .map(i => {
            return <MenuItem value={i}>{i}</MenuItem>
          })}
      </Select>
    </FormControl>
  </div>
}
