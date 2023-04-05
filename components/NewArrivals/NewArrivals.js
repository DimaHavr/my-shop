import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoritesProducts } from "../../redux/favorites/selectors";
import {
  addToFavoritesList,
  removeFavoritesList,
} from "../../redux/favorites/favoritesSlice";
import Loader from "../../components/Loader/Loader";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FavoriteIcon,
  FavoriteIconRemove,
  FavoriteIconBox,
  Wrapper,
  Section,
  Title,
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
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const favoritesProducts = useSelector(selectFavoritesProducts);

  const handleAddToFavorites = (product) => {
    dispatch(addToFavoritesList(product));
  };

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFavoritesList({ id: productId }));
  };

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
      <Wrapper>
        <Title>New arrivals</Title>
        <Text>"Check out our latest arrivals for the upcoming season"</Text>
        {isLoading ? (
          <Loader />
        ) : (
          <Swiper
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
            {products.map((product) => {
              const isFavorite = favoritesProducts.some(
                (item) => item.id === product.id
              );
              return (
                <SwiperSlide key={product.id}>
                  <SlideBox>
                    <Item key={product.id}>
                      <ImgBox>
                        <Img src={product.image} />
                      </ImgBox>
                      <Subtitle>{product.title}</Subtitle>
                      <TextPrice>{product.price}₴</TextPrice>
                      {!isFavorite ? (
                        <FavoriteIconBox
                          onClick={() => handleAddToFavorites(product)}
                        >
                          <FavoriteIcon />
                        </FavoriteIconBox>
                      ) : (
                        <FavoriteIconBox
                          onClick={() => handleRemoveFromFavorites(product.id)}
                        >
                          <FavoriteIconRemove />
                        </FavoriteIconBox>
                      )}
                    </Item>
                  </SlideBox>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}

        <Button>See the collection here</Button>
      </Wrapper>
    </Section>
  );
};

export default NewArrivals;
