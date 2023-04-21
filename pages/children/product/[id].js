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
        <ProductDetails product={product} />
      </Layout>
    </Box>
  );
};

export default ProductScreen;

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
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
