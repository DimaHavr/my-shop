import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { selectShowFilter } from "../../../redux/filter/selectors";
import { selectShowCart } from "../../../redux/cart/selectors";
import { selectSortValue } from "../../../redux/sort/selectors";
import getHeaders from "../../../hooks/getHeaders";
import Box from "../../../components/Box/Box";
import Layout from "../../../components/Layout/Layout";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import Loader from "../../../components/Loader/Loader";

const SubscribeBox = dynamic(() =>
  import("../../../components/SubscribeBox/SubscribeBox")
);
const ProductsList = dynamic(() =>
  import("../../../components/ProductsList/ProductsList")
);
const Categories = dynamic(() =>
  import("../../../components/Categories/Categories")
);
const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ showCart, showFilter }) =>
      showCart || showFilter ? "hidden" : "auto"};
  }
`;
const Index = (props) => {
  const [products, setProducts] = useState(props.products);
  const [loading, setLoading] = useState(false);
  const sort = useSelector(selectSortValue);
  const router = useRouter();
  const showCart = useSelector(selectShowCart);
  const showFilter = useSelector(selectShowFilter);

  const subCategoriesPath = props.subCategories.data.map((item) => ({
    title: item.attributes.title,
    path: item.attributes.slug,
  }));

  const breadcrumbValue = router.query.subcategories;

  async function fetchProducts() {
    setLoading(true);
    const productsUrl = `https://my-shop-strapi.onrender.com/api/products?populate=*&[filters][sub_categories][slug]=${encodeURIComponent(
      props.slug
    )}${sort === "" ? "" : `&sort=price:${sort}`}`;

    try {
      const response = await axios.get(productsUrl, getHeaders());
      const products = response.data;
      console.log(products);
      setProducts(products);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [sort, props.slug]);

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <GlobalStyle showCart={showCart} showFilter={showFilter} />
      <Layout pageTitle="My-Shop">
        <Breadcrumb
          breadcrumbArr={subCategoriesPath}
          breadcrumbValue={breadcrumbValue}
        />
        <Categories categories={props.subCategories.data} />
        <ProductsList products={products.data} />
        <SubscribeBox />
        {loading && <Loader loading={loading} />}
      </Layout>
    </Box>
  );
};
export default Index;

export async function getStaticProps({ params }) {
  const slug = params.subcategories;
  const subCategoriesUrl =
    "https://my-shop-strapi.onrender.com/api/sub-categories?populate=*&[filters][categories][title][$startsWithi]=Жіночий";

  const productsUrl = `https://my-shop-strapi.onrender.com/api/products?populate=*&[filters][sub_categories][slug]=${encodeURIComponent(
    slug
  )}`;

  try {
    const [responseSubCat, responseProducts] = await Promise.all([
      axios.get(subCategoriesUrl, getHeaders()),
      axios.get(productsUrl, getHeaders()),
    ]);
    const subCategories = responseSubCat.data;
    const products = responseProducts.data;

    return {
      props: { subCategories, products, slug },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { subCategories: null, products: null },
    };
  }
}

export async function getStaticPaths() {
  const subCategoriesUrl =
    "https://my-shop-strapi.onrender.com/api/sub-categories?populate=*&[filters][categories][title][$startsWithi]=Жіночий";

  try {
    const responseSubCat = await axios.get(subCategoriesUrl, getHeaders());
    const subCategories = await responseSubCat.data;

    const allPaths = subCategories.data.map((item) => {
      return {
        params: {
          subcategories: item.attributes.slug.toString(),
        },
      };
    });

    return {
      paths: allPaths,
      fallback: false,
    };
  } catch (error) {
    console.error(error);
    return {
      paths: [],
      fallback: false,
    };
  }
}
