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
          <TextField
            name="weight"
            helperText="Please enter your weight"
            required
            fullWidth
            id="weight"
            label="Your weight"
            type="number"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="firstMessagePrice"
            helperText="Please enter your weight"
            required
            fullWidth
            id="firstMessagePrice"
            label="First Message Price"
            type="number"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="nextMessages"
            required
            fullWidth
            id="nextMessages"
            label="Next Messages price"
            type="number"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControlLabel control={<Checkbox defaultChecked />}
                            label="Disable sending messages users without credit" />
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
