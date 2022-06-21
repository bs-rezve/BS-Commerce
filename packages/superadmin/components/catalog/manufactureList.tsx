import _ from "lodash";
import Pagination from "../sales/pagination";
import React, { useEffect, useState } from "react";
import SingleManufacturer from "./singleManufacturer";

const ManufactureList = ({manufactureData}: any) => {
    const [search, setSearch] = useState(false);
    const [activePage, setActivePage] = useState(1);
    const [pageCount, setPageCount] = useState(5);

    const [modal, setModal] = useState({
        delete: false,
    });

    const paginatedData = () => {
        const start = (activePage - 1) * pageCount;
        const requiredData = manufactureData.manufacturers.slice(start, start + pageCount);
        return requiredData;
    };

    const paginateData = paginatedData();

     const handleDelete = () => {
        setModal({ ...modal, delete: true });
    };

    const handleDeleteManufacture = () => {
        
    }

    const handleClickPage = (activePage: any) => {
        setActivePage(activePage);
    };
    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Manufacturers</h1>
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
                                className="btn btn-danger btn-lg"
                                style={{ backgroundColor: "#dd4b39", marginLeft: "10px" }}
                                onClick={() => handleDelete()}
                            >
                                <i className="bi bi-trash"> </i>Delete
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

                {modal.delete ? (
                    <div
                        className="modal"
                        style={{ display: modal.delete ? "block" : "none" }}
                    >
                        <div
                            className="modal-backdrop"
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.1)",
                            }}
                            onClick={() => {
                                // close modal when outside of modal is clicked
                                setModal({ ...modal, delete: false });
                            }}
                        >
                            <div
                                className="modal-content"
                                onClick={(e) => {
                                    // do not close modal if anything inside modal content is clicked
                                    e.stopPropagation();
                                }}
                                style={{
                                    textAlign: "left",
                                    width: "30%",
                                    marginLeft: "40%",
                                    marginTop: "5%",
                                    border: "1px solid gray",
                                    boxShadow: "1px 1px 10px gray",
                                    borderRadius: "10px",
                                    padding: "20px",
                                }}
                            >
                                <div className="container">
                                    {/* <button
                                        type="button"
                                        className="btn-close"
                                        onClick={() =>
                                            setModal({
                                                ...modal,
                                                delete: false,
                                            })
                                        }
                                        aria-label="Close"
                                    ></button> */}
                                    <h1>Are you sure?</h1>
                                    <hr />
                                    <p>
                                        Are you sure you want to delete this
                                        item?
                                    </p>
                                    <br />

                                    <div className="clearfix">
                                        <button
                                            type="button"
                                            className="btn btn-light"
                                            style={{
                                                border: "1px solid gray",
                                                backgroundColor: "gray",
                                                color: "white",
                                                marginRight: "10px",
                                            }}
                                            onClick={() =>
                                                setModal({
                                                    ...modal,
                                                    delete: false,
                                                })
                                            }
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => handleDeleteManufacture()}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div />
                )}

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
                                <span>Name</span>
                            </th>
                            <th>
                                <span>Published</span>
                            </th>
                            <th>
                                <span>Display order</span>
                            </th>
                            <th>
                                <span>Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginateData.length > 0 &&
                            paginateData.map((manufacturer: any) => (
                                <SingleManufacturer
                                    key={manufacturer.id}
                                    manufacturer={manufacturer}
                                ></SingleManufacturer>
                            ))}
                    </tbody>
                </table>
                <div
                    className="d-flex justify-content-between"
                    style={{ fontSize: "18px" }}
                >
                    <span>
                        <Pagination
                            totalItems={manufactureData.manufacturers.length}
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

export default ManufactureList;
