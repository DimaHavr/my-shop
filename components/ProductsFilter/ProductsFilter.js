import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowFilter } from "../../redux/filter/filterSlice";
import { selectShowFilter } from "../../redux/filter/selectors";
import { toast } from "react-hot-toast";
import { AiOutlineShopping } from "react-icons/ai";
import {
  ProductsFilterContainer,
  ProductsFilterWrapper,
  ImgContainer,
  BackButton,
  CloseIcon,
  Span,
  QuantityContainer,
  QuantityText,
  MinusIcon,
  PlusIcon,
  SubTitle,
  List,
  Item,
  Text,
  RemoveButtonIcon,
  IssueBtn,
  TotalContainer,
  BackBtn,
  CheckoutIcon,
  Button,
  ButtonIcon,
} from "./ProductsFilter.styled";
import Box from "../Box/Box";

const ProductsFilter = () => {
  const dispatch = useDispatch();
  const showFilter = useSelector(selectShowFilter);

  const productsFilterRef = useRef();

  useEffect(() => {
    const onCloseModal = (event) => {
      if (event.code === "Escape") {
        dispatch(setShowFilter(false));
      }
    };

    window.addEventListener("keydown", onCloseModal);

    return () => {
      window.removeEventListener("keydown", onCloseModal);
    };
  }, [setShowFilter]);

  const onBackdropCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      dispatch(setShowFilter(false));
    }
  };

  return (
    <ProductsFilterWrapper
      ref={productsFilterRef}
      onClick={onBackdropCloseModal}
      showFilter={showFilter}
    >
      <ProductsFilterContainer showFilter={showFilter}>
        <Box>
          <Box
            display="flex"
            padding="16px"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text>Filter</Text>
            <BackButton
              type="button"
              onClick={() => dispatch(setShowFilter(false))}
            >
              <CloseIcon />
            </BackButton>
          </Box>
          <List></List>
        </Box>
        <TotalContainer>
          <IssueBtn type="button">Save</IssueBtn>
        </TotalContainer>
      </ProductsFilterContainer>
    </ProductsFilterWrapper>
  );
};

export default ProductsFilter;
