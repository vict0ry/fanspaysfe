import * as React from 'react'
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
import { connect, useDispatch } from 'react-redux'
import axios from 'axios'
import { registerUser, userLoggedIn } from '../redux/user.action'
import { decodeToken } from 'react-jwt'
import { Link } from 'react-router-dom'

const theme = createTheme()
const Login = (props) => {
  console.log(props)
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {}
    new FormData(event.currentTarget).forEach((value, key) => (data[key] = value))

    axios.post('/login', { ...data }).then(token => {
      localStorage.setItem('user', token.data)
      const user = decodeToken(token.data)
      return dispatch(userLoggedIn(user))
    })
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="login"
              label="Email Address"
              name="login"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to={"/register"} variant="body2">
                  {'Don\'t have an account? Sign Up'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
const mapStateToProps = state => {
  return state
}
const mapDispatchToProps = dispatch => ({
  loginUser: (data) => dispatch(registerUser(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
