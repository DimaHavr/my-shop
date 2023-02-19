import dynamic from "next/dynamic";
// import GetProducts from "../components/GetProducts";

const Layout = dynamic(() => import("../components/Layout/Layout"));
const ProductCatalogDropdown = dynamic(() =>
  import("../components/ProductsCatalog/ProductsCatalog")
);
const ProductCarousel = dynamic(() =>
  import("../components/ProductCarousel/ProductCarousel")
);

const Index = () => {
  return (
    <Layout pageTitle="My-Shop">
      <ProductCatalogDropdown />
      <ProductCarousel />
      {/* <GetProducts /> */}
    </Layout>
  );
};

export default Index;
