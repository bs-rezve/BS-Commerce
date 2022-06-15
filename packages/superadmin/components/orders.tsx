import React, { useState } from 'react';
import type { NextComponentType } from "next";
import EditAddress from './sales/editAddress';
import EditOrder from './sales/editOrder';
import OrderList from './sales/orderList';

const Orders: NextComponentType = () => {
    const [allPath, setAllPath] = useState({
        list: true,
        view: false,
        billingEdit: false,
        shippingEdit: false,
    });

    return (
        <>
            {allPath.list ? <OrderList setAllPath={setAllPath}/>: null}
            {allPath.view ? <EditOrder setAllPath={setAllPath}/>: null}
            {allPath.billingEdit ? <EditAddress setAllPath={setAllPath}/>: null}
            {allPath.shippingEdit ? <EditAddress setAllPath={setAllPath}/>: null}
        </>
    );
};

export default Orders;