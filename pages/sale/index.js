const clothesProduct = [
  {
    name: "Women's T-Shirt",
    price: 29.99,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Red", "Navy"],
    description:
      "A classic t-shirt for women, made from soft and breathable cotton fabric.",
    fabric: "100% Cotton",
    photos: [
      "https://example.com/tshirt-black-front.jpg",
      "https://example.com/tshirt-black-back.jpg",
      "https://example.com/tshirt-white-front.jpg",
      "https://example.com/tshirt-white-back.jpg",
    ],
  },
  {
    name: "Women's T-Shirt",
    price: 29.99,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Red", "Navy"],
    description:
      "A classic t-shirt for women, made from soft and breathable cotton fabric.",
    fabric: "100% Cotton",
    photos: [
      "https://example.com/tshirt-black-front.jpg",
      "https://example.com/tshirt-black-back.jpg",
      "https://example.com/tshirt-white-front.jpg",
      "https://example.com/tshirt-white-back.jpg",
    ],
  },
];

import { createGlobalStyle } from "styled-components";
import { useStateContext } from "../../context/StateContext";
import dynamic from "next/dynamic";
import Box from "../../components/Box/Box";
const Layout = dynamic(() => import("../../components/Layout/Layout"));
const SubscribeBox = dynamic(() =>
  import("../../components/SubscribeBox/SubscribeBox")
);

const Index = () => {
  const { showCart } = useStateContext();

  const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ showCart }) => (showCart ? "hidden" : "auto")};
  }
`;
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <GlobalStyle showCart={showCart} />
      <Layout pageTitle="My-Shop">
        <SubscribeBox />
      </Layout>
    </Box>
  );
};

export default Index;
