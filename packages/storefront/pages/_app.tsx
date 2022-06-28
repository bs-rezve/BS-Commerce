import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { PersistGate } from "redux-persist/integration/react";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import Axios from "axios";
import { config } from "config";
var cookie = require("cookie");

Axios.defaults.baseURL = config?.restPrefix;
Axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQwZWRkODk2LTFkNmMtNGMyZC05ZDQwLTA3OWMzOGZlNjVhNSIsImVtYWlsIjoiYW5pa2JhcnVhQGdtYWlsLmNvbSIsInBob25lIjoiMDE3MTc1ODQ5MzkiLCJsb2dJblRpbWUiOjE2NTYzNDkwMTE2MzMsImlhdCI6MTY1NjM0OTAxMSwiZXhwIjoxNjU3MjEzMDExfQ.Resefco_0CPsD2QzM-IUVMqn5vifhT_2-QCdDkga9no`,
};

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PersistGate>
        </Provider>
    );
}

export default MyApp;
