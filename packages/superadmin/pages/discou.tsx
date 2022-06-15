// import _ from "lodash";
// import Pagination from "../components/order/pagination";
import React, { useEffect, useState } from "react";
// import getData from "../components/order/service/get-data.service";
// import SingleOrder from "../components/order/SingleOrder";

const Orders = () => {
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [pageCount, setPageCount] = useState(5);

  // useEffect(() => {
  //     const data: any = getData();
  //     setData(data);
  // }, []);

  // const paginatedData = () => {
  //     const start = (activePage - 1) * pageCount;
  //     const requiredData = data.slice(start, start + pageCount);
  //     return requiredData;
  // };

  // const paginateData = paginatedData();

  // const handleClickPage = (activePage: any) => {
  //     setActivePage(activePage);
  // };
  return (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Orders</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button type="button" className="btn btn-info btn-lg">
                <i className="bi bi-plus"> </i>Add New
              </button>
            </div>
          </div>
        </div>

        <div>
          <form style={{ padding: "5px", margin: "5px" }}>
            <div
              style={{
                display: "flex",
                padding: "5px",
                margin: "5px",
              }}
              className="form-col"
            >
              <div
                style={{ padding: "5px", marginRight: "100px" }}
                className="col"
              >
                Start Date
                <input type="date" className="form-control" placeholder="" />
              </div>
              <div
                style={{ padding: "5px", marginRight: "100px" }}
                className="col"
              >
                End Date
                <input type="date" className="form-control" placeholder="" />
              </div>
              <div
                style={{ padding: "5px", marginRight: "100px" }}
                className="col"
              >
                Cupon Code
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div
                style={{ padding: "5px", marginRight: "100px" }}
                className="col"
              >
                Discount Name
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div
                style={{ padding: "5px", marginRight: "100px" }}
                className="col"
              >
                
                <div className="form-group">
                  <label >Discount Type</label>
                  <select className="form-control">
                    <option>All</option>
                    <option>Assigned to order total</option>
                    <option>Assigned to products</option>
                    <option>Assigned to catagories</option>
                    <option>Assigned to manufacturers</option>
                    <option>Assigned to shipping</option>
                    <option>Assigned to order subtotal</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                style={{
                  height: "50px",
                  width: "100px",
                  margin: "15px",
                }}
                className="btn btn-primary"
              >
                <i className="bi bi-search"></i> Search
              </button>
            </div>
          </form>
        </div>

        <table
          className="table"
          style={{
            border: "1px solid #dddddd",
            textAlign: "left",
            margin: "10px",
          }}
        >
          <thead style={{ backgroundColor: "#dddddd" }}>
            <tr style={{ fontSize: "20px" }}>
              <th style={{ textAlign: "center" }}>
                <span>Name</span>
              </th>
              <th>
                <span>Discount type</span>
              </th>
              <th>
                <span>Discount</span>
              </th>
              <th>
                <span>Start date</span>
              </th>
              <th>
                <span>End date</span>
              </th>
              <th>
                <span>Times used</span>
              </th>
              <th>
                <span>Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {paginateData.length > 0 &&
                            paginateData.map((order: any) => (
                                <SingleOrder
                                    key={order.id}
                                    order={order}
                                ></SingleOrder>
                            ))} */}
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tbody>
        </table>
        <div
          className="d-flex justify-content-between"
          style={{ fontSize: "18px" }}
        >
          <span>
            {/* <Pagination
                            totalItems={data.length}
                            pageCount={pageCount}
                            activePage={activePage}
                            onClickPage={handleClickPage}
                        ></Pagination> */}
          </span>
          <span>
            <span style={{ margin: "10px" }}>Show</span>
            <button
              className="dropdown"
              style={{
                padding: "10px",
                border: "1px solid gray",
              }}
            >
              <a
                href="#"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
                style={{
                  textDecoration: "none",
                  color: "black",
                  padding: "10px",
                }}
              >
                {pageCount}
              </a>
              <div className="dropdown-menu">
                <a
                  href="#"
                  className="dropdown-item"
                  onClick={() => setPageCount(2)}
                >
                  2
                </a>
                <a
                  href="#"
                  className="dropdown-item"
                  onClick={() => setPageCount(5)}
                >
                  5
                </a>
                <a
                  href="#"
                  className="dropdown-item"
                  onClick={() => setPageCount(10)}
                >
                  10
                </a>
              </div>
            </button>
            <span style={{ margin: "10px" }}>items</span>
          </span>
          {(activePage - 1) * pageCount + 1}-
          {(activePage - 1) * pageCount + pageCount} of {pageCount} items
          <button
            style={{
              height: "100%",
              padding: "10px",
              width: "5%",
              border: "1px solid white",
            }}
          >
            <i className="bi bi-arrow-repeat"></i>
          </button>
        </div>
      </main>
    </>
  );
};

export default Orders;
