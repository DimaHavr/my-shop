import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import filterSearch from "../../utils/filterSearch";
const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin-right: 16px;
`;

const Select = styled.select`
  font-family: "LatoRegular";
  padding: 8px;
  border-radius: 10px;
  border-color: #17696a;
  border-width: 2px;
`;

const Sorting = () => {
  const [sort, setSort] = useState("");
  const router = useRouter();
  const handleSort = (e) => {
    setSort(e.target.value);
    filterSearch({ router, sort: e.target.value });
  };

  return (
    <Container>
      <Label>Сортувати:</Label>
      <Select onChange={handleSort} value={sort}>
        <option value="">За замовчуванням</option>
        <option value="asc">По збільшенню ціни</option>
        <option value="desc">По зменшенню ціни</option>
        {/* <option value="name-asc">За назвою від (А-Я)</option>
        <option value="name-desc">За назвою від (Я-А)</option> */}
      </Select>
    </Container>
  );
};

export default Sorting;
