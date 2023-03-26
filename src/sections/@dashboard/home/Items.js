// react
import { useState } from "react";

// @mui
import { Button, Box, IconButton, Menu, MenuItem } from "@mui/material";

// @mui styles
import { useTheme } from "@mui/material/styles";

// components
import Iconify from "@/components/Iconify";
import SliderContent from "../../../components/Slider";
import useSettings from "../../../hooks/useSettings";
// ----------------------------------------------------------------------

export default function Items() {
  const theme = useTheme();
  const {themeMode} = useSettings();
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
          <Button  sx={{ ml: 2,backgroundColor:themeMode === "light" ? "#fff" : " #1A0A23",
        color:"#B9B9B9" }}>
            Purchees
          </Button>
          <IconButton sx={{ ml: 2,backgroundColor:themeMode === "light" ? "#fff" : " #1A0A23",color:"#B9B9B9"  }}>
            <Iconify icon="mdi:pencil" />
          </IconButton>
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            color: "#6E767D"
          }}
        >
          Sort By:
          <Box
            component={"span"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
              sx={{
              color:themeMode === "light" ? "#000": "#fff"
              }}
              endIcon={
                <Iconify icon="material-symbols:keyboard-arrow-down-rounded" />
              }
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
