import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectColor } from "../../redux/cart/selectors";
import { setColor } from "../../redux/cart/cartSlice";

import { Text, Subtitle, Wrapper, Item, List } from "./ColorSelector.styled";
import Box from "../Box/Box";

const ColorSelector = ({ colors }) => {
  const selectedColor = useSelector(selectColor);
  const dispatch = useDispatch();
  const handleColorChange = (color) => {
    dispatch(setColor(color));
  };

  useEffect(() => {
    handleColorChange();
  }, []);

  return (
    <Wrapper>
      <Box display="flex" alignItems="flex-end" gridGap="10px">
        <Subtitle>Оберіть колір:</Subtitle> <Text> {selectedColor}</Text>
      </Box>
      <List>
        {colors.map((color) => (
          <Item
            key={color.attributes.name}
            active={selectedColor === color.attributes.name}
            color={color.attributes.name}
            codeHex={color.attributes.code_hex}
            onClick={() => handleColorChange(color.attributes.name)}
          ></Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default ColorSelector;
