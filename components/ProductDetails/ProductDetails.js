import { useState } from "react";
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
} from "./ProductDetails.styled";
import Box from "../Box/Box";
import ProductReview from "../ProductReview/ProductReview";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import ImgSlideBox from "../ImgSlideBox/ImgSlideBox";

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
        <Box display="flex" justifyContent="center" alignItems="center">
          <Title>{title}</Title>
        </Box>
        <ContentWrapper>
          <ImgBox>
            <ImgSlideBox imagesArr={imagesArr} image={image} />
          </ImgBox>
          <Sidebar>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" gridGap="5px" alignItems="flex-end">
                <Subtitle>Ціна:</Subtitle>
                <TextPrice>{price}₴</TextPrice>
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
