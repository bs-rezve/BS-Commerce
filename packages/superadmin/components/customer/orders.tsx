import React, { FC } from "react";
import { orders } from "../../utils/typs";
import TableInfo from "../global/table";

interface Props {
  orderList: orders[];
  setFieldValue: (name: string, valueOption: {} | string | number) => void;
}

const OrdersList: FC<Props> = ({ orderList, setFieldValue }) => {
  const thead = [
    "Order #",
    "Order total",
    "Order status",
    "Payment status",
    "Shipping status",
    "Store",
    "Created on",
    "View",
  ];
  return (
    <div className="">
      <TableInfo tHead={thead} list={orderList}>
        {orderList?.map((data, index) => (
          <tr key={index}>
            <th scope="row">{data?.id}</th>
            <td>{data.total}</td>
            <td>
              <button className="btn btn-success">{data.pstatus}</button>
            </td>
            <td>{data.store}</td>
            <td>{data.status}</td>
            <td>{data.shipStatus}</td>
            <td>{data.createdOn}</td>
            <td>
              <button className="btn btn-light">
                <i className="bi bi-eye pe-1 align-middle"></i>View
              </button>
            </td>
          </tr>
        ))}
      </TableInfo>
    </div>
  );
};

export default OrdersList;
