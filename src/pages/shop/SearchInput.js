import * as React from 'react'
import { alpha, styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import { Icon } from '../messages/Icon'

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  background: '#F7F5F9',
  borderRadius: 8,
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    backgroundColor: '#fff',
    borderRadius: '8px',
    border: '1px solid #ECE9F1',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width')
    // width: '100%',
    // [theme.breakpoints.up('md')]: {
    //   width: '100%'
    // }
  }
}))

const Search = styled('div')(({ theme }) => ({
  color: '#000',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%'
  // [theme.breakpoints.up('sm')]: {
  //   marginLeft: theme.spacing(3),
  //   width: 'auto'
  // }
}))

export const SearchInput = ({ placeholder, value, setValue, name }) => {
  return (
    <Search>
      <SearchIconWrapper>
        <Icon name={name} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  )
}
