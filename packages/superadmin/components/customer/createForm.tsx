import React, { FC } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomerInfo from "./customerInfo";
// import { sleep } from "../../utils/utils";

// Validation schema
const validationSchema = Yup.object().shape({});

interface Props {
  initData: any;
  saveBtnRef?: string;
  saveHandler: any;
  saveWithContinueBtnRef?: string;
}

const CreateForm: FC<Props> = ({
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
        onSubmit={async (values) => {
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
            <Form className="">
              <div className="row">
                <CustomerInfo
                  values={values}
                  setFieldValue={setFieldValue}
                  errors={errors}
                  touched={touched}
                />
              </div>
              <button
                type="submit"
                style={{ display: "none" }}
                ref={saveBtnRef}
                onSubmit={() => handleSubmit()}
              >
                submit
              </button>

              <button
                type="reset"
                style={{ display: "none" }}
                ref={saveWithContinueBtnRef}
                onSubmit={() => resetForm(initData)}
              ></button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default CreateForm;
