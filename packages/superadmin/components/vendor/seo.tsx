import React, { FC } from "react";
import { vendorTypes } from "../../utils/typs";
import InputField from "../global/inputField";
import TextareaField from "../global/textarea";

interface Props {
  values: vendorTypes;
  setFieldValue: (name: string, valueOption: {} | string | number) => void;
  errors: any;
  touched: any;
}

const Seo: FC<Props> = ({ values, setFieldValue, errors, touched }) => {
  return (
    <>
      <div className="col-lg-12">
        <InputField
          value={values?.pageName}
          label="Search engine friendly page name"
          placeholder="Search engine friendly page name"
          type="text"
          name="pageName"
        />
      </div>
      <div className="col-lg-12">
        <InputField
          value={values?.metaTitle}
          label={"Meta title"}
          placeholder={"Meta title"}
          type="text"
          name="metaTitle"
        />
      </div>
      <div className="col-lg-12">
        <InputField
          value={values?.metaKey}
          label="Meta keywords"
          placeholder="Meta keywords"
          required
          type="text"
          name="metaKey"
        />
      </div>
      <div className="col-lg-12">
        <TextareaField
          value={values?.metaDes}
          label="Meta description"
          placeholder="Meta description"
          type="textarea"
          name="metaDes"
          rows={3}
          setFieldValue={setFieldValue}
        />
      </div>
    </>
  );
};

export default Seo;
