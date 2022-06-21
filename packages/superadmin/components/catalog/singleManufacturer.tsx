import type { NextComponentType } from "next";
import Link from "next/link";

const SingleManufacturer = ({ manufacturer }: any) => {
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
                    {manufacturer.name}
                </td>
                {manufacturer.published ? (
                    <td style={{ border: "1px solid #dddddd" }}>
                        <i className="bi bi-check2"></i>
                    </td>
                ) : (
                    <td style={{ border: "1px solid #dddddd" }}>
                        <i className="bi bi-x"></i>
                    </td>
                )}
                <td style={{ border: "1px solid #dddddd" }}>
                    {manufacturer.displayOrder}
                </td>
                <td style={{ border: "1px solid #dddddd" }}>
                    <Link href="/Manufacturer/list" passHref>
                        <button type="button" className="btn btn-light btn-lg">
                            <i className="bi bi-eye"> {manufacturer.edit}</i>
                        </button>
                    </Link>
                </td>
            </tr>
        </>
    );
};

export default SingleManufacturer;
