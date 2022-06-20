import { FC, useState } from "react";
import table from "../style/table.module.css";
const AmountBestSeller: FC = () => {
  const orderData = [
    {
      id: Math.floor(Math.random() * 100),
      item: "Samsung Galaxy S2o Ultra",
      total: "120",
      count: 1,
    },
    {
      id: Math.floor(Math.random() * 100),
      item: "Random Item A",
      total: "100",
      count: 3,
    },
    {
      id: Math.floor(Math.random() * 100),
      item: "Random Item B",
      total: "120",
      count: 1,
    },
  ];
  const [showDetails, setShowDetails] = useState(true);
  const tableData = () =>
    orderData.map((data) => {
      return (
        <tr key={data.id}>
          <td>{data.item}</td>
          <td>{data.total}</td>
          <td>{data.count}</td>
        </tr>
      );
    });
  return (
    <>
      <div
        style={{
          ["color" as any]: "white",
          ["backgroundColor" as any]: "#32374a",
          ["display" as any]: "flex",
          ["justifyContent" as any]: "space-between",
        }}
      >
        <div
          style={{ ["padding" as any]: "15px", ["fontSize" as any]: "20px" }}
        >
          <span>
            <i className="bi bi-star"></i>
          </span>
          <span style={{ ["marginLeft" as any]: "5px" }}>
            Best Seller by Amount
          </span>
        </div>
        <div
          style={{
            ["padding" as any]: "15px",
            ["cursor" as any]: "pointer",
            ["fontSize" as any]: "20px",
          }}
          onClick={(e) => setShowDetails(!showDetails)}
        >
          <i className="bi bi-dash"></i>
        </div>
      </div>

      {showDetails && (
        <div
          style={{
            ["width" as any]: "100%",
            ["height" as any]: "600px",
            ["backgroundColor" as any]: "#f5f5f5",
            ["border" as any]: "2px solid",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <table className={table.content_table}>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Total</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>{tableData()}</tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default AmountBestSeller;
