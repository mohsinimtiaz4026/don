import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ py: 3 }}>
      <Box style={{display: "flex"}}>
        <Typography>Terms Of Service</Typography>
        <Typography sx={{pl: 2}}>Privacy Policy</Typography>
        <Typography sx={{pl: 2}}>Cookie Policy</Typography>
      </Box>
      <Box style={{display: "flex"}}>
        <Typography>Accessibility</Typography>
        <Typography sx={{pl: 2}}>Ads Info</Typography>
        <Typography sx={{pl: 2}}>More....</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
