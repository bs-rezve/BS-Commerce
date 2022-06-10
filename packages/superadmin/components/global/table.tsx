import React, { FC, ReactChild, ReactChildren } from "react";
import Pagination from "./pagination";

interface Props {
  tHead: string[];
  list: any;
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const TableInfo: FC<Props> = ({ tHead, list, children }) => {
  return (
    <div className="p-2 fs-6">
      <table className="table table-borderless">
        <thead style={{ backgroundColor: "#f4f4f4" }}>
          <tr>
            {tHead?.map((data, index) => (
              <th key={index} scope="col">
                {data}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.length < 1 ? (
            <tr className="text-center">
              <td colSpan={tHead.length}>No data available in table</td>
            </tr>
          ) : (
            children
          )}
        </tbody>
      </table>
      <Pagination list={list} />
    </div>
  );
};

export default TableInfo;

{
  /* <TableInfo tHead={[]}>
{data?.map((data, index) => (
  <tr key={index}>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
))}
</TableInfo> */
}
