import React from 'react';

const Friends = ({ friend }) => {
  return (
    <div className='friend'>
      <img
        src={`https://robohash.org/${friend.id}?width=200&height=200`}
        alt=''
      />
      <div>
        <h2 className='name'>{friend.name}</h2>
        <p>{friend.contact}</p>
      </div>
    </div>
  );
};

export default Friends;
