import axios from "axios";
import dynamic from "next/dynamic";

import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { selectShowCart } from "../redux/cart/selectors";
import Box from "../components/Box/Box";
const Layout = dynamic(() => import("../components/Layout/Layout"));
const HeroBanner = dynamic(() => import("../components/HeroBanner/HeroBanner"));
const PopularCategories = dynamic(() =>
  import("../components/PopularCategories/PopularCategories")
);
const NewArrivals = dynamic(() =>
  import("../components/NewArrivals/NewArrivals")
);
const TrendingNow = dynamic(() =>
  import("../components/TrendingNow/TrendingNow")
);
const ServicesList = dynamic(() =>
  import("../components/ServicesList/ServicesList")
);

const InstagramBox = dynamic(() =>
  import("../components/InstagramBox/InstagramBox")
);
const SubscribeBox = dynamic(() =>
  import("../components/SubscribeBox/SubscribeBox")
);

const Index = ({ popularCategories, trendingProducts, newProducts }) => {
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
        <HeroBanner />
        <PopularCategories popularCategories={popularCategories} />
        <TrendingNow trendingProducts={trendingProducts} />
        <NewArrivals newProducts={newProducts} />
        <ServicesList />
        <InstagramBox />
        <SubscribeBox />
      </Layout>
    </Box>
  );
};

export default Index;

function getHeaders() {
  return {
    headers: {
      Authorization: `Bearer 1aa8eca2907e2c5d6fa22265203be2e366445abe6397f4c12f3488ea83080b8826988c86a945817c971699466a3f24ec4b6d6ae2385614e9bb0c2f5ebb8d1ffde0ae2ddddb89f063a5d49d64cc59b962e76717077760a1feaaa592707c537490d24fac53faef3434e6abd47a6c72d1a1d4110c786e0e200ce3bdf22e6aa3529e`,
    },
  };
}

export async function getStaticProps() {
  const subCategoriesUrl =
    "https://my-shop-strapi.onrender.com/api/sub-categories?populate=*";
  const trendingProductsUrl =
    "https://my-shop-strapi.onrender.com/api/products?populate=*&[filters][type][$eq]=trending";
  const newProductsUrl =
    "https://my-shop-strapi.onrender.com/api/products?populate=*&[filters][type][$eq]=new";

  const responseSubCat = await axios.get(subCategoriesUrl, getHeaders());
  const responseTrendingProducts = await axios.get(
    trendingProductsUrl,
    getHeaders()
  );
  const responseNewProducts = await axios.get(newProductsUrl, getHeaders());
  const popularCategories = await responseSubCat.data;
  const trendingProducts = await responseTrendingProducts.data;
  const newProducts = await responseNewProducts.data;

  return {
    props: {
      popularCategories,
      trendingProducts,
      newProducts,
    },
  };
}
