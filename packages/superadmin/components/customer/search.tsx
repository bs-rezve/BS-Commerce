import React, { FC } from "react";
import { searchValue } from "../../utils/typs";
import Accordion from "../global/accordion";
import SearchForm from "./searchForm";

interface Props {}

const initData: searchValue = {
  email: "",
  company: "",
  fName: "",
  ipAddress: "",
  lastName: "",
  role: "",
  month: "",
  day: "",
};

const Search: FC<Props> = ({}) => {
  return (
    <div className="card">
      <Accordion title={"Search"} id={1} icon="bi bi-search" show={true}>
        <div className="card-body">
          <SearchForm saveHandler={() => {}} initData={initData} />
        </div>
      </Accordion>
    </div>
  );
};

export default Search;
