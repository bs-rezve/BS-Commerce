import "../styles/App.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useEffect } from "react";
import Axios from "axios";
import { config } from "../config";

Axios.defaults.baseURL = config?.restPrefix;
Axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRiOWU0ODQ0LWE2NzMtNDc3ZS1hMDNlLTQ1MTE0ZTk5MzdiMCIsInVzZXJuYW1lIjoicUB3LmNvbSIsImxvZ0luVGltZSI6MTY1NjA4NTU5ODcwMSwiaWF0IjoxNjU2MDg1NTk4LCJleHAiOjE2NTYxNzE5OTh9.rJN4hzyfFFm4r6tPzmFjhoeQiEpT1Hiunev7cHILKaU`,
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
