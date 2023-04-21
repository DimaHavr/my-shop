import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { onAdd, onRemove, setSize, setColor } from "../../redux/cart/cartSlice";
import {
  addToFavoritesList,
  removeFavoritesList,
} from "../../redux/favorites/favoritesSlice";
import { selectFavoritesProducts } from "../../redux/favorites/selectors";
import { selectCartItems } from "../../redux/cart/selectors";
import SizeSelector from "../SizeSelector/SizeSelector";
import ColorSelector from "../ColorSelector/ColorSelector";
import {
  Section,
  Wrapper,
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
  ButtonBox,
  PlusIcon,
  MinusIcon,
  RemoveBtn,
  Subtitle,
  QuantityBtn,
} from "./ProductDetails.styled";
import Box from "../Box/Box";
import ProductReview from "../ProductReview/ProductReview";

const colors = ["red", "green", "blue", "yellow", "orange", "purple"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const productReviews = [
  {
    id: 1,
    rating: 4,
    comment: "This product is amazing!",
  },
  {
    id: 2,
    rating: 5,
    comment: "I couldn't be happier with my purchase!",
  },
  {
    id: 3,
    rating: 3,
    comment: "It's a decent product for the price.",
  },
];

const ProductDetails = ({ product }) => {
  const title = product.attributes.title;
  const image = product.attributes.img.data[0].attributes.formats.large.url;
  const price = product.attributes.price;
  const desc = product.attributes.desc;
  const id = product.id;

  console.log(title);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const favoritesProducts = useSelector(selectFavoritesProducts);
  const productsInCart = useSelector(selectCartItems);
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
  const handleSizeChange = (size) => {
    dispatch(setSize(size));
  };

  const handleColorChange = (color) => {
    dispatch(setColor(color));
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
              <FavoriteIconBox onClick={() => handleRemoveFromFavorites(id)}>
                <FavoriteIconRemove />
              </FavoriteIconBox>
            )}
          </ImgBox>
          <Sidebar>
            <Box display="flex" justifyContent="space-between">
              <TextPrice>${price}</TextPrice>
              <ProductReview productReviews={productReviews} />
            </Box>
            <SizeSelector sizes={sizes} />
            <ColorSelector colors={colors} />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="baseline"
              gridGap="10px"
            >
              <Subtitle>Description:</Subtitle>
              <DescText> {desc}</DescText>
            </Box>
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
                <AddBtn
                  onClick={() => {
                    toast.success(`${title} added to cart...`, {
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
                  Remove from cart
                </RemoveBtn>
              )}
            </ButtonBox>
          </Sidebar>
        </ContentWrapper>
      </Wrapper>
    </Section>
  );
};

export default ProductDetails;
