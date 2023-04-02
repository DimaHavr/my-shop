import { useState, useEffect } from "react";
import axios from "axios";

import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FavoriteIcon,
  FavoriteIconBox,
  Wrapper,
  Section,
  Title,
  List,
  SlideBox,
  Item,
  Img,
  Subtitle,
  TextPrice,
  Text,
  Button,
  ImgBox,
} from "./NewArrivals.styled";

const NewArrivals = () => {
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
        <Title>New arrivals</Title>
        <Text>"Check out our latest arrivals for the upcoming season"</Text>
        <List
          breakpoints={{
            620: {
              slidesPerView: 1,
              spaceBetween: 30,
            },

            730: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1040: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1900: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <SlideBox>
                <Item key={product.id}>
                  <ImgBox>
                    <Img src={product.image} />
                  </ImgBox>
                  <Subtitle>{product.title}</Subtitle>
                  <TextPrice>{product.price}₴</TextPrice>
                  <FavoriteIconBox>
                    <FavoriteIcon />
                  </FavoriteIconBox>
                </Item>
              </SlideBox>
            </SwiperSlide>
          ))}
        </List>
        <Button>See the collection here</Button>
      </Wrapper>
    </Section>
  );
};

export default NewArrivals;
