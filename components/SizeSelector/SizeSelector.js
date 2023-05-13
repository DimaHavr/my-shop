import { useDispatch, useSelector } from "react-redux";
import { selectSize } from "../../redux/cart/selectors";
import { setSize } from "../../redux/cart/cartSlice";

import Box from "../Box/Box";
import {
  Wrapper,
  Subtitle,
  Text,
  List,
  Item,
} from "../SizeSelector/SizeSelector.styled";

const SizeSelector = ({ sizes }) => {
  const dispatch = useDispatch();
  const selectedSize = useSelector(selectSize);
  const handleSizeChange = (size) => {
    dispatch(setSize(size));
  };

  return (
    <Wrapper>
      <Box display="flex" alignItems="center" gridGap="10px">
        <Subtitle>Оберіть розмір:</Subtitle> <Text>{selectedSize}</Text>
      </Box>
      <List>
        {sizes.map((size) => (
          <Item
            key={size.id}
            active={selectedSize === size.attributes.name}
            onClick={() => handleSizeChange(size.attributes.name)}
          >
            {size.attributes.name}
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default SizeSelector;
