import type { NextPage } from "next";
import { useState } from "react";
import CreateForm from "../../../components/customer/createForm";
import Accordion from "../../../components/global/accordion";
import SubmitForm from "../../../components/global/submitForm";

const CreateCustomer: NextPage = () => {
  const [objProps, setObjprops] = useState({});
  const initData = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    gender: "",
    dob: "",
    companyname: "",
    ite: false,
    newsletter: "",
    customerRoles: "",
    mofVendor: "",
    active: "",
    adminCommit: "",
  };

  return (
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <SubmitForm
        isDisabled={false}
        title="Add a new customer"
        isHiddenSaveWithContinue={false}
        getProps={setObjprops}
        isHiddenSave={false}
        submitBtnText="Save"
        continueBtnText="Save and Continue Edit"
      >
        <Accordion title="Customer info">
          <CreateForm
            {...objProps}
            initData={initData}
            saveHandler={() => {}}
          />
        </Accordion>
      </SubmitForm>
    </div>
  );
};

export default CreateCustomer;
