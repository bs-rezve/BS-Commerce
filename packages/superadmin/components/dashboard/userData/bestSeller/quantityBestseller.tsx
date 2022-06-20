import { FC, useState } from "react";
import table from "../style/table.module.css";
const QuantityBestSeller: FC = () => {
  const orderData = [
    {
      id: Math.floor(Math.random() * 100),
      status: " active",
      valueToday: "0.00",
      valueThisWeek: "2.50",
      valueThisMonth: "29.99",
      valueThisYear: "125.33",
      valueAllTime: "2,468.80",
    },
    {
      id: Math.floor(Math.random() * 100),
      status: " active",
      valueToday: "0.00",
      valueThisWeek: "2.50",
      valueThisMonth: "29.99",
      valueThisYear: "125.33",
      valueAllTime: "2,468.80",
    },
    {
      id: Math.floor(Math.random() * 100),
      status: " active",
      valueToday: "0.00",
      valueThisWeek: "2.50",
      valueThisMonth: "29.99",
      valueThisYear: "125.33",
      valueAllTime: "2,468.80",
    },
    {
      id: Math.floor(Math.random() * 100),
      status: " active",
      valueToday: "0.00",
      valueThisWeek: "2.50",
      valueThisMonth: "29.99",
      valueThisYear: "125.33",
      valueAllTime: "2,468.80",
    },
    {
      id: Math.floor(Math.random() * 100),
      status: " active",
      valueToday: "0.00",
      valueThisWeek: "2.50",
      valueThisMonth: "29.99",
      valueThisYear: "125.33",
      valueAllTime: "2,468.80",
    },
  ];
  const [showDetails, setShowDetails] = useState(true);
  const tableData = () =>
    orderData.map((data) => {
      return (
        <tr key={data.id}>
          <td>{data.status}</td>
          <td>{data.valueToday}</td>
          <td>{data.valueThisWeek}</td>
          <td>{data.valueThisMonth}</td>
          <td>{data.valueThisYear}</td>
          <td>{data.valueAllTime}</td>
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
            <i className="bi bi-star-fill"></i>
          </span>
          <span style={{ ["marginLeft" as any]: "5px" }}>
            Best Seller by Quantity
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
                  <th>Order Status</th>
                  <th>Today</th>
                  <th>This Week</th>
                  <th>This Month</th>
                  <th>This Year</th>
                  <th>All Time</th>
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

export default QuantityBestSeller;
