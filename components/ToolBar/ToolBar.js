import { useDispatch, useSelector } from "react-redux";
import { setShowFilter } from "../../redux/filter/filterSlice";
import { selectShowFilter } from "../../redux/filter/selectors";
import ProductsPagination from "../ProductsPagination/ProductsPagination";
import Sorting from "../Sorting/Sorting";
import { Wrapper, FilterButton, FilterButtonIcon } from "./ToolBar.styled";

const ToolBar = ({ products }) => {
  const dispatch = useDispatch();
  const showFilter = useSelector(selectShowFilter);
  function onToggleFilter() {
    dispatch(setShowFilter(true));
  }
  return (
    <Wrapper>
      {/* <FilterButton onClick={onToggleFilter}>
        <FilterButtonIcon />
        {showFilter ? " Hide filters" : " Show filters"}
      </FilterButton> */}
      {products.length > 12 && <ProductsPagination />}
      <Sorting />
    </Wrapper>
  );
};

export default ToolBar;
