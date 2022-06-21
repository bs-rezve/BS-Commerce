import _ from "lodash";
import Pagination from "./pagination";
import React, { useEffect, useState } from "react";
import getData from "./service/get-shipping-data.service";
import SingleShipment from "./singleShipment";

const ShipmentList = () => {
    const [search, setSearch] = useState(false);
    const [data, setData] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [pageCount, setPageCount] = useState(5);

    useEffect(() => {
        const data: any = getData();
        setData(data);
    }, []);

    const paginatedData = () => {
        const start = (activePage - 1) * pageCount;
        const requiredData = data.slice(start, start + pageCount);
        return requiredData;
    };

    const paginateData = paginatedData();

    const handleClickPage = (activePage: any) => {
        setActivePage(activePage);
    };
    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Shipments</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            
                            <button
                                type="button"
                                style={{backgroundColor: '#00c0ef', border: "1px solid #00c0ef", color:"white", marginLeft: "10px"}}
                                className="btn btn-info btn-lg"
                            >
                                <i className="bi bi-file-earmark-pdf">{" "}</i>Print packaging slips
                            </button>
                            <button
                                type="button"
                                style={{backgroundColor: '#3c8dbc', border: "1px solid #00c0ef", color:"white", marginLeft: "10px"}}
                                className="btn btn-info btn-lg"
                            >
                                <i className="bi bi-file-earmark-pdf">{" "}</i>Set as shipped (selected)
                            </button>
                            <button
                                type="button"
                                style={{backgroundColor: '#3c8dbc', border: "1px solid #00c0ef", color:"white", marginLeft: "10px"}}
                                className="btn btn-info btn-lg"
                            >
                                <i className="bi bi-file-earmark-pdf">{" "}</i>Set as ready for pickup (selected)
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-lg"
                                style={{marginRight: '10px', backgroundColor: '#28a745', border: "1px solid #28a745", marginLeft: "10px"}}
                            >
                                <i className="bi bi-download">{" "}</i>Set as delivered (selected)
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setSearch(!search)}
                    aria-controls="example-collapse-text"
                    aria-expanded={search}
                    style={{
                        width: "100%",
                        border: "1px solid #dddddd",
                        textAlign: "left",
                        fontSize: "20px",
                        padding: "20px",
                        marginBottom: "20px",
                        marginLeft: "10px",
                        // transition: '10s'
                    }}
                >
                    <i className="bi bi-search"></i> Search
                </button>

                {search ? (
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
                                    style={{
                                        padding: "5px",
                                        marginRight: "100px",
                                    }}
                                    className="col"
                                >
                                    Start Date
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder=""
                                    />
                                </div>
                                <div
                                    style={{
                                        padding: "5px",
                                        marginRight: "100px",
                                    }}
                                    className="col"
                                >
                                    Start Time
                                    <input
                                        type="time"
                                        className="form-control"
                                        placeholder=""
                                    />
                                </div>
                                <div
                                    style={{
                                        padding: "5px",
                                        marginRight: "100px",
                                    }}
                                    className="col"
                                >
                                    End Date
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder=""
                                    />
                                </div>
                                <div
                                    style={{
                                        padding: "5px",
                                        marginRight: "100px",
                                    }}
                                    className="col"
                                >
                                    End Time
                                    <input
                                        type="time"
                                        className="form-control"
                                        placeholder=""
                                    />
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
                ) : (
                    <></>
                )}

                <table
                    className="table"
                    style={{
                        border: "1px solid #dddddd",
                        textAlign: "left",
                        margin: "10px",
                    }}
                >
                    <thead style={{ backgroundColor: "#dddddd"}}>
                        <tr style={{ fontSize: "20px" }}>
                            <th style={{textAlign: "center"}}>
                                <input
                                    type="checkbox"
                                    id="vehicle1"
                                    name="vehicle1"
                                    value="Bike"
                                />
                            </th>
                            <th>
                                <span>Shipment #</span>
                            </th>
                            <th>
                                <span>Order #</span>
                            </th>
                            <th>
                                <span>Pickup from store</span>
                            </th>
                            <th>
                                <span>Tracking number</span>
                            </th>
                            <th>
                                <span>Total weight</span>
                            </th>
                            <th>
                                <span>Date shipped</span>
                            </th>
                            <th>
                                <span>Date ready for pickup</span>
                            </th>
                            <th>
                                <span>Date delivered</span>
                            </th>
                            <th>
                                <span>View</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginateData.length > 0 &&
                            paginateData.map((shipment: any) => (
                                <SingleShipment
                                    key={shipment.id}
                                    shipment={shipment}
                                ></SingleShipment>
                            ))}
                    </tbody>
                </table>
                <div
                    className="d-flex justify-content-between"
                    style={{ fontSize: "18px" }}
                >
                    <span>
                        <Pagination
                            totalItems={data.length}
                            pageCount={pageCount}
                            activePage={activePage}
                            onClickPage={handleClickPage}
                        ></Pagination>
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
                    {((activePage-1)*pageCount)+1}-{((activePage-1)*pageCount)+pageCount} of {pageCount} items
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

export default ShipmentList;
