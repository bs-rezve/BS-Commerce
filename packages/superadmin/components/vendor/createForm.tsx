import React, { FC, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Accordion from "../global/accordion";
import { vendorTypes } from "../../utils/typs";
import VendorInfo from "./vendorInfo";
import Display from "./display";
import Seo from "./seo";
import ToggleButton from "../global/toggleButton";

// Validation schema
const validationSchema = Yup.object().shape({});

interface Props {
  initData: vendorTypes;
  saveBtnRef?: string;
  saveHandler: (values: vendorTypes) => void;
  saveWithContinueBtnRef?: string;
  deleteBtnRef?: string;
}

const VendorCreateForm: FC<Props> = ({
  initData,
  saveBtnRef,
  saveHandler,
  saveWithContinueBtnRef,
  deleteBtnRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="mb-3">
        <ToggleButton setIsOpen={setIsOpen} />
      </div>
      <Formik
        enableReinitialize={true}
        initialValues={initData}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
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
            <Form className="row">
              <div className="col-lg-12 mb-2">
                <Accordion title="Vendor Info" id={1} icon="bi bi-info-lg">
                  <VendorInfo
                    values={values.vendorInfo}
                    setFieldValue={setFieldValue}
                    errors={errors}
                    touched={touched}
                  />
                </Accordion>
              </div>
              {/* <div className="col-lg-12 mb-2">
                <Accordion
                  title="Address (optional)"
                  id={2}
                  icon="bi bi-info-lg"
                >
                  <VendorInfo
                    values={values.customerInfo}
                    setFieldValue={setFieldValue}
                    errors={errors}
                    touched={touched}
                  />
                </Accordion>
              </div> */}
              {isOpen && (
                <>
                  <div className="col-lg-12 mb-2">
                    <Accordion title="Display" id={3} icon="bi bi-display">
                      <Display
                        values={values.display}
                        setFieldValue={setFieldValue}
                        errors={errors}
                        touched={touched}
                      />
                    </Accordion>
                  </div>
                  <div className="col-lg-12 mb-2">
                    <Accordion title="SEO" id={4} icon="bi bi-search">
                      <Seo
                        values={values.seo}
                        setFieldValue={setFieldValue}
                        errors={errors}
                        touched={touched}
                      />
                    </Accordion>
                  </div>{" "}
                </>
              )}
              <button
                type="submit"
                style={{ display: "none" }}
                ref={saveBtnRef}
                onSubmit={() => handleSubmit()}
              ></button>

              <button
                type="button"
                style={{ display: "none" }}
                ref={saveWithContinueBtnRef}
                onSubmit={() => {}}
              ></button>
              <button
                type="button"
                style={{ display: "none" }}
                ref={deleteBtnRef}
                onSubmit={() => {}}
              ></button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default VendorCreateForm;
