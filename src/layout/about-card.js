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
import moment from 'moment'
import { getZodiac } from '../helper'
import { SocialIcon } from 'react-social-icons'

const ProfileStatistics = ({ followers = 0, following = 0, posts = 0, products = 0, video = 0, likes = 0 }) => {
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

export const InfoIcon = ({title, icon, afterIcon}) => {
  return <Box style={{
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    background: 'rgba(247, 245, 249, 0.5)', width: '168px', height: '80px'}}>
    <div style={{color: '#5D5E65', fontSize: '14px'}}>{title} </div>
    <div><img src={icon} /><span style={{fontWeight: '700'}}>{afterIcon}</span></div>
  </Box>
}

export default function AboutCard({ user, postsLength }) {
  const fullName = user?.firstName + ' ' + user?.lastName
  const { t } = useTranslation()
  const parsedDate = moment(user?.birthDate, 'YYYY-MM-DD')
  const parsedDay = parsedDate.get('day')
  const parsedMonth = parsedDate.format('MMMM')
  const parsedYear = parsedDate.get('year')


  return (<div>
      <Card sx={{ maxWidth: '1fr',width: '590px', height: '360px', gridColumn: 'unset' }}>
        <div style={{ padding: 10, float: 'right', color: 'green', cursor: 'pointer' }}>{t('COMMON.ONLINE')}</div>
        <CardHeader subheader={'@' + user?.username} subtitle={'ahoj'} title={fullName} />

        <CardContent>

          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <InfoIcon afterIcon={'srpen 2021'} icon={'/images/icons/calendar.svg'} title={t('PROFILE.USER_FIRST_REGISTERED')}></InfoIcon>
            <InfoIcon afterIcon={'Praha'} icon={'/images/icons/map-pin.svg'} title={t('Location')}></InfoIcon>

            <Box>
              <LinkIcon /> <Link to={'https://cbdsvet.cz'} style={{ color: 'black' }}>https://cbdsvet.cz</Link>
            </Box>
            <Box>
              <CalendarMonthIcon /> {t('PROFILE.BIRTH_DATE')} {new Date(parsedDate).toLocaleDateString('cs-CZ')}
            </Box>
            <Box>
              <ScaleIcon /> {t('PROFILE.ZODIAC')} : {t(getZodiac(parsedDay, parsedMonth))}
            </Box>
            <Box>
              <AccessTimeIcon /> {t('COMMON.LAST_ACTIVE')} : 10 minutes
            </Box>
          </Box>
          <Divider style={{ marginTop: '20px' }} />
          <Divider style={{ marginTop: '20px' }} />
          <ProfileStatistics followers={user?.followers.length}
                             posts={postsLength}
                             following={user?.following.length} />
          <Divider />
          <Box sx={{ textAlign: 'left', marginTop: 2 }}>
            <strong>{t('COMMON.DESCRIPTION')}:</strong>
            <p>{user?.description}</p>
          </Box>
        </CardContent>
      </Card>
    </div>
  )
}
