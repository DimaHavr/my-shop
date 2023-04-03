import { useStateContext } from "../../context/StateContext";

import ProductsPagination from "../ProductsPagination/ProductsPagination";
import ControlledOpenSelect from "../Sorting/Sorting";
import { Wrapper, FilterButton, FilterButtonIcon } from "./ToolBar.styled";
import ProductsFilter from "../ProductsFilter/ProductsFilter";
const ToolBar = () => {
  const { onToggleFilter, showFilter } = useStateContext();
  return (
    <Wrapper>
      <FilterButton onClick={onToggleFilter}>
        <FilterButtonIcon /> Show filters
      </FilterButton>
      <ControlledOpenSelect />
      <ProductsPagination />
      {showFilter && <ProductsFilter />}
    </Wrapper>
  );
};

export default ToolBar;
