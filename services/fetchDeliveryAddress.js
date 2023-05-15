import axios from "axios";
import { debounce } from "lodash";

const apiKey = process.env.NEXT_PUBLIC_NOVAPOSHTA_API_KEY;

export const handleCities = async (
  setWarehouses,
  filterCityValue,
  setCities,
  setSelectedCity,
  setSelectedCityRef,
  setLoading
) => {
  setLoading(true);
  const modelName = "Address";
  const calledMethod = "getCities";
  const methodProperties = {
    FindByString: filterCityValue,
    Page: "1",
    Limit: "10",
  };
  try {
    if (filterCityValue.length === 0) {
      setLoading(false);
      setSelectedWarehouse([]);
      setWarehouses([]);
      return;
    }
    const response = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
      apiKey,
      modelName,
      calledMethod,
      methodProperties,
    });
    const cities = response.data.data;
    setCities(cities);
    setSelectedCity(cities.length > 0 ? cities[0].Description : "");
    setSelectedCityRef(cities.length > 0 ? cities[0].Ref : "");
  } catch (error) {
    console.error(error);
  }
  setLoading(false);
};

export const handleWarehouses = async (
  selectedCity,
  selectedCityRef,
  filterWarehouseValue,
  setWarehouses,
  setLoading
) => {
  setLoading(true);
  const modelName = "Address";
  const calledMethod = "getWarehouses";
  const methodProperties = {
    CityName: selectedCity,
    CityRef: selectedCityRef,
    FindByString: filterWarehouseValue,
    Page: "1",
    Limit: "10",
  };
  try {
    const response = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
      apiKey,
      modelName,
      calledMethod,
      methodProperties,
    });
    const warehouses = response.data.data;
    setWarehouses(warehouses);
  } catch (error) {
    console.error(error);
  }
  setLoading(false);
};

export const debouncedHandleCities = debounce(handleCities, 300);
export const debouncedHandleWarehouses = debounce(handleWarehouses, 300);
