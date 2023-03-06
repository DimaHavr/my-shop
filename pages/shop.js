import dynamic from "next/dynamic";
import { client } from "../lib/client";
const ProductsList = dynamic(() =>
  import("../components/ProductsList/ProductsList")
);

const Layout = dynamic(() => import("../components/Layout/Layout"));

const Shop = ({ products }) => {
  return (
    <Layout pageTitle="My-Shop">
      <ProductsList products={products} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default Shop;
