import { FC } from "react";
import DateTimeFilter from "./filter/main";
import StatWidgets from "./widgets/main";
import StatChart from "./charts/index";
import SalesData from "./userData/main";
import BestSeller from "./userData/bestSeller/main";
const Dashboard: FC = () => {
  return (
    <>
      <div style={{ padding: "50px" }}>
        <DateTimeFilter />
        <StatWidgets />
        <StatChart />
        <SalesData />
        <BestSeller />
      </div>
    </>
  );
};

export default Dashboard;
