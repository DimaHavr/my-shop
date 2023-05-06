import { useDispatch, useSelector } from "react-redux";
import { selectSortValue } from "../../redux/sort/selectors";
import { setSortValue } from "../../redux/sort/sortSlice";
import { useRouter } from "next/router";
import filterSearch from "../../utils/filterSearch";
import { Container, Label, Select } from "../Sorting/Sorting.styled";
const Sorting = () => {
  const sort = useSelector(selectSortValue);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSort = (e) => {
    const value = e.target.value;
    dispatch(setSortValue(value));
    if (value === "") {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, sort: undefined },
      });
    } else {
      filterSearch({ router, sort: value });
    }
  };

  return (
    <>
      <Container>
        <Label>Сортувати:</Label>
        <Select onChange={handleSort} value={sort}>
          <option value="">За замовчуванням</option>
          <option value="asc">По збільшенню ціни</option>
          <option value="desc">По зменшенню ціни</option>
        </Select>
      </Container>
    </>
  );
};

export default Sorting;
