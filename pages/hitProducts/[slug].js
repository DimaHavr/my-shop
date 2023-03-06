import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useStateContext } from "../../context/StateContext";
import { client } from "../../lib/client";
import Box from "../../components/Box/Box";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const Product = dynamic(() => import("../../components/Product/Product"));
const Layout = dynamic(() => import("../../components/Layout/Layout"));
import {
  DetailContainer,
  SmallImagesContainer,
  SmallImage,
  DetailImg,
  MinusIcon,
  PlusIcon,
  DetailDescContainer,
  QuantityContainer,
  BuyNowBtn,
  AddToCartBtn,
  List,
  ListItem,
  QuantityText,
  Title,
  SubTitle,
  Text,
  TextDesc,
} from "../../components/Product/ProductDetails.styled";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Pagination]);
import { Swiper, SwiperSlide } from "swiper/react";
import BackLink from "../../components/BackLink";

const ProductDetails = ({ hitProduct, hitProducts }) => {
  const { image, name, details, price, vendor, country_of_origin } = hitProduct;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart, setQty } = useStateContext();
  const router = useRouter();

  function goBack() {
    router.back();
  }
  const handleBuyNow = () => {
    onAdd(hitProduct, qty);
    setShowCart(true);
  };

  useEffect(() => {
    const lightbox = new SimpleLightbox(".gallery a");
  }, []);

  return (
    <Layout>
      <Box as="section">
        <BackLink goBack={goBack} />
        <DetailContainer>
          <Box className="gallery">
            <a href={image && image[index]}>
              <DetailImg src={image && image[index]} />
            </a>
            <SmallImagesContainer>
              <Swiper
                spaceBetween={10}
                slidesPerView={image.length === 2 ? 2 : 3}
                pagination={{ clickable: true, dynamicBullets: true }}
                modules={[Pagination]}
              >
                {image?.map((item, i) =>
                  image.length === 1 ? (
                    <SmallImage
                      key={i}
                      src={item}
                      selected={i === index}
                      onMouseEnter={() => setIndex(i)}
                    />
                  ) : (
                    <SwiperSlide key={i}>
                      <SmallImage
                        src={item}
                        selected={i === index}
                        onClick={() => setIndex(i)}
                      />
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </SmallImagesContainer>
          </Box>
          <DetailDescContainer className="product-detail-desc">
            <Title>{name}</Title>
            <SubTitle>Опис: </SubTitle>
            <TextDesc>{details}</TextDesc>
            {vendor && (
              <Box display="flex" gridGap="10px" alignItems="flex-end">
                <SubTitle>Виробник: </SubTitle>
                <Text>{vendor}</Text>
              </Box>
            )}
            {country_of_origin && (
              <Box display="flex" gridGap="10px" alignItems="flex-end">
                <SubTitle>Країна виробник: </SubTitle>
                <Text>{country_of_origin}</Text>
              </Box>
            )}
            <Box display="flex" gridGap="10px" alignItems="flex-end">
              <SubTitle>Ціна: </SubTitle>
              <Text>{price}₴</Text>
            </Box>
            <QuantityContainer>
              <Box display="flex" alignItems="center" gridGap="10px">
                <MinusIcon onClick={decQty} />
                <QuantityText>{qty}</QuantityText>
                <PlusIcon onClick={incQty} />
              </Box>
            </QuantityContainer>
            <Box display="flex" gridGap="30px">
              <AddToCartBtn
                type="button"
                onClick={() => {
                  onAdd(hitProduct, qty);
                  setQty(1);
                }}
              >
                Додати до корзини
              </AddToCartBtn>
              <BuyNowBtn type="button" onClick={handleBuyNow}>
                Купити
              </BuyNowBtn>
            </Box>
          </DetailDescContainer>
        </DetailContainer>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gridGap="30px"
          flexDirection="column"
          paddingBottom="50px"
        >
          <Title>Вам також може сподобатися</Title>
          <List>
            {hitProducts.map((item) => (
              <ListItem key={item._id}>
                <Product product={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "hitProducts"] {
    slug {
      current
    }
  }
  `;

  const hitProducts = await client.fetch(query);

  const paths = hitProducts.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "hitProducts" && slug.current == '${slug}'][0]`;
  const hitProductsQuery = '*[_type == "hitProducts"]';

  const hitProduct = await client.fetch(query);
  const hitProducts = await client.fetch(hitProductsQuery);

  console.log(hitProduct);

  return {
    props: { hitProducts, hitProduct },
  };
};

export default ProductDetails;
