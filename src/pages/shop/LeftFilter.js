import React, { useState } from 'react'
import { Box, Button, ButtonBase, Checkbox, FormControlLabel, FormGroup, Grid, InputBase, Slider } from '@mui/material'
import { SearchInput } from './SearchInput'
import { Icon } from '../messages/Icon'
import useWindowDimensions from '../../useWindowDimensions'
import axios from 'axios'
import { t } from 'i18next'
import { ClickAwayListener } from '@mui/base'

const available_tags = [
  'ex',
  'online',
  't-shirt',
  'футболка',
  'thing1',
  'thing2'
]

const leftFilterStyles = {
  cont: {
    padding: '24px 12px',
    borderRadius: '8px',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    marginRight: '16px'
  },
  ageCont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    marginBottom: '8px',
    width: '100%'
  },
  ageContItem: {
    marginBottom: 8,
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    marginBottom: '16px',
    fontSize: 14,
    fontWeight: 700,
    color: '#5D5E65'
  },
  ageTitle: {
    fontSize: 12,
    fontWeight: 700,
    marginRight: 8
    // maxWidth: 30
  },
  ageController: {
    display: 'flex',
    alignItems: 'center'
  },
  ageButton: {
    minWidth: 0,
    minHeight: 0,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: 16,
    height: 16,
    color: '#000',
    background: '#F7F5F9',
    padding: 2,
    fontWeight: 600
  },
  inputAge: {
    margin: '0 4px',
    borderRadius: 8,
    background: '#F7F5F9',
    padding: '4px 6px',
    fontSize: 12,
    fontWeight: 600,
    color: '#4776E6',
    width: 28,
    height: 24
  },

  categories: {
    height: 150,
    width: '100%',
    overflowY: 'scroll',
    '&::-webkit-scrollbar-track': {
      background: '#ECE9F1',
      border: '8px solid transparent',
      backgroundClip: 'content-box',
      borderRadius: 3
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#4776E6',
      borderRadius: 3,
      border: '8px solid transparent',
      backgroundClip: 'content-box'
    },
    marginBottom: '24px'
  },
  apply_btn: {
    color: '#4776E6',
    fontSize: 12,
    fontWeight: 700,
    textTransform: 'none',
    marginRight: 8,
    background: '#E8EFFF',
    borderRadius: 8,
    padding: '10px 13px'
  },
  clear_btn: {
    width: 36,
    height: 36,
    background: '#F7F5F9',
    borderRadius: 8,
    minHeight: 0,
    minWidth: 0
  }
}

const BpIcon = () => {
  return (
    <span style={{
      borderRadius: 6,
      width: 16,
      height: 16,
      border: '1px solid #ECE9F1'
    }}>

    </span>
  )
}

const BpCheckedIcon = () => {
  return (
    <span style={{
      borderRadius: 6,
      width: 16,
      height: 16,
      border: '1px solid #ECE9F1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0
    }}>
      <Icon name="check" />
    </span>
  )
}

const FormControlLabelStyles = {
  margin: 0,
  marginBottom: '8px',
  '& .css-187hphe-MuiTypography-root': {
    fontSize: 12,
    fontWeight: 700
  },
  '& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root': {
    padding: 0,
    marginRight: '8px',
    borderRadius: 6
  }
}

