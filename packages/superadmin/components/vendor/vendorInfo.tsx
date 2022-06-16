import React, { FC } from "react";
import InputField from "../global/inputField";
import Checkbox from "../global/checkbox";
import TextareaField from "../global/textarea";
import { vendorInfo } from "../../utils/typs";
import TinyEditor from "../global/tinyEditor";
import FileField from "../global/fileField";

interface Props {
  values: vendorInfo;
  setFieldValue: (name: string, valueOption: {} | string | number) => void;
  errors: any;
  touched: any;
  isOpen: boolean;
}

const VendorInfo: FC<Props> = ({
  values,
  setFieldValue,
  errors,
  touched,
  isOpen,
}) => {
  return (
    <>
      <div className="col-lg-12">
        <InputField
          value={values?.name}
          label="Name"
          placeholder="Name"
          required
          type="text"
          name="name"
        />
      </div>
      <div className="col-lg-12">
        <TinyEditor
          label={"Description"}
          name={"description"}
          value={values?.description}
        />
      </div>
      <div className="col-lg-12">
        <InputField
          value={values?.email}
          label="Email"
          placeholder="Email"
          required
          type="email"
          name="email"
        />
      </div>
      <div className="col-lg-12">
        <Checkbox label="Active" name="active" />
      </div>
      {isOpen && (
        <>
          <div className="col-lg-12">
            <FileField
              label="Picture"
              name="picture"
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="col-lg-12">
            <TextareaField
              value={values?.adminComment}
              label="Admin comment"
              placeholder="Admin comment"
              type="textarea"
              name="adminComment"
              rows={3}
              setFieldValue={setFieldValue}
            />
          </div>{" "}
        </>
      )}
    </>
  );
};

export default VendorInfo;
