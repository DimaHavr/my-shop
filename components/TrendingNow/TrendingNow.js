import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../redux/products/operations";
import {
  selectAllProducts,
  selectLoadingProducts,
} from "../../redux/products/selectors";
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
  FavoriteIconRemove,
  FavoriteIcon,
  FavoriteIconBox,
  Wrapper,
  Section,
  Title,
  Text,
  Item,
  Img,
  Subtitle,
  TextPrice,
  Button,
  SlideBox,
  ImgBox,
} from "./TrendingNow.styled";

const TrendingNow = () => {
  const products = useSelector(selectAllProducts);
  const isLoading = useSelector(selectLoadingProducts);
  const favoritesProducts = useSelector(selectFavoritesProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const handleAddToFavorites = (product) => {
    dispatch(addToFavoritesList(product));
  };

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFavoritesList({ id: productId }));
  };

  return (
    <Section>
      <Wrapper>
        <Title>Trending now</Title>
        <Text>"Wardrobe must-haves: the top clothing items trending now."</Text>
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

        <Button>Explore top sales</Button>
      </Wrapper>
    </Section>
  );
};

export default TrendingNow;
