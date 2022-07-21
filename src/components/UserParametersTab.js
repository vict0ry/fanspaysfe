import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import { t } from 'i18next'
import axios from 'axios'

export const UserParametersTab = ({user, email, setEmail, checkboxes, setCheckboxes}) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  console.log(user)

  const changePassword = () => {
    const data = {
      oldPassword: oldPassword,
      newPassword: newPassword
    };

    return axios.put('/api/users/updatePassword', data).then((res) => {
      alert(res)
    })
  }

  // console.log(checkboxes)

  return <div>
    <Box component="form" noValidate onSubmit={() => {
    }} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            sx={{
              marginBottom: "8px"
            }}
            required
            fullWidth
            label="Old password"
            type="password"
            value={oldPassword}
            onChange={(e) => {
             setOldPassword(e.target.value);
            }}
          />
          <TextField
            sx={{
              marginBottom: "8px"
            }}
            required
            fullWidth
            label="New password"
            type="password"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
          <Button
            variant={'blue'}
            onClick={changePassword}
          >
            <img style={{paddingRight: '10px'}} src="/images/icons/key-alt.svg" alt="change pass" />
            Change password
          </Button>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="weight"
            required
            fullWidth
            id="email"
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <FormControlLabel
              control={
                <Checkbox
                  name="Service news"
                  onChange={(e) => {
                    setCheckboxes({
                      ...checkboxes,
                      [e.target.name]: e.target.checked
                    });
                  }}
                />
              }
              label="Service news"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="Service news"
                  onChange={(e) => {
                    setCheckboxes({
                      ...checkboxes,
                      [e.target.name]: e.target.checked
                    });
                  }}
                />
              }
              label="Infromation about the notifications"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="Service news"
                  onChange={(e) => {
                    setCheckboxes({
                      ...checkboxes,
                      [e.target.name]: e.target.checked
                    });
                  }}
                />
              }
              label="New subscribers notification"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button variant={'red'}>
            <img style={{paddingRight: '10px'}} src="/images/icons/user-x.svg" alt="change pass" />
            Deactivate profile
          </Button>
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        {t('COMMON.SAVE')}
      </Button>
    </Box>
  </div>
}
