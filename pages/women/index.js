import axios from "axios";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { cache } from "../../utils/cache";
import { useRouter } from "next/router";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { selectShowFilter } from "../../redux/filter/selectors";
import { selectShowCart } from "../../redux/cart/selectors";
import {
  selectSortPrice,
  selectSortNew,
  selectSortPopular,
} from "../../redux/sort/selectors";
import getHeaders from "../../hooks/getHeaders";
import Box from "../../components/Box/Box";
import Layout from "../../components/Layout/Layout";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Loader from "../../components/Loader/Loader";

const SubscribeBox = dynamic(() =>
  import("../../components/SubscribeBox/SubscribeBox")
);
const ProductsList = dynamic(() =>
  import("../../components/ProductsList/ProductsList")
);
const Categories = dynamic(() =>
  import("../../components/Categories/Categories")
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
  const showCart = useSelector(selectShowCart);
  const showFilter = useSelector(selectShowFilter);
  async function fetchProducts() {
    setLoading(true);
    if (!sortPrice && !sortNew && !sortPopular) {
      setProducts(props.products);
      setLoading(false);
      return;
    }
    const productsUrl = `https://my-shop-strapi.onrender.com/api/products?populate=*&[filters][categories][title][$startsWithi]=Жіночий${
      sortPrice ? `&sort=price:${sortPrice}` : ""
    }${sortNew ? `&sort=createdAt:${sortNew}` : ""}`;

    try {
      const response = await axios.get(productsUrl, getHeaders());
      const products = response.data;
      setProducts(products);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [sortPopular, sortPrice, sortNew]);

  const categoriesPath = props.subCategories.data.map((item) => ({
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
        <Categories categories={props.subCategories.data} />
        {loading && <Loader loading={loading} />}
        <ProductsList products={products.data} />
        <SubscribeBox />
      </Layout>
    </Box>
  );
};

export default Index;

export async function getServerSideProps() {
  const subCategoriesUrl =
    "https://my-shop-strapi.onrender.com/api/sub-categories?populate=*&[filters][categories][title][$startsWithi]=Жіночий";

  const productsUrl = `https://my-shop-strapi.onrender.com/api/products?populate=*&[filters][categories][title][$startsWithi]=Жіночий`;

  try {
    const [subCategories, products] = await Promise.all([
      cache.getOrFetch("subCategories", async () => {
        const responseSubCat = await axios.get(subCategoriesUrl, getHeaders());
        return responseSubCat.data;
      }),
      cache.getOrFetch("products", async () => {
        const responseProducts = await axios.get(productsUrl, getHeaders());
        return responseProducts.data;
      }),
    ]);
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
