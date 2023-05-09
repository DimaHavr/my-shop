import axios from "axios";
import Image from "next/image";
import { debounce } from "lodash";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import Box from "../Box/Box";
import {
  FilterBox,
  FilterInput,
  InputContainer,
  MapIcon,
  FilterText,
  Item,
  TextItem,
  Text,
  List,
  LoaderStyled,
  Spinner,
  FilterButton,
  Select,
  Option,
  NumberIcon,
  DeliveryBoxStyled,
  BiMapIcon,
  FormWrapper,
  DeliveryWrapper,
  Form,
  Overlay,
  Title,
  ModalBtn,
  FormInput,
  TextArea,
  CloseIcon,
  ResetIcon,
} from "./DeliveryBox.styled";

const DeliveryBox = ({ formData, handleSubmit, handleInputChange }) => {
  const [loading, setLoading] = useState(false);
  const [filterCityValue, setFilterCityValue] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCityRef, setSelectedCityRef] = useState("");
  const [filterWarehouseValue, setFilterWarehouseValue] = useState("");
  const [warehouses, setWarehouses] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleToggleModal = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const resetState = () => {
    setLoading(false);
    setFilterCityValue("");
    setCities([]);
    setSelectedCity("");
    setSelectedCityRef("");
    setFilterWarehouseValue("");
    setWarehouses([]);
  };

  const handleFilter = async () => {
    setLoading(true);
    const apiKey = "c75de6f5d503c098726768ca49c79618";
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
      const response = await axios.post(
        "https://api.novaposhta.ua/v2.0/json/",
        {
          apiKey,
          modelName,
          calledMethod,
          methodProperties,
        }
      );
      const cities = response.data.data;
      setCities(cities);
      setSelectedCity(cities.length > 0 ? cities[0].Description : "");
      setSelectedCityRef(cities.length > 0 ? cities[0].Ref : "");
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleWarehouses = async () => {
    setLoading(true);
    const apiKey = "c75de6f5d503c098726768ca49c79618";
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
      const response = await axios.post(
        "https://api.novaposhta.ua/v2.0/json/",
        {
          apiKey,
          modelName,
          calledMethod,
          methodProperties,
        }
      );
      const warehouses = response.data.data;
      setWarehouses(warehouses);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!selectedCity) {
      return;
    }
    handleWarehouses();
  }, [selectedCity, selectedCityRef, filterWarehouseValue, filterCityValue]);

  const handleFilterCityDebounced = debounce(handleFilter, 500);
  const handleFilterWarehouseDebounced = debounce(handleWarehouses, 500);
  const handleInputCityChange = (e) => {
    setFilterCityValue(e.target.value);
    handleFilterCityDebounced(e.target.value);
  };

  const handleInputWarehouseChange = (e) => {
    setFilterWarehouseValue(e.target.value);
    handleFilterWarehouseDebounced(e.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedCityRef(
      event.target.options[event.target.selectedIndex].getAttribute(
        "selectcityref"
      )
    );
  };
  return (
    <DeliveryBoxStyled>
      <DeliveryWrapper>
        <Title>Доставка</Title>
        <Image
          src="/logos/Nova_Poshta_2014_logo.svg"
          alt="Your logo"
          width={200}
          height={30}
        />

        <FilterBox active={cities.length !== 0}>
          <InputContainer>
            <MapIcon />
            <FilterInput
              placeholder="Назва населеного пункту..."
              value={filterCityValue}
              type="text"
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleInputCityChange}
            />
          </InputContainer>
          {loading ? (
            <LoaderStyled active={loading}>
              <Spinner />
            </LoaderStyled>
          ) : (
            filterCityValue.length !== 0 && (
              <Select
                active={cities}
                value={selectedCity}
                onChange={handleCityChange}
                defaultChecked={true}
              >
                {cities.map((city) => (
                  <Option
                    active={city}
                    key={city.Ref}
                    selectcityref={city.Ref}
                    value={city.Description}
                  >
                    {city.Description}
                  </Option>
                ))}
              </Select>
            )
          )}
        </FilterBox>

        {filterCityValue.length >= 3 && (
          <FilterBox>
            <InputContainer>
              <NumberIcon />
              <FilterInput
                disabled={!selectedCity}
                placeholder="Вулиця, № номер відділення..."
                value={filterWarehouseValue}
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleInputWarehouseChange}
              />
            </InputContainer>
            <ResetIcon onClick={() => resetState()} />
          </FilterBox>
        )}
        <List>
          {warehouses.length !== 0 &&
            warehouses.map((warehouse) => (
              <Item
                onClick={() => {
                  resetState();
                  toast.success(`${warehouse.Description} збережено!`, {
                    style: {
                      borderRadius: "10px",
                      background: "grey",
                      color: "#fff",
                    },
                  });
                }}
                active={warehouse}
                key={warehouse.Ref}
              >
                <Text>
                  <BiMapIcon /> {warehouse.Description}
                </Text>
              </Item>
            ))}
        </List>
      </DeliveryWrapper>
      <FormWrapper>
        <Image
          src="/logos/Ukrposhta-ua.svg"
          alt="Your logo"
          width={200}
          height={30}
        />
        {!showForm ? (
          <ModalBtn onClick={handleToggleModal}>Відкрити форму</ModalBtn>
        ) : (
          <CloseIcon onClick={handleToggleModal} />
        )}

        {showForm && (
          <Overlay showForm={showForm}>
            <Form onSubmit={handleSubmit}>
              <InputContainer>
                <FormInput
                  placeholder="Область"
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  required
                />
              </InputContainer>
              <InputContainer>
                <FormInput
                  placeholder="Район"
                  type="text"
                  name="region"
                  value={formData.area}
                  onChange={handleInputChange}
                  required
                />
              </InputContainer>
              <InputContainer>
                <FormInput
                  placeholder="Населений пункт"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </InputContainer>
              <InputContainer>
                <FormInput
                  placeholder="Номер будинку"
                  type="number"
                  name="homeNumber"
                  value={formData.homeNumber}
                  onChange={handleInputChange}
                  required
                />
              </InputContainer>
              <InputContainer>
                <FormInput
                  placeholder="Номер квартири"
                  type="number"
                  name="localNumber"
                  value={formData.localNumber}
                  onChange={handleInputChange}
                  required
                />
              </InputContainer>
              <InputContainer>
                <FormInput
                  placeholder="Поштовий індекс"
                  type="text"
                  name="postIndex"
                  value={formData.localNumber}
                  onChange={handleInputChange}
                  required
                />
              </InputContainer>
              <InputContainer>
                <TextArea
                  placeholder="Комментар"
                  type="textarea"
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  required
                />
              </InputContainer>
              <ModalBtn
                onClick={() => {
                  handleToggleModal();
                  toast.success(`Дані для доставки збережено!`, {
                    style: {
                      borderRadius: "10px",
                      background: "grey",
                      color: "#fff",
                    },
                  });
                }}
                type="submit"
              >
                Зберегти
              </ModalBtn>
            </Form>
          </Overlay>
        )}
      </FormWrapper>
    </DeliveryBoxStyled>
  );
};

export default DeliveryBox;
{
  /* {selectedWarehouse.Description && (
        <div>
          <MapIconDetail />
          <div>
            <p>{selectedWarehouse?.SettlementAreaDescription}</p>
            <p>{selectedWarehouse?.SettlementRegionsDescription}</p>
            <p>
              {selectedWarehouse?.SettlementTypeDescription}{" "}
              {selectedWarehouse?.SettlementDescription}
            </p>
            <p>{selectedWarehouse?.Description}</p>
          </div>
        </div>
      )} */
}
