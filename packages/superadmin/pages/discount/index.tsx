import type { NextPage } from "next";
import DiscountsList from "../../components/discount/discountList";
import SearchDiscount from "../../components/discount/searchDiscount";

const Discounts: NextPage = () => {
  return (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h2>Discounts</h2>
        
        <div className="mt-2 pt-1">
          <SearchDiscount />
          <DiscountsList />
        </div>
      </main>
    </>
  );
};

export default Discounts;
