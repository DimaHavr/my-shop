import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { selectFavoritesProducts } from "../../redux/favorites/selectors";
import { fetchSingleProduct } from "../../redux/product/operations";
import {
  selectAllProducts,
  selectLoadingProducts,
  selectProductsError,
} from "../../redux/product/selectors";
import { selectQty } from "../../redux/cart/selectors";
import { onAdd } from "../../redux/cart/cartSlice";
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
} from "./ProductsList.styled";

const ProductsList = ({ children, products }) => {
  const dispatch = useDispatch();
  const quantity = useSelector(selectQty);
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
                  <Link href={`${categoryPath}/product/${product.id}`} passHref>
                    <ImgBox>
                      <Img src={product.image} alt={product.title} />
                    </ImgBox>
                    <Subtitle>{product.title}</Subtitle>
                    <TextPrice>{product.price}₴</TextPrice>
                  </Link>
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
