import React, { useState } from "react";
import type { NextComponentType } from "next";
import EditShipment from "./sales/editShipment";
import ShipmentList from "./sales/shipmentList";

const Shipments = () => {
    const [allPath, setAllPath] = useState({
        list: true,
        view: false,
    });

    return (
        <>
            {allPath.list ? <ShipmentList setAllPath={setAllPath} /> : null}
            {allPath.view ? <EditShipment setAllPath={setAllPath} /> : null}
        </>
    );
};

export default Shipments;
