import type { NextPage } from "next";
import { useState } from "react";
import EditForm from "../../../../components/customer/editForm";
import SubmitForm from "../../../../components/global/submitForm";
import { editValues } from "../../../../utils/typs";

const EditCustomer: NextPage = () => {
  const [objProps, setObjprops] = useState({});

  const initData: editValues = {
    customerInfo: {
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
    },
    orders: [
      {
        id: "1",
        total: 100,
        status: "complete",
        pstatus: "complete",
        shipStatus: "complete",
        store: "ss",
        createdOn: "complete",
      },
      {
        id: "1",
        total: 100,
        status: "complete",
        pstatus: "complete",
        shipStatus: "complete",
        store: "ff",
        createdOn: "complete",
      },
      {
        id: "1",
        total: 100,
        status: "complete",
        pstatus: "complete",
        shipStatus: "complete",
        store: "complete",
        createdOn: "complete",
      },
    ],
    address: [
      {
        id: "1",
        total: 100,
        status: "Dhaka",
        pstatus: "Dhaka",
        shipStatus: "Dhaka",
        store: "Dhaka",
        createdOn: "Dhaka",
      },
    ],
    shoppingandWishlist: [],
    activityLog: [],
    pOrder: "",
    binstocksub: [],
    rewordPoints: [],
  };

  return (
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <SubmitForm
        isDisabled={false}
        title="customer"
        isHiddenSaveWithContinue={false}
        getProps={setObjprops}
        isHiddenSave={false}
        submitBtnText="Save"
        continueBtnText="Save and Continue Edit"
        isDelete={true}
        link={"/users/customer"}
        isEdit={true}
      >
        <EditForm {...objProps} initData={initData} saveHandler={() => {}} />
      </SubmitForm>
    </div>
  );
};

export default EditCustomer;
