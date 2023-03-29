import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../components/Layout/Layout"));
import Box from "../components/Box/Box";
const Shop = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Layout pageTitle="My-Shop">
        <h1>Category</h1>
      </Layout>
    </Box>
  );
};

export default Shop;
