import { useRef, useEffect } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../../context/StateContext";
import {
  CartContainer,
  CartWrapper,
  ImgContainer,
  BackButton,
  BackButtonIcon,
  Span,
  QuantityContainer,
  QuantityText,
  MinusIcon,
  PlusIcon,
  SubTitle,
  DetailContainer,
  Text,
  RemoveButtonIcon,
  IssueBtn,
  TotalContainer,
  BackBtn,
  CheckoutIcon,
} from "./Cart.styled";
import Box from "../Box/Box";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    showCart,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  useEffect(() => {
    const onCloseModal = (event) => {
      if (event.code === "Escape") {
        setShowCart(false);
      }
    };

    window.addEventListener("keydown", onCloseModal);

    return () => {
      window.removeEventListener("keydown", onCloseModal);
    };
  }, [setShowCart]);

  const onBackdropCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      setShowCart(false);
    }
  };

  return (
    <CartWrapper
      ref={cartRef}
      onClick={onBackdropCloseModal}
      showCart={showCart}
    >
      <CartContainer showCart={showCart}>
        <BackButton type="button" onClick={() => setShowCart(false)}>
          <BackButtonIcon />
          <Text>
            Your cart {totalQuantities > 0 && <Span>{totalQuantities}</Span>}
          </Text>
        </BackButton>

        {cartItems.length < 1 && (
          <Box
            display="flex"
            flexDirection="column"
            gridGap="20px"
            justifyContent="center"
            alignItems="center"
            paddingTop="150px"
          >
            <AiOutlineShopping size={150} />
            <Text>
              Кошик порожній... <br /> Але це ніколи не пізно виправити :)
            </Text>
            <BackBtn type="button" onClick={() => setShowCart(false)}>
              Повернутися до магазину
            </BackBtn>
          </Box>
        )}

        <Box paddingTop="70px">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <DetailContainer key={item.id}>
                <ImgContainer src={item?.img} />
                <Box
                  display="flex"
                  flexDirection="column"
                  gridGap="10px"
                  justifyContent="space-around"
                >
                  <SubTitle>{item?.subtitle}</SubTitle>

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <QuantityContainer>
                      <MinusIcon
                        onClick={() => toggleCartItemQuantity(item?.id, "dec")}
                      />
                      <QuantityText>{item?.quantity}</QuantityText>
                      <PlusIcon
                        onClick={() => toggleCartItemQuantity(item?.id, "inc")}
                      />
                    </QuantityContainer>{" "}
                    <Text>{item?.price}₴</Text>
                  </Box>
                </Box>
                <RemoveButtonIcon
                  onClick={() => {
                    onRemove(item);
                    toast.success(`${item?.subtitle} був видалений...`, {
                      style: {
                        borderRadius: "10px",
                        background: "grey",
                        color: "#fff",
                      },
                    });
                  }}
                />
              </DetailContainer>
            ))}
        </Box>
        {cartItems.length >= 1 && (
          <TotalContainer>
            <Box display="flex" justifyContent="space-between">
              <Text>Subtotal: </Text>
              <Text>{totalPrice}₴</Text>
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
