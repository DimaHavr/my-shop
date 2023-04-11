import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { selectFavoritesProducts } from "../../redux/favorites/selectors";
import { selectCartItems } from "../../redux/cart/selectors";
import { selectQty } from "../../redux/cart/selectors";
import { onAdd, onRemove } from "../../redux/cart/cartSlice";
import {
  addToFavoritesList,
  removeFavoritesList,
} from "../../redux/favorites/favoritesSlice";
import {
  Section,
  Wrapper,
  List,
  Item,
  Img,
  Subtitle,
  TextPrice,
  ImgBox,
  FavoriteIconBox,
  FavoriteIconRemove,
  FavoriteIcon,
  AddBtn,
  RemoveBtn,
} from "./ProductsList.styled";

const ProductsList = ({ children, products }) => {
  const dispatch = useDispatch();
  const quantity = useSelector(selectQty);
  const favoritesProducts = useSelector(selectFavoritesProducts);
  const productsInCart = useSelector(selectCartItems);
  const handleAddToFavorites = (product) => {
    dispatch(addToFavoritesList(product));
  };
  const router = useRouter();
  const categoryPath = router.asPath;
  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFavoritesList({ id: productId }));
  };

  return (
    <Section>
      {products.length > 0 && (
        <Wrapper>
          {children && children}
          <List>
            {products.map((product) => {
              const isFavorite = favoritesProducts.some(
                (item) => item.id === product.id
              );
              const inCart = productsInCart.some(
                (item) => item.id === product.id
              );
              return (
                <Item key={product.id}>
                  <Link href={`${categoryPath}/product/${product.id}`} passHref>
                    <ImgBox>
                      <Img src={product.image} alt={product.title} />
                    </ImgBox>
                    <Subtitle>{product.title}</Subtitle>
                    <TextPrice>{product.price}$</TextPrice>
                  </Link>
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
                      }}
                    >
                      Add to cart
                    </AddBtn>
                  ) : (
                    <RemoveBtn
                      onClick={() => {
                        toast.success(
                          `${product?.title} removed from cart...`,
                          {
                            style: {
                              borderRadius: "10px",
                              background: "grey",
                              color: "#fff",
                            },
                          }
                        );
                        dispatch(onRemove({ product }));
                      }}
                    >
                      Remove from cart
                    </RemoveBtn>
                  )}
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
              );
            })}
          </List>

          {children && children}
        </Wrapper>
      )}
    </Section>
  );
};

export default ProductsList;
