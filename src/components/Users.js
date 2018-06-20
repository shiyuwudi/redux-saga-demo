import React from 'react';

function Users({ users }) {
  return (
    <div
      style={{ background: 'green' }}
    >
      <ol>
        {users.map(user => (
          <li key={user.id}>
            <img src={user.avatar_url} alt="avatar" width={50} height={50} />
            {' '}
            <span>{user.name}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Users;