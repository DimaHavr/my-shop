import { createGlobalStyle } from "styled-components";
import { useStateContext } from "../context/StateContext";
import dynamic from "next/dynamic";
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

const Index = () => {
  const { showCart } = useStateContext();

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
        <PopularCategories />
        <TrendingNow />
        <NewArrivals />
        <ServicesList />
        <InstagramBox />
        <SubscribeBox />
      </Layout>
    </Box>
  );
};

export default Index;
