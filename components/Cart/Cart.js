import { useRef, useEffect } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../../context/StateContext";
import getStripe from "../../lib/getStripe";
import {
  CartContainer,
  CartWrapper,
  CloseButton,
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
} from "./Cart.styled";
import Box from "../Box/Box";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    stripe.redirectToCheckout({ sessionId: data.id });
  };

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
    <CartWrapper ref={cartRef} onClick={onBackdropCloseModal}>
      <CartContainer>
        <BackButton type="button" onClick={() => setShowCart(false)}>
          <BackButtonIcon />
          {totalQuantities > 0 && <Span>{totalQuantities}</Span>}
        </BackButton>

        {cartItems.length < 1 && (
          <Box
            display="flex"
            flexDirection="column"
            gridGap="20px"
            justifyContent="center"
            alignItems="center"
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

        <Box>
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <DetailContainer key={item._id}>
                <Link href={`/product/${item.slug.current}`}>
                  <ImgContainer src={item?.image[0]} />
                </Link>
                <Box
                  display="flex"
                  flexDirection="column"
                  gridGap="10px"
                  justifyContent="space-around"
                >
                  <SubTitle>{item.name}</SubTitle>
                  <Text>{item.price}₴</Text>

                  <Box display="flex" justifyContent="space-between">
                    <QuantityContainer>
                      <MinusIcon
                        onClick={() => toggleCartItemQuantity(item._id, "dec")}
                      />
                      <QuantityText>{item.quantity}</QuantityText>
                      <PlusIcon
                        onClick={() => toggleCartItemQuantity(item._id, "inc")}
                      />
                    </QuantityContainer>
                    <RemoveButtonIcon
                      onClick={() => {
                        onRemove(item);
                        toast.success(`${item.name} був видалений...`, {
                          style: {
                            borderRadius: "10px",
                            background: "grey",
                            color: "#fff",
                          },
                        });
                      }}
                    />
                  </Box>
                </Box>
              </DetailContainer>
            ))}
        </Box>
        {cartItems.length >= 1 && (
          <TotalContainer>
            <SubTitle>{totalPrice}₴</SubTitle>
            <IssueBtn type="button" onClick={handleCheckout}>
              Оформити замовлення
            </IssueBtn>
          </TotalContainer>
        )}
      </CartContainer>
      <CloseButton onClick={() => setShowCart(false)} />
    </CartWrapper>
  );
};

export default Cart;
