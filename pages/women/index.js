import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { selectShowFilter } from "../../redux/filter/selectors";
import { selectShowCart } from "../../redux/cart/selectors";
import getHeaders from "../../hooks/getHeaders";
import Box from "../../components/Box/Box";
import Layout from "../../components/Layout/Layout";
import ToolBar from "../../components/ToolBar/ToolBar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const SubscribeBox = dynamic(() =>
  import("../../components/SubscribeBox/SubscribeBox")
);
const ProductsList = dynamic(() =>
  import("../../components/ProductsList/ProductsList")
);
const Categories = dynamic(() =>
  import("../../components/Categories/Categories")
);

const Index = ({ products, subCategories }) => {
  const showCart = useSelector(selectShowCart);
  const showFilter = useSelector(selectShowFilter);
  const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ showCart, showFilter }) =>
      showCart || showFilter ? "hidden" : "auto"};
  }
`;

  const categoriesPath = subCategories.data.map((item) => ({
    title: item.attributes.categories.data[0].attributes.title,
    path: item.attributes.categories.data[0].attributes.title.slug,
  }));

  const router = useRouter();
  const breadcrumbValue = router.query.categories;

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <GlobalStyle showCart={showCart} showFilter={showFilter} />
      <Layout pageTitle="My-Shop">
        <Breadcrumb
          breadcrumbArr={categoriesPath}
          breadcrumbValue={breadcrumbValue}
        />
        <Categories categories={subCategories.data} />
        <ProductsList products={products.data}>
          <ToolBar />
        </ProductsList>
        <SubscribeBox />
      </Layout>
    </Box>
  );
};

export default Index;

export async function getServerSideProps() {
  const subCategoriesUrl =
    "https://my-shop-strapi.onrender.com/api/sub-categories?populate=*&[filters][categories][title][$startsWithi]=Жіночий";
  const productsUrl =
    "https://my-shop-strapi.onrender.com/api/products?populate=*&[filters][categories][title][$startsWithi]=Жіночий";

  try {
    const responseSubCat = await axios.get(subCategoriesUrl, getHeaders());
    const subCategories = await responseSubCat.data;

    const responseProducts = await axios.get(productsUrl, getHeaders());
    const products = await responseProducts.data;

    return {
      props: {
        subCategories,
        products,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        subCategories: {},
        products: {},
      },
    };
  }
}
