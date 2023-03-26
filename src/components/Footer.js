import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ py: 3 }}>
      <Box style={{display: "flex"}}>
        <Typography sx={{color: "#6E767D"}}>Terms Of Service</Typography>
        <Typography sx={{pl: 2,color: "#6E767D"}}>Privacy Policy</Typography>
        <Typography sx={{pl: 2,color: "#6E767D"}}>Cookie Policy</Typography>
      </Box>
      <Box style={{display: "flex"}}>
        <Typography sx={{color: "#6E767D"}}>Accessibility</Typography>
        <Typography sx={{pl: 2,color: "#6E767D"}}>Ads Info</Typography>
        <Typography sx={{pl: 2,color:"#6E767D"}}>More....</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
