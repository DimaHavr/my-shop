import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { fetchSortSubCatProducts } from "../../../services/fetchSortProducts";
import { selectShowFilter } from "../../../redux/filter/selectors";
import { selectShowCart } from "../../../redux/cart/selectors";
import {
  selectSortPrice,
  selectSortNew,
  selectSortPopular,
} from "../../../redux/sort/selectors";
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
  const sortPrice = useSelector(selectSortPrice);
  const sortNew = useSelector(selectSortNew);
  const sortPopular = useSelector(selectSortPopular);
  const router = useRouter();
  const showCart = useSelector(selectShowCart);
  const showFilter = useSelector(selectShowFilter);

  useEffect(() => {
    fetchSortSubCatProducts(
      setProducts,
      setLoading,
      sortPrice,
      sortNew,
      sortPopular,
      props
    );
  }, [sortPopular, sortPrice, sortNew, props.products, props.slug]);

  const subCategoriesPath = props.subCategories.data.map((item) => ({
    title: item.attributes.title,
    subCatPath: item.attributes.slug,
    categoryPath: item.attributes.categories.data[0].attributes.slug,
  }));

  const breadcrumbValue = router.query.subcategories;

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
      revalidate: 60,
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
      fallback: "blocking",
    };
  } catch (error) {
    console.error(error);
    return {
      paths: [],
      fallback: false,
    };
  }
}
