import Link from "next/link";
import React, { useState } from "react";
import EditAddress from "../editAddress";

const Billing = (props: any) => {
    const {setAllPath} = props;
    
    const obj1 = {
        list: false,
        view: false,
        billingEdit: true,
        shippingEdit: false
    };

    const obj2 = {
        list: false,
        view: false,
        billingEdit: false,
        shippingEdit: true
    };

    return (
        <>
            <div
                className="d-flex justify-content-between"
                style={{
                    display: "flex",
                    border: "1px solid #dddddd",
                    textAlign: "center",
                    fontSize: "16px",
                    padding: "20px",
                    marginBottom: "20px",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        width: "50%",
                        border: "1px solid #dddddd",
                        textAlign: "center",
                        fontSize: "16px",
                        padding: "20px",
                        margin: "20px",
                    }}
                >
                    <div
                        style={{
                            border: "1px solid #dddddd",
                            textAlign: "center",
                            fontSize: "16px",
                            padding: "20px",
                            margin: "20px",
                        }}
                    >
                        <table
                            style={{
                                fontSize: "20px",
                                textAlign: "left",
                                width: "100%",
                            }}
                        >
                            <tr>
                                <th
                                    style={{
                                        borderLeft: "1px solid #dddddd",
                                        borderTop: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Billing Address
                                </th>
                                <th
                                    style={{
                                        borderTop: "1px solid #dddddd",
                                        borderRight: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                ></th>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Full name
                                </td>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Victoria Terces
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Centro comercial Moctezuma
                                </td>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Francisco Chang
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Ernst Handel
                                </td>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Roland Mendel
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Island Trading
                                </td>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Helen Bennett
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Laughing Bacchus Winecellars
                                </td>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Yoshi Tannamuri
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Magazzini Alimentari Riuniti
                                </td>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Giovanni Rovelli
                                </td>
                            </tr>
                        </table>
                        <div style={{ textAlign: "left", marginTop: "20px" }}>
                            <button
                                type="button"
                                className="btn btn-danger btn-lg"
                                style={{
                                    backgroundColor: "#3c8dbc",
                                    border: "1px solid #3c8dbc",
                                }}
                                onClick={() =>
                                    setAllPath(obj1)
                                }
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        width: "50%",
                        border: "1px solid #dddddd",
                        textAlign: "center",
                        fontSize: "16px",
                        padding: "20px",
                        margin: "20px",
                    }}
                >
                    <div
                        style={{
                            border: "1px solid #dddddd",
                            textAlign: "center",
                            fontSize: "16px",
                            padding: "20px",
                            margin: "20px",
                        }}
                    >
                        <table
                            style={{
                                fontSize: "20px",
                                textAlign: "left",
                                width: "100%",
                            }}
                        >
                            <tr>
                                <th
                                    style={{
                                        borderLeft: "1px solid #dddddd",
                                        borderTop: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Shipping Address
                                </th>
                                <th
                                    style={{
                                        borderTop: "1px solid #dddddd",
                                        borderRight: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                ></th>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Full name
                                </td>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Victoria Terces
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Centro comercial Moctezuma
                                </td>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Francisco Chang
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Ernst Handel
                                </td>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Roland Mendel
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Island Trading
                                </td>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Helen Bennett
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Laughing Bacchus Winecellars
                                </td>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Yoshi Tannamuri
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Magazzini Alimentari Riuniti
                                </td>
                                <td
                                    style={{
                                        border: "1px solid #dddddd",
                                        padding: "20px",
                                    }}
                                >
                                    Giovanni Rovelli
                                </td>
                            </tr>
                        </table>
                        <div style={{ textAlign: "left", marginTop: "20px" }}>
                            <button
                                type="button"
                                className="btn btn-danger btn-lg"
                                onClick={() =>
                                    setAllPath(obj2)
                                }
                                style={{
                                    backgroundColor: "#3c8dbc",
                                    border: "1px solid #3c8dbc",
                                }}
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Billing;
