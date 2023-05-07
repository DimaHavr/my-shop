import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { onAdd, onRemove, setSize, setColor } from "../../redux/cart/cartSlice";
import {
  addToFavoritesList,
  removeFavoritesList,
} from "../../redux/favorites/favoritesSlice";
import { selectFavoritesProducts } from "../../redux/favorites/selectors";
import {
  selectCartItems,
  selectColor,
  selectSize,
} from "../../redux/cart/selectors";
import SizeSelector from "../SizeSelector/SizeSelector";
import ColorSelector from "../ColorSelector/ColorSelector";
import {
  Section,
  Wrapper,
  Title,
  TextPrice,
  ImgBox,
  ContentWrapper,
  FavoriteIconBox,
  FavoriteIconRemove,
  FavoriteIcon,
  AddBtn,
  Sidebar,
  QuantityContainer,
  QuantityText,
  ButtonBox,
  PlusIcon,
  MinusIcon,
  RemoveBtn,
  Subtitle,
  QuantityBtn,
  TextOldPrice,
} from "./ProductDetails.styled";
import Box from "../Box/Box";
import ProductReview from "../ProductReview/ProductReview";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import ImgSlideBox from "../ImgSlideBox/ImgSlideBox";

const LabelWrapper = styled.span`
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 100;
  margin-top: 0 !important;
  padding-left: 6px;
  background: #c82128;
  display: block;
  white-space: nowrap;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 5px;
    right: 0;
    background: #c82128;
    transform: skewX(330deg);
    box-shadow: 10px 6px 0 0 #c82128;
    height: 50%;
  }

  .product-label {
    position: relative;
    z-index: 1;
    font-weight: 700;
    color: #fff;
    padding: 5px 10px;
    display: block;
    font-size: 16px;
    line-height: 1;

    &:before {
      content: "";
      position: absolute;
      top: 100%;
      left: -6px;
      width: 0;
      height: 0;
      border: 3px solid transparent;
      border-top-color: #8e0007;
      border-right-color: #8e0007;
    }
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 5px;
    right: 0;
    bottom: 0;
    background: #c82128;
    transform: skewX(30deg);
    box-shadow: 10px -6px 0 0 #c82128;
    height: 50%;
  }

  &.for-discount .product-label {
    padding: 10px 30px;
    font-size: 22px;
    line-height: 15px;
    font-weight: 600;

    &:before {
      border-width: 8px;
    }
  }
`;

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  console.log(product);
  const {
    attributes: {
      title,
      img: {
        data: [
          {
            attributes: {
              formats: {
                large: { url: image },
              },
            },
          },
        ],
      },
    },
    attributes: {
      price,
      desc,
      images: { data: imagesArr },
    },
    id,
  } = product;
  const productReviews = product.attributes.reviews.data;
  const colors = product.attributes.colors.data;
  const sizes = product.attributes.sizes.data;
  const favoritesProducts = useSelector(selectFavoritesProducts);
  const productsInCart = useSelector(selectCartItems);
  const color = useSelector(selectColor);
  const size = useSelector(selectSize);
  const isFavorite = favoritesProducts.some((item) => item.id === id);
  const inCart = productsInCart.some((item) => item.id === id);
  const discount = 30;
  const discountPercentage = discount * 0.01;
  const oldPrice = price + price * discountPercentage;

  const incQty = () => {
    setQuantity(quantity + 1);
  };

  const decQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToFavorites = (product) => {
    dispatch(addToFavoritesList(product));
  };
  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFavoritesList({ id: productId }));
  };

  const handleAddToCart = () => {
    if (!color) {
      toast.error("Оберіть колір...", {
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#333",
        },
      });
      return;
    }

    if (!size) {
      toast.error("Оберіть розмір...", {
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#333",
        },
      });
      return;
    }

    toast.success(`${title} додано до кошика!`, {
      style: {
        borderRadius: "10px",
        background: "#fff",
        color: "#333",
      },
    });

    dispatch(onAdd({ product, quantity, color, size }));
    setQuantity(1);
    dispatch(setSize(""));
    dispatch(setColor(""));
  };

  return (
    <Section>
      <Wrapper active={product}>
        <Box display="flex" justifyContent="center" alignItems="center"></Box>
        <ContentWrapper>
          <ImgBox>
            <ImgSlideBox imagesArr={imagesArr} image={image} />
          </ImgBox>
          <Sidebar>
            <Title>{title}</Title>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" gridGap="5px" alignItems="baseline">
                <Subtitle>Ціна:</Subtitle>
                <TextPrice>
                  {discount && (
                    <TextOldPrice>{oldPrice.toFixed(0)}₴</TextOldPrice>
                  )}
                  {price}₴
                </TextPrice>
              </Box>
              <ProductReview productReviews={productReviews} />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="baseline"
              gridGap="10px"
            >
              <SizeSelector sizes={sizes} />
              <ColorSelector colors={colors} />
            </Box>
            <AddBtn>Розмірна сітка</AddBtn>
            {!isFavorite ? (
              <FavoriteIconBox onClick={() => handleAddToFavorites(product)}>
                <FavoriteIcon />
                Додати до улюблених
              </FavoriteIconBox>
            ) : (
              <FavoriteIconBox onClick={() => handleRemoveFromFavorites(id)}>
                <FavoriteIconRemove />
                Видалити з улюблених
              </FavoriteIconBox>
            )}
            <ButtonBox>
              <QuantityContainer>
                <QuantityBtn disabled={inCart}>
                  <MinusIcon onClick={decQty} />
                </QuantityBtn>
                <QuantityText>{quantity}</QuantityText>
                <QuantityBtn disabled={inCart}>
                  <PlusIcon onClick={() => !inCart && incQty()} />
                </QuantityBtn>
              </QuantityContainer>
              {!inCart ? (
                <AddBtn onClick={handleAddToCart}>Додати до кошика</AddBtn>
              ) : (
                <RemoveBtn
                  onClick={() => {
                    toast.success(`${title} removed from cart...`, {
                      style: {
                        borderRadius: "10px",
                        background: "grey",
                        color: "#fff",
                      },
                    });
                    dispatch(onRemove({ product }));
                  }}
                >
                  Видалити з кошика
                </RemoveBtn>
              )}
            </ButtonBox>
          </Sidebar>
        </ContentWrapper>
        <ToggleMenu
          desc={desc}
          productReviews={productReviews}
          productId={id}
        />
      </Wrapper>
    </Section>
  );
};

export default ProductDetails;
