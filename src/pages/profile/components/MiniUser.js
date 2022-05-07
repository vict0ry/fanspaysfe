export const MiniUser = ({ user }) => {
  return <div style={{ display: 'flex', marginBottom: 20 }} className="user-info">
    <div className="avatar-wrapper" style={{ marginRight: '5px' }}>
      <img
        style={{ borderRadius: '100%' }}
        src={'http://localhost:3003' + user?.profilePic}
        alt=""
        width={'50px'}
      />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }} className="user-metadata">
      <strong style={{ fontSize: '1.2rem' }}>
        {user.firstName + ' ' + user.lastName}
      </strong>
      <span style={{ color: 'gray' }}>@{user.username}</span>
    </div>
  </div>
}
