import axios from "axios";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { selectShowCart } from "../../redux/cart/selectors";
import { createGlobalStyle } from "styled-components";
// import getHeaders from "../hooks/getHeaders";
import Box from "../../components/Box/Box";
import Layout from "../../components/Layout/Layout";
import Checkout from "../../components/Checkout/Checkout";
const SubscribeBox = dynamic(() =>
  import("../../components/SubscribeBox/SubscribeBox")
);

const Index = () => {
  const showCart = useSelector(selectShowCart);
  const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ showCart }) => (showCart ? "hidden" : "auto")};
  }
`;
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <GlobalStyle showCart={showCart} />
      <Layout pageTitle="My-Shop">
        <Checkout />
        <SubscribeBox />
      </Layout>
    </Box>
  );
};

export default Index;
