import axios from "axios";
import getHeaders from "../hooks/getHeaders";

export async function fetchSortCategoryProducts(
  setProducts,
  setLoading,
  sortPrice,
  sortNew,
  sortPopular
) {
  setLoading(true);
  if (!sortPrice && !sortNew && !sortPopular) {
    setLoading(false);
    return;
  }
  const productsUrl = `https://my-shop-strapi.onrender.com/api/products?populate=*&[filters][categories][title][$startsWithi]=Жіночий${
    sortPrice ? `&sort=price:${sortPrice}` : ""
  }${sortNew ? `&sort=createdAt:${sortNew}` : ""}`;

  try {
    const response = await axios.get(productsUrl, getHeaders());
    const products = response.data;
    setProducts(products);
    setLoading(false);
  } catch (error) {
    console.error(error);
    setLoading(false);
  }
}

export async function fetchSortSubCatProducts(
  setProducts,
  setLoading,
  sortPrice,
  sortNew,
  sortPopular,
  props
) {
  if (!sortPrice && !sortNew && !sortPopular) {
    setLoading(false);
    return;
  }

  const productsUrl = `https://my-shop-strapi.onrender.com/api/products?populate=*&[filters][sub_categories][slug]=${encodeURIComponent(
    props.slug
  )}${sortPrice ? `&sort=price:${sortPrice}` : ""}${
    sortNew ? `&sort=createdAt:${sortNew}` : ""
  }`;
  try {
    setLoading(true);
    const response = await axios.get(productsUrl, getHeaders());
    const products = response.data;
    setProducts(products);
    setLoading(false);
  } catch (error) {
    console.error(error);
    setLoading(false);
  }
}
export default {
  fetchSortCategoryProducts,
  fetchSortSubCatProducts,
};
