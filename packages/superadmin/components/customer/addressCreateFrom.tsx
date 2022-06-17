import React, { FC } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../global/inputField";
import SelectDropdown from "../global/select";
import { addressData } from "../../utils/typs";
import AddressInput from "../global/addressInput";

// Validation schema
const validationSchema = Yup.object().shape({});

interface Props {
  initData: addressData;
  saveBtnRef?: string;
  saveHandler: (values: addressData) => void;
  saveWithContinueBtnRef?: string;
}

const AddressCreateForm: FC<Props> = ({
  initData,
  saveBtnRef,
  saveHandler,
  saveWithContinueBtnRef,
}) => {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initData}
        validationSchema={validationSchema}
        onSubmit={(values) => {
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
            <Form className="">
              <AddressInput
                values={values}
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
              />
              <button
                type="submit"
                style={{ display: "none" }}
                ref={saveBtnRef}
                onSubmit={() => handleSubmit()}
              ></button>

              <button
                type="reset"
                style={{ display: "none" }}
                ref={saveWithContinueBtnRef}
                onSubmit={() => handleSubmit()}
              ></button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default AddressCreateForm;
