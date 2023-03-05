import dynamic from "next/dynamic";
import { client } from "../lib/client";
const ProductsList = dynamic(() =>
  import("../components/ProductsList/ProductsList")
);

const Layout = dynamic(() => import("../components/Layout/Layout"));

const Shop = ({ products, pageQuery }) => {
  return (
    <Layout pageTitle="My-Shop">
      <ProductsList products={products} pageQuery={pageQuery} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const pageQuery = "product";

  return {
    props: { products, pageQuery },
  };
};

export default Shop;
