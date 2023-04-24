import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineShopping } from "react-icons/ai";
import {
  selectTotalQuantities,
  selectTotalPrice,
  selectCartItems,
  selectShowCart,
} from "../../redux/cart/selectors";
import {
  setShowCart,
  toggleCartItemQuantity,
  onRemove,
} from "../../redux/cart/cartSlice";
import {
  CartContainer,
  CartWrapper,
  ImgContainer,
  Img,
  BackButton,
  CloseIcon,
  Span,
  QuantityContainer,
  QuantityText,
  MinusIcon,
  PlusIcon,
  SubTitle,
  List,
  Item,
  Text,
  TextItem,
  RemoveButtonIcon,
  IssueBtn,
  TotalContainer,
  BackBtn,
  CheckoutIcon,
  EmptyCartBox,
} from "./Cart.styled";
import Box from "../Box/Box";

const Cart = () => {
  const cartRef = useRef();
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectTotalPrice);
  const totalQuantities = useSelector(selectTotalQuantities);
  const cartItems = useSelector(selectCartItems);
  const showCart = useSelector(selectShowCart);

  useEffect(() => {
    const onCloseModal = (event) => {
      if (event.code === "Escape") {
        dispatch(setShowCart(false));
      }
    };

    window.addEventListener("keydown", onCloseModal);

    return () => {
      window.removeEventListener("keydown", onCloseModal);
    };
  }, [setShowCart]);

  const onBackdropCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      dispatch(setShowCart(false));
    }
  };

  return (
    <CartWrapper
      ref={cartRef}
      onClick={onBackdropCloseModal}
      showCart={showCart}
    >
      <CartContainer showCart={showCart}>
        <Box>
          {totalQuantities > 0 && (
            <Box
              display="flex"
              padding="16px"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text>
                У вашому кошику
                <Span>{totalQuantities}</Span>
              </Text>
              <BackButton
                type="button"
                onClick={() => dispatch(setShowCart(false))}
              >
                <CloseIcon />
              </BackButton>
            </Box>
          )}
          {cartItems.length < 1 && (
            <EmptyCartBox cartItems={cartItems}>
              <AiOutlineShopping size={150} />
              <Text>
                Кошик порожній... <br /> Проте це ніколи не пізно виправити :)
              </Text>
              <BackBtn
                type="button"
                onClick={() => dispatch(setShowCart(false))}
              >
                Повернутися до магазину
              </BackBtn>
            </EmptyCartBox>
          )}

          <List>
            {cartItems.length >= 1 &&
              cartItems.map((item) => {
                const title = item.attributes.title;
                const image =
                  item.attributes.img.data[0].attributes.formats.small.url;
                const price = item.attributes.price;
                const id = item.id;
                const color = item.color;
                const size = item.size;
                const itemTotalPrice = price * item.quantity;
                const categoryPath =
                  item.attributes.categories.data[0].attributes.slug;
                const subCategoryPath =
                  item.attributes.sub_categories.data[0].attributes.slug;
                return (
                  <Item key={id}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      gridGap="10px"
                      alignItems="center"
                    >
                      <Link
                        href={`/${categoryPath}/${subCategoryPath}/${id}`}
                        passHref
                      >
                        <ImgContainer>
                          <Img src={image} />
                        </ImgContainer>
                      </Link>
                      <Text>{parseFloat(price.toFixed(2))}₴</Text>
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      gridGap="5px"
                      justifyContent="space-around"
                      paddingRight="20px"
                    >
                      <Link href={`/women/product/${id}`} passHref>
                        <SubTitle>{title}</SubTitle>
                      </Link>
                      <Box display="flex" alignItems="baseline" gridGap="10px">
                        <TextItem>Розмір:</TextItem>
                        <Text>{size}</Text>
                      </Box>
                      <Box display="flex" alignItems="baseline" gridGap="10px">
                        <TextItem>Колір:</TextItem>
                        <Text>{color}</Text>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        gridGap="5px"
                      >
                        <QuantityContainer>
                          <MinusIcon
                            onClick={() =>
                              dispatch(
                                toggleCartItemQuantity({
                                  id: id,
                                  value: "dec",
                                })
                              )
                            }
                          />
                          <QuantityText>{item.quantity}</QuantityText>
                          <PlusIcon
                            onClick={() =>
                              dispatch(
                                toggleCartItemQuantity({
                                  id: id,
                                  value: "inc",
                                })
                              )
                            }
                          />
                        </QuantityContainer>
                        <Text>{parseFloat(itemTotalPrice.toFixed(2))}₴</Text>
                      </Box>
                    </Box>
                    <RemoveButtonIcon
                      onClick={() => {
                        toast.success(`${title} видалено з корзини!`, {
                          style: {
                            borderRadius: "10px",
                            background: "grey",
                            color: "#fff",
                          },
                        });
                        dispatch(onRemove({ product: item }));
                      }}
                    />
                  </Item>
                );
              })}
          </List>
        </Box>
        {cartItems.length >= 1 && (
          <TotalContainer>
            <Box display="flex" justifyContent="space-between">
              <Text>Підсумок: </Text>
              <Text>{totalPrice}₴</Text>
            </Box>
            <IssueBtn type="button">
              <CheckoutIcon /> Оформити замовлення
            </IssueBtn>
          </TotalContainer>
        )}
      </CartContainer>
    </CartWrapper>
  );
};

export default Cart;
