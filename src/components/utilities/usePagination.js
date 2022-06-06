import { useMemo } from 'react';

export const PERIODS = '...';

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
  sumCount,
  itemsPerPage,
  partnerCount = 1,
  currentPage
}) => {
  const paginateRange = useMemo(() => {
    const totalPageCount = Math.ceil(sumCount / itemsPerPage);

    // Pages count calculations partnerCount + firstPage + lastPage + currentPage + 2*PERIODS
    const totalPageNumbers = partnerCount + 5;

    /*
      If number of pages < page numbers in
      paginationComponent, return range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftpartnerIndex = Math.max(currentPage - partnerCount, 1);
    const rightpartnerIndex = Math.min(
      currentPage + partnerCount,
      totalPageCount
    );

    /*
     Dont show dots if there is only one position left 
      after or before the left/right page count since it would lead to a change in the pagination
      component size
    */
    const shouldShowLeftPeriods = leftpartnerIndex > 2;
    const shouldShowRightPeriods = rightpartnerIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftPeriods && shouldShowRightPeriods) {
      let leftItemCount = 3 + 2 * partnerCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, PERIODS, totalPageCount];
    }

    if (shouldShowLeftPeriods && !shouldShowRightPeriods) {
      let rightItemCount = 3 + 2 * partnerCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, PERIODS, ...rightRange];
    }

    if (shouldShowLeftPeriods && shouldShowRightPeriods) {
      let middleRange = range(leftpartnerIndex, rightpartnerIndex);
      return [firstPageIndex, PERIODS, ...middleRange, PERIODS, lastPageIndex];
    }
  }, [sumCount, itemsPerPage, partnerCount, currentPage]);

  return paginateRange;
};
