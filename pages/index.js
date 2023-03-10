import dynamic from "next/dynamic";
import { client } from "../lib/client";

const Layout = dynamic(() => import("../components/Layout/Layout"));
const HeroBanner = dynamic(() => import("../components/HeroBanner/HeroBanner"));
const ProductsList = dynamic(() =>
  import("../components/ProductsList/ProductsList")
);

const Index = ({ bannerData, productsData }) => {
  return (
    <Layout pageTitle="My-Shop">
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <ProductsList products={productsData} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const productsQuery = '*[_type == "products"]';
  const productsData = await client.fetch(productsQuery);
  return {
    props: { bannerData, productsData },
  };
};

export default Index;
