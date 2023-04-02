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
  Text,
  List,
  Item,
  Img,
  Subtitle,
  TextPrice,
  Button,
  SlideBox,
  ImgBox,
} from "./TrendingNow.styled";

const TrendingNow = () => {
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
        <Title>Trending now</Title>
        <Text>"Wardrobe must-haves: the top clothing items trending now."</Text>
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
          autoHeight={true}
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
        <Button>Explore top sales</Button>
      </Wrapper>
    </Section>
  );
};

export default TrendingNow;
