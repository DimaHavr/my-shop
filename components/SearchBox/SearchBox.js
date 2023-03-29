import { useState } from "react";
// import { toast } from 'react-hot-toast';
import { Wrapper, Input, Button, SearchIcon } from "./SearchBox.styled";

export const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    if (query.trim() === "") {
      // toast.error('The search query is empty, enter the name of the movie...');
    }
    event.preventDefault();
    onSubmit(query);
    onReset(event);
  };

  const onChangeInput = (event) => {
    setQuery(event.target.value);
  };

  const onReset = (event) => {
    setQuery("");
    event.target.reset();
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search here..."
        value={query}
        onChange={onChangeInput}
      />
      <Button type="submit">
        <SearchIcon />
      </Button>
    </Wrapper>
  );
};
export default SearchBox;
