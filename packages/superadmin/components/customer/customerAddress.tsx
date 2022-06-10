import React, { FC } from "react";
import { orders } from "../../utils/typs";
import AddButton from "../global/AddButton";
import TableInfo from "../global/table";

interface Props {
  addressList: orders[];
  setFieldValue: (name: string, valueOption: {} | string | number) => void;
}

const CustomerAddress: FC<Props> = ({ addressList, setFieldValue }) => {
  const thead = [
    "First name",
    "Last name",
    "Email",
    "Phone number",
    "Fax number",
    "Address",
    "Edit",
    "Delete",
  ];
  return (
    <div className="">
      <TableInfo tHead={thead} list={addressList}>
        {addressList?.map((data, index) => (
          <tr key={index}>
            <th scope="row">{data?.id}</th>
            <td>{data.total}</td>
            <td>{data.pstatus}</td>
            <td>{data.store}</td>
            <td>{data.status}</td>
            <td>{data.shipStatus}</td>
            <td>
              <button className="btn btn-light">
                <i className="bi bi-pen-fill pe-1 align-middle"></i>Edit
              </button>
            </td>
            <td>
              <button className="btn btn-light">
                <i className="bi bi-trash pe-1 align-middle"></i>Delete
              </button>
            </td>
          </tr>
        ))}
      </TableInfo>
      <div>
        <AddButton
          title="Add new address"
          link={"users/customer/addressCreate"}
        />
      </div>
    </div>
  );
};

export default CustomerAddress;
