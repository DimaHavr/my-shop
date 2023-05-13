import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import getHeaders from "../../../hooks/getHeaders";
import Box from "../../../components/Box/Box";
import Layout from "../../../components/Layout/Layout";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import ProductDetails from "../../../components/ProductDetails/ProductDetails";

const RecommendedProducts = dynamic(() =>
  import("../../../components/RecommendedProducts/RecommendedProducts")
);

const ProductScreen = ({ product, recommendProducts }) => {
  const router = useRouter();
  const breadcrumbValue = router.query.subcategories;
  const subCategoriesPath = [
    {
      title: product.data.attributes.sub_categories.data[0].attributes.title,
      subCatPath:
        product.data.attributes.sub_categories.data[0].attributes.slug,
      categoryPath: product.data.attributes.categories.data[0].attributes.slug,
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
        <RecommendedProducts recommendProducts={recommendProducts} />
      </Layout>
    </Box>
  );
};

export default ProductScreen;

export async function getStaticProps({ params }) {
  const slug = params.subcategories;
  const id = params.id;
  const productUrl = `${process.env.BASE_URL}/api/products/${id}?populate=*`;
  const recommendProductsUrl = `https://my-shop-strapi.onrender.com/api/products?populate=*&[filters][sub_categories][slug]=${encodeURIComponent(
    slug
  )}`;

  try {
    const [responseProduct, responseRecommendProducts] = await Promise.all([
      axios.get(productUrl, getHeaders()),
      axios.get(recommendProductsUrl, getHeaders()),
    ]);
    const product = responseProduct.data;
    const recommendProducts = responseRecommendProducts.data;

    return {
      props: { product, recommendProducts },
      revalidate: 60,
    };
  } catch (error) {
    console.error(error);
    return {
      props: { product: null, recommendProducts: null },
    };
  }
}

export async function getStaticPaths() {
  const womenProductsUrl = `${process.env.BASE_URL}/api/products?populate=*&[filters][categories][title][$startsWithi]=Жіночий`;

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
      fallback: "blocking",
    };
  } catch (error) {
    console.error(error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}
