import { useRef, useEffect } from "react";
import { useStateContext } from "../../context/StateContext";
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
  const { setShowFilter, showFilter } = useStateContext();

  const productsFilterRef = useRef();

  useEffect(() => {
    const onCloseModal = (event) => {
      if (event.code === "Escape") {
        setShowFilter(false);
      }
    };

    window.addEventListener("keydown", onCloseModal);

    return () => {
      window.removeEventListener("keydown", onCloseModal);
    };
  }, [setShowFilter]);

  const onBackdropCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      setShowFilter(false);
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
            <BackButton type="button" onClick={() => setShowFilter(false)}>
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
