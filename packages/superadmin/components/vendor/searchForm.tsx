import React, { FC } from "react";
import { Formik, Form } from "formik";
import InputField from "../global/inputField";
import SelectDropdown from "../global/select";
import Select from "react-select";
import styles from "../../styles/Input.module.css";
import { DDL, searchvendor } from "../../utils/typs";
// import { sleep } from "../../utils/utils";

interface Props {
  saveHandler: (values: searchvendor) => void;
  initData: searchvendor;
}

const SearchFormVendor: FC<Props> = ({ saveHandler, initData }) => {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initData}
        onSubmit={async (values, { resetForm }) => {
          // await sleep(500);
          saveHandler(values);
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
            <Form className="mx-5">
              <div className="row">
                <div className="col-lg-6">
                  <InputField
                    value={values?.name}
                    label="Name"
                    placeholder="Name"
                    required
                    type="text"
                    name="name"
                  />
                </div>
                <div className="col-lg-6">
                  <InputField
                    value={values?.email}
                    label="Email"
                    placeholder="Email"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="col-lg-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary mt-3"
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

export default SearchFormVendor;
