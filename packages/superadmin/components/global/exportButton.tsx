import React, { FC } from "react";

const ExportButton: FC = () => {
  return (
    <div className="btn-group ms-2">
      <button
        type="button"
        className="btn btn-success dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-download me-2 align-middle"></i> Export
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Export to XML (all found)
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Export to XML (Selected)
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Export to Excel (Selected)
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Export to Excel (all found)
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ExportButton;
