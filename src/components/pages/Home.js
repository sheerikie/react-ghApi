import React from 'react';
import Search from '../users/Search';
import Users from '../users/Users';

function Home() {
  return (
    <>
    <h2 className='text-left'>Welcome User</h2>
      <Search />
      <Users />
    </>
  );
}

export default Home;
