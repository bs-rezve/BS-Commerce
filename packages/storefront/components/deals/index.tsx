import type { NextComponentType } from "next";
import DealsFilter from "./filter/main";
import BreadcrumbLabel from "../global/breadcrumbs/index";
import DealProductSegment from "./dealProducts/main";
import ProductSort from "./sort/index";
const WeekDeals: NextComponentType = () => {
  return (
    <div className="mt-20">
      <div>
        <BreadcrumbLabel route={"/deals"} />
      </div>
      <div className="px-10 lg:px-16 xl:px-40 grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-5">
        <div>
          <DealsFilter />
        </div>
        <div className="grid col-span-4">
          <ProductSort />
          <DealProductSegment />
        </div>
      </div>
    </div>
  );
};

export default WeekDeals;
