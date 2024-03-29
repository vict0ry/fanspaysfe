import React from 'react'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, InputBase } from '@mui/material'
import { SearchInput } from '../shop/SearchInput'
import { Icon } from '../messages/Icon'
import useWindowDimensions from '../../useWindowDimensions'
import axios from 'axios'
import { t } from 'i18next'

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
    marginBottom: '24px',
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
          {t('USERS.AGE')}
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


        <Box style={leftFilterStyles.ageContItem}>
          <span style={leftFilterStyles.ageTitle}>{t('USERS.FROM')}</span>
          <Box style={leftFilterStyles.ageController}>
            <Button
              style={leftFilterStyles.ageButton}
              onClick={() => {
                if (props.fromAge > 0) {
                  props.setFromAge(props.fromAge - 1)
                }
              }}
            >-</Button>
            <InputBase
              style={leftFilterStyles.inputAge}
              value={props.fromAge}
              onChange={(e) => {
                if (Number(e.target.value) <= props.upToAge && Number(e.target.value) > 0) {
                  props.setFromAge(Number(e.target.value))
                }
              }}
            />
            <Button
              style={{
                ...leftFilterStyles.ageButton,
                ...{ paddingTop: 3 },
                ...props.fromAge === props.upToAge ? { color: '#C4C4C4' } : {}
              }}
              onClick={() => {
                if (props.fromAge < props.upToAge) {
                  props.setFromAge(props.fromAge + 1)
                }
              }}
            >+</Button>
          </Box>
        </Box>

        <Box style={leftFilterStyles.ageContItem}>
          <span style={leftFilterStyles.ageTitle}>{t('USERS.UP_TO')}</span>
          <Box style={leftFilterStyles.ageController}>
            <Button
              style={{
                ...leftFilterStyles.ageButton,
                ...props.fromAge === props.upToAge ? { color: '#C4C4C4' } : {}
              }}
              onClick={() => {
                if (props.fromAge < props.upToAge) {
                  props.setUpToAge(props.upToAge - 1)
                }
              }}
            >-</Button>
            <InputBase
              style={leftFilterStyles.inputAge}
              value={props.upToAge}
              onChange={(e) => {
                if (props.fromAge <= Number(e.target.value) && Number(e.target.value) <= 100) {
                  props.setUpToAge(Number(e.target.value))
                }
              }}
            />
            <Button
              style={{ ...leftFilterStyles.ageButton, ...{ paddingTop: 3 } }}
              onClick={() => {
                if (Number(props.upToAge < 99))
                  props.setUpToAge(props.upToAge + 1)
              }}
            >+</Button>
          </Box>
        </Box>
      </Box>


      <Box style={{ width: '100%' }}>
        <Box style={leftFilterStyles.title}>{t('USERS.CATEGORY')}</Box>
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

      <Box sx={{
        width: {
          md: '180px',
          xs: '100%'
        },
        marginBottom: '24px'
      }}>
        <Box style={leftFilterStyles.title}>{t('USERS.SEARCH_BY_NICKNAME')}</Box>
        <SearchInput
          name="at"
          placeholder="Введите ник"
          value={props.findNickname}
          setValue={props.setFindNickname}
        />
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
              findAuthors: props.findAuthors,
              sortBy: props.sortBy
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