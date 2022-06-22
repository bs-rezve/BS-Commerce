import type { NextComponentType } from "next";
import Link from "next/link";

const SingleCart = ({ shopping }: any) => {
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
                    {shopping.customer}
                </td>
                <td style={{ border: "1px solid #dddddd" }}>
                    {shopping.totalItems}
                </td>
            </tr>
        </>
    );
};

export default SingleCart;
