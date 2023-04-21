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
  console.log(favoritesProducts);
  const handleAddToFavorites = (product) => {
    dispatch(addToFavoritesList(product));
  };

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
              const title = product.attributes.title;
              const image =
                product.attributes.img.data[0].attributes.formats.small.url;
              const price = product.attributes.price;
              return (
                <Item key={product.id}>
                  <Link href={`/women/product/${product.id}`} passHref>
                    <ImgBox>
                      <Img src={image} />
                    </ImgBox>
                    <Subtitle>{title}</Subtitle>
                    <TextPrice>{price}₴</TextPrice>
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
