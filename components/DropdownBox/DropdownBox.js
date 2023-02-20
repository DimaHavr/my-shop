import { useState, useEffect, useRef } from "react";
import {
  DropdownContainer,
  DropdownMenu,
  DropdownItem,
  DropdownButton,
  DropBoxIcon,
} from "./DropdownBox.styled";

function useClickOutside(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, callback]);
}

function DropdownBox({ options, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  const dropdownRef = useRef();

  useClickOutside(dropdownRef, () => {
    setIsDropdownOpen(false);
    closeDropdown();
  });

  const handleSelect = (id) => {
    console.log(`You selected ${id}`);
    setIsDropdownOpen(false);
    closeDropdown();
  };

  function closeDropdown() {
    setIsOpen(false);
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    closeDropdown();
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>
        {options.buttonLabel || label} <DropBoxIcon />
      </DropdownButton>
      {isDropdownOpen && (
        <DropdownMenu>
          {options.map(({ label, id }) => (
            <DropdownItem key={id} onClick={() => handleSelect(id)}>
              {label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
}

export default DropdownBox;
