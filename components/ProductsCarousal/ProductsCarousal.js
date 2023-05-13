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
  FavoriteIconRemove,
  FavoriteIcon,
  FavoriteIconBox,
  Item,
  Img,
  Subtitle,
  SlideBox,
  ImgBox,
  DiscountWrapper,
  DiscountLabel,
  DiscountText,
  PriceWrapper,
  PriceLabel,
  PriceText,
} from "./ProductsCarousal.styled";
import Link from "next/link";

const ProductsCarousal = ({ products, children, navigationEl }) => {
  const favoritesProducts = useSelector(selectFavoritesProducts);
  const dispatch = useDispatch();

  const handleAddToFavorites = (product) => {
    dispatch(addToFavoritesList(product));
  };

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFavoritesList({ id: productId }));
  };
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        initialSlide={2}
        centeredSlides={true}
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
        navigation={{ ...navigationEl }}
        modules={[Navigation, EffectCoverflow]}
        className="mySwiper"
      >
        {products.data.map((product) => {
          const isFavorite = favoritesProducts.some(
            (item) => item.id === product.id
          );
          const title = product.attributes.title;
          const image =
            product.attributes.img.data[0].attributes.formats.small.url;
          const price = product.attributes.price;
          const discount = product.attributes.discount;
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
                      {discount && (
                        <DiscountWrapper>
                          <DiscountLabel>
                            <DiscountText>-{discount}%</DiscountText>
                          </DiscountLabel>
                        </DiscountWrapper>
                      )}
                      <Img src={image} />
                    </ImgBox>
                    <Subtitle>{title}</Subtitle>
                  </Link>
                  <PriceWrapper>
                    <PriceLabel>
                      <PriceText>{price}₴</PriceText>
                    </PriceLabel>
                  </PriceWrapper>
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
      {children}
    </>
  );
};

export default ProductsCarousal;

export async function getStaticProps() {
  const response = await fetch(
    "https://my-shop-strapi.onrender.com/api/products?populate=*",
    {
      headers: {
        Authorization: `Bearer 1aa8eca2907e2c5d6fa22265203be2e366445abe6397f4c12f3488ea83080b8826988c86a945817c971699466a3f24ec4b6d6ae2385614e9bb0c2f5ebb8d1ffde0ae2ddddb89f063a5d49d64cc59b962e76717077760a1feaaa592707c537490d24fac53faef3434e6abd47a6c72d1a1d4110c786e0e200ce3bdf22e6aa3529e`,
      },
    }
  );
  const trendingProducts = await response.json();
  return {
    props: {
      trendingProducts,
    },
  };
}
