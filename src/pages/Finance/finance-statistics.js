import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import React from 'react'
import useWindowDimensions from '../../useWindowDimensions'


export const FinanceStatistics = ({tips, followers, products, total}) => {

  const {width, height} = useWindowDimensions();

  return(
    <Box
      sx={{
        background: 'linear-gradient(94.04deg, #4776E6 10.41%, #8E54E9 77.48%)',
        borderRadius: "8px",
        height: {
          md: "128px",
        },
        position: "relative",
        width: "100%"
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: "100%",
          flexDirection:{xs: 'column', md: 'row'},
          justifyContent: 'space-between',
          padding: "24px"
        }}
      >
        <Typography
          variant={'h6'}
          sx={{
            color: 'white',
            // ml: {xs: '17%', md: 0}
          }}
        >Your finance statistics, User :)</Typography>

        <Box sx={{
          marginTop: "-16px"
        }}>
          <FormControl fullWidth>
            <InputLabel
              sx={{
                mt: 0.5,
                // ml:{xs: '30%'}
              }}
              id="weeks-id"
            >
              <img
                style={{
                  paddingRight: 10,
                  marginTop: 0,
                  width: 25,
                  height: 25
                  }}
                src='/images/icons/calendar.svg'
              />Weeks</InputLabel>
            <Select
              labelId={"weeks-id"}
              sx={{
                width: 120,
                height: 30,
                mt: 2,
                background:"#fff",
                borderRadius: "8px",
                '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                  border: "none"
                }
              }}
            />
          </FormControl>
        </Box>
      </Box>


      <Box
        sx={{
          display: 'flex',
          // flexDirection: "row",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: {
            // md: 'space-between',
            sm: "space-around",
            xs: "center"
          },
          position: {
            md: "absolute"
          },
          bottom: {
            md: "-50px",
          },

        }}
      >

        <Card
          sx={{
            width: {
              sm: 180,
              xs: 150
            },
            height: 88,
            mr: {md: 2, sm: 6, xs: 2},
            ml: {md: 2, sm: 6, xs: 2},
            marginBottom: {
              md: 0,
              xs: "24px"
            }}
          }>
          <CardContent
            sx={{
              display: 'flex',
              alignItems: 'center',
              // justifyContent: 'space-around',
              padding: "16px"
            }}
          >
            <Box>
              <img style={{width: 40, height: 40, marginRight: 20}} src='/images/icons/briefcase.svg'/>
            </Box>
            <Box>
              <Typography variant={'h5'} sx={{fontSize: {sm: "20px", xs: "16px"}, fontWeight: 700}}><span style={{color: "#5D5E65"}}>$ </span>{total}</Typography>
              <Typography variant={'caption'}>All</Typography>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: {
              sm: 180,
              xs: 150
            },
            height: 88,
            mr: {md: 2, sm: 6, xs: 2},
            ml: {md: 2, sm: 6, xs: 2},
            marginBottom: {
              md: 0,
              xs: "24px"
            }}
          }>
          <CardContent
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: "16px"
            }}
          >
            <Box>
              <img style={{width: 40, height: 40, marginRight: 20}} src='/images/icons/copper-coin.svg'/>
            </Box>
            <Box>
              <Typography variant={'h5'} sx={{fontSize: {sm: "20px", xs: "16px"}, fontWeight: 700}}><span style={{color: "#5D5E65"}}>$ </span>{tips}</Typography>
              <Typography variant={'caption'}>Tips</Typography>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: {
              sm: 180,
              xs: 150
            },
            height: 88,
            mr: {md: 2, sm: 6, xs: 2},
            ml: {md: 2, sm: 6, xs: 2},
            marginBottom: {
              md: 0,
              xs: "24px"
            }}
          }>
          <CardContent
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: "16px"
            }}
          >
            <Box>
              <img style={{width: 40, height: 40, marginRight: 20}} src='/images/icons/crown.svg'/>
            </Box>
            <Box>
              <Typography variant={'h5'} sx={{fontSize: {sm: "20px", xs: "16px"}, fontWeight: 700}}><span style={{color: "#5D5E65"}}>$ </span>{followers}</Typography>
              <Typography variant={'caption'}>Followers</Typography>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: {
              sm: 180,
              xs: 150
            },
            height: 88,
            mr: {md: 2, sm: 6, xs: 2},
            ml: {md: 2, sm: 6, xs: 2},
            marginBottom: {
              md: 0,
              xs: "24px"
            }}
          }>
          <CardContent
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: "16px"
            }}
          >
            <Box>
              <img style={{width: 40, height: 40, marginRight: 20}} src='/images/icons/store.svg'/>
            </Box>
            <Box>
              <Typography variant={'h5'} sx={{fontSize: {sm: "20px", xs: "16px"}, fontWeight: 700}}><span style={{color: "#5D5E65"}}>$ </span>{products}</Typography>
              <Typography variant={'caption'}>Products</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}
