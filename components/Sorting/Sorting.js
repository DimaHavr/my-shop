import { useDispatch, useSelector } from "react-redux";
import { selectSelectedSort } from "../../redux/sort/selectors";
import {
  setSortPrice,
  setSortNew,
  setSortPopular,
  setSelectedSort,
} from "../../redux/sort/sortSlice";
import { useRouter } from "next/router";
import filterSearch from "../../utils/filterSearch";
import { Container, Label, Select } from "../Sorting/Sorting.styled";

const Sorting = () => {
  const selectedSort = useSelector(selectSelectedSort);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSort = (e) => {
    const value = e.target.value;

    if (value === "") {
      router.push({
        pathname: router.pathname,
        query: {
          sort: undefined,
        },
      });
      dispatch(setSelectedSort(""));
    } else {
      let sortObj = {};
      switch (value) {
        case "price_plus":
          sortObj.sortPrice = "asc";
          break;
        case "price_minus":
          sortObj.sortPrice = "desc";
          break;
        case "new":
          sortObj.sortNew = "desc";
          break;
        case "popular":
          sortObj.sortPopular = "desc";
          break;
        case "popularNew":
          sortObj.sortPopular = "desc";
          sortObj.sortNew = "desc";
          break;
        default:
          break;
      }
      filterSearch({ router, ...sortObj });
      dispatch(setSortPrice(sortObj.sortPrice));
      dispatch(setSortNew(sortObj.sortNew));
      dispatch(setSortPopular(sortObj.sortPopular));
      dispatch(setSelectedSort(value));
    }
  };

  return (
    <>
      <Container>
        <Label>Сортувати:</Label>
        <Select onChange={handleSort} value={selectedSort}>
          <option value="">За замовчуванням</option>
          <option value="new">Новіші</option>
          <option value="price_plus">По збільшенню ціни</option>
          <option value="price_minus">По зменшенню ціни</option>
          {/* <option value="popular">Популярність</option>
          <option value="popularNew">Популярні + новіші</option> */}
        </Select>
      </Container>
    </>
  );
};

export default Sorting;
