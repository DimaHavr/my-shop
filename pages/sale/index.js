import axios from "axios";
import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { selectShowFilter } from "../../redux/filter/selectors";
import { selectShowCart } from "../../redux/cart/selectors";

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
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
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
