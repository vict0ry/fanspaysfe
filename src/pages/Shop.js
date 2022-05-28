import Box from '@mui/material/Box'
import React from 'react'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { t } from 'i18next'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import ProfileCard from '../layout/user-card'

export const Shop = () => {
  const user = useSelector(state => state.user.userData)
  return <div>
    <Box sx={{ 'mt': 2 }}>
      <Typography gutterBottom variant="h4" component="div">
        Product name
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 2 }}>
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg"
              alt="green iguana"
            />
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: 1, gap: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg"
                alt="green iguana"
              />
              <CardMedia
                component="img"
                height="140"
                image="https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg"
                alt="green iguana"
              />
            </Box>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Product description here will be written lorem ipsum ahahaaha
              </Typography>
            </CardContent>
          </Card>
          <ProfileCard style={{ marginTop: '10px' }} profileUser={user} />
        </div>
        <Card sx={{ padding: 2, height: 'fit-content' }}>
          <h3>{t('COMMON.DESCRIPTION')}:</h3>
          Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze
          vzhled, aniž by se
          pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text (např.
          opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou strukturou textu,
          která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný text, slova jsou různě
          dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně atd.
        </Card>
        <div>
          <Paper style={{
            padding: 5,
            justifyContent: 'center',
            marginTop: 10,
            display: 'flex',
            alignItems: 'center',
            justifyAlign: 'center'
          }}>
            <div style={{ fontWeight: 'bold', color: 'green' }}>500 Kč</div>
            <Button variant='contained' style={{ marginTop: 10 }}>{t('COMMON.BUY')}</Button>
          </Paper>
        </div>
        <div></div>
        <div>
        </div>

      </Box>
    </Box>
  </div>
}
