import React, { FC } from "react";
import { orders } from "../../utils/typs";
import TableInfo from "../global/table";

interface Props {
  activityList: orders[];
  setFieldValue?: (name: string, valueOption: {} | string | number) => void;
}

const Subscription: FC<Props> = ({ activityList, setFieldValue }) => {
  const thead = ["Store", "Product", "Subscribed on"];
  return (
    <div className="">
      <TableInfo tHead={thead} list={activityList}>
        {activityList?.map((data, index) => (
          <tr key={index}>
            <th scope="row">{data?.id}</th>
            <td>{data.total}</td>
            <td>{data.store}</td>
          </tr>
        ))}
      </TableInfo>
    </div>
  );
};

export default Subscription;
