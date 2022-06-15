import React, { FC, ReactChild, ReactChildren } from "react";
import Pagination from "./pagination";
import styles from "../../styles/Table.module.css";

interface Props {
  tHead: string[];
  list: any;
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const TableInfo: FC<Props> = ({ tHead, list, children }) => {
  return (
    <div className="p-2 fs-6">
      <table className={`table table-borderless ${styles.table}`}>
        <thead style={{ backgroundColor: "#f4f4f4" }}>
          <tr>
            {tHead?.map((data, index) =>
              index === 0 && data === "checkbox" ? (
                <th key={index} className={`text-center ${styles.th}`}>
                  <input type="checkbox" name="veh" value="bike" />
                </th>
              ) : (
                <th
                  key={index}
                  scope="col"
                  className={`text-center ${styles.th}`}
                >
                  {data}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {list.length < 1 ? (
            <tr className="text-center">
              <td colSpan={tHead.length}>No data available in table</td>
            </tr>
          ) : (
            <>{children}</>
          )}
        </tbody>
      </table>
      {list.length > 1 ? <Pagination list={list} /> : null}
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
