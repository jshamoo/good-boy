import React, { useState } from "react";
import {
  FormGroup,
  InputLabel,
  Select,
  Chip,
  MenuItem,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  select: {
    "margin-bottom": 5,
  },
  chip: {
    margin: 2,
  },
});
const useDropdown = (label, defaultState, MenuItems) => {
  const [state, setState] = useState(defaultState);
  const id = `dropdown-${label.replace(" ", "").toLowerCase()}`;
  const classes = useStyles();
  const DropDown = () => (
    <FormGroup>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        id={id}
        label={label}
        className={classes.select}
        value={state}
        onChange={(e) => setState(e.target.value)}
        renderValue={(selected) => (
          <div className={classes.chips}>
            {selected.map((value) => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        )}
      >
        {MenuItems.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormGroup>
  );
  return [state, DropDown, setState];
};

export default useDropdown;
