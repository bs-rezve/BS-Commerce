import React, { FC } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomerInfo from "./customerInfo";
import Accordion from "../global/accordion";
import OrdersList from "./orders";
import CustomerAddress from "./customerAddress";
import CurrentShoppingAndWishlist from "./wishlistShoppinglist";
import ActivityLog from "./activityLog";
import PlaceOrders from "./placeOrders";
import Subscription from "./subcription";
import RewardsPoints from "./rewardPoints";

// Validation schema
const validationSchema = Yup.object().shape({});

interface Props {
  initData: any;
  saveBtnRef?: string;
  saveHandler: any;
  saveWithContinueBtnRef?: string;
}

const EditForm: FC<Props> = ({
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
        onSubmit={(values, { resetForm }) => {
          saveHandler(values, () => {
            resetForm(initData);
          });
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
                <Accordion title="Customer info" id={1} icon="bi bi-search">
                  <CustomerInfo
                    values={values.customerInfo}
                    setFieldValue={setFieldValue}
                    errors={errors}
                    touched={touched}
                  />
                </Accordion>
              </div>
              <div className="col-lg-12 mb-2">
                <Accordion title="Orders" id={2} icon="bi bi-search">
                  <OrdersList
                    orderList={values?.orders}
                    setFieldValue={setFieldValue}
                  />
                </Accordion>
              </div>
              <div className="col-lg-12 mb-2">
                <Accordion title="Address" id={3} icon="bi bi-search">
                  <CustomerAddress
                    addressList={values?.address}
                    setFieldValue={setFieldValue}
                  />
                </Accordion>
              </div>
              <div className="col-lg-12 mb-2">
                <Accordion
                  title="Current shopping cart and wishlist"
                  id={4}
                  icon="bi bi-search"
                >
                  <CurrentShoppingAndWishlist
                    cartList={values?.shoppingandWishlist}
                  />
                </Accordion>
              </div>
              <div className="col-lg-12 mb-2">
                <Accordion title="Activity log" id={5} icon="bi bi-search">
                  <ActivityLog
                    activityList={values?.activityLog}
                    setFieldValue={setFieldValue}
                  />
                </Accordion>
              </div>
              <div className="col-lg-12 mb-2">
                <Accordion
                  title="Place order (impersonate)"
                  id={6}
                  icon="bi bi-search"
                >
                  <PlaceOrders />
                </Accordion>
              </div>
              <div className="col-lg-12 mb-2">
                <Accordion
                  title="Back in stock subscriptions"
                  id={7}
                  icon="bi bi-search"
                >
                  <Subscription
                    activityList={values?.binstocksub}
                    setFieldValue={setFieldValue}
                  />
                </Accordion>
              </div>
              <div className="col-lg-12 mb-2">
                <Accordion title="Reward points" id={8} icon="bi bi-search">
                  <RewardsPoints
                    setFieldValue={setFieldValue}
                    rewardList={values.rewordPoints}
                  />
                </Accordion>
              </div>
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
                onSubmit={() => resetForm(initData)}
              ></button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default EditForm;
