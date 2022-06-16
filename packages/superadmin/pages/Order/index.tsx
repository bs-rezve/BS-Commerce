import React, { useState } from 'react';
import type { NextComponentType } from "next";
import EditAddress from "./address";
import EditOrder from './edit';
import OrderList from './list';

const Index = () => {
    // const [allPath, setAllPath] = useState({
    //     list: true,
    //     view: false,
    //     billingEdit: false,
    //     shippingEdit: false,
    // });
    return (
        <div>
            <OrderList/>
        </div>
    );
};

export default Index;