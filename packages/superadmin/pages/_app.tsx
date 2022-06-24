import "../styles/App.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useEffect } from "react";
import Axios from "axios";
import { config } from "../config";

Axios.defaults.baseURL = config?.restPrefix;
Axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImExY2MxNjU4LWE0OGQtNGRhZS04ZWNlLWRiNTk1MWFmMmE0YiIsInVzZXJuYW1lIjoiekB4LmNvbSIsImxvZ0luVGltZSI6MTY1NjA1NDM3MTEwMywiaWF0IjoxNjU2MDU0MzcxLCJleHAiOjE2NTYxNDA3NzF9.2N-gTvGgxUFA8EHnZzieybx5sQL2-5UNp6q_ZW9H8dI`,
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
