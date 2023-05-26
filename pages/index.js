import axios from "axios";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { selectShowCart } from "../redux/cart/selectors";
import { createGlobalStyle } from "styled-components";
import getHeaders from "../hooks/getHeaders";
import Box from "../components/Box/Box";
import Layout from "../components/Layout/Layout";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import PopularCategories from "../components/PopularCategories/PopularCategories";

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
const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ showCart }) => (showCart ? "hidden" : "auto")};
  }
`;
const Index = ({
  popularCategories,
  trendingProducts,
  newProducts,
  heroBanners,
}) => {
  const showCart = useSelector(selectShowCart);

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <GlobalStyle showCart={showCart} />
      <Layout subCategories={popularCategories} pageTitle="My-Shop">
        <HeroBanner heroBanners={heroBanners.data} />
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

export async function getStaticProps() {
  const subCategoriesUrl = `${process.env.BASE_URL}/api/sub-categories?populate=*`;
  const trendingProductsUrl = `${process.env.BASE_URL}/api/products?populate=*&[filters][type][$eq]=trending`;
  const newProductsUrl = `${process.env.BASE_URL}/api/products?populate=*&[filters][type][$eq]=new`;
  const heroBannersUrl = `${process.env.BASE_URL}/api/hero-banners?populate=*`;

  try {
    const [popularCategories, trendingProducts, newProducts, heroBanners] =
      await Promise.all([
        axios.get(subCategoriesUrl, getHeaders()),
        axios.get(trendingProductsUrl, getHeaders()),
        axios.get(newProductsUrl, getHeaders()),
        axios.get(heroBannersUrl, getHeaders()),
      ]);

    return {
      props: {
        popularCategories: popularCategories.data,
        trendingProducts: trendingProducts.data,
        newProducts: newProducts.data,
        heroBanners: heroBanners.data,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        popularCategories: null,
        trendingProducts: null,
        newProducts: null,
        heroBannersUrl: null,
      },
    };
  }
}
