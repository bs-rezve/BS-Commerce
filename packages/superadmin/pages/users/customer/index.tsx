import type { NextPage } from "next";
import Search from "../../../components/customer/search";
import AddButton from "../../../components/global/AddButton";

const Customer: NextPage = () => {
  return (
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="px-2 py-3 d-flex justify-content-between">
        <div className="fs-3">Customes</div>
        <div className="">
          <AddButton title="Add New" link={"/users/customer/create"} />
        </div>
      </div>
      <Search title="" />
    </div>
  );
};

export default Customer;
