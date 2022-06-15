import type { NextPage } from "next";
import { useState } from "react";
import AddButton from "../../../components/global/AddButton";
import TableInfo from "../../../components/global/table";
import { useRouter } from "next/router";
import ExportButton from "../../../components/global/exportButton";
import Search from "../../../components/global/search";
import { searchvendor } from "../../../utils/typs";
import SearchFormVendor from "../../../components/vendor/searchForm";

const thead = ["Name", "Email", "Active", "Edit"];
const initData: searchvendor = {
  name: "",
  email: "",
};

const Customer: NextPage = () => {
  const [customers, setCustomers] = useState([
    {
      id: "1",
      email: "email",
      name: "Name",
      active: true,
    },
  ]);
  const router = useRouter();

  return (
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="px-2 py-3 d-flex justify-content-between">
        <div className="fs-3">Vendors</div>
        <div className="">
          <AddButton
            title="Add New"
            link={"/users/vendor/create"}
            icon="bi bi-file-plus"
          />
        </div>
      </div>
      <Search>
        <SearchFormVendor saveHandler={() => {}} initData={initData} />
      </Search>
      <div className="card mt-2 p-3">
        <div className="m-2 fs-5" data-testid="customers">
          Learn more about{" "}
          <span style={{ color: "#007bff" }}>vendor management</span>
        </div>
        <TableInfo tHead={thead} list={customers}>
          {customers?.map((data, index) => (
            <tr key={index}>
              <td>{data.email}</td>
              <td>{data.name}</td>
              <td className="text-center">
                {data?.active ? (
                  <i
                    className="bi bi-check-lg"
                    style={{ fontSize: "30px", color: "#007fcc" }}
                  ></i>
                ) : (
                  <i
                    className="bi bi-x-lg"
                    style={{ fontSize: "30px", color: "red" }}
                  ></i>
                )}
              </td>
              <td className="text-center">
                <button
                  className="btn btn-light"
                  onClick={() => router.push(`/users/customer/edit/${data.id}`)}
                >
                  <i className="bi bi-pen-fill pe-1 align-middle"></i>Edit
                </button>
              </td>
            </tr>
          ))}
        </TableInfo>
      </div>
    </div>
  );
};

export default Customer;
