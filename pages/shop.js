import dynamic from "next/dynamic";
import { client } from "../lib/client";

const Categories = dynamic(() => import("./categories"));

const Layout = dynamic(() => import("../components/Layout/Layout"));

const Shop = ({ categories }) => {
  return (
    <Layout pageTitle="My-Shop">
      <h1>Category</h1>
      <Categories />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const categoriesQuery = '*[_type == "categories"]';
  const categories = await client.fetch(categoriesQuery);
  console.log(categories);
  return {
    props: { categories },
  };
};

export default Shop;
