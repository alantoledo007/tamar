"use client";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useSearch } from "./hooks/useSearch";

export const SearchBar = () => {
  const { defaultValue, onFocus, value, setValue } = useSearch();

  return (
    <Box display="flex">
      <TextField
        fullWidth
        value={value ?? defaultValue}
        onChange={(e) => setValue(e.target.value)}
        onFocus={onFocus}
        type="search"
        label="Buscar por ciudad"
        name="search"
        placeholder="Ciudad"
      />
    </Box>
  );
};
