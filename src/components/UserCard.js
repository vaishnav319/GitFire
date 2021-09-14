import React from 'react';
import { Card, CardBody } from 'reactstrap';
const UserCard = ({ user }) => {
  return (
    <div>
      <Card className='text-center mt-3 mb-4'>
        <img src={user.avatar_url} className='img-thumbnail' />
        <div className='text-primary'>{user.name}</div>
        <div className='text-primary'>{user.location}</div>
        <div className='text-primary'>{user.bio}</div>
        <div className='text-info'>
          Available for Hire:{user.hireable ? 'YES' : 'NOPE'}
        </div>
        <div className='text-info'>ollowers: {user.followers}</div>
      </Card>
    </div>
  );
};

export default UserCard;
