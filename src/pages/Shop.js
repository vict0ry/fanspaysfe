import Box from '@mui/material/Box'
import React from 'react'
import Button from '@mui/material/Button'
import { t } from 'i18next'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import { SharedLeftMenu } from '../layout/components/SharedLeftMenu'
import { MiniUser } from './profile/components/MiniUser'
import Rating from '@mui/material/Rating'

export const Shop = () => {
  const user = useSelector(state => state.user.userData)
  return <div>
    <Box sx={{ 'mt': 2 }}>
      <Box className="profileGrid" sx={{
        display: 'grid', gridTemplateColumns: {
          sm: '1fr 3fr',
          xs: '1fr'
        }, gap: 2
      }} xs={{
        display: 'none'
      }}>
        <SharedLeftMenu />
        <Box sx={{ 'mt': 2 }}>
          <Typography gutterBottom variant="h4" component="div">
            Product name
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 1 }}>
            <Box>
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
              </Card>
            </Box>
            <Card sx={{ padding: 2, height: 'fit-content' }}>
              <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                <div style={{ fontWeight: 'bold', color: 'green' }}>500 Kč</div>
                <Button variant='contained' style={{ marginTop: 10 }}>{t('COMMON.BUY')}</Button>
              </Box>
              <h3>{t('COMMON.DESCRIPTION')}:</h3>
              Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze
              vzhled, aniž by se
              pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text (např.
              opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou strukturou textu,
              která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný text, slova jsou různě
              dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně atd.
            </Card>
            <Box sx={{ marginTop: '10px' }}>
              Product owner :
              <MiniUser user={user} />
              <Box sx={{display: 'flex', justifyContent: 'center'}}><span style={{marginRight: '5px'}}>5 hodnoceni</span> <Rating rating={5} /></Box>
            </Box>
          </Box>
        </Box>

      </Box>
    </Box>
  </div>
}
