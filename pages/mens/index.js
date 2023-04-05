import axios from "axios";
import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectShowFilter } from "../../redux/filter/selectors";
import { selectShowCart } from "../../redux/cart/selectors";
import {
  selectAllProducts,
  selectLoadingProducts,
  selectProductsError,
} from "../../redux/products/selectors";

import dynamic from "next/dynamic";
import Box from "../../components/Box/Box";
import Loader from "../../components/Loader/Loader";
const Layout = dynamic(() => import("../../components/Layout/Layout"));
const SubscribeBox = dynamic(() =>
  import("../../components/SubscribeBox/SubscribeBox")
);
const ProductsList = dynamic(() =>
  import("../../components/ProductsList/ProductsList")
);
const Categories = dynamic(() =>
  import("../../components/Categories/Categories")
);
const ToolBar = dynamic(() => import("../../components/ToolBar/ToolBar"));

const Index = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const isLoading = useSelector(selectLoadingProducts);
  const error = useSelector(selectProductsError);

  // useEffect(() => {
  //   dispatch(fetchAllProducts());
  // }, [dispatch]);

  const showCart = useSelector(selectShowCart);
  const showFilter = useSelector(selectShowFilter);
  const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ showCart, showFilter }) =>
      showCart || showFilter ? "hidden" : "auto"};
  }
`;
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <GlobalStyle showCart={showCart} showFilter={showFilter} />
      <Layout pageTitle="My-Shop">
        <Categories />
        {isLoading ? (
          <Loader />
        ) : (
          <ProductsList products={products}>
            <ToolBar />
          </ProductsList>
        )}
        <SubscribeBox />
      </Layout>
    </Box>
  );
};

export default Index;
