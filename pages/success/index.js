import axios from "axios";
import crypto from "crypto";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Confetti from "react-confetti";
import { cache } from "../../utils/cache";
import { selectShowCart } from "../../redux/cart/selectors";
import { selectTotalPrice } from "../../redux/cart/selectors";
import {
  setCartItems,
  setTotalQuantities,
  setTotalPrice,
} from "../../redux/cart/cartSlice";
import { setOrderId } from "../../redux/order/orderSlice";
import { selectOrderId } from "../../redux/order/selectors";
import getHeaders from "../../hooks/getHeaders";
import Box from "../../components/Box/Box";
import Layout from "../../components/Layout/Layout";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import SuccessBox from "../../components/SuccessBox/SuccessBox";
import { utf8_to_b64 } from "../../utils/getLiqpayData";

const PopularCategories = dynamic(() =>
  import("../../components/PopularCategories/PopularCategories")
);
const NewArrivals = dynamic(() =>
  import("../../components/NewArrivals/NewArrivals")
);
const TrendingNow = dynamic(() =>
  import("../../components/TrendingNow/TrendingNow")
);
const ServicesList = dynamic(() =>
  import("../../components/ServicesList/ServicesList")
);
const InstagramBox = dynamic(() =>
  import("../../components/InstagramBox/InstagramBox")
);
const SubscribeBox = dynamic(() =>
  import("../../components/SubscribeBox/SubscribeBox")
);
const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ showCart }) => (showCart ? "hidden" : "auto")};
  }
`;
const Index = ({
  popularCategories,
  trendingProducts,
  newProducts,
  heroBanners,
}) => {
  const [status, setStatus] = useState("");
  const [isConfettiActive, setConfettiActive] = useState(true);
  const showCart = useSelector(selectShowCart);
  const totalPrice = useSelector(selectTotalPrice);
  const orderId = useSelector(selectOrderId);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendData = async () => {
      const publicKey = process.env.NEXT_PUBLIC_LIQPAY_PUBLIC_KEY;
      const privateKey = process.env.NEXT_PUBLIC_LIQPAY_PRIVAT_KEY;
      const amount = totalPrice;
      const currency = "UAH";
      const description = "test";
      const version = 3;

      const jsonString = {
        public_key: publicKey,
        version: version,
        action: "pay",
        amount: amount,
        currency: currency,
        description: description,
        order_id: Math.floor(1 + Math.random() * 900000000),
      };

      const data = utf8_to_b64(JSON.stringify(jsonString)).toString();
      const signString = privateKey + data + privateKey;
      const sha1 = crypto.createHash("sha1");
      sha1.update(signString);
      const signature = sha1.digest("base64").toString();
      console.log("data", data);
      console.log("signature", signature);
      console.log(orderId);

      try {
        const response = await axios.post("/api/liqpay_request", {
          data: data,
          signature: signature,
        });
        setStatus(response.data.status);
        dispatch(setCartItems([]));
        dispatch(setTotalQuantities(0));
        dispatch(setTotalPrice(0));
        dispatch(setOrderId(""));
        console.log("send");

        console.log("Liqpay API response:", response.data);
      } catch (error) {
        console.error("Liqpay API request failed:", error);
      }
    };

    sendData();
  }, [orderId]);

  console.log("status:", status);

  return (
    <SuccessBox setConfettiActive={setConfettiActive}>
      {isConfettiActive && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          colors={["#0000ff", "#ffff00"]}
        />
      )}
      <Box display="flex" flexDirection="column" height="100vh">
        <GlobalStyle showCart={showCart} />
        <Layout pageTitle="My-Shop">
          <HeroBanner heroBanners={heroBanners.data} />
          <PopularCategories popularCategories={popularCategories} />
          <TrendingNow trendingProducts={trendingProducts} />
          <NewArrivals newProducts={newProducts} />
          <ServicesList />
          <InstagramBox />
          <SubscribeBox />
        </Layout>
      </Box>
    </SuccessBox>
  );
};

export default Index;

export async function getStaticProps() {
  const subCategoriesUrl =
    "https://my-shop-strapi.onrender.com/api/sub-categories?populate=*";
  const trendingProductsUrl =
    "https://my-shop-strapi.onrender.com/api/products?populate=*&[filters][type][$eq]=trending";
  const newProductsUrl =
    "https://my-shop-strapi.onrender.com/api/products?populate=*&[filters][type][$eq]=new";
  const heroBannersUrl =
    "https://my-shop-strapi.onrender.com/api/hero-banners?populate=*";

  try {
    const [popularCategories, trendingProducts, newProducts, heroBanners] =
      await Promise.all([
        cache.getOrFetch("popularCategories", async () => {
          const response = await axios.get(subCategoriesUrl, getHeaders());
          return response.data;
        }),
        cache.getOrFetch("trendingProducts", async () => {
          const response = await axios.get(trendingProductsUrl, getHeaders());
          return response.data;
        }),
        cache.getOrFetch("newProducts", async () => {
          const response = await axios.get(newProductsUrl, getHeaders());
          return response.data;
        }),
        cache.getOrFetch("heroBanners", async () => {
          const response = await axios.get(heroBannersUrl, getHeaders());
          return response.data;
        }),
      ]);

    return {
      props: {
        popularCategories,
        trendingProducts,
        newProducts,
        heroBanners,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        popularCategories: null,
        trendingProducts: null,
        newProducts: null,
      },
    };
  }
}
