import type { NextPage } from "next";
import { useState } from "react";
import CreateForm from "../../../components/customer/createForm";
import Accordion from "../../../components/global/accordion";
import SubmitForm from "../../../components/global/submitForm";
import { crateValues } from "../../../utils/typs";

const CreateCustomer: NextPage = () => {
  const [objProps, setObjprops] = useState({});
  const initData: crateValues = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    gender: "",
    dob: "",
    companyname: "",
    ite: false,
    newsletter: [],
    customerRoles: [],
    mofVendor: "",
    active: false,
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
        <Accordion
          title="Customer info"
          id={1}
          icon="bi bi-info-lg"
          show={true}
        >
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
