import React, { FC } from "react";
import { orders } from "../../utils/typs";
import TableInfo from "../global/table";
import { Formik, Form } from "formik";
import SelectDropdown from "../global/select";

interface Props {
  cartList: orders[];
}

const CurrentShoppingAndWishlist: FC<Props> = ({ cartList }) => {
  const initData = {
    cartType: "",
  };
  const thead = [
    "Product",
    "Quantity",
    "Unit price",
    "Total",
    "Store",
    "Updated on",
  ];
  return (
    <div className="">
      <div>
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
                <div className="col-lg-12 mb-3">
                  <SelectDropdown
                    name="cartType"
                    options={[
                      { value: 1, label: "news1" },
                      { value: 2, label: "news2" },
                      { value: 3, label: "news3" },
                      { value: 4, label: "news4" },
                    ]}
                    value={values?.cartType}
                    label="Shopping cart type"
                    onChange={(valueOption: any) => {
                      setFieldValue("cartType", valueOption);
                    }}
                    isMulti={false}
                    placeholder="Shopping cart type"
                    errors={errors}
                    touched={touched}
                  />
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
      <TableInfo tHead={thead} list={cartList}>
        {cartList?.map((data, index) => (
          <tr key={index}>
            <th scope="row">{data?.id}</th>
            <td>{data.total}</td>
            <td>
              <button className="btn btn-success">{data.pstatus}</button>
            </td>
            <td>{data.store}</td>
            <td>{data.status}</td>
            <td>{data.shipStatus}</td>
          </tr>
        ))}
      </TableInfo>
    </div>
  );
};

export default CurrentShoppingAndWishlist;
