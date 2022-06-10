/* eslint-disable no-lone-blocks */
import React, { FC } from "react";
import Select from "react-select";
import FormikError from "./formikError";
import styles from "../../styles/Input.module.css";

interface Props {
  name: string;
  options: any;
  value: string;
  label: string;
  placeholder?: string;
  errors?: any;
  touched: any;
  onChange?: any;
  isMulti?: boolean;
}

const SelectDropdown: FC<Props> = (props) => {
  const {
    name,
    options,
    value,
    label,
    placeholder,
    errors,
    touched,
    onChange,
    isMulti,
  } = props;
  return (
    <>
      <div className="row mb-3">
        <div className="col-md-3">
          <div className={styles.label_wrapper}>
            <label className="col-form-label fs-5">
              {(label || placeholder) && (
                <label> {label || placeholder} </label>
              )}
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
          <Select
            {...props}
            onChange={onChange}
            options={options || []}
            value={value}
            isSearchable={true}
            name={name}
            isMulti={isMulti}
            placeholder={placeholder}
            isClearable={true}
          />
        </div>
      </div>
      {errors && touched && (
        <FormikError errors={errors && errors} name={name} touched={touched} />
      )}
    </>
  );
};

export default SelectDropdown;

/* 
    
    <SelectDropdown
    name="category"
    options={[]}
    value={values?.category}
    label="Category"
    onChange={(valueOption) => {
          setFieldValue(name, valueOption);
        }}
    placeholder="Category"
    errors={errors}
    touched={touched}
    /> 

*/
