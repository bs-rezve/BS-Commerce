import type { NextPage } from "next";
import { useState } from "react";
import SubmitForm from "../../../components/global/submitForm";
import ToggleButton from "../../../components/global/toggleButton";
import VendorCreateForm from "../../../components/vendor/createForm";
import { vendorTypes } from "../../../utils/typs";

export const initData: vendorTypes = {
  vendorInfo: {
    name: "",
    description: "",
    email: "",
    active: false,
    picture: "",
    adminComment: "",
  },
  display: {
    pageSize: false,
    pageOption: "",
    pricerangeFilter: false,
    pricerangemanual: false,
    pricefrom: "",
    priceto: "",
    displayorder: "",
  },
  seo: {
    pageName: "",
    metaTitle: "",
    metaKey: "",
    metaDes: "",
  },
};

const CreateCustomer: NextPage = () => {
  const [objProps, setObjprops] = useState({});

  const saveHandler = (values: vendorTypes) => {};

  return (
    <div
      className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
      data-testid="heading"
    >
      <SubmitForm
        isDisabled={false}
        title="vendor"
        isHiddenSaveWithContinue={false}
        getProps={setObjprops}
        isHiddenSave={false}
        submitBtnText="Save"
        continueBtnText="Save and Continue Edit"
        isDelete={false}
        link={"/users/vendor"}
      >
        <VendorCreateForm
          {...objProps}
          initData={initData}
          saveHandler={saveHandler}
        />
      </SubmitForm>
    </div>
  );
};

export default CreateCustomer;
