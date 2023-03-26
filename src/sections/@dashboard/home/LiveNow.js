// @mui
import { useTheme } from "@mui/material/styles";
import { Box, Card, Avatar, Typography, Stack } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
// @components
import ActiveUsers from "@/components/ActiveUsers";
import SvgIconStyle from "@/components/SvgIconStyle";
import useSettings from "../../../hooks/useSettings";

// ----------------------------------------------------------------------

export default function LiveNow() {
  const { themeMode } = useSettings();
  const theme = useTheme();
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

  return (
    <Card sx={{ px: 3, py: 1 }}>
      <Typography
        sx={{ py: 2 }}
        style={{
          color: themeMode == "light" ? "#000" : "#fff",
          fontWeight: 600,
        }}
      >
        Live Now
      </Typography>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "8px",
          gap: "10px",
          width: "340px",
          height: "auto",
          background: themeMode === "light" ? "#F0EDF1" : "#261033",
          borderRadius: "96px",
        }}
      >
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <SmallAvatar alt="Remy Sharp" src="/icons/ic_live.svg" />
          }
        >
          <Avatar alt="Travis Howard" src="/images/1.png" />
        </Badge>
        <Box
          style={{
            marginLeft: "10px",
          }}
        >
          <Box>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Typography
                style={{
                  color: themeMode == "light" ? "#000" : "#fff",
                  fontWeight: 600,
                }}>
                @Joli
              </Typography>
              <Box sx={{ ml: 1 }} style={{ lineHeight: "10px" }}>
                <SvgIconStyle src="/icons/ic_batch.svg" bgColor="#1D9FEE" />
              </Box>
            </Box>
            <Typography style={{
              color: themeMode=== "light" ? "#100616": "#E9E9E9"
            }}>10000 people / 678 Watching now</Typography>
          </Box>
        </Box>
      </Box>
      <ActiveUsers />
    </Card>
  );
}
