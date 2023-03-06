import dynamic from "next/dynamic";
import { client } from "../../lib/client";

const Layout = dynamic(() => import("../../components/Layout/Layout"));
const ProductsList = dynamic(() =>
  import("../../components/ProductsList/ProductsList")
);

const Index = ({ hitProductsData }) => {
  return (
    <Layout pageTitle="My-Shop">
      <ProductsList products={hitProductsData} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const hitProductsQuery = '*[_type == "hitProducts"]';
  const hitProductsData = await client.fetch(hitProductsQuery);
  return {
    props: { hitProductsData },
  };
};

export default Index;
