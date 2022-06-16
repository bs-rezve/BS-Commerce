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
  setFieldValue: (name: string, valueOption: any) => void;
}

const FileField: FC<Props> = (props) => {
  const { name, errors, touched, label, setFieldValue } = props;
  return (
    <>
      <div className="form-group row mb-2">
        <div className="col-md-3">
          <div className={styles.label_wrapper}>
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
        <div className="col-md-9">
          <input
            id="file"
            name={name}
            type="file"
            onChange={(event) => {
              setFieldValue(name, event?.currentTarget?.files?.[0]);
            }}
          />
        </div>
      </div>

      {errors && touched && (
        <FormikError errors={errors} touched={touched} name={name} />
      )}
    </>
  );
};

export default FileField;

// usage
/*
<div className="col-lg-3">
                  <label>Delivery Address</label>
                  <InputField
                    value={values?.deliveryAddress}
                    name="deliveryAddress"
                    placeholder="Delivery Address"
                    type="text"
                  />
                </div>
                */
