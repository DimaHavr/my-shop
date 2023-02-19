import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/Layout/Layout"));

const Shop = () => {
  return <Layout pageTitle="My-Shop"></Layout>;
};

export default Shop;
