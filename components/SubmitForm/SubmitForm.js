import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const BasketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  button {
    background-color: #f0c14b;
    border: none;
    color: #111;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 1rem;

    &:hover {
      background-color: #ddb347;
    }
  }
`;

const BasketItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 10rem;
    height: 10rem;
    object-fit: contain;
    margin-right: 1rem;
  }

  .basketItemInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex-grow: 1;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1.2rem;
      color: #666;
      margin-bottom: 0.5rem;
    }

    button {
      background-color: #f0c14b;
      border: none;
      color: #111;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #ddb347;
      }
    }

    .quantitySelector {
      display: flex;
      align-items: center;
      margin-top: 0.5rem;

      button {
        background-color: #f0c14b;
        border: none;
        color: #111;
        padding: 0.25rem 0.5rem;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: #ddb347;
        }
      }

      p {
        margin: 0 0.5rem;
      }
    }
  }

  .basketItemPrice {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const Basket = () => {
  const [basketItems, setBasketItems] = useState([
    {
      id: "1",
      title: "Samsung Galaxy S21",
      price: 799.99,
      image: "/images/samsung-galaxy-s21.jpg",
      quantity: 1,
    },
    {
      id: "2",
      title: "Apple iPhone 12",
      price: 1099.99,
      image: "/images/iphone-12.jpg",
      quantity: 2,
    },
  ]);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedBasketItems = basketItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setBasketItems(updatedBasketItems);
  };

  const handleContinueShoppingClick = () => {
    // Navigate to the home page
  };

  return (
    <BasketWrapper>
      <h1>Your Basket</h1>
      {basketItems.map(({ id, image, price, quantity, title }) => (
        <BasketItemWrapper key={id}>
          <Image src={image} alt={title} width={400} height={400} />
          <div className="basketItemInfo">
            <h2>{title}</h2>
            <p>Price: ${price}</p>
            <div className="quantitySelector">
              <button onClick={() => handleQuantityChange(id, quantity - 1)}>
                -
              </button>
              <p>{quantity}</p>
              <button onClick={() => handleQuantityChange(id, quantity + 1)}>
                +
              </button>
            </div>
            <button>Remove from Basket</button>
          </div>
          <div className="basketItemPrice">${price.toFixed(3) * quantity}</div>
        </BasketItemWrapper>
      ))}
      <button onClick={handleContinueShoppingClick}>Continue Shopping</button>
    </BasketWrapper>
  );
};

export default Basket;
