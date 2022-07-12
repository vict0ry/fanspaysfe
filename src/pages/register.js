import * as React from 'react'
import { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { connect, useSelector } from 'react-redux'
import { registerUser } from '../redux/user.action'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Alert } from '@mui/material'
import axios from 'axios'
import { CircularProgress } from '@material-ui/core'
import { EasyDatePicker } from './edit-profile/components/easyDatePicker'


const theme = createTheme()

function Register(props) {
  const { t } = useTranslation()
  const loggedUser = useSelector(state => state.user)
  let navigate = useNavigate()

  useEffect(() => {
    if (loggedUser?.userData) {
      navigate('/')
    }
  })
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {}
    new FormData(event.currentTarget).forEach((value, key) => (data[key] = value))
    props.loginUser(data)
  }

  const [validUsername, setValidUsername] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [isLoading, setIsLoading] = useState(false);


  const handleValidateUsername = (username) => {
    axios.get('/validations/username/' + username).then(({data}) => {
      setValidUsername(data)
    })
  }
  const handleValidateEmail = (email) => {
    axios.get('/validations/email/' + email).then(({data}) => {
      setValidEmail(data)
    })
  }
  const chosenAgeCallback = (age) => {
    console.log(age)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t('COMMON.SIGNUP')}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, mb: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  inputProps={{ minLength: 3 }}
                  fullWidth
                  id="firstName"
                  label={t('COMMON.FIRST_NAME')}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  inputProps={{ minLength: 3 }}
                  id="lastName"
                  label={t('COMMON.LAST_NAME')}
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                { !validUsername ? <Alert severity="warning">This username is already in use</Alert> : '' }
                <TextField
                  required
                  fullWidth
                  id="username"
                  onChange={(e) => {
                    handleValidateUsername(e.target.value);
                  }}
                  name="username"
                  inputProps={{ minLength: 3 }}
                  label={t('COMMON.USERNAME')}
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <p style={{marginTop: 0}}>
                  Choose your age:
                </p>
                <EasyDatePicker chosenAgeCallback={chosenAgeCallback.bind(this)}  />
              </Grid>
              { !validEmail ? <Alert severity="warning">This email is already in use</Alert> : '' }
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => {
                    handleValidateEmail(e.target.value);
                  }}
                  id="email"
                  label={t('COMMON.EMAIL')}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label={t('COMMON.PASSWORD')}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              { isLoading ? <CircularProgress style={{marginRight: '10px'}} /> : '' }
              {t('COMMON.SIGNUP')}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {t('REGISTER.ALREADY_HAVE_ACCOUNT')}?
                <Link style={{ marginLeft: 3, cursor: 'pointer' }} to={'/login'} variant="body2">
                  {t('COMMON.SIGNIN')}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  loginUser: (data) => dispatch(registerUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
