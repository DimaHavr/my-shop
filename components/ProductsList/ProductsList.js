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
import ToolBar from "../../components/ToolBar/ToolBar";
const ProductsList = ({ products }) => {
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
      {products.length > 0 && (
        <Wrapper active={products}>
          <ToolBar products={products} />
          <List>
            {products.map((product) => {
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
                <Item key={product.id}>
                  <Link
                    href={`/${categoryPath}/${subCategoryPath}/${product.id}`}
                    passHref
                  >
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

          <ToolBar products={products} />
        </Wrapper>
      )}
    </Section>
  );
};

export default ProductsList;
