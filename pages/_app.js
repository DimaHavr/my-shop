import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { Toaster } from "react-hot-toast";
import { store, persistor } from "../redux/store";
import Loader from "../components/Loader/Loader";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Toaster />
        <ThemeProvider
          breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
          minBreakpoint="xxs"
        >
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
