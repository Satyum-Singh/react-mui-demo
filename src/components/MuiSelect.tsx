import { Stack, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
export const MuiSelect = () => {
  const [countries, setcountries] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setcountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Stack width="250px">
      <TextField
        label="Select Army"
        select
        value={countries}
        onChange={handleChange}
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Stack>
  );
};
