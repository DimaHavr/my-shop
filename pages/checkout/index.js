import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { selectShowCart } from "../../redux/cart/selectors";
import { createGlobalStyle } from "styled-components";
import Box from "../../components/Box/Box";
import Layout from "../../components/Layout/Layout";
import Checkout from "../../components/Checkout/Checkout";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
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
        <Breadcrumb title="Оформлення замовлення" />
        <Checkout />
        <SubscribeBox />
      </Layout>
    </Box>
  );
};

export default Index;
