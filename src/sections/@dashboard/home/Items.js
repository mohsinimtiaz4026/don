// react
import { useState } from "react";

// @mui
import { Button, Box, IconButton, Menu, MenuItem } from "@mui/material";

// @mui styles
import { useTheme } from "@mui/material/styles";

// components
import Iconify from "@/components/Iconify";
import SliderContent from "../../../components/Slider";
// ----------------------------------------------------------------------

export default function Items() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ py: 5 }}>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Button variant="contained">All</Button>
          <Button variant="contained" color="inherit" sx={{ ml: 2 }}>
            Purchees
          </Button>
          <IconButton sx={{ ml: 2 }} color="primary">
            <Iconify icon="mdi:pencil" />
          </IconButton>
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          Sort By:
          <Box
            component={"span"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            &nbsp;
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="text"
              endIcon={ <Iconify icon="material-symbols:keyboard-arrow-down-rounded" />}
            >
              Review
            </Button>
          </Box>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
      <Box sx={{ py: 2 }}>
        <SliderContent />
      </Box>
    </Box>
  );
}
