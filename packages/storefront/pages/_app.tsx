import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store";
import Axios from "axios";
import { config } from "config";
import { SessionProvider } from "next-auth/react";

Axios.defaults.baseURL = config?.restPrefix;

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
