import { FC } from "react";

interface Props {
  list: any;
}

const Pagination: FC<Props> = ({ list }) => {
  return (
    <div className="d-flex justify-content-between flex-wrap mt-2">
      <nav>
        <ul className="pagination">
          <li className="page-item disabled">
            <span className="page-link">
              <i className="bi bi-caret-left-fill align-middle"></i>
            </span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item active" aria-current="page">
            <span className="page-link">2</span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <span className="page-link">
              <i className="bi bi-caret-right-fill align-middle"></i>
            </span>
          </li>
        </ul>
      </nav>
      <div className="d-flex align-items-center justify-content-center">
        <div className="me-2">Show</div>
        <select className="form-select" aria-label="Default select example">
          <option value="1">7</option>
          <option value="2">15</option>
          <option value="3">20</option>
          <option value="3">50</option>
          <option value="3">100</option>
        </select>
        <div className="ms-2">Items</div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="me-3">1-1 of 1 items</div>
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
