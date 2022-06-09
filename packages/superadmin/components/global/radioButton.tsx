import React, { FC } from "react";
import { Field } from "formik";
import FormikError from "./formikError";

interface Props {
  value?: boolean;
  name: string;
  type: string;
  errors?: any;
  touched?: any;
  label: string;
  required?: boolean;
}

const RadioField: FC<Props> = (props) => {
  const { value, name, type, errors, touched, label } = props;
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
          <label className="fs-8 mb-1 d-block ">
            <Field type={type} className="me-2" name={name} value="Male" />
            Male
          </label>
          <label className="fs-8 d-block">
            <Field type={type} className="me-2" name={name} value="Female" />
            Female
          </label>
        </div>
      </div>

      {errors && touched && (
        <FormikError errors={errors} touched={touched} name={name} />
      )}
    </>
  );
};

export default RadioField;
