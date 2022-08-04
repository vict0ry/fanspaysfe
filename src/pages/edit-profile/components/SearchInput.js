import * as React from 'react'
import { Icon } from '../../messages/Icon'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export const SearchInput = ({icon, value, setValue, name, other}) => {
  return (
    <Box sx={{
      position: "relative"
    }}>
      {icon && <Box sx={{
        position: "absolute",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        height: "100%",
        top: 0,
        left: 0,
        width: "36px"
      }}>
        <Icon name={icon} />
      </Box>}
      <TextField
        sx={{
          '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
            border: "1px solid #ECE9F1",
            borderRadius: "8px",
          },
          '& .css-jx703g-MuiInputBase-root-MuiOutlinedInput-root': {...{
            fontSize: "16px",
            fontWeight: 600},
            ...{paddingLeft: icon ? "32px" : 0}
          },
          '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
            padding: "10px 12px"
          },
          '& .css-1cicz4d-MuiInputBase-root-MuiOutlinedInput-root': {
            fontSize: "16px",
            fontWeight: 600,
            padding: "10px 12px"
          }
        }}
        required
        fullWidth
        value={value}
        onChange={setValue}
        name={name}
        {...other}
      />
    </Box>
  )
}
