import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Toaster />
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </StateContext>
  );
}

export default MyApp;
