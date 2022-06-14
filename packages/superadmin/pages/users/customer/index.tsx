import type { NextPage } from "next";
import { useState } from "react";
import Search from "../../../components/customer/search";
import AddButton from "../../../components/global/AddButton";
import TableInfo from "../../../components/global/table";
import { useRouter } from "next/router";
import ExportButton from "../../../components/global/exportButton";

const thead = [
  "checkbox",
  "Email",
  "Name",
  "Customer roles",
  "Company name",
  "Active",
  "Edit",
];

const Customer: NextPage = () => {
  const [customers, setCustomers] = useState([
    {
      id: "1",
      email: "email",
      name: "Name",
      roles: "Customer roles",
      cName: "Company name",
      active: true,
    },
  ]);
  const router = useRouter();

  return (
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="px-2 py-3 d-flex justify-content-between">
        <div className="fs-3">Customes</div>
        <div className="">
          <AddButton
            title="Add New"
            link={"/users/customer/create"}
            icon="bi bi-file-plus"
          />
          <ExportButton />
        </div>
      </div>
      <Search />
      <div className="card mt-2 p-3">
        <div className="m-2 fs-5" data-testid="customers">
          Learn more about <span style={{ color: "#007bff" }}>customers</span>
        </div>
        <TableInfo tHead={thead} list={customers}>
          {customers?.map((data, index) => (
            <tr key={index}>
              <td className="text-center">
                <input type="checkbox" name="veh" value="bike" />
              </td>
              <td>{data.email}</td>
              <td>{data.name}</td>
              <td>{data.roles}</td>
              <td>{data.cName}</td>
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
