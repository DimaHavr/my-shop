import { createGlobalStyle } from "styled-components";
import { useStateContext } from "../../context/StateContext";
import dynamic from "next/dynamic";
import Box from "../../components/Box/Box";
const Layout = dynamic(() => import("../../components/Layout/Layout"));
const SubscribeBox = dynamic(() =>
  import("../../components/SubscribeBox/SubscribeBox")
);
const ProductsList = dynamic(() =>
  import("../../components/ProductsList/ProductsList")
);
const Categories = dynamic(() =>
  import("../../components/Categories/Categories")
);
const ToolBar = dynamic(() => import("../../components/ToolBar/ToolBar"));

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
        <Categories />
        <ProductsList>
          <ToolBar />
        </ProductsList>
        <SubscribeBox />
      </Layout>
    </Box>
  );
};

export default Index;
