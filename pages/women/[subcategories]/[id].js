import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import getHeaders from "../../../hooks/getHeaders";
import Box from "../../../components/Box/Box";
import Layout from "../../../components/Layout/Layout";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

const ProductDetails = dynamic(() =>
  import("../../../components/ProductDetails/ProductDetails")
);

const ProductScreen = ({ product }) => {
  const router = useRouter();
  const breadcrumbValue = router.query.subcategories;
  const subCategoriesPath = [
    {
      title: product.data.attributes.sub_categories.data[0].attributes.title,
      path: product.data.attributes.sub_categories.data[0].attributes.slug,
    },
  ];

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Layout pageTitle="My-Shop">
        <Breadcrumb
          breadcrumbArr={subCategoriesPath}
          breadcrumbValue={breadcrumbValue}
        />
        <ProductDetails product={product.data} />
      </Layout>
    </Box>
  );
};

export default ProductScreen;

export async function getStaticProps({ params }) {
  const id = params.id;
  const productUrl = `https://my-shop-strapi.onrender.com/api/products/${id}?populate=*`;
  try {
    const res = await axios.get(productUrl, getHeaders());
    const product = res.data;
    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
}

export async function getStaticPaths() {
  const womenProductsUrl =
    "https://my-shop-strapi.onrender.com/api/products?populate=*&[filters][categories][title][$startsWithi]=Жіночий";

  try {
    const resProducts = await axios.get(womenProductsUrl, getHeaders());
    const womenProducts = await resProducts.data;

    const allPaths = womenProducts.data.map((item) => {
      return {
        params: {
          subcategories:
            item.attributes.sub_categories.data[0].attributes.slug.toString(),
          id: item.id.toString(),
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
