import type { NextPage } from "next";
import { useState } from "react";
import AddressCreateForm from "../../../components/customer/addressCreateFrom";
import SubmitForm from "../../../components/global/submitForm";
import { crateValues } from "../../../utils/typs";

const CreateCustomer: NextPage = () => {
  const [objProps, setObjprops] = useState({});
  const initData = {
    fname: "",
    lname: "",
    email: "",
    company: "",
    country: "",
    state: "",
    region: "",
    city: "",
    address1: "",
    address2: "",
    zip: "",
    phone: "",
    fax: "",
  };

  return (
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <SubmitForm
        isDisabled={false}
        title="Add a new address"
        isHiddenSaveWithContinue={true}
        getProps={setObjprops}
        isHiddenSave={false}
        submitBtnText="Save"
        continueBtnText="Save and Continue Edit"
      >
        <AddressCreateForm
          {...objProps}
          initData={initData}
          saveHandler={() => {}}
        />
      </SubmitForm>
    </div>
  );
};

export default CreateCustomer;
