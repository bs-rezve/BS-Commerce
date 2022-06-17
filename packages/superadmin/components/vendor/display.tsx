import React, { FC } from "react";
import InputField from "../global/inputField";
import Checkbox from "../global/checkbox";
import TextareaField from "../global/textarea";
import { vendorTypes } from "../../utils/typs";

interface Props {
  values: vendorTypes;
  setFieldValue: (name: string, valueOption: {} | string | number) => void;
  errors: any;
  touched: any;
}

const Display: FC<Props> = ({ values, setFieldValue, errors, touched }) => {
  console.log(values, "values");
  return (
    <>
      <div className="col-lg-12">
        <Checkbox label="Allow customers to select page size" name="pageSize" />
      </div>
      <div className="col-lg-12">
        <InputField
          value={values?.pageOption}
          label={"Page size options"}
          placeholder={"Page size options"}
          type={values?.pageSize ? "text" : "number"}
          name="pageOption"
        />
      </div>
      <div className="col-lg-12">
        <Checkbox label="Price range filtering" name="pricerangeFilter" />
      </div>
      {values?.pricerangeFilter ? (
        <>
          <div className="col-lg-12">
            <Checkbox
              label="Enter price range manually"
              name="pricerangemanual"
            />
          </div>
          {values?.pricerangemanual ? (
            <>
              <div className="col-lg-12">
                <InputField
                  value={values?.pricefrom}
                  label="Price 'from'"
                  placeholder="Price 'from'"
                  type="number"
                  name="pricefrom"
                />
              </div>
              <div className="col-lg-12">
                <InputField
                  value={values?.priceto}
                  label="Price 'to'"
                  placeholder="Price 'to'"
                  type="number"
                  name="priceto"
                />
              </div>
            </>
          ) : null}
        </>
      ) : null}
      <div className="col-lg-12">
        <InputField
          value={values?.displayorder}
          label="Display order"
          placeholder="Display order"
          type="number"
          name="displayorder"
        />
      </div>
    </>
  );
};

export default Display;
