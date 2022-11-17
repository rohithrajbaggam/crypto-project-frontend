import "../styles/globals.css";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store/store";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReduxProvider>
  );
}

export default MyApp;
