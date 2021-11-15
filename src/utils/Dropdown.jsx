import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    color: "#ACB2CF",
    position: "relative",
    backgroundColor: "#1C1D23",
    fontSize: 13,
    padding: "10px 30px 8px 12px",

    "&:focus": {
      borderRadius: 50,
      backgroundColor: "#1C1D23",
    }
  }
}));

export default function CustomDropdown({ children }) {
  const [listItem, setListItem] = useState('First');

  return (
    <div>
      <FormControl sx={{ m: 1 }} variant="standard">
        <Select
          labelId="dropdown"
          id="customized-dropdown"
          value={listItem}
          onChange={(event) => setListItem(event.target.value)}
          input={<BootstrapInput />}
        >
          {children}
        </Select>
      </FormControl>
    </div>
  );
}
