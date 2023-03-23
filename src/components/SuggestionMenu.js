import { Box, Typography, IconButton,Divider } from "@mui/material";
import SvgIconStyle from "./SvgIconStyle";
import Footer from "./Footer";

const SuggestionMenu = () => {
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
          <Typography>SUGGESTION</Typography>
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
      <Typography sx={{
        pt: 2,
        pb: 5
      }}>Show More</Typography>
      <Divider />
      <Footer />
    </Box>
  );
};

export default SuggestionMenu;
