import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { selectFavoritesProducts } from "../../redux/favorites/selectors";
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
} from "./ProductsList.styled";

const ProductsList = ({ children, products }) => {
  const dispatch = useDispatch();
  const favoritesProducts = useSelector(selectFavoritesProducts);
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
              return (
                <Item key={product.id}>
                  <ImgBox>
                    <Link
                      href={`${categoryPath}/product/${product.id}`}
                      passHref
                    >
                      <Img src={product.image} alt={product.title} />
                    </Link>
                  </ImgBox>
                  <Link href={`${categoryPath}/product/${product.id}`} passHref>
                    <Subtitle>{product.title}</Subtitle>
                    <TextPrice>{product.price}$</TextPrice>
                  </Link>
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
