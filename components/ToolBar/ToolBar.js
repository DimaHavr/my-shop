import { useDispatch, useSelector } from "react-redux";
import { setShowFilter } from "../../redux/filter/filterSlice";
import { selectShowFilter } from "../../redux/filter/selectors";
import ProductsPagination from "../ProductsPagination/ProductsPagination";
import ControlledOpenSelect from "../Sorting/Sorting";
import { Wrapper, FilterButton, FilterButtonIcon } from "./ToolBar.styled";
import ProductsFilter from "../ProductsFilter/ProductsFilter";
const ToolBar = () => {
  const dispatch = useDispatch();
  const showFilter = useSelector(selectShowFilter);
  function onToggleFilter() {
    dispatch(setShowFilter(true));
  }
  return (
    <Wrapper>
      <FilterButton onClick={onToggleFilter}>
        <FilterButtonIcon />
        {showFilter ? " Hide filters" : " Show filters"}
      </FilterButton>
      <ControlledOpenSelect />
      <ProductsPagination />
      {showFilter && <ProductsFilter />}
    </Wrapper>
  );
};

export default ToolBar;
