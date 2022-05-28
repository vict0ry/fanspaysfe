import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
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
import { useTranslation } from 'react-i18next'
import { t } from 'i18next'

const ProfileStatistics = ({ followers = 500, following = 100, posts = 20, products = 4, video = 1, likes = 200 }) => {
  const TextNumber = ({ number, text }) => {
    return <Box style={{ textAlign: 'center' }}>
      <Box sx={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="number">
        {number}
      </Box>
      <Box className="descr">
        {text}
      </Box>
    </Box>
  }
  return <Box className={'numbers-wrapper'}
              sx={{ display: 'flex', justifyContent: 'space-around', margin: '30px 0' }}>
    <TextNumber number={followers} text={t('COMMON.FOLLOWERS')} />
    <TextNumber number={following} text={t('COMMON.FOLLOWING')} />
    <TextNumber number={posts} text={t('PROFILE.POSTS')} />
    <TextNumber number={products} text={t('PROFILE.PRODUCTS')} />
    <TextNumber number={video} text={t('PROFILE.VIDEO')} />
    <TextNumber number={likes} text={t('PROFILE.LIKES')} />
  </Box>
}


export default function AboutCard(props) {
  const fullName = props.user?.profileUser?.firstName + ' ' + props.user?.profileUser?.lastName
  const { t } = useTranslation()
  debugger;

  return (<div>
      <Card sx={{ maxWidth: '1fr', gridColumn: 'unset' }}>
        <div style={{ padding: 10, float: 'right', color: 'green', cursor: 'pointer' }}>{t('COMMON.ONLINE')}</div>
        <CardHeader subheader={'@' + props?.user?.profileUser?.username} subtitle={'ahoj'} title={fullName} />
        <CardContent>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <Box>
              <DateRangeIcon /> {t('PROFILE.USER_FIRST_REGISTERED')} srpen 2021
            </Box>
            <Box>
              <LocationOnIcon /> Prague, Czech republic
            </Box>
            <Box>
              <LinkIcon /> <Link to={'https://cbdsvet.cz'} style={{ color: 'black' }}>https://cbdsvet.cz</Link>
            </Box>
            <Box>
              <CalendarMonthIcon /> {t('PROFILE.BIRTH_DATE')} 11.05.1993
            </Box>
            <Box>
              <ScaleIcon /> {t('PROFILE.ZODIAC')} : Byk
            </Box>
            <Box>
              <AccessTimeIcon /> {t('COMMON.LAST_ACTIVE')} : 10 minutes
            </Box>
          </Box>
          <Divider style={{ marginTop: '20px' }} />
          <ProfileStatistics followers={props.user.profileUser.followers.length}
                             following={props.user.profileUser.following.length} />
          <Divider />
          <Box sx={{ textAlign: 'left', marginTop: 2 }}>
            <strong>{t('COMMON.DESCRIPTION')}:</strong>
            <p>{props.user?.profileUser?.description}</p>
          </Box>
        </CardContent>
      </Card>
    </div>
  )
}
