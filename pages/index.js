import dynamic from "next/dynamic";
import { client } from "../lib/client";

const Layout = dynamic(() => import("../components/Layout/Layout"));
const HeroBanner = dynamic(() => import("../components/HeroBanner/HeroBanner"));
const SaleHitProductsList = dynamic(() =>
  import("../components/SaleHitProductsList/SaleHitProductsList")
);

const Index = ({ products, bannerData, hitProductsData }) => {
  return (
    <Layout pageTitle="My-Shop">
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <SaleHitProductsList hitProducts={hitProductsData} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const hitProductsQuery = '*[_type == "hitProducts"]';
  const hitProductsData = await client.fetch(hitProductsQuery);

  return {
    props: { products, bannerData, hitProductsData },
  };
};

export default Index;
