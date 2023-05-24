import { useState } from "react";
import { Button, Overlay, SuccessBoxStyled } from "./SuccessBox.styled";

const SuccessBox = ({ children, setConfettiActive }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const onCloseModal = () => {
    setIsMenuOpen(false);
    setConfettiActive(false);
  };

  return (
    <Overlay isMenuOpen={isMenuOpen} onClick={onCloseModal}>
      {isMenuOpen && (
        <SuccessBoxStyled isMenuOpen={isMenuOpen}>
          <Button onClick={onCloseModal}>Дякуємо за замовлення!</Button>
        </SuccessBoxStyled>
      )}
      {children}
    </Overlay>
  );
};

export default SuccessBox;
