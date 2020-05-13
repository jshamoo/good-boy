import React, { useState } from "react";
import { FormGroup, TextField, MenuItem } from "@material-ui/core";

const useDropdown = (label, defaultState, MenuItems) => {
  const [state, setState] = useState(defaultState);
  const id = `dropdown-${label.replace(" ", "").toLowerCase()}`;

  const DropDown = () => (
    <FormGroup>
      <TextField
        select
        id={id}
        label={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
        disabled={!MenuItems.length}
        margin="normal"
        size="small"
        placeholder="All"
      >
        {MenuItems.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </TextField>
    </FormGroup>
  );
  return [state, DropDown, setState];
};

export default useDropdown;
