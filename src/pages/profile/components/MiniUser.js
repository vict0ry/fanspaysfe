import { Link } from 'react-router-dom'
import { beURL } from '../../../config'

export const MiniUser = ({ user }) => {
  return <Link to={'/profile/' + user?.username}>
    <div style={{ display: 'flex', marginBottom: 20 }} className="user-info">
      <div className="avatar-wrapper" style={{ marginRight: '5px' }}>
        <img
          style={{ borderRadius: '100%' }}
          src={beURL + user?.profilePic}
          alt=""
          width={'50px'}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }} className="user-metadata">
        <strong style={{ fontSize: '1rem', color: 'black' }}>
          {user?.firstName + ' ' + user?.lastName}
        </strong>
        <span style={{ color: 'gray' }}>@{user?.username}</span>
      </div>
    </div>
  </Link>
}
