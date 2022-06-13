import React, { FC } from "react";
import { Formik, Form } from "formik";
import InputField from "../global/inputField";
import SelectDropdown from "../global/select";
import Select from "react-select";
import styles from "../../styles/Input.module.css";

interface Props {}

const month: any = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
];

const day: any = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
];

const SearchForm: FC<Props> = ({}) => {
  const initData = {
    email: "",
    company: "",
    fName: "",
    ipAddress: "",
    lastName: "",
    role: "",
    month: "",
    day: "",
  };
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initData}
        onSubmit={(values, { resetForm }) => {
          console.log(values, "values");
        }}
      >
        {({
          handleSubmit,
          resetForm,
          values,
          errors,
          touched,
          setFieldValue,
          isValid,
        }) => (
          <>
            <Form className="">
              <div className="row">
                <div className="col-lg-6">
                  <InputField
                    value={values?.email}
                    label="Email"
                    placeholder="Email"
                    required
                    type="email"
                    name="email"
                  />
                </div>
                <div className="col-lg-6">
                  <InputField
                    value={values?.company}
                    label="Company"
                    placeholder="Company"
                    type="text"
                    name="company"
                  />
                </div>
                <div className="col-lg-6">
                  <InputField
                    value={values?.fName}
                    label="First name"
                    placeholder="First name"
                    required
                    type="text"
                    name="fName"
                  />
                </div>
                <div className="col-lg-6">
                  <InputField
                    value={values?.ipAddress}
                    label="IP address"
                    placeholder="IP address"
                    type="text"
                    name="ipAddress"
                  />
                </div>
                <div className="col-lg-6">
                  <InputField
                    value={values?.lastName}
                    label="Last name"
                    placeholder="Last name"
                    required
                    type="text"
                    name="lastName"
                  />
                </div>
                <div className="col-lg-6">
                  <SelectDropdown
                    name="store"
                    options={[
                      { value: 1, label: "news1" },
                      { value: 2, label: "news2" },
                      { value: 3, label: "news3" },
                      { value: 4, label: "news4" },
                    ]}
                    value={values?.role}
                    label="Customer roles"
                    onChange={(valueOption: any) => {
                      setFieldValue("role", valueOption);
                    }}
                    isMulti={false}
                    placeholder="Customer roles"
                    errors={errors}
                    touched={touched}
                  />
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-md-3">
                      <div className={styles.label_wrapper}>
                        <label className={styles.col_form_label}>
                          Date of birth
                        </label>
                      </div>
                    </div>
                    <div className="col-md-9 d-flex">
                      <Select
                        onChange={(valueOption: any) => {
                          setFieldValue("month", valueOption);
                        }}
                        options={month || []}
                        value={values?.month}
                        isSearchable={true}
                        className="me-2"
                        name="month"
                        isMulti={false}
                        placeholder="Month"
                        isClearable={true}
                      />
                      <Select
                        onChange={(valueOption: any) => {
                          setFieldValue("day", valueOption);
                        }}
                        value={values?.day}
                        isSearchable={true}
                        name="day"
                        options={day || []}
                        isMulti={false}
                        placeholder="Day"
                        isClearable={true}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onSubmit={() => handleSubmit()}
                  >
                    <i className="bi bi-search me-2 align-middle"></i> Search
                  </button>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default SearchForm;
