import React, { FC } from "react";
import { orders } from "../../utils/typs";
import TableInfo from "../global/table";
import RewardsCreateForm from "./rewardForm";

interface Props {
  rewardList: orders[];
  setFieldValue?: (name: string, valueOption: {} | string | number) => void;
}

const RewardsPoints: FC<Props> = ({ rewardList, setFieldValue }) => {
  const thead = [
    "Store",
    "Points",
    "Points balance",
    "Message",
    "Date",
    "End date",
  ];
  return (
    <div className="">
      <TableInfo tHead={thead} list={rewardList}>
        {rewardList?.map((data, index) => (
          <tr key={index}>
            <th scope="row">{data?.id}</th>
            <td>{data.total}</td>
            <td>{data.store}</td>
            <th scope="row">{data?.id}</th>
            <td>{data.total}</td>
            <td>{data.store}</td>
          </tr>
        ))}
      </TableInfo>
      <div className="card p-3">
        <RewardsCreateForm setFieldValues={setFieldValue} />
      </div>
    </div>
  );
};

export default RewardsPoints;
