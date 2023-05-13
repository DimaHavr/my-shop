import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { selectFavoritesProducts } from "../../redux/favorites/selectors";
import {
  addToFavoritesList,
  removeFavoritesList,
} from "../../redux/favorites/favoritesSlice";
import ToolBar from "../../components/ToolBar/ToolBar";
import {
  Section,
  Wrapper,
  List,
  Item,
  Img,
  ImgEmpty,
  EmptyBox,
  Subtitle,
  ImgBox,
  FavoriteIconBox,
  FavoriteIconRemove,
  FavoriteIcon,
  TextEmpty,
  DiscountWrapper,
  DiscountLabel,
  DiscountText,
  PriceWrapper,
  PriceLabel,
  PriceText,
} from "./ProductsList.styled";
import ProductsPagination from "../ProductsPagination/ProductsPagination";

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
      {products.length === 0 ? (
        <EmptyBox active={products}>
          <ImgEmpty
            src="/images/empty.webp"
            alt="minion"
            width={300}
            height={250}
          />
          <TextEmpty>Сорочка. Са-ра-фан. Сукня? Немає нічого? О ні!</TextEmpty>
        </EmptyBox>
      ) : (
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
              const discount = product.attributes.discount;
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
                      {discount && (
                        <DiscountWrapper>
                          <DiscountLabel>
                            <DiscountText>-{discount}%</DiscountText>
                          </DiscountLabel>
                        </DiscountWrapper>
                      )}
                      <Img
                        src={image}
                        alt={title}
                        width={300}
                        height={250}
                        priority
                      />
                    </ImgBox>
                    <Subtitle>{title}</Subtitle>
                    <PriceWrapper>
                      <PriceLabel>
                        <PriceText>{price}₴</PriceText>
                      </PriceLabel>
                    </PriceWrapper>
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
          {products.length > 12 && <ProductsPagination />}
        </Wrapper>
      )}
    </Section>
  );
};

export default ProductsList;
