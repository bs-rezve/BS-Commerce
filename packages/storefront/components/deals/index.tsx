import type { NextComponentType } from "next";
import DealsFilter from "./filter/main";
const WeekDeals: NextComponentType = () => {
  return (
    <>
      <div className="grid grid-cols-5">
        <div>
          <DealsFilter />
        </div>
        <div className="grid colspan-4"></div>
      </div>
    </>
  );
};

export default WeekDeals;
