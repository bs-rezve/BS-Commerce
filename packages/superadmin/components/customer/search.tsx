import React, { FC } from "react";
import Accordion from "../global/accordion";

interface Props {
  title: string;
  children?: any;
}

const Search: FC<Props> = ({ title, children }) => {
  return (
    <div className="card">
      <Accordion title="Search">
        <div className="card-body">This is some text within a card body.</div>
      </Accordion>
    </div>
  );
};

export default Search;
