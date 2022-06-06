import React from 'react';
import classnames from 'classnames';
import { usePagination, PERIODS } from './usePagination';
import '../utilities/Pagination.scss';
const Pagination = props => {
  const {
    onPageChange,
    sumCount,
    partnerCount = 1,
    currentPage,
    itemsPerPage,
    className
  } = props;

  const paginateRange = usePagination({
    currentPage,
    partnerCount,
    sumCount,
    itemsPerPage
  });

  // If there are less than 2 times range do not render the component
  if (currentPage === 0 || paginateRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginateRange[paginateRange.length - 1];
  return (
    <ul
      className={classnames('paginate-container', { [className]: className })}
    >
       {/* Left navigation*/}
      <li
        className={classnames('paginate-item', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginateRange.map(pageNumber => {
         
        // If the pageItem is a PERIOD, render PERIOD unicode character
        if (pageNumber === PERIODS) {
          return <li className="paginate-item dots">&#8230;</li>;
        }
		
        // Renders Page Pills
        return (
          <li
            className={classnames('paginate-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation*/}
      <li
        className={classnames('paginate-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;

