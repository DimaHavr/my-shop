import { useState } from "react";
import Box from "../Box/Box";
// import { toast } from 'react-hot-toast';
import {
  Wrapper,
  Input,
  Button,
  SearchIcon,
  ToggleDropbox,
} from "./SearchBox.styled";

export const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function onToggleDropdown() {
    setIsOpen(!isOpen);
  }
  const onBackdropCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };
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
    <Box>
      <Wrapper onSubmit={handleSubmit}>
        {/* <Input
          isOpen={isOpen}
          type="text"
          placeholder="Search here..."
          value={query}
          onChange={onChangeInput}
        /> */}
        <Button type="submit">
          <SearchIcon />
        </Button>
      </Wrapper>
      <ToggleDropbox onClick={onToggleDropdown}>
        <SearchIcon />
      </ToggleDropbox>
    </Box>
  );
};
export default SearchBox;
