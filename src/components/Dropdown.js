import React from "react";
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

const Dropdown = (label, options, dropdownState, setDropdownState) => {
  const classes = useStyles();
  const id = `dropdown-${label.replace(" ", "").toLowerCase()}`;

  const DropdownComponent = () => {
    return (
      <FormGroup>
        <InputLabel>{label}</InputLabel>
        <Select
          multiple
          id={id}
          label={label}
          className={classes.select}
          value={dropdownState}
          disabled={options.length === 0}
          onChange={(e) => setDropdownState(e.target.value)}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
        >
          {options.length &&
            options.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormGroup>
    );
  };
  return DropdownComponent;
};

export default Dropdown;
