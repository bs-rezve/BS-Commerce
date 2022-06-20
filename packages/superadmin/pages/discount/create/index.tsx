import { NextPage } from "next";
import CreateDiscount from "../../../components/discount/createDiscount";
import RequirementsForm from "../../../components/discount/forms/requirementsForm";

const CreateDiscountPage: NextPage = () => {
  return (
    <>
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3">
      <CreateDiscount /> 
      <RequirementsForm /> 
      </div>
    </>
  );
};

export default CreateDiscountPage;