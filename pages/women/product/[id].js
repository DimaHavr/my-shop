import axios from "axios";
import dynamic from "next/dynamic";

import Box from "../../../components/Box/Box";
import Loader from "../../../components/Loader/Loader";
import Layout from "../../../components/Layout/Layout";
import ProductDetails from "../../../components/ProductDetails/ProductDetails";

const ProductScreen = ({ product }) => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Layout pageTitle="My-Shop">
        <ProductDetails product={product.data} />
      </Layout>
    </Box>
  );
};

export default ProductScreen;

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
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

function getHeaders() {
  return {
    headers: {
      Authorization: `Bearer 1aa8eca2907e2c5d6fa22265203be2e366445abe6397f4c12f3488ea83080b8826988c86a945817c971699466a3f24ec4b6d6ae2385614e9bb0c2f5ebb8d1ffde0ae2ddddb89f063a5d49d64cc59b962e76717077760a1feaaa592707c537490d24fac53faef3434e6abd47a6c72d1a1d4110c786e0e200ce3bdf22e6aa3529e`,
    },
  };
}

// export async function getStaticProps() {
//   const womenProductsUrl =
//     "https://my-shop-strapi.onrender.com/api/products?populate=*&[filters][categories][title][$startsWithi]=Жіночий";

//   const responseSubCat = await axios.get(subCategoriesUrl, getHeaders());
//   const subCategories = await responseSubCat.data;

//   const responseProducts = await axios.get(womenProductsUrl, getHeaders());
//   const womenProducts = await responseProducts.data;

//   return {
//     props: {
//       subCategories,
//       womenProducts,
//     },
//   };
// }
