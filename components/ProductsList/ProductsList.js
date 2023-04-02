import { useState, useEffect } from "react";
import axios from "axios";

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

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <Section>
      <Wrapper>
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
      </Wrapper>
    </Section>
  );
};

export default ProductsList;
