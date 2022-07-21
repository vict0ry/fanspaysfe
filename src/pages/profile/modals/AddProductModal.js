import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@mui/material/Grid'
import axios from 'axios'
import { useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import { ProductCart } from './ProductCart'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  borderRadius: '20px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

export default function AddProductModal() {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.profile.profile)
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState([])
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [state, setState] = useState([])
  const inputFile = useRef(null)

  useEffect(() => {
    axios.get('/api/shop/' + profile.profileUser._id).then(products => {
      setProducts(products.data)
    })
  }, [])
  let onFileUploadChange = (event) => {
    const objectUrlImgs = [...event.target.files].map(i => {
      return {
        img: i
      }
    })
    setState(objectUrlImgs)
  }

  const formData = new FormData()

  const submitForm = (event) => {
    event.preventDefault()
    const { price, description, name } = event.target.elements
    formData.append('price', price.value)
    formData.append('description', description.value)
    formData.append('name', name.value)
    state.forEach(file => {
      formData.append('images[]', file.img)
    })
    return axios({
      method: 'post',
      url: '/api/shop',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(() => {
      console.log('done')
    })

  }
  const { username } = useParams()
  const loggedUser = useSelector(state => state.user)
  const isAllowed = () => {
    return !!(!username || username === loggedUser?.userData?.username)
  }
  const { t } = useTranslation()
  return (
    <div>
      {isAllowed() ? <Button variant="contained" onClick={handleOpen}>{t('COMMON.ADD_PRODUCT')}</Button> : ''}
      <div style={{ marginTop: 10 }}>
        {products.length ? <div>
          <Grid container spacing={1}>
            {products.map(product => {
              return <Grid item xs={12} sm={6}>
                <ProductCart product={product}></ProductCart>
              </Grid>
            })}
          </Grid>
        </div> : t('COMMON.NOTHING_HERE_YET')}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" noValidate onSubmit={submitForm} sx={style}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              component="label"
            >
              {t('SHOP.ADD_PRODUCT_IMAGE')}
              <input
                type="file"
                multiple
                accept=".png,.jpg,.jpeg"
                onChange={onFileUploadChange}
                ref={inputFile} style={{ display: 'none' }}
              />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ paddingTop: 10 }}
              required
              fullWidth
              id="name"
              label={t('SHOP.PRODUCT_NAME')}
              name="name"
              autoComplete="productName"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ paddingTop: 10 }}
              required
              type={'number'}
              fullWidth
              id="price"
              label={t('COMMON.PRICE')}
              name="price"
              autoComplete="productPrice"
            />
          </Grid>
          <TextField style={{ paddingTop: 10 }}
                     multiline
                     name={'description'}
                     minRows={3}
                     sx={{ width: '100%', padding: '0', margin: 0 }} id="outlined-basic" label={t('COMMON.DESCRIPTION')}
                     variant="outlined" />
          <Button
            type={'submit'}
            style={{ marginTop: 10 }}
            sx={{ padding: 0, marginLeft: '5px' }} variant="outlined">{t('COMMON.SAVE')}</Button>
        </Box>
      </Modal>
    </div>
  )
}
