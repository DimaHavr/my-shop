import dynamic from "next/dynamic";
// import GetProducts from "../components/GetProducts";

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
      {/* <GetProducts /> */}
    </Layout>
  );
};

export default Index;
