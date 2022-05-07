import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import CardHeader from '@mui/material/CardHeader'
import { Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LinkIcon from '@mui/icons-material/Link'
import DateRangeIcon from '@mui/icons-material/DateRange'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ScaleIcon from '@mui/icons-material/Scale'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import HeightIcon from '@mui/icons-material/Height'
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight'
import { useTranslation } from 'react-i18next'

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
  const fullName = props.user?.profileUser?.firstName + ' ' + props?.user?.profileUser?.lastName
  const { t } = useTranslation()

  return (<div>
      <Card>
        <Link to={'/edit'}
              style={{ padding: 10, float: 'right', color: 'blue', cursor: 'pointer' }}>{t('COMMON.EDIT')}</Link>
        <CardHeader subheader={'@' + props?.user?.profileUser?.username} subtitle={'ahoj'} title={fullName} />
        <CardContent>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <Box>
              <DateRangeIcon /> Uživatel se připojil srpen 2021
            </Box>
            <Box>
              <LocationOnIcon /> Prague, Czech republic
            </Box>
            <Box>
              <LinkIcon /> <Link to={'https://cbdsvet.cz'} style={{ color: 'black' }}>https://cbdsvet.cz</Link>
            </Box>
            <Box>
              <CalendarMonthIcon /> Narozeny 11.05.1993
            </Box>
            <Box>
              <ScaleIcon /> Horoskop : Byk
            </Box>
            <Box>
              <AccessTimeIcon /> {t('COMMON.LAST_ACTIVE')} : 10 minutes
            </Box>
            <Box>
              <MonitorWeightIcon /> Vaha : 50kg
            </Box>
            <Box>
              <HeightIcon /> Vyska : 180cm
            </Box>
          </Box>
          <Box sx={{ textAlign: 'left', marginTop: 2 }}>
            <strong>{t('COMMON.DESCRIPTION')}:</strong>
            <p>{props.user?.profileUser?.description}</p>
          </Box>
          <Divider />
        </CardContent>
      </Card>
  </div>
  )
}
