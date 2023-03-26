import Footer from "./Footer";
import SvgIconStyle from "./SvgIconStyle";
import SuggestionCard from "./SuggestionCard";
import useSettings from "../hooks/useSettings";
import { Box, Typography, IconButton,Divider } from "@mui/material";

const SuggestionMenu = () => {
  const {themeMode} = useSettings();
  return (
    <Box
      sx={{
        pt: 5,
      }}
    >
      <Box style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <Box>
          <Typography sx={{
            color:themeMode === "light"? "#000": "#fff",
            fontWeight: 600
          }}>SUGGESTION</Typography>
        </Box>
        <Box>
          <IconButton>
            <SvgIconStyle src="/icons/ic_eye_button.svg" />
          </IconButton>
          <IconButton>
            <SvgIconStyle src="/icons/ic_reload.svg" />
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            <SvgIconStyle src="/icons/ic_left.svg" />
          </IconButton>
          <IconButton>
            <SvgIconStyle src="/icons/ic_right.svg" />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <SuggestionCard/>
      <Typography sx={{
        pt: 2,
        pb: 5,
        color: themeMode === "light"? "#000": "#fff"
      }}>Show More</Typography>
      <Divider />
      <Footer />
    </Box>
  );
};

export default SuggestionMenu;
