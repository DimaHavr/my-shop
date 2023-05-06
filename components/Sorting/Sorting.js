import axios from "axios";
import getHeaders from "../../hooks/getHeaders";
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

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #17696a;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Sorting = ({ setProducts }) => {
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function fetchProducts() {
    setLoading(true);
    const productsUrl = `https://my-shop-strapi.onrender.com/api/products?populate=*&[filters][categories][title][$startsWithi]=Жіночий${
      sort === "" ? "" : `&sort=price:${sort}`
    }`;

    try {
      const response = await axios.get(productsUrl, getHeaders());
      const products = response.data;
      console.log(products);
      setProducts(products);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [sort]);

  const handleSort = (e) => {
    setSort(e.target.value);
    filterSearch({ router, sort: e.target.value });
  };

  return (
    <>
      {loading && (
        <Loader>
          <Spinner />
        </Loader>
      )}
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
