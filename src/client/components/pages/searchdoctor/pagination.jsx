import React, { useState } from "react";

function Pagination(props) {
  function isNumeric(num) {
    return !isNaN(num);
  }

  // eslint-disable-next-line react/prop-types
  const totalData = props.total;
  // eslint-disable-next-line react/prop-types
  const itemsPerPage = props.perPage;
  const maxVisiblePages = 5; // Jumlah maksimum halaman yang ditampilkan
  const totalPages = Math.ceil(totalData / itemsPerPage);

  // eslint-disable-next-line react/prop-types
  const [currentPage, setCurrentPage] = useState(props.current);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  let pagesToShow = [];

  if (totalPages <= maxVisiblePages) {
    pagesToShow = Array.from({ length: totalPages }, (_, index) => index + 1);
  } else {
    if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
      pagesToShow = Array.from(
        { length: maxVisiblePages - 2 },
        (_, index) => index + 1
      );
      pagesToShow.push("...");
      pagesToShow.push(totalPages);
    } else if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)) {
      pagesToShow.push(1);
      pagesToShow.push("...");
      pagesToShow = pagesToShow.concat(
        Array.from(
          { length: maxVisiblePages - 2 },
          (_, index) => totalPages - maxVisiblePages + 2 + index
        )
      );
    } else {
      pagesToShow.push(1);
      pagesToShow.push("...");
      pagesToShow.push(currentPage - 1);
      pagesToShow.push(currentPage);
      pagesToShow.push(currentPage + 1);
      pagesToShow.push("...");
      pagesToShow.push(totalPages);
    }
  }

  return (
    <div className="blog-pagination rev-page">
      <nav>
        <ul className="pagination justify-content-center">
          <li
            className={`page-item ${currentPage == 1 ? "disabled" : ""}`}
            style={{
              pointerEvents: currentPage == 1 ? "none" : "",
            }}
            onClick={() => {
              setCurrentPage(currentPage - 1);
              // eslint-disable-next-line react/prop-types
              props.paginationChange(currentPage - 1);
            }}
          >
            <a
              className="page-link page-prev"
              href="javascript: void(0)"
              tabIndex={-1}
            >
              <i className="feather-chevrons-left me-1" /> PREV
            </a>
          </li>
          {pagesToShow.map((page, index) => {
            return (
              <li
                className={`page-item ${page === currentPage ? "active" : ""}`}
                key={index}
                style={{
                  pointerEvents: !isNumeric(page) ? "none" : "",
                }}
                onClick={() => {
                  handlePageChange(page);
                  // eslint-disable-next-line react/prop-types
                  props.paginationChange(page);
                }}
              >
                <a href="javascript: void(0)" className="page-link">
                  {page}
                </a>
              </li>
            );
          })}
          <li
            className={`page-item ${
              currentPage == pagesToShow.length ? "disabled" : ""
            }`}
            onClick={() => {
              setCurrentPage(currentPage + 1);
              // eslint-disable-next-line react/prop-types
              props.paginationChange(currentPage + 1);
            }}
            style={{
              pointerEvents: currentPage == pagesToShow.length ? "none" : "",
            }}
          >
            <a className="page-link page-next" href="javascript: void(0)">
              NEXT <i className="feather-chevrons-right ms-1" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
