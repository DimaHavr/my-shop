import dynamic from "next/dynamic";
import { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectShowFilter } from "../../redux/filter/selectors";
import { selectShowCart } from "../../redux/cart/selectors";
import { fetchAllProducts } from "../../redux/products/operations";
import {
  selectAllProducts,
  selectLoadingProducts,
} from "../../redux/products/selectors";

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

const Index = ({ categories }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const isLoading = useSelector(selectLoadingProducts);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

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
        <Categories categories={categories} />
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
1;
export default Index;

export async function getStaticProps() {
  const response = await fetch(
    "https://my-shop-strapi.onrender.com/api/sub-categories?populate=*",
    {
      headers: {
        Authorization: `Bearer 1aa8eca2907e2c5d6fa22265203be2e366445abe6397f4c12f3488ea83080b8826988c86a945817c971699466a3f24ec4b6d6ae2385614e9bb0c2f5ebb8d1ffde0ae2ddddb89f063a5d49d64cc59b962e76717077760a1feaaa592707c537490d24fac53faef3434e6abd47a6c72d1a1d4110c786e0e200ce3bdf22e6aa3529e`,
      },
    }
  );
  const categories = await response.json();
  return {
    props: {
      categories,
    },
  };
}
