import React, { FC } from "react";
import { Field } from "formik";
import FormikError from "./formikError";

interface Props {
  placeholder: string;
  value: string;
  name: string;
  type: string;
  errors?: any;
  touched?: any;
  label: string;
  required?: boolean;
  rows: number;
  setFieldValue: any;
}

const TextareaField: FC<Props> = (props) => {
  const { value, name, errors, touched, label, rows, setFieldValue } = props;
  return (
    <>
      <div className="form-group row mb-3">
        <div className="col-md-3">
          <div className="label-wrapper d-flex justify-content-end">
            <label className="col-form-label fs-5">{label}</label>
            <div
              title=""
              data-toggle="tooltip"
              className="ico-help"
              data-original-title="The customer's email."
            >
              <i className="fas fa-question-circle"></i>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <textarea
            className="form-control"
            onChange={(e) => {
              setFieldValue(name, e.target.value);
            }}
            value={value}
            rows={rows}
          ></textarea>
        </div>
      </div>

      {errors && touched && (
        <FormikError errors={errors} touched={touched} name={name} />
      )}
    </>
  );
};

export default TextareaField;
