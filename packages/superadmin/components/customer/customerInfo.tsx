import React, { FC } from "react";
import InputField from "../global/inputField";
import RadioField from "../global/radioButton";
import Checkbox from "../global/checkbox";
import SelectDropdown from "../global/select";
import TextareaField from "../global/textarea";
import { crateValues, DDL } from "../../utils/typs";

interface Props {
  values: crateValues;
  setFieldValue: (name: string, valueOption: {} | string | number) => void;
  errors: any;
  touched: any;
}

const CustomerInfo: FC<Props> = ({
  values,
  setFieldValue,
  errors,
  touched,
}) => {
  return (
    <>
      <div className="col-lg-12">
        <InputField
          value={values?.email}
          label="Email"
          placeholder="Email"
          required
          type="text"
          name="email"
        />
      </div>
      <div className="col-lg-12">
        <InputField
          value={values?.password}
          label={"Password"}
          placeholder={"Password"}
          required
          type="password"
          name="password"
        />
      </div>
      <div className="col-lg-12">
        <InputField
          value={values?.firstname}
          label="First name"
          placeholder="First name"
          required
          type="text"
          name="firstname"
        />
      </div>
      <div className="col-lg-12">
        <InputField
          value={values?.lastname}
          label="Last name"
          placeholder="Last name"
          required
          type="text"
          name="lastname"
        />
      </div>
      <div className="col-lg-12">
        <RadioField label="Gender" type="radio" name="gender" />
      </div>
      <div className="col-lg-12">
        <InputField
          value={values?.dob}
          label={"Date of birth"}
          placeholder="Date of birth"
          required
          type="date"
          name="dob"
        />
      </div>
      <div className="col-lg-12">
        <InputField
          value={values?.companyname}
          label="Company name"
          placeholder="Company name"
          required
          type="text"
          name="companyname"
        />
      </div>
      <div className="col-lg-12">
        <Checkbox label="Is tax exempt" name="ite" />
      </div>
      <div className="col-lg-12">
        <SelectDropdown
          name="newsletter"
          options={[
            { value: 1, label: "news1" },
            { value: 2, label: "news2" },
            { value: 3, label: "news3" },
            { value: 4, label: "news4" },
          ]}
          value={values?.newsletter}
          label="Newsletter"
          onChange={(valueOption: DDL) => {
            setFieldValue("newsletter", valueOption);
          }}
          isMulti={true}
          placeholder="Newsletter"
          errors={errors}
          touched={touched}
        />
      </div>
      <div className="col-lg-12">
        <SelectDropdown
          name="customerRoles"
          options={[
            { value: 1, label: "role1" },
            { value: 2, label: "role2" },
            { value: 3, label: "role3" },
            { value: 4, label: "role4" },
          ]}
          value={values?.customerRoles}
          label="Customer roles"
          onChange={(valueOption: DDL) => {
            setFieldValue("customerRoles", valueOption);
          }}
          isMulti={true}
          placeholder="Customer roles"
          errors={errors}
          touched={touched}
        />
      </div>
      <div className="col-lg-12">
        <SelectDropdown
          name="mofVendor"
          options={[
            { value: 1, label: "mofVendor1" },
            { value: 2, label: "mofVendor2" },
            { value: 3, label: "mofVendor3" },
            { value: 4, label: "mofVendor4" },
          ]}
          value={values?.mofVendor}
          label="Manager of vendor"
          onChange={(valueOption: DDL) => {
            setFieldValue("mofVendor", valueOption);
          }}
          placeholder="Manager of vendor"
          errors={errors}
          touched={touched}
        />
      </div>
      <div className="col-lg-12">
        <Checkbox label="Active" name="active" />
      </div>
      <div className="col-lg-12">
        <TextareaField
          value={values?.adminCommit}
          label="Admin comment"
          placeholder="Admin comment"
          type="textarea"
          name="adminCommit"
          rows={3}
          setFieldValue={setFieldValue}
        />
      </div>
    </>
  );
};

export default CustomerInfo;
