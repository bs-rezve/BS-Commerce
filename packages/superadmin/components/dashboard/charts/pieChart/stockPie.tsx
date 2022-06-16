import type { NextComponentType } from "next";
import { useState, useEffect } from "react";
import {
  Chart as chartjs,
  Tooltip,
  Title,
  ArcElement,
  Legend,
  PieController,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
chartjs.register(Tooltip, Title, ArcElement, Legend, PieController);
const StockPieChart: NextComponentType = () => {
  const [data, setData] = useState({
    labels: [
      "Electronics",
      "Groceries",
      "Men's Fashion",
      "Toiletries",
      "Womens-Jewleries",
    ],
    datasets: [
      {
        data: [20, 25, 40, 35, 23],
        backgroundColor: [
          " #00FF00",
          "#FF0000",
          "#0000FF",
          "#FFFF00",
          "#FF8000",
        ],
      },
    ],
    text: "20%",
  });
  const options = {
    plugins: {
      legend: {
        position: "right",
        align: "start",
        reverse: true,
      },
    },
  };
  const plugins = [
    {
      beforeDraw: function (chart: any) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 200).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        var text = "20%",
          textX = Math.round((width - ctx.measureText(text).width) / 3.5),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];
  useEffect(() => {});
  return (
    <>
      <div
        style={{
          ["width" as any]: "100%",
          ["height" as any]: "500px",
          ["backgroundColor" as any]: "#f5f5f5",
          ["border" as any]: "2px solid",
        }}
      >
        <div
          style={{
            ["borderBottom" as any]: "3px solid blue",
            ["color" as any]: "white",
            ["backgroundColor" as any]: "black",
            ["display" as any]: "flex",
            ["justifyContent" as any]: "space-between",
          }}
        >
          <h3
            style={{ ["fontSize" as any]: "20px", ["padding" as any]: "10px" }}
          >
            <span
              style={{
                ["paddingRight" as any]: "5px",
                ["color" as any]: "white",
                ["fontSize" as any]: "25px",
              }}
            >
              <i className="bi bi-basket3-fill"></i>
            </span>
            Current Stocks Data
          </h3>
          <div style={{ ["padding" as any]: "15px" }}>
            <span style={{ ["padding" as any]: "5px" }}>
              <button style={{ ["backgroundColor" as any]: "	#87CEFA" }}>
                Day
              </button>
            </span>
            <span style={{ ["padding" as any]: "15px" }}>
              <button style={{ ["backgroundColor" as any]: "	#87CEFA" }}>
                Month
              </button>
            </span>
            <span>
              <button style={{ ["backgroundColor" as any]: "	#87CEFA" }}>
                Year
              </button>
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "60%" }}>
            <Doughnut data={data} plugins={plugins} options={options} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StockPieChart;
