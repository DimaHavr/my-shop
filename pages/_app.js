import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { Toaster } from "react-hot-toast";
import { store, persistor } from "../redux/store";
import { ThreeDots } from "react-loader-spinner";
import Box from "../components/Box/Box";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <ThreeDots
            height="80"
            width="160"
            radius="9"
            color="#17696a"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "50vh",
            }}
            wrapperClassName=""
            visible={true}
          />
        }
        persistor={persistor}
      >
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
