import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { selectShowFilter } from "../../../redux/filter/selectors";
import { selectShowCart } from "../../../redux/cart/selectors";
import { selectFavoritesProducts } from "../../../redux/favorites/selectors";
import dynamic from "next/dynamic";
import Box from "../../../components/Box/Box";
const Layout = dynamic(() => import("../../../components/Layout/Layout"));
const SubscribeBox = dynamic(() =>
  import("../../../components/SubscribeBox/SubscribeBox")
);
const ProductsList = dynamic(() =>
  import("../../../components/ProductsList/ProductsList")
);

const InstagramBox = dynamic(() =>
  import("../../../components/InstagramBox/InstagramBox")
);

const Index = () => {
  const products = useSelector(selectFavoritesProducts);
  const showCart = useSelector(selectShowCart);
  const showFilter = useSelector(selectShowFilter);
  const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ showCart, showFilter }) =>
      showCart || showFilter ? "hidden" : "auto"};
  }
`;
  console.log(products);
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <GlobalStyle showCart={showCart} showFilter={showFilter} />
      <Layout pageTitle="My-Shop">
        <ProductsList products={products} />
        <InstagramBox />
        <SubscribeBox />
      </Layout>
    </Box>
  );
};

export default Index;
