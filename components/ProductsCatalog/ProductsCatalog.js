import { ProductsCatalogSection } from "./ProductsCatalog.styled";

import DropdownBox from "../DropdownBox/DropdownBox";

const options1 = [
  { id: 1, label: "Option 1" },
  { id: 2, label: "Option 2" },
  { id: 3, label: "Option 3" },
];

const options2 = [
  { id: 4, label: "Option 4" },
  { id: 5, label: "Option 5" },
  { id: 6, label: "Option 6" },
];

const options3 = [
  { id: 7, label: "Option 7" },
  { id: 8, label: "Option 8" },
  { id: 9, label: "Option 9" },
];
function ProductsCatalog() {
  return (
    <ProductsCatalogSection>
      <DropdownBox options={options1} label={"Товари для дівчаток"} />
      <DropdownBox options={options2} label={"Товари для хлопчиків"} />
      <DropdownBox options={options3} label={"Товари для немовлят"} />
    </ProductsCatalogSection>
  );
}

export default ProductsCatalog;
