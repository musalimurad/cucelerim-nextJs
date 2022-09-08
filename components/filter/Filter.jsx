import styles from "./_filter.module.scss";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
  "Test-1",
  "Test-2",
  "Test-3",
  "Test-4",
  "Test-5",
  "Test-6",
  "Test-7",
  "Test-8",
];
const colors = [
  "Test-1",
  "Test-2",
  "Test-3",
  "Test-4",
  "Test-5",
  "Test-6",
  "Test-7",
  "Test-8",
];
const Filter = () => {
  const [personName, setPersonName] = useState([]);
  const [color, setColor] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const [age, setAge] = useState("");

  const handleChangeTwo = (event) => {
    setAge(event.target.value);
  };
  const handleChangeThree = (event) => {
    const {
      target: { value },
    } = event;
    setColor(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div className={styles.filter}>
      <div className={styles.filterContent}>
        <div className="row align-items-center">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <FormControl
              className={styles.formControl}
              sx={{mb:1,  width: "100%" }}
            >
              <InputLabel id="demo-multiple-checkbox-label">Rəngi</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                className={styles.select}
                multiple
                value={color}
                onChange={handleChangeThree}
                input={<OutlinedInput label="Rəngi" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
                style={{ borderRadius: "8px" }}
              >
                {colors.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={color.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <FormControl
              className={styles.formControl}
              sx={{mb:1, width: "100%" }}
            >
              <InputLabel id="demo-multiple-checkbox-label">
                Geyim novu{" "}
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Geyim novu" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
                style={{ borderRadius: "8px" }}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <FormControl
              className={styles.formControl}
              sx={{mb:1, width: "100%" }}
            >
              <InputLabel id="demo-multiple-checkbox-label">Marka</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Marka" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
                style={{ borderRadius: "8px" }}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <FormControl
              className={styles.formControl}
              sx={{ mb: 1, width: "100%" }}
            >
              <InputLabel id="demo-simple-select-autowidth-label">
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleChangeTwo}
                autoWidth
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
