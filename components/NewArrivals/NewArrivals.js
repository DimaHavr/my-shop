import { useDispatch, useSelector } from "react-redux";
import { selectFavoritesProducts } from "../../redux/favorites/selectors";
import {
  addToFavoritesList,
  removeFavoritesList,
} from "../../redux/favorites/favoritesSlice";
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

const NewArrivals = ({ newProducts }) => {
  const dispatch = useDispatch();
  const favoritesProducts = useSelector(selectFavoritesProducts);

  const handleAddToFavorites = (product) => {
    dispatch(addToFavoritesList(product));
  };

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFavoritesList({ id: productId }));
  };

  return (
    <Section>
      <Wrapper>
        <Title>Нові надходження</Title>
        <Text>
          "Ознайомтеся з нашими останніми надходженнями на наступний сезон"
        </Text>
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
          {newProducts.data.map((product) => {
            const isFavorite = favoritesProducts.some(
              (item) => item.id === product.id
            );
            const title = product.attributes.title;
            const image =
              product.attributes.img.data[0].attributes.formats.small.url;
            const price = product.attributes.price;
            return (
              <SwiperSlide key={product.id}>
                <SlideBox>
                  <Item key={product.id}>
                    <ImgBox>
                      <Img src={image} />
                    </ImgBox>
                    <Subtitle>{title}</Subtitle>
                    <TextPrice>{price}₴</TextPrice>
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

        <Button>Дивіться колекцію тут</Button>
      </Wrapper>
    </Section>
  );
};

export default NewArrivals;
