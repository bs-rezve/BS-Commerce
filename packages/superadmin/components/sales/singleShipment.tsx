import type { NextComponentType } from "next";
import Link from "next/link";

const SingleShipment = ({ setAllPath, shipment }: any) => {
    const obj = {
        list: false,
        view: true,
    };
    return (
        <>
            <tr style={{ fontSize: "20px", paddingTop: "20px" }}>
                <td
                    style={{ textAlign: "center", border: "1px solid #dddddd" }}
                >
                    <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                    />
                </td>
                <td style={{ border: "1px solid #dddddd" }}>
                    {shipment.shipment}
                </td>
                <td style={{ border: "1px solid #dddddd" }}>
                    {shipment.order}
                </td>
                {shipment.pickup ? (
                    <td style={{ border: "1px solid #dddddd" }}>
                        <i className="bi bi-check2"></i>
                    </td>
                ) : (
                    <td style={{ border: "1px solid #dddddd" }}>
                        <i className="bi bi-x"></i>
                    </td>
                )}
                <td style={{ color: "#3c8dbc" }}>{shipment.tracking_number}</td>
                <td style={{ border: "1px solid #dddddd" }}>
                    {shipment.total_weight}
                </td>
                <td style={{ border: "1px solid #dddddd" }}>
                    {shipment.date_shipped}
                </td>
                <td style={{ border: "1px solid #dddddd" }}>
                    {shipment.date_ready}
                </td>
                <td style={{ border: "1px solid #dddddd" }}>
                    {shipment.date_delivered}
                </td>
                <td style={{ border: "1px solid #dddddd" }}>
                    <button
                        type="button"
                        className="btn btn-light btn-lg"
                        onClick={() => setAllPath(obj)}
                    >
                        <i className="bi bi-eye"> {shipment.view}</i>
                    </button>
                </td>
            </tr>
        </>
    );
};

export default SingleShipment;
