import {
  CategoryWrapper,
  StyledMenu,
  StyledItem,
  StyledToggle,
  StyledDropdown,
} from "./ProductsCatalog.styled";

const ProductCatalogDropdown = (props) => {
  return (
    <CategoryWrapper>
      <StyledDropdown>
        <StyledToggle variant="light" id="product-catalog-dropdown">
          {props.selectedCategory || "Товари для дівчаток"}
        </StyledToggle>

        <StyledMenu>
          <StyledItem onSelect={props.onCategorySelect}>
            Будиночки, меблі, аксесуари для ляльок
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Набір супермаркет і магазин
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Ігрові кухні
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Набір доктора
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Дитячі посуд і продукти
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Коляски для ляльок
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Ляльки і пупси
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Меблі та аксесуари для ляльок
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Трюмо і Косметика Дитяча
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>Парасольки</StyledItem>
        </StyledMenu>
      </StyledDropdown>
      <StyledDropdown>
        <StyledToggle variant="light" id="product-catalog-dropdown">
          {props.selectedCategory || "Товари для дівчаток"}
        </StyledToggle>

        <StyledMenu>
          <StyledItem onSelect={props.onCategorySelect}>
            Будиночки, меблі, аксесуари для ляльок
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Набір супермаркет і магазин
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Ігрові кухні
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Набір доктора
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Дитячі посуд і продукти
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Коляски для ляльок
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Ляльки і пупси
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Меблі та аксесуари для ляльок
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Трюмо і Косметика Дитяча
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>Парасольки</StyledItem>
        </StyledMenu>
      </StyledDropdown>
      <StyledDropdown>
        <StyledToggle variant="light" id="product-catalog-dropdown">
          {props.selectedCategory || "Товари для дівчаток"}
        </StyledToggle>

        <StyledMenu>
          <StyledItem onSelect={props.onCategorySelect}>
            Будиночки, меблі, аксесуари для ляльок
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Набір супермаркет і магазин
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Ігрові кухні
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Набір доктора
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Дитячі посуд і продукти
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Коляски для ляльок
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Ляльки і пупси
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Меблі та аксесуари для ляльок
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>
            Трюмо і Косметика Дитяча
          </StyledItem>
          <StyledItem onSelect={props.onCategorySelect}>Парасольки</StyledItem>
        </StyledMenu>
      </StyledDropdown>
    </CategoryWrapper>
  );
};

export default ProductCatalogDropdown;
