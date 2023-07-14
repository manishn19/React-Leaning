import React, { useState } from "react";

const itemsPerPage = 2; // Number of items to display per page

const Pagination = ({ totalPages, onPageChange, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  //   const itemsPerPage = 1;

  // calculate the total number of pages
  //   const totalPages = Math.ceil(count / itemsPerPage);

  //handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the starting and ending indexes of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <span>{currentPage}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
