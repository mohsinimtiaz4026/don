import SvgIconStyle from "./SvgIconStyle";
import { styled } from "@mui/material/styles";
import { Grid, Box, Avatar, Typography, Badge } from "@mui/material";

const SuggestionCard = () => {
  const SmallAvatar = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "6px 12px",
    gap: "8px",
    width: "55px",
    height: "31px",
    background: "#3E892C",
    borderRadius: "4px",
    color: "#fff",
  }));
  return (
    <Grid>
      <Grid
        sx={{
          my: 2,
          width: "423px",
          height: "140px",
          borderRadius: "16px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          background: "url('/images/model1.png')",
        }}
      >
        <Grid
          sx={{
            py: 1,
            px: 2,
            background:
              "linear-gradient(92.16deg, rgba(250, 23, 255, 0.26) 0%, #FF291B 104.54%)",
            backdropFilter: "blur(2px)",
            display: "flex",
            alignItems: "center",
            borderRadius: "0px 0px 16px 16px",
            height: "78.76px",
            left: "0px",
            top: "61.24px",
            position: "relative",
          }}
        >
          <Box sx={{pl: 2,mb:6}}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
              badgeContent={<SmallAvatar>Free</SmallAvatar>}
            >
              <Avatar
                src="/images/avatar1.png"
                sx={{
                  width: 96,
                  height: 96,
                }}
              />
            </Badge>
          </Box>
          <Box sx={{ display: "flex", pl: 2, alignItems: "center" }}>
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                }}
                variant="h6"
              >
                Alogian Zoey
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                }}
              >
                @alogianzoey
              </Typography>
            </Box>
            <Box sx={{ pl: 1 }}>
              <SvgIconStyle src="/icons/ic_batch.svg" bgColor="#fff" />
            </Box>
          </Box>
        </Grid>
      </Grid>
        <Grid
        sx={{
          my: 2,
          width: "423px",
          height: "140px",
          borderRadius: "16px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          background: "url('/images/model2.png')",
        }}
      >
        <Grid
          sx={{
            py: 1,
            px: 2,
            background:
              "linear-gradient(92.16deg, rgba(250, 23, 255, 0.26) 0%, #FF291B 104.54%)",
            backdropFilter: "blur(2px)",
            display: "flex",
            alignItems: "center",
            borderRadius: "0px 0px 16px 16px",
            height: "78.76px",
            left: "0px",
            top: "61.24px",
            position: "relative",
          }}
        >
          <Box sx={{pl: 2,mb:6}}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
              badgeContent={<SmallAvatar>Free</SmallAvatar>}
            >
              <Avatar
                src="/images/avatar2.png"
                sx={{
                  width: 96,
                  height: 96,
                }}
              />
            </Badge>
          </Box>
          <Box sx={{ display: "flex", pl: 2, alignItems: "center" }}>
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                }}
                variant="h6"
              >
                Alogian Zoey
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                }}
              >
                @alogianzoey
              </Typography>
            </Box>
            <Box sx={{ pl: 1 }}>
              <SvgIconStyle src="/icons/ic_batch.svg" bgColor="#fff" />
            </Box>
          </Box>
        </Grid>
      </Grid>
        <Grid
        sx={{
          my: 2,
          width: "423px",
          height: "140px",
          borderRadius: "16px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          background: "url('/images/model1.png')",
        }}
      >
        <Grid
          sx={{
            py: 1,
            px: 2,
            background:
              "linear-gradient(92.16deg, rgba(250, 23, 255, 0.26) 0%, #FF291B 104.54%)",
            backdropFilter: "blur(2px)",
            display: "flex",
            alignItems: "center",
            borderRadius: "0px 0px 16px 16px",
            height: "78.76px",
            left: "0px",
            top: "61.24px",
            position: "relative",
          }}
        >
          <Box sx={{pl: 2,mb:6}}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
              badgeContent={<SmallAvatar>Free</SmallAvatar>}
            >
              <Avatar
                src="/images/avatar3.png"
                sx={{
                  width: 96,
                  height: 96,
                }}
              />
            </Badge>
          </Box>
          <Box sx={{ display: "flex", pl: 2, alignItems: "center" }}>
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                }}
                variant="h6"
              >
                Alogian Zoey
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                }}
              >
                @alogianzoey
              </Typography>
            </Box>
            <Box sx={{ pl: 1 }}>
              <SvgIconStyle src="/icons/ic_batch.svg" bgColor="#fff" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SuggestionCard;
