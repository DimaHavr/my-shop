import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Box from "../Box/Box";

const StyledButton = styled(Button)`
  font-family: "LatoBold" !important;
  font-size: 16px !important;
  line-height: 26px !important;
  color: #424551 !important;
  text-transform: none;
`;

const StyledFormControl = styled(FormControl)``;

const StyledSelect = styled(Select)`
  margin: 0;
  width: 170px;
  height: 44px;
`;
const StyledInput = styled(InputLabel)``;

export default function ControlledOpenSelect() {
  const [sorting, setSorting] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setSorting(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box display="flex">
      <StyledButton onClick={handleOpen}>Sort by</StyledButton>
      <StyledFormControl>
        <StyledInput id="demo-controlled-open-select-label">Sort</StyledInput>
        <StyledSelect
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={sorting}
          label="sorting"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </StyledSelect>
      </StyledFormControl>
    </Box>
  );
}
