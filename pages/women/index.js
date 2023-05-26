import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { fetchSortCategoryProducts } from "../../services/fetchSortProducts";
import {
  selectSortPrice,
  selectSortNew,
  selectSortPopular,
  selectSelectedSort,
} from "../../redux/sort/selectors";
import getHeaders from "../../hooks/getHeaders";
import Box from "../../components/Box/Box";
import Layout from "../../components/Layout/Layout";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Loader from "../../components/Loader/Loader";
import ProductsList from "../../components/ProductsList/ProductsList";
import Categories from "../../components/Categories/Categories";
const SubscribeBox = dynamic(() =>
  import("../../components/SubscribeBox/SubscribeBox")
);

const Index = (props) => {
  const [products, setProducts] = useState(props.products);
  const [loading, setLoading] = useState(false);
  const sortPrice = useSelector(selectSortPrice);
  const sortNew = useSelector(selectSortNew);
  const sortPopular = useSelector(selectSortPopular);
  const sortValue = useSelector(selectSelectedSort);
  const router = useRouter();
  const breadcrumbValue = router.query.categories;
  console.log(sortValue);
  useEffect(() => {
    if (sortValue === "") {
      setProducts(props.products);
      return;
    }
    fetchSortCategoryProducts(
      setProducts,
      setLoading,
      sortPrice,
      sortNew,
      sortPopular
    );
  }, [sortPopular, sortPrice, sortNew]);

  const categoriesPath = useMemo(
    () =>
      props.subCategories.data.map((item) => ({
        title: item.attributes.categories.data[0].attributes.title,
        categoryPath: item.attributes.categories.data[0].attributes.title.slug,
      })),
    [props.subCategories.data]
  );

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Layout subCategories={props.subCategories} pageTitle="My-Shop">
        <Breadcrumb
          breadcrumbArr={categoriesPath}
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

export async function getStaticProps() {
  const subCategoriesUrl = `${process.env.BASE_URL}/api/sub-categories?populate=*&[filters][categories][title][$startsWithi]=Жіночий`;
  const productsUrl = `${process.env.BASE_URL}/api/products?populate=*&[filters][categories][title][$startsWithi]=Жіночий`;

  try {
    const [subCategoriesResponse, productsResponse] = await Promise.all([
      axios.get(subCategoriesUrl, getHeaders()),
      axios.get(productsUrl, getHeaders()),
    ]);

    const subCategories = subCategoriesResponse.data;
    const products = productsResponse.data;

    return {
      props: {
        subCategories,
        products,
      },
      revalidate: 60,
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
