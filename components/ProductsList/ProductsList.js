import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import {
  Section,
  Wrapper,
  List,
  Item,
  Img,
  Subtitle,
  TextPrice,
  ImgBox,
} from "./ProductsList.styled";
import Box from "../Box/Box";

const ProductsList = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Section>
      {isLoading ? (
        <Loader />
      ) : (
        <Wrapper>
          {children}

          <List>
            {products.map((product) => (
              <Item key={product.id}>
                <ImgBox>
                  <Img src={product.image} alt={product.title} />
                </ImgBox>
                <Box>
                  <Subtitle>{product.title}</Subtitle>
                  <TextPrice>{product.price}₴</TextPrice>
                </Box>
              </Item>
            ))}
          </List>

          {children}
        </Wrapper>
      )}
    </Section>
  );
};

export default ProductsList;
