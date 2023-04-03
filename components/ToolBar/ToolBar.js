import ProductsPagination from "../ProductsPagination/ProductsPagination";
import ControlledOpenSelect from "../Sort/Sort";
import { Wrapper } from "./ToolBar.styled";
import Box from "../Box/Box";
const ToolBar = () => {
  return (
    <Wrapper>
      {/* <ControlledOpenSelect /> */}
      <ProductsPagination />
    </Wrapper>
  );
};

export default ToolBar;
