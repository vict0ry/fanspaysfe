import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import CardHeader from '@mui/material/CardHeader'
import { useTranslation } from 'react-i18next'
import { t } from 'i18next'
import moment from 'moment'
import { getZodiac } from '../helper'

const ProfileStatistics = ({ followers = 0, following = 0, posts = 0, products = 0, video = 0, likes = 0 }) => {
  const TextNumber = ({ number, text }) => {
    return <Box style={{  textAlign: 'center' }}>
      <Box sx={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="number">
        {number}
      </Box>
      <Box className="descr">
        {text}
      </Box>
    </Box>
  }
  return <Box className={'numbers-wrapper'}
              sx={{ display: {md: 'flex', xs: 'grid'},
                justifyContent: 'space-around',
                margin: '30px 0',
                gridTemplateColumns: '1fr 1fr 1fr',
              }}>
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
    display: 'flex', borderRadius: '8px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    background: 'rgba(247, 245, 249, 0.5)', width: '168px', height: '80px'}}>
    <div style={{color: '#5D5E65', fontWeight: 700, fontSize: '14px'}}>{title} </div>
    <div style={{marginTop: '10px', display: 'flex', alignItems: 'center'}}>
      <div style={{marginRight: '10px'}}><img src={icon} /></div>
      <span style={{fontWeight: '700'}}>{afterIcon}
      </span>
    </div>
  </Box>
}

export default function AboutCard({ user, postsLength, disable }) {
  const fullName = user?.firstName + ' ' + user?.lastName
  const { t } = useTranslation()
  const parsedDate = moment(user?.birthDate, 'YYYY-MM-DD')
  const parsedDay = parsedDate.get('day')
  const parsedMonth = parsedDate.format('MMMM')
  const parsedYear = parsedDate.get('year')


  return (<div>
      <Card sx={{ maxWidth: '1fr',width: { md: '590px', xs: '390px' }, gridColumn: 'unset' }}>
        <div style={{ padding: 10, float: 'right', color: 'green', cursor: 'pointer' }}>{t('COMMON.ONLINE')}</div>
        <CardHeader subheader={'@' + user?.username} subtitle={'ahoj'} title={fullName} />

        <CardContent>

          <Box sx={{ display: 'grid', gridTemplateColumns: { md: '1fr 1fr 1fr', xs: '1fr 1fr' }, gap: 2 }}>
            <InfoIcon afterIcon={'srpen 2021'} icon={'/images/icons/calendar.svg'} title={t('PROFILE.USER_FIRST_REGISTERED')}></InfoIcon>
            <InfoIcon afterIcon={'Praha'} icon={'/images/icons/map-pin.svg'} title={t('Location')}></InfoIcon>
            <InfoIcon afterIcon={new Date(parsedDate).toLocaleDateString('cs-CZ')} icon={'/images/icons/gift.svg'} title={t('PROFILE.BIRTH_DATE')}></InfoIcon>
            <InfoIcon afterIcon={t(getZodiac(parsedDay, parsedMonth))} icon={'/images/icons/zodiac-aries.svg'} title={t('PROFILE.ZODIAC')}></InfoIcon>
            <InfoIcon afterIcon={t('10 minutes')} icon={'/images/icons/time.svg'} title= {t('COMMON.LAST_ACTIVE')}></InfoIcon>
            <InfoIcon afterIcon={t('Male')} icon={'/images/icons/map-pin.svg'} title= {t('COMMON.SEX')}></InfoIcon>
          </Box>

          <Box sx={{ textAlign: 'left', marginTop: 2 }}>
            <strong>{t('COMMON.DESCRIPTION')}:</strong>
            <p>{user?.description}</p>
          </Box>
        </CardContent>
      </Card>

    <Card sx={{ maxWidth: '1fr',width: {md: '590px', xs: '390px'}, marginTop: '10px', gridColumn: 'unset' }}>
      <ProfileStatistics followers={user?.followers?.length}
                         posts={postsLength}
                         following={user?.following?.length} />
    </Card>
    </div>
  )
}
