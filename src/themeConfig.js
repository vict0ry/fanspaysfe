import { createTheme } from '@mui/material/styles'

export const CustomThemeConfig = createTheme({
  typography: {
    fontFamily: 'Manrope, sans-serif',
    textDecoration: 'none'
  },
      components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            textTransform: 'none',
            textDecoration: 'none',
            background: 'linear-gradient(94.04deg, #4776E6 10.41%, #8E54E9 77.48%)',
            color: 'white'
          },
        },
        {
          props: { variant: 'cancel' },
          style: {
            textTransform: 'none',
            textDecoration: 'none',
            background: '#FFEDED',
            color: '#E64747'
          },
        },
        {
          props: { variant: 'success' },
          style: {
            textTransform: 'none',
            textDecoration: 'none',
            background: '#EBFEF9',
            color: '#1FCC64'
          },
        },
        {
          props: { variant: 'blue' },
          style: {
            textTransform: 'none',
            textDecoration: 'none',
            background: '#E8EFFF',
            color: '#4776E6'
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "white"
        }
      }
    },
  }
});