import dynamic from "next/dynamic";
import { client } from "../lib/client";

const Layout = dynamic(() => import("../components/Layout/Layout"));
const HeroBanner = dynamic(() => import("../components/HeroBanner/HeroBanner"));
const ProductsList = dynamic(() =>
  import("../components/ProductsList/ProductsList")
);

const Index = ({ bannerData, hitProductsData, pageQuery }) => {
  return (
    <Layout pageTitle="My-Shop">
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <ProductsList products={hitProductsData} pageQuery={pageQuery} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const hitProductsQuery = '*[_type == "hitProducts"]';
  const hitProductsData = await client.fetch(hitProductsQuery);
  const pageQuery = "hit-products";
  return {
    props: { bannerData, hitProductsData, pageQuery },
  };
};

export default Index;
