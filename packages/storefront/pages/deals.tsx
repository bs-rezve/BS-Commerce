import type { NextPage } from "next";
import WeekDeals from "../components/deals/index";
const dealsOfTheWeek: NextPage = () => {
  return (
    <>
      <div className="">
        <WeekDeals />
      </div>
    </>
  );
};

export default dealsOfTheWeek;
