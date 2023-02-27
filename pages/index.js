import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/Layout/Layout"));
const ProductCarousel = dynamic(() =>
  import("../components/ProductCarousel/ProductCarousel")
);
const SaleHitProductsList = dynamic(() =>
  import("../components/SaleHitProductsList/SaleHitProductsList")
);

const Index = () => {
  return (
    <Layout pageTitle="My-Shop">
      <ProductCarousel />
      <SaleHitProductsList />
    </Layout>
  );
};

export default Index;
