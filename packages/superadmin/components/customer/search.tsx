import React, { FC } from "react";
import Accordion from "../global/accordion";
import SearchForm from "./searchForm";

interface Props {}

const Search: FC<Props> = ({}) => {
  return (
    <div className="card">
      <Accordion title={"Search"} id={1} icon="bi bi-search">
        <div className="card-body">
          <SearchForm />
        </div>
      </Accordion>
    </div>
  );
};

export default Search;
