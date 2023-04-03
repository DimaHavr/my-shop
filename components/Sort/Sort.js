import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Box from "../Box/Box";
import styled from "styled-components";

const StyledFormControl = styled(Select)`
  &
    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select {
    height: auto;
    height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export default function ControlledOpenSelect() {
  const [sort, setSort] = React.useState("");
  const [open, setOpen] = React.useState(false);

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
      <Button sx={{ display: "block", mt: 2 }} onClick={handleOpen}>
        Sort by
      </Button>
      <FormControl sx={{ m: 0, minWidth: 170, height: 44 }}>
        <InputLabel id="demo-controlled-open-select-label">Sort</InputLabel>
        <StyledFormControl
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
        </StyledFormControl>
      </FormControl>
    </Box>
  );
}
