import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import './Pagination.css'

const Pagination = ({ totalPages, setPageno,pageno }) => {
  const handlePageClick = (event) => {
    setPageno(event.selected + 1)
    console.log("event.selected",event.selected)
    console.log("pageno",pageno)
    window.scrollTo(0, 0)
  }
   const forcePageActive =pageno-1 ;
  return (
    <>
      <div className="pagination-container">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
          forcePage={forcePageActive}
        />
      </div>
    </>
  )
}

export default Pagination
