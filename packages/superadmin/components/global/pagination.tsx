import { FC, useState } from "react";
import { usePagination } from "./usePagination";
interface Props {
  list: any;
}

const Pagination: FC<Props> = ({ list }) => {
  const [pageSize, setPageSize] = useState(7);
  const [currentPage, onPageChange] = useState(1);
  const [siblingCount, setSiblingCount] = useState(1);
  const totalCount = list?.length;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  //let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="d-flex justify-content-between flex-wrap mt-2">
      <nav>
        <ul className="pagination">
          <li className="page-item disabled">
            <span className="page-link">
              <i className="bi bi-caret-left-fill align-middle"></i>
            </span>
          </li>
          {paginationRange?.map((pageNumber) => (
            <li className="page-item">
              <a className="page-link" href="#">
                {pageNumber}
              </a>
            </li>
          ))}
          <li className="page-item">
            <span className="page-link">
              <i className="bi bi-caret-right-fill align-middle"></i>
            </span>
          </li>
        </ul>
      </nav>
      <div className="d-flex align-items-center justify-content-center">
        <div className="me-2">Show</div>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => setPageSize(+e.target.value)}
        >
          <option value="7">7</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <div className="ms-2">Items</div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        {list.length && <div className="me-3">1-1 of {list.length} items</div>}
        <div>
          <button className="btn btn-light">
            <i className="bi bi-arrow-clockwise align-middle"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
