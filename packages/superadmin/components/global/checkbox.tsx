import React, { FC } from "react";
import { Field } from "formik";
import FormikError from "./formikError";
import styles from "../../styles/Input.module.css";

interface Props {
  name: string;
  errors?: any;
  touched?: any;
  label: string;
  required?: boolean;
}

const Checkbox: FC<Props> = (props) => {
  const { name, errors, touched, label } = props;
  return (
    <>
      <div className="form-group row mb-1">
        <div className="col-md-3">
          <div className="label-wrapper d-flex justify-content-end">
            <label className={styles.col_form_label} htmlFor={name}>
              {label}
            </label>
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
        <div className="col-md-9 d-flex align-items-center">
          <label>
            <Field type="checkbox" name={name} id={name} />
          </label>
        </div>
      </div>

      {errors && touched && (
        <FormikError errors={errors} touched={touched} name={name} />
      )}
    </>
  );
};

export default Checkbox;
