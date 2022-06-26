import { createTheme } from '@mui/material/styles'

export const CustomThemeConfig = createTheme({
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