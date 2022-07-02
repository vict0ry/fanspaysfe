import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { t } from 'i18next'

export const UserPricesFormTab = () => {
  return (
    <div>
      <Box component="form" noValidate onSubmit={() => {
      }} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Grid item xs={3} sm={3}>
              <TextField
                name="subscribptionPrice"
                required
                fullWidth
                id="subscribptionPrice"
                label="Subscription price"
                type="number"
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Grid item xs={3} sm={3}>
              <TextField
                name="firstMessagePrice"
                required
                fullWidth
                id="firstMessagePrice"
                label="First Message Price"
                type="number"
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Grid item xs={3} sm={3}>
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
          </Grid>
          <Grid item xs={12} sm={12}>
            <Grid item xs={12} sm={12}>
              <FormControlLabel control={<Checkbox defaultChecked />}
                                label="Disable sending messages users without credit" />
            </Grid>
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
  )
}
