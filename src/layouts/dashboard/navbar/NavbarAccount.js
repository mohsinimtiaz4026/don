import { Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function NavbarAccount({isDesktop, onToggleCollapse, isCollapse }) {
  return (
    <Typography
      onClick={onToggleCollapse}
      variant="subtitle2"
      sx={{
        pt: 3,
        px: 2,
      }}
    >
      Menu
    </Typography>
  );
}
