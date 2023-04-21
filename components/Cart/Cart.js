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
  selectColor,
  selectSize,
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
  const color = useSelector(selectColor);
  const size = useSelector(selectSize);

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
          <Box
            display="flex"
            padding="16px"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text>
              Your cart {totalQuantities > 0 && <Span>{totalQuantities}</Span>}
            </Text>
            <BackButton
              type="button"
              onClick={() => dispatch(setShowCart(false))}
            >
              <CloseIcon />
            </BackButton>
          </Box>
          {cartItems.length < 1 && (
            <EmptyCartBox cartItems={cartItems}>
              <AiOutlineShopping size={150} />
              <Text>
                Cart is empty... <br /> But it's never too late to fix it :)
              </Text>
              <BackBtn
                type="button"
                onClick={() => dispatch(setShowCart(false))}
              >
                Return to the store
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
                const itemTotalPrice = price * item.quantity;
                return (
                  <Item key={id}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      gridGap="10px"
                      alignItems="center"
                    >
                      <Link href={`/women/product/${id}`} passHref>
                        <ImgContainer>
                          <Img src={image} />
                        </ImgContainer>
                      </Link>
                      <Text>${parseFloat(price.toFixed(2))}</Text>
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
                        <TextItem>Size:</TextItem>
                        <Text>{size}</Text>
                      </Box>
                      <Box display="flex" alignItems="baseline" gridGap="10px">
                        <TextItem> Color:</TextItem>
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
                        <Text>${parseFloat(itemTotalPrice.toFixed(2))}</Text>
                      </Box>
                    </Box>
                    <RemoveButtonIcon
                      onClick={() => {
                        toast.success(`${title} was deleted...`, {
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
              <Text>Subtotal: </Text>
              <Text>${totalPrice}</Text>
            </Box>
            <IssueBtn type="button">
              <CheckoutIcon /> Checkout
            </IssueBtn>
          </TotalContainer>
        )}
      </CartContainer>
    </CartWrapper>
  );
};

export default Cart;
