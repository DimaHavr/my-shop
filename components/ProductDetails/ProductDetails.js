import { toast } from "react-hot-toast";
import Box from "../Box/Box";
import { useDispatch, useSelector } from "react-redux";
import { onAdd, onRemove } from "../../redux/cart/cartSlice";
import {
  addToFavoritesList,
  removeFavoritesList,
} from "../../redux/favorites/favoritesSlice";
import { selectFavoritesProducts } from "../../redux/favorites/selectors";
import { selectCartItems } from "../../redux/cart/selectors";
import {
  Section,
  Wrapper,
  List,
  Item,
  Img,
  Title,
  TextPrice,
  ImgBox,
  ContentWrapper,
  DescText,
  FavoriteIconBox,
  FavoriteIconRemove,
  FavoriteIcon,
  AddBtn,
  Sidebar,
  QuantityContainer,
  QuantityText,
  PlusIcon,
  MinusIcon,
  RemoveBtn,
} from "./ProductDetails.styled";
import { useState } from "react";

const ProductDetails = ({ product }) => {
  const { title, image, price, description } = product;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const favoritesProducts = useSelector(selectFavoritesProducts);
  const productsInCart = useSelector(selectCartItems);
  const isFavorite = favoritesProducts.some((item) => item.id === product.id);
  const inCart = productsInCart.some((item) => item.id === product.id);
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
  return (
    <Section>
      <Wrapper>
        <Title>{title}</Title>
        <ContentWrapper>
          <ImgBox>
            <Img src={image} />
            {!isFavorite ? (
              <FavoriteIconBox onClick={() => handleAddToFavorites(product)}>
                <FavoriteIcon />
              </FavoriteIconBox>
            ) : (
              <FavoriteIconBox
                onClick={() => handleRemoveFromFavorites(product.id)}
              >
                <FavoriteIconRemove />
              </FavoriteIconBox>
            )}
          </ImgBox>
          <Sidebar>
            <TextPrice>${price}</TextPrice>
            <TextPrice>Size</TextPrice>
            <TextPrice>Color</TextPrice>
            <DescText>{description}</DescText>
            <Box display="flex" gridGap="10px">
              <QuantityContainer>
                <MinusIcon onClick={decQty} />
                <QuantityText>{quantity}</QuantityText>
                <PlusIcon onClick={incQty} />
              </QuantityContainer>
              {!inCart ? (
                <AddBtn
                  onClick={() => {
                    toast.success(`${product?.title} added to cart...`, {
                      style: {
                        borderRadius: "10px",
                        background: "#fff",
                        color: "#333",
                      },
                    });
                    dispatch(onAdd({ product, quantity }));
                    setQuantity(1);
                  }}
                >
                  Add to cart
                </AddBtn>
              ) : (
                <RemoveBtn
                  onClick={() => {
                    toast.success(`${product?.title} removed from cart...`, {
                      style: {
                        borderRadius: "10px",
                        background: "grey",
                        color: "#fff",
                      },
                    });
                    dispatch(onRemove({ product }));
                  }}
                >
                  Remove from cart
                </RemoveBtn>
              )}
            </Box>
          </Sidebar>
        </ContentWrapper>
      </Wrapper>
    </Section>
  );
};

export default ProductDetails;
