import { useState } from "react";
import {
  AppBar,
  MenuItem,
  Select,
  Toolbar,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Title } from "./HeaderStyles";

export const Header = () => {
  const [currency, setCurrency] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setCurrency(e.target.value);
  };

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Title variant="h1" onClick={handleNavigate}>
          Crypto Price
        </Title>
        {/* <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel>Select</InputLabel>
            <Select
              variant="outlined"
              value={currency}
              onChange={handleChange}
              label="Currency"
              style={{
                width: 100,
                height: 40,
                marginLeft: 15,
              }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </FormControl>
        </Box> */}
        <Box sx={{ minWidth: 120 }}>
          <FormControl size="small" fullWidth>
            <InputLabel>Currency</InputLabel>
            <Select value={currency} label="Currency" onChange={handleChange}>
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
