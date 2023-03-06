import dynamic from "next/dynamic";
// import { client } from "../lib/client";
// const ProductsList = dynamic(() =>
//   import("../components/ProductsList/ProductsList")
// );

const Layout = dynamic(() => import("../components/Layout/Layout"));

const Shop = () => {
  return (
    <Layout pageTitle="My-Shop">
      <h1>Category</h1>
    </Layout>
  );
};

export default Shop;
