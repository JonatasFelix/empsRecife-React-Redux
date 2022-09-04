import React, { useRef } from "react";
import ReactPaginate from "react-paginate";
import { BoxPagination } from "./styled";

const Pagination = ({ loading, total, setPage }) => {
  const pagination = useRef();
  const perPage = 10;

  return loading ? (
    <div className="loader"></div>
  ) : (
    <BoxPagination>
      <div onClick={(e) => pagination.current.setState({ selected: 6 - 1 })} />
      <ReactPaginate
        ref={pagination}
        pageCount={Math.ceil(total / perPage)}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        onPageChange={setPage}
        containerClassName="pagination"
        activeClassName="active"
        pageLinkClassName="page-link"
        breakLinkClassName="page-link"
        nextLinkClassName="page-link"
        previousLinkClassName="page-link"
        pageClassName="page-item"
        breakClassName="page-item"
        nextClassName="page-item"
        previousClassName="page-item"
        previousLabel={<>&laquo;</>}
        nextLabel={<>&raquo;</>}
      />
    </BoxPagination>
  );
};

export default Pagination;
