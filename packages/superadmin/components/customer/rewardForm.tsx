import React, { FC } from "react";
import { Formik, Form } from "formik";
import InputField from "../global/inputField";
import SelectDropdown from "../global/select";
import Checkbox from "../global/checkbox";

interface Props {
  setFieldValues?: (name: string, valueOption: {} | string | number) => void;
}

const RewardsCreateForm: FC<Props> = ({ setFieldValues }) => {
  const initData = {
    message: "",
    points: "",
    validity: "",
    store: "",
    active: "",
  };
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initData}
        onSubmit={(values, { resetForm }) => {}}
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
                <div className="col-lg-12">
                  <InputField
                    value={values?.points}
                    label="Points"
                    placeholder="Points"
                    required
                    type="number"
                    name="points"
                  />
                </div>
                <div className="col-lg-12">
                  <InputField
                    value={values?.validity}
                    label="Points validity"
                    placeholder="Points validity"
                    type="number"
                    name="validity"
                  />
                </div>
                <div className="col-lg-12">
                  <InputField
                    value={values?.message}
                    label="Message"
                    placeholder="Message"
                    required
                    type="text"
                    name="message"
                  />
                </div>
                <div className="col-lg-12">
                  <SelectDropdown
                    name="store"
                    options={[
                      { value: 1, label: "news1" },
                      { value: 2, label: "news2" },
                      { value: 3, label: "news3" },
                      { value: 4, label: "news4" },
                    ]}
                    value={values?.store}
                    label="Store"
                    onChange={(valueOption: any) => {
                      setFieldValue("store", valueOption);
                    }}
                    isMulti={false}
                    placeholder="Store"
                    errors={errors}
                    touched={touched}
                  />
                </div>
                <div className="col-lg-12">
                  <Checkbox label="Activate points immediately" name="active" />
                </div>
                <div className="col-lg-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onSubmit={() => handleSubmit()}
                  >
                    Add (reduce) reward points
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

export default RewardsCreateForm;
