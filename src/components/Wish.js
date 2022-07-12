import Button from '@mui/material/Button'
import { t } from 'i18next'
import axios from 'axios'

export const Wish = ({title, from=0, to, id, myProfile}) => {
  const width = (100/to)*from;
  return (<div style={{
    display: 'flex', flexDirection:'column',
    justifyContent: 'space-between'
  }}>
      <div style={{display: 'flex',
        justifyAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '16px', color: '#5D5E65'}}><span>{from} of {to}$</span>
        {myProfile ?
          <img onClick={() => {
            axios.delete('/api/wish/' + id);
          }}
        src="/images/icons/edit-button.svg"
        alt="edit" /> : 'Collected' }
      </div>
    <div style={{
      position: 'relative',
      background: '#ECE9F1', height: '4px', margin: '10px 0'
    }} className="progress">
      <div style={{
        height: '4px', background: 'linear-gradient(94.04deg, #4776E6 10.41%, #8E54E9 77.48%)',
        position: 'absolute', width: width +'%'
      }} className="progress-size">

      </div>
    </div>
    <div style={{textAlign: 'left'}}>
      <span style={{color: '#1A051D', fontSize: '14px', fontWeight: 'bold', textAlign: 'center'}}>{title}</span>
    </div>
    {!myProfile ? <Button style={{margin: '10px 0'}} variant={'contained'}>{t('Support')}</Button> : ''}
  </div>);
}