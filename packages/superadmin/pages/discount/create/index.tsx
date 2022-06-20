import { NextPage } from "next";
import CreateDiscount from "../../../components/discount/createDiscount";

const CreateDiscountPage: NextPage = () => {
  return (
    <>
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3">
      <CreateDiscount />  
      </div>
    </>
  );
};

export default CreateDiscountPage;