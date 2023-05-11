import { useState, useEffect } from "react";
import { Button, Overlay, SuccessBoxStyled } from "./SuccessBox.styled";

const SuccessBox = ({ children, setConfettiActive }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <Overlay isMenuOpen={isMenuOpen}>
      {isMenuOpen && (
        <SuccessBoxStyled isMenuOpen={isMenuOpen}>
          <Button
            onClick={() => {
              setIsMenuOpen(false);
              setConfettiActive(false);
            }}
          >
            Закрити
          </Button>
        </SuccessBoxStyled>
      )}
      {children}
    </Overlay>
  );
};

export default SuccessBox;
