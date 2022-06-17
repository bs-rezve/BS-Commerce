import React, { FC } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../global/inputField";
import SelectDropdown from "../global/select";
import { addressData } from "../../utils/typs";

// Validation schema
const validationSchema = Yup.object().shape({});

interface Props {
  values: any;
  setFieldValue: any;
  errors?: any;
  touched?: any;
}

const AddressInput: FC<Props> = ({
  values,
  setFieldValue,
  touched,
  errors,
}) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <InputField
            value={values?.fname}
            label="First name"
            placeholder="First name"
            required
            type="text"
            name="fname"
          />
        </div>
        <div className="col-lg-12">
          <InputField
            value={values?.lname}
            label="Last name"
            placeholder="Last name"
            required
            type="text"
            name="lname"
          />
        </div>
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
            value={values?.company}
            label="Company"
            placeholder="Company"
            required
            type="text"
            name="company"
          />
        </div>
        <div className="col-lg-12">
          <SelectDropdown
            name="country"
            options={[
              { value: 1, label: "news1" },
              { value: 2, label: "news2" },
              { value: 3, label: "news3" },
              { value: 4, label: "news4" },
            ]}
            value={values?.country}
            label="Country"
            onChange={(valueOption: any) => {
              setFieldValue("country", valueOption);
            }}
            isMulti={false}
            placeholder="Country"
            errors={errors}
            touched={touched}
          />
        </div>
        <div className="col-lg-12">
          <SelectDropdown
            name="state"
            options={[
              { value: 1, label: "news1" },
              { value: 2, label: "news2" },
              { value: 3, label: "news3" },
              { value: 4, label: "news4" },
            ]}
            value={values?.state}
            label="state"
            onChange={(valueOption: any) => {
              setFieldValue("state", valueOption);
            }}
            isMulti={false}
            placeholder="state"
            errors={errors}
            touched={touched}
          />
        </div>
        <div className="col-lg-12">
          <InputField
            value={values?.region}
            label="County / region"
            placeholder="County / region"
            required
            type="text"
            name="region"
          />
        </div>
        <div className="col-lg-12">
          <InputField
            value={values?.city}
            label="City"
            placeholder="City"
            required
            type="text"
            name="city"
          />
        </div>
        <div className="col-lg-12">
          <InputField
            value={values?.address1}
            label="Address 1"
            placeholder="Address 1"
            required
            type="text"
            name="address1"
          />
        </div>
        <div className="col-lg-12">
          <InputField
            value={values?.address2}
            label="Address 2"
            placeholder="Address 2"
            required
            type="text"
            name="address2"
          />
        </div>
        <div className="col-lg-12">
          <InputField
            value={values?.zip}
            label="Zip / postal code"
            placeholder="Zip / postal code"
            required
            type="text"
            name="zip"
          />
        </div>
        <div className="col-lg-12">
          <InputField
            value={values?.phone}
            label="Phone number"
            placeholder="Phone number"
            required
            type="text"
            name="phone"
          />
        </div>
        <div className="col-lg-12">
          <InputField
            value={values?.fax}
            label="Fax number"
            placeholder="Fax number"
            required
            type="text"
            name="fax"
          />
        </div>
      </div>
    </>
  );
};

export default AddressInput;
