import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Box from "../../../components/Box/Box";
import Layout from "../../../components/Layout/Layout";
const ProductDetails = dynamic(() =>
  import("../../../components/ProductDetails/ProductDetails")
);
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

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
function getHeaders() {
  return {
    headers: {
      Authorization: `Bearer 1aa8eca2907e2c5d6fa22265203be2e366445abe6397f4c12f3488ea83080b8826988c86a945817c971699466a3f24ec4b6d6ae2385614e9bb0c2f5ebb8d1ffde0ae2ddddb89f063a5d49d64cc59b962e76717077760a1feaaa592707c537490d24fac53faef3434e6abd47a6c72d1a1d4110c786e0e200ce3bdf22e6aa3529e`,
    },
  };
}

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
  const productsUrl =
    "https://my-shop-strapi.onrender.com/api/products?populate=*&[filters][categories][title][$startsWithi]=Дитячий";

  const resProducts = await axios.get(productsUrl, getHeaders());
  const products = await resProducts.data;

  const allPaths = products.data.map((item) => {
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
}
