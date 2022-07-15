import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { beURL } from '../../../config'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import axios from 'axios'
import { t } from 'i18next'

export const ProductCart = ({product, disableActions = false}) => {
  return                 <Card>
    <CardContent style={{width: '100%'}}>
      <img width={'100%'} src={beURL + product?.pictures[0]} alt="" />
      <Typography gutterBottom variant="h5" component="div">
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
    </CardContent>
    <CardActions style={{ justifyContent: 'space-between', flexDirection: 'row-reverse' }}>
      { !disableActions ? <Button onClick={() => {
        axios.post('/api/shop/buy/'+product._id);
      }} variant={'contained'} style={{ float: 'right' }} size="small">{t('COMMON.BUY')}</Button> : '' }
      <div style={{ fontWeight: 'bold', color: 'green' }}>{product.price} Kč</div>
    </CardActions>
  </Card>
}