import React, { FC } from "react";

async function hello() {
  return "hello there";
}

interface Props {
  url?: string;
}

const TestAxios: FC<Props> = ({ url }) => {
  const [data, setData] = React.useState("");

  const fetchData = async () => {
    const response = await hello();
    setData(response);
  };

  return (
    <>
      <button onClick={fetchData} data-testid="fetch-data">
        Load Data
      </button>
      {data ? (
        <div data-testid="show-data">{data}</div>
      ) : (
        <h1 data-testid="loading">Loading...</h1>
      )}
    </>
  );
};

export default TestAxios;
