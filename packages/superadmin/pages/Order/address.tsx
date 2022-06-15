import React from 'react';
import EditAddress from '../../components/sales/editAddress';

const Address = ({setAllPath}: any) => {
    return (
        <div>
            <EditAddress setAllPath={setAllPath}/>
        </div>
    );
};

export default Address;