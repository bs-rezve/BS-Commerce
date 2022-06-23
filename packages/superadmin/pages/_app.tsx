import "../styles/App.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useEffect } from "react";
import Axios from "axios";
import { config } from "../config";

Axios.defaults.baseURL = config?.restPrefix;
Axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3NTc0YmEyLWQ1MjctNDgwYi1iZTAzLWIyMjZlMGY2M2ZkNCIsInVzZXJuYW1lIjoiYUBiLmNvbSIsImxvZ0luVGltZSI6MTY1NTk1ODY1NTkxNSwiaWF0IjoxNjU1OTU4NjU1LCJleHAiOjE2NTYwNDUwNTV9.pVu4Pm0EjUdg3sfEd4l2gvBazLO_BMzsTSq_vykVGuc`,
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
