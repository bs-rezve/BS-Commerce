import ManufactureList from "@/components/catalog/manufactureList";
import axios from "axios";
import React from "react";

const list = ({ data }: any) => {
    return (
        <div>
            <ManufactureList manufactureData={data} />
        </div>
    );
};

export async function getServerSideProps(context: any) {
    try {
        const res = await axios.get(`http://localhost:3000/api/manufacturers`, {
            headers: {
                Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM3YTMzM2FhLTA5M2EtNGU0YS04MTE4LTk4OGU2ZmViNmU1MyIsInVzZXJuYW1lIjoiYWJjQGdtYWlsLmNvbSIsImxvZ0luVGltZSI6MTY1NTc4ODA3ODYyNiwiaWF0IjoxNjU1Nzg4MDc4LCJleHAiOjE2NTU4NzQ0Nzh9.8xOH4G3rouwOiqcPmG0jOdDUhc04Ei46DngH3ohD6hU"}`,
            },
        });

        const data = await res.data.data;

        return { props: { data } };
    } catch (err: any) {
        console.log(err.response.data);

        return { props: {} };
    }
}

export default list;
