import React from 'react';
import OrderList from '../../components/sales/orderList';

const List = ({setAllPath}: any) => {

    return (
        <div>
            <OrderList setAllPath={setAllPath}/>
        </div>
    );
};

export default List;