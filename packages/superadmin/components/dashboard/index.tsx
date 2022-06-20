import { FC } from "react";
import DateTimeFilter from "./filter/main";
import StatWidgets from "./widgets/main";
import StatChart from "./charts/index";
import UserData from "./userData/main";
const Dashboard: FC = () => {
  return (
    <>
      <div style={{ padding: "50px" }}>
        <DateTimeFilter />
        <StatWidgets />
        <StatChart />
        <UserData />
      </div>
    </>
  );
};

export default Dashboard;
