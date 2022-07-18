import Button from '@mui/material/Button'
import { t } from 'i18next'
import axios from 'axios'
import SendTipModal from '../pages/profile/modals/SendTipModal'

export const Wish = ({title, from=0, to, id, myProfile, recipient}) => {
  const width = (100/to)*from;
  const handleWishSupport = () => {
    console.log('wish support')
  }
  return (<div style={{
    display: 'flex', flexDirection:'column',
    justifyContent: 'space-between'
  }}>
      <div style={{
        display: 'flex',
        justifyAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-between', color: '#5D5E65'}}>
        <span style={{
          fontWeight: 'bold',
          fontSize: '16px'
        }}>
          {from} of {to}$
        </span>
        <span style={{fontSize: '14px', color: '#B3B3B3'}}>Collected</span>
      </div>
    <div style={{
      position: 'relative',
      background: '#ECE9F1', height: '4px', margin: '10px 0'
    }} className="progress">
      <div style={{
        height: '4px', background: 'linear-gradient(94.04deg, #4776E6 10.41%, #8E54E9 77.48%)',
        position: 'absolute', width: width +'%', maxWidth: '100%'
      }} className="progress-size">

      </div>
    </div>
    <div style={{textAlign: 'left'}}>
      <span style={{color: '#1A051D', fontSize: '14px', fontWeight: 'bold', textAlign: 'center'}}>{title}</span>
    </div>
    {!myProfile && width < 100 ? <SendTipModal wishId={id} type={'WISH'} recipient={recipient}>
        <Button style={{margin: '10px 0'}} onClick={handleWishSupport} variant={'contained'}>{t('Support')}</Button>
      </SendTipModal> : ''}
  </div>);
}