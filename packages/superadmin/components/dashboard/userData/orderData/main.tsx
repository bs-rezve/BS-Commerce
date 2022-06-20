import type { FC } from "react";
import OrderTotalDatafrom from "./orderTotals";
import IncompleteTotalData from "./incomleteOrders";
const OrderData: FC = () => {
  return (
    <>
      <div className="row">
        <div
          className="col-7 col-md-12 col-lg-12 col-xl-7"
          style={{ padding: "10px" }}
        >
          <OrderTotalDatafrom />
        </div>
        <div
          className="col-5 col-md-12 col-lg-12 col-xl-5"
          style={{ padding: "10px" }}
        >
          <IncompleteTotalData />
        </div>
      </div>
    </>
  );
};

export default OrderData;
