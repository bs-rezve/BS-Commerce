import axios from "axios";
import React, { useState } from "react";
import { userAPI } from "../../../APIs";
import ManufactureList from "../../../components/manufacturer/manufactureList";

const List = ({ manufactureData }: any) => {
    return (
        <div>
            <ManufactureList manufactureData={manufactureData} />
        </div>
    );
};

export async function getServerSideProps(context: any) {
    const res = await userAPI.getManufacturer();

    return {
        props: {
            manufactureData: res,
        },
    };
}

export default List;
