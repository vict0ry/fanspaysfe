import { Icon } from './Icon'
import * as React from 'react'
import { alpha, styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
// import { useState } from 'react'

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const Search = styled('div')(({ theme }) => ({
  color: '#000',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '100%'
  }
}))

export const SearchInput = ({ name, placeholder, styles, state, setState }) => {
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    background: '#F7F5F9',
    borderRadius: 8,
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // backgroundColor: "#F7F5F9",
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '100%'
      }
    },
    ...styles
  }))

  const [value, setValue] = React.useState('')

  return (
    <Search>
      <SearchIconWrapper>
        <Icon name={name} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={placeholder}
        fullWidth={true}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => {
          console.log(e.target.value)
          setValue(e.target.value)
        }}
        // value={value}
      />
    </Search>
  )
}
