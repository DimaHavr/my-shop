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
  font-family: "LatoBold";
  font-size: 16px;
  line-height: 26px;
  color: #424551;
`;

const StyledFormControl = styled(FormControl)`
  margin: 0;
  width: 170px;
  height: 44px;
  border-color: #17696a;
`;

const StyledSelect = styled(Select)`
  margin: 0;
  width: 170px;
  height: 44px;
`;

export default function ControlledOpenSelect() {
  const [sort, setSort] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setSort(event.target.value);
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
        <InputLabel id="demo-controlled-open-select-label">Sort</InputLabel>
        <StyledSelect
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={sort}
          label="sort"
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
