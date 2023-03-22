// @mui
import { useTheme } from "@mui/material/styles";
import { Box, Card, CardHeader, Avatar, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function LiveNow() {
  const theme = useTheme();

  const isLight = theme.palette.mode === "light";
  return (
    <Card sx={{ px: 3, py: 1 }}>
      <Typography >Live Now</Typography>
      <Box
        style={{
          width: "340px",
          height: "auto",
          paddingBottom: "10px",
          background: "#F0EDF1",
          borderRadius: "96px",
        }}
      >
        <CardHeader>
          <Avatar src="/images/live_now_img.png" />
          <Typography>@Joli</Typography>
          <Typography>10000 people / 678 Watching now</Typography>
        </CardHeader>
      </Box>
    </Card>
  );
}
