import React, { FC, ReactChild, ReactChildren } from "react";

interface Props {
  title: string;
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

//Need to pass the Accordion object props to the Accordion component
const Accordion: FC<Props> = ({ title, children }) => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button fs-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {title}
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
