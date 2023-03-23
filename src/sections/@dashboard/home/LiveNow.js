// @mui
import { useTheme } from "@mui/material/styles";
import { Box, Card, Avatar, Typography } from "@mui/material";
import SvgIconStyle from "@/components/SvgIconStyle";
import ActiveUsers from "@/components/ActiveUsers";

// ----------------------------------------------------------------------

export default function LiveNow() {
  const theme = useTheme();

  const isLight = theme.palette.mode === "light";
  return (
    <Card sx={{ px: 3, py: 1 }}>
      <Typography sx={{ py: 2 }}>Live Now</Typography>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "8px",
          gap: "10px",
          width: "340px",
          height: "auto",
          background: "#F0EDF1",
          borderRadius: "96px",
        }}
      >
        <Box
          style={{
            position: "relative",
          }}
        >
          <Avatar src="/images/live_now_img.png" />
        </Box>
        <Box
          style={{
            position: "absolute",
            top: "97px",
            left: "55px",
          }}
        >
          <SvgIconStyle src="/icons/ic_live.svg" />
        </Box>
        <Box
          style={{
            marginLeft: "10px",
          }}
        >
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Typography>@Joli</Typography>
            <SvgIconStyle src="/icons/ic_batch.svg" />
          </Box>
          <Typography>10000 people / 678 Watching now</Typography>
        </Box>
      </Box>
      {/* <ActiveUsers /> */}
    </Card>
  );
}
