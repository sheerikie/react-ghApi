import React, { useContext, useState, useMemo } from 'react';
import UserItem from './UserItem';
import GithubContext from '../../context/github/githubContext';
import Pagination from '../utilities/Pagination.js';
import Loader from '../utilities/loader';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  const [currentPage, setCurrentPage] = useState(1);

  let itemsPerPage = 6;

  const paginatedData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return users.slice(firstPageIndex, lastPageIndex);
  }, [itemsPerPage, currentPage, users]);

  if (loading) return <h3 style={Loader.loaderStyle }>Loading ......</h3>;
  return (
    <>
      <p>You have {users.length} Results</p>
    <div style={Users.userStyle}>
      {paginatedData && paginatedData.map(user => (
        <UserItem key={user.login} user={user} />
      ))}
    </div>
      <Pagination
      className="paginate-bar"
      currentPage={currentPage}
      sumCount={users.length}
      itemsPerPage={itemsPerPage}
      onPageChange={page => setCurrentPage(page)}
    />
    
    </>
  );
};

Users.userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