const LeftFilter = (props) => {
  const { width, height } = useWindowDimensions()

  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(10000)
  const [price, setPrice] = useState([minPrice, maxPrice])

  const [tags, setTags] = useState({})
  const [inputTag, setInputTag] = useState('')
  const [tagsListOpen, setTagsListOpen] = useState(false)

  return (
    <Grid
      item
      sx={{
        ...leftFilterStyles.cont,
        display: {
          md: 'flex'
          // xs: "none"
        },
        position: {
          md: 'initial',
          xs: 'fixed'
        },
        bottom: 0,
        left: 0,
        zIndex: {
          md: 'initial',
          xs: 3
        },
        width: {
          md: '224px',
          xs: '100%'
        },
        padding: {
          xs: '24px 32px',
          md: '24px 12px'
        },
        borderTopLeftRadius: {
          xs: '40px',
          md: '8px'
        },
        borderTopRightRadius: {
          xs: '40px',
          md: '8px'
        }
      }}
    >
      <Box style={leftFilterStyles.ageCont}>
        <Box sx={{
          ...leftFilterStyles.title,
          display: {
            xs: 'flex',
            md: 'block'
          },
          width: '100%',
          justifyContent: 'space-between'
        }}>
          {t('SHOP.PRICE')}
          {width < 900 &&
            <Button
              sx={{
                minWidth: 0,
                minHeight: 0
              }}
              onClick={() => {
                props.setLeftMenuOpen(false)
              }}
            >
              <Icon name="X" />
            </Button>
          }
        </Box>


        <Box sx={{
          display: 'flex',
          width: '100%'
        }}>
          <Box sx={{
            flexGrow: 1,
            display: 'flex',
            padding: '4px 8px',
            background: '#F7F5F9',
            borderRadius: '6px',
            marginRight: '8px',
            alignItems: 'center'
          }}>
            <span style={{
              ...leftFilterStyles.ageTitle, ...{
                fontSize: '10px',
                color: '#B3B3B3',
                margin: 0
              }
            }}>{t('USERS.FROM')}</span>
            <InputBase
              sx={{
                margin: '0 8px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#1A051D',
                width: '35px',
                height: '16px'
              }}
              value={price[0]}
              onChange={(e) => {
                if (price[1] >= Number(e.target.value) && Number(e.target.value) >= minPrice) {
                  setPrice([Number(e.target.value), price[1]])
                }
              }}
            />
            <span style={{
              color: '#B3B3B3',
              fontSize: '10px',
              fontWeight: 600

            }}>$</span>
          </Box>

          <Box sx={{
            flexGrow: 1,
            display: 'flex',
            padding: '4px 8px',
            background: '#F7F5F9',
            borderRadius: '6px',
            alignItems: 'center'
          }}>
            <span style={{
              ...leftFilterStyles.ageTitle, ...{
                fontSize: '10px',
                color: '#B3B3B3',
                margin: 0
              }
            }}>{t('USERS.UP_TO')}</span>
            <InputBase
              sx={{
                margin: '0 8px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#1A051D',
                width: '35px',
                height: '16px'
              }}
              value={price[1]}
              onChange={(e) => {
                if (price[0] <= Number(e.target.value) && Number(e.target.value) <= maxPrice) {
                  setPrice([price[0], Number(e.target.value)])
                }
              }}
            />
            <span style={{
              color: '#B3B3B3',
              fontSize: '10px',
              fontWeight: 600

            }}>$</span>
          </Box>
        </Box>

        <Box sx={{
          width: '100%',
          marginTop: '16px',
          padding: '0 12px'

        }}>
          <Slider
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={(e, value) => {
              setPrice(value)
            }}
            sx={{
              '&:focus, &:hover, &.Mui-active': {},
              '& .Mui-focusVisible': {},
              '& .css-eg0mwd-MuiSlider-thumb': {
                width: '24px',
                height: '24px',
                border: '4px solid #F7F5F9'

              },
              '& .css-14pt78w-MuiSlider-rail': {
                backgroundColor: '#ECE9F1'
              },
              '& .css-eg0mwd-MuiSlider-thumb:before': {
                boxShadow: 'none'
              },
              '& .css-1gv0vcd-MuiSlider-track': {
                backgroundColor: '#4776E6'
              }
            }}
          />
        </Box>

      </Box>


      <Box style={{ width: '100%' }}>
        <Box style={leftFilterStyles.title}>{t('SHOP.CATEGORY')}</Box>
        <Box sx={leftFilterStyles.categories}>
          <FormGroup>
            {props.categories.map((category) => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<BpIcon />}
                      checkedIcon={<BpCheckedIcon />}
                      name={category}
                      onChange={(e) => {
                        props.setCheckedTags({
                          ...props.checkedTags,
                          [e.target.name]: e.target.checked
                        })
                      }}
                    />
                  }
                  checked={props.checkedTags[category] === undefined || !props.checkedTags[category] ? false : true}
                  label={category}
                  sx={FormControlLabelStyles}
                />
              )
            })}
          </FormGroup>
        </Box>
      </Box>


      <Box sx={{ width: '100%', marginBottom: '24px' }}>
        <Box style={leftFilterStyles.title}>{t('SHOP.TAGS')}</Box>
        <Box sx={{
          padding: '8px 8px',
          borderRadius: '8px',
          border: '1px solid #ECE9F1',
          background: '#fff',
          display: 'flex',
          flexWrap: 'wrap',
          maxHeight: '120px',
          width: '100%',
          overflowY: 'auto'
        }}>
          <Box sx={{
            marginRight: '8px',
            marginBottom: '8px'
          }}>
            <Icon name="hashtag" />
          </Box>
          {Object.keys(tags).map((tag) => {
            if (tags[tag]) {
              return (
                <Box sx={{
                  padding: '4px 8px',
                  background: '#E8EFFF',
                  borderRadius: '4px',
                  marginRight: '4px',
                  color: '#4776E6',
                  fontSize: '12px',
                  fontWeight: 600,
                  display: 'flex',
                  marginBottom: '8px'
                }}>
                <span style={{ marginRight: 2 }}>
                  {tag}
                </span>
                  <ButtonBase onClick={() => {
                    setTags({
                      ...tags,
                      [tag]: false
                    })
                  }}>
                    <Icon name="x" />
                  </ButtonBase>
                </Box>
              )
            }
          })}

        </Box>


        <Box sx={{
          padding: '4px 8px',
          background: '#E8EFFF',
          borderRadius: '4px',
          color: '#4776E6',
          fontSize: '12px',
          fontWeight: 600,
          display: 'flex',
          position: 'relative'
        }}>
          <InputBase
            sx={{
              margin: '0 8px',
              fontSize: '12px',
              fontWeight: 600,
              color: '#1A051D',
              width: '100%'
            }}
            value={inputTag}
            onChange={(e) => {
              setInputTag(e.target.value)
              if (e.target.value.length >= 2) {
                setTagsListOpen(true)
              } else {
                setTagsListOpen(false)
              }
            }}
          />

          {tagsListOpen && <ClickAwayListener onClickAway={() => {
            setTagsListOpen(false)
          }}>
            <Box sx={{
              position: 'absolute',
              left: 0,
              top: '100%',
              width: '100%',
              background: '#fff',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 1,
              borderBottomLeftRadius: '8px',
              borderBottomRightRadius: '8px',
              overflowY: 'auto',
              boxShadow: '0px 2px 8px rgba(26, 5, 29, 0.1)'
            }}>
              {
                available_tags.map(tag => {
                  return (
                    <ButtonBase
                      sx={{
                        minWidth: 0,
                        minHeight: 0,
                        display: 'flex',
                        justifyContent: 'start',
                        background: '#E8EFFF',
                        // marginBottom: "4px",
                        borderTop: '1px solid #fff',
                        padding: '8px'
                      }}

                      onClick={() => {
                        setTags({
                          ...tags,
                          [tag]: true
                        })

                        setTagsListOpen(false)
                        setInputTag('')
                      }}
                    >
                      {tag}
                    </ButtonBase>
                  )
                })
              }
            </Box>
          </ClickAwayListener>}
        </Box>


      </Box>


      <Box sx={{
        width: {
          md: '180px',
          xs: '100%'
        },
        marginBottom: '24px'
      }}>
        <Box style={leftFilterStyles.title}>{t('USERS.SEARCH_BY_NICKNAME')}</Box>
        {/*<SearchInput*/}
        {/*  name="at"*/}
        {/*  placeholder="Введите ник"*/}
        {/*  state={props.findNickname}*/}
        {/*  setState={props.setFindNickname}*/}
        {/*/>*/}

        <SearchInput
          placeholder="Введите ник"
          value={props.findNickname}
          setValue={props.setFindNickname}
          name="at"
        />

        {/*<InputBase*/}
        {/*  InputProps={{disableUnderline: true}}*/}
        {/*  placeholder="nickname"*/}
        {/*  sx={{ width: '100%', padding: '0', marginLeft: 0, border: "1px solid #000" }}*/}
        {/*  onChange={(e) => {*/}
        {/*    if(e.target.value.length <= 20) {*/}
        {/*      props.setFindNickname(e.target.value)*/}
        {/*    }*/}
        {/*  }}*/}
        {/*  value={props.findNickname}*/}
        {/*/>*/}
      </Box>
      <Box sx={{
        display: 'flex',
        // width: {
        //   md: "180px",
        //   xs: "100%"
        // },
        justifyContent: {
          md: 'start',
          xs: 'center'
        }
      }}>
        <Button
          style={
            leftFilterStyles.apply_btn}
          onClick={() => {
            const checked = []
            Object.keys(props.checkedTags).forEach(tag => {
              if (props.checkedTags[tag]) {
                checked.push(tag)
              }
            })
            const data = {
              fromAge: props.fromAge,
              upToAge: props.upToAge,
              checkedTags: checked,
              findNickname: props.findNickname,
              findProducts: props.findProducts,
              sortBy: props.sortBy,
              tags: tags,
              price: price,
              minPrice: minPrice,
              maxPrice: maxPrice
            }
            console.log(data)
            axios.post('/test/filter?age=18&nickname=test', data).then(res => console.log(res.data))
          }}
        >
          {t('USERS.APPLY_FILTER')}
        </Button>
        <Button style={leftFilterStyles.clear_btn}>
          <Icon name="delete" />
        </Button>
      </Box>
    </Grid>
  )
}

export { LeftFilter }