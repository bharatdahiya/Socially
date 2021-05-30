import React from 'react';
import UserList from '../components/UserList';

const USERS = [
  {
    id: 'u1',
    name: 'Bharat',
    image: 'https://images.unsplash.com/photo-1552529420-e57fab63047b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIyMzEyNjgy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600',
    places: 3
  }
]
const Users = () => {

  return (
    <UserList items={USERS} />
  )
};

export default Users;
