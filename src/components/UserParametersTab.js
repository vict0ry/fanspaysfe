import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import React from 'react'
import { t } from 'i18next'

export const UserParametersTab = () => {
  return <div>
    <Box component="form" noValidate onSubmit={() => {
    }} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Button variant={'blue'}>
            <img style={{paddingRight: '10px'}} src="/images/icons/key-alt.svg" alt="change pass" />Change password</Button>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="weight"
            required
            fullWidth
            id="email"
            label="E-mail"
            type="email"
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <FormControlLabel control={<Checkbox defaultChecked />}
                              label="Service news" />
            <FormControlLabel control={<Checkbox defaultChecked />}
                              label="Infromation about the notifications" />
            <FormControlLabel control={<Checkbox defaultChecked />}
                              label="New subscribers notification" />
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button variant={'red'}>
            <img style={{paddingRight: '10px'}} src="/images/icons/user-x.svg" alt="change pass" />Deactivate profile</Button>
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
