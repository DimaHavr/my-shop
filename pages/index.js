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

const Index = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Layout pageTitle="My-Shop">
        <HeroBanner />
        <PopularCategories />
        <NewArrivals />
      </Layout>
    </Box>
  );
};

export default Index;
