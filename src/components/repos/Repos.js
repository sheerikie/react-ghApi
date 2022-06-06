import React, {  useState, useMemo } from 'react';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types';
import Pagination from '../utilities/Pagination.js';

const Repos = ({ repos }) => {

  const [currentPage, setCurrentPage] = useState(1);
  let itemsPerPage = 6;
  const paginatedData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return repos.slice(firstPageIndex, lastPageIndex);
  }, [itemsPerPage, currentPage, repos]);


  return (
    <>
      <p>You have {repos.length} Results</p>
    <div style={repos.userStyle}>
    {paginatedData && paginatedData.map(repo => <RepoItem repo={repo} key={repo.id} />)}
    </div>
      <Pagination
      className="paginate-bar"
      currentPage={currentPage}
      sumCount={repos.length}
      itemsPerPage={itemsPerPage}
      onPageChange={page => setCurrentPage(page)}
    />
    
    </>
  );

};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
