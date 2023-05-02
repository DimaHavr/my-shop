import { useDispatch, useSelector } from "react-redux";
import { selectFavoritesProducts } from "../../redux/favorites/selectors";
import {
  addToFavoritesList,
  removeFavoritesList,
} from "../../redux/favorites/favoritesSlice";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper";
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
import Link from "next/link";

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
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: false,
          }}
          // loop={true}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            1560: {
              slidesPerView: 7,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Navigation, EffectCoverflow]}
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
            const categoryPath =
              product.attributes.categories.data[0].attributes.slug;
            const subCategoryPath =
              product.attributes.sub_categories.data[0].attributes.slug;
            return (
              <SwiperSlide key={product.id}>
                <SlideBox>
                  <Item key={product.id}>
                    <Link
                      href={`/${categoryPath}/${subCategoryPath}/${product.id}`}
                      passHref
                    >
                      <ImgBox>
                        <Img src={image} />
                      </ImgBox>
                      <Subtitle>{title}</Subtitle>
                    </Link>
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
