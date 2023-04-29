import axios from "axios";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { selectShowCart } from "../redux/cart/selectors";
import { createGlobalStyle } from "styled-components";
import getHeaders from "../hooks/getHeaders";
import Box from "../components/Box/Box";
import Layout from "../components/Layout/Layout";
import HeroBanner from "../components/HeroBanner/HeroBanner";

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

export async function getServerSideProps() {
  const subCategoriesUrl =
    "https://my-shop-strapi.onrender.com/api/sub-categories?populate=*";
  const trendingProductsUrl =
    "https://my-shop-strapi.onrender.com/api/products?populate=*&[filters][type][$eq]=trending";
  const newProductsUrl =
    "https://my-shop-strapi.onrender.com/api/products?populate=*&[filters][type][$eq]=new";

  try {
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
  } catch (error) {
    console.error(error);
    return {
      props: {
        popularCategories: null,
        trendingProducts: null,
        newProducts: null,
      },
    };
  }
}
