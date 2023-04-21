import axios from "axios";
import dynamic from "next/dynamic";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { selectShowFilter } from "../../redux/filter/selectors";
import { selectShowCart } from "../../redux/cart/selectors";
import Box from "../../components/Box/Box";
const Layout = dynamic(() => import("../../components/Layout/Layout"));
const SubscribeBox = dynamic(() =>
  import("../../components/SubscribeBox/SubscribeBox")
);
const ProductsList = dynamic(() =>
  import("../../components/ProductsList/ProductsList")
);
const Categories = dynamic(() =>
  import("../../components/Categories/Categories")
);
const ToolBar = dynamic(() => import("../../components/ToolBar/ToolBar"));

const Index = ({ womenProducts, subCategories }) => {
  const showCart = useSelector(selectShowCart);
  const showFilter = useSelector(selectShowFilter);
  const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ showCart, showFilter }) =>
      showCart || showFilter ? "hidden" : "auto"};
  }
`;
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <GlobalStyle showCart={showCart} showFilter={showFilter} />
      <Layout pageTitle="My-Shop">
        <Categories categories={subCategories.data} />
        <ProductsList products={womenProducts.data}>
          <ToolBar />
        </ProductsList>
        <SubscribeBox />
      </Layout>
    </Box>
  );
};
1;
export default Index;

function getHeaders() {
  return {
    headers: {
      Authorization: `Bearer 1aa8eca2907e2c5d6fa22265203be2e366445abe6397f4c12f3488ea83080b8826988c86a945817c971699466a3f24ec4b6d6ae2385614e9bb0c2f5ebb8d1ffde0ae2ddddb89f063a5d49d64cc59b962e76717077760a1feaaa592707c537490d24fac53faef3434e6abd47a6c72d1a1d4110c786e0e200ce3bdf22e6aa3529e`,
    },
  };
}

export async function getStaticProps() {
  const subCategoriesUrl =
    "https://my-shop-strapi.onrender.com/api/sub-categories?populate=*";
  const womenProductsUrl =
    "https://my-shop-strapi.onrender.com/api/products?populate=*&[filters][categories][title][$startsWithi]=Жіночий";

  const responseSubCat = await axios.get(subCategoriesUrl, getHeaders());
  const subCategories = await responseSubCat.data;

  const responseProducts = await axios.get(womenProductsUrl, getHeaders());
  const womenProducts = await responseProducts.data;

  return {
    props: {
      subCategories,
      womenProducts,
    },
  };
}
