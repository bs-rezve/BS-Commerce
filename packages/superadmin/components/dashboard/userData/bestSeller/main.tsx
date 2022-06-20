import type { FC } from "react";
import QuantityBestSeller from "./quantityBestseller";
import AmountBestSeller from "./amountBestSeller";
const BestSeller: FC = () => {
  return (
    <>
      <div className="row">
        <div
          className="col-5 col-md-12 col-lg-12 col-xl-5"
          style={{ padding: "10px" }}
        >
          <AmountBestSeller />
        </div>
        <div
          className="col-7 col-md-12 col-lg-12 col-xl-7"
          style={{ padding: "10px" }}
        >
          <QuantityBestSeller />
        </div>
      </div>
    </>
  );
};

export default BestSeller;
