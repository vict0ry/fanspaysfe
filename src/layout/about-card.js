import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import CardHeader from '@mui/material/CardHeader'
import { Divider } from '@mui/material'
import { Link } from 'react-router-dom'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))

export default function AboutCard(props) {
  const fullName = props.user.profileUser?.firstName + ' ' + props.user.profileUser?.lastName

  return (<div>
      <Card sx={{ maxWidth: '1fr' }}>
        <Link to={'/edit'} style={{ padding: 10, float: 'right', color: 'blue', cursor: 'pointer' }}>Editovat</Link>
        <CardHeader title={fullName}>

        </CardHeader>
        <CardContent>
          <div>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'inline-flex', flexDirection: 'column', textAlign: 'left' }}>
                <div>
                  <strong>Sex: </strong>
                  <p>Secret</p>
                </div>
                <div>
                  <strong>I'm looking for: </strong>
                  <p>Woman</p>
                </div>
              </Box>
              <Box sx={{ display: 'inline-flex', flexDirection: 'column', textAlign: 'left' }}>
                <div>
                  <strong>Status: </strong>
                  <p>Seeing someone</p>
                </div>
                <div>
                  <strong>Aged: </strong>
                  <p>25-26</p>
                </div>
              </Box>
            </Box>
          </div>
          <Divider />
          <Box sx={{ textAlign: 'left', marginTop: 2 }}>
            <strong>Description:</strong>
            <p>{props.user.profileUser?.description}</p>
          </Box>
          <Divider />
        </CardContent>
      </Card></div>
  )
}
