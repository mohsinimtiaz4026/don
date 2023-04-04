// @components
import Iconify from "./Iconify";
// @mui
import { Card, Avatar, IconButton, Typography, Grid } from "@mui/material";
// hooks
import useSettings from "../hooks/useSettings";


const SliderContent = () => {
  const { themeMode } = useSettings();
  const cardImages = [
    {
      imageUrl: "/images/two.jpeg",
      profile: "/logo/profile.png",
    },
    {
      imageUrl: "/images/one.jpg",
      profile: "/logo/profile.png",
    },
    {
      imageUrl: "/images/two.jpeg",
      profile: "/logo/profile.png",
    },
    {
      imageUrl: "/images/one.jpg",
      profile: "/logo/profile.png",
    },
    {
      imageUrl: "/images/two.jpeg",
      profile: "/logo/profile.png",
    },
    {
      imageUrl: "/images/one.jpg",
      profile: "/logo/profile.png",
    },
    {
      imageUrl: "/images/two.jpeg",
      profile: "/logo/profile.png",
    },
    {
      imageUrl: "/images/one.jpg",
      profile: "/logo/profile.png",
    },
    {
      imageUrl: "/images/two.jpeg",
      profile: "/logo/profile.png",
    },
    {
      imageUrl: "/images/one.jpg",
      profile: "/logo/profile.png",
    },
    {
      imageUrl: "/images/two.jpeg",
      profile: "/logo/profile.png",
    },
    {
      imageUrl: "/images/one.jpg",
      profile: "/logo/profile.png",
    },
    {
      imageUrl: "/images/two.jpeg",
      profile: "/logo/profile.png",
    },
    {
      imageUrl: "/images/one.jpg",
      profile: "/logo/profile.png",
    },
  ];
  return (
    <>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflowX: "auto",
          width: {xs: "500px",md:"100%"}
        }}
      >
        <div>
          <Card
            sx={{
              width: { md: "140px", sm: "130px", xs: "120px" },
              height: "160px",
              position: "relative",
              backgroundColor: themeMode === "light" ? "#fff" : "#1A0A23",
              px: 2,
              pt: 2,
              pb: 4,
            }}
          >
            <IconButton
              style={{
                position: "absolute",
                top: "15px",
                left: "15px",
                backgroundColor:
                  themeMode === "light"
                    ? "#790DC2"
                    : "rgba(255, 255, 255, 0.2)",
              }}
            >
              <Iconify
                icon="material-symbols:add"
                sx={{
                  color: "#fff",
                }}
              />
            </IconButton>
            <Typography
              style={{
                position: "absolute",
                bottom: "15px",
                left: "15px",
                color: themeMode === "light" ? "#000": "rgba(255, 255, 255, 0.35)",
              }}
            >
              Add a story
            </Typography>
          </Card>
        </div>
        {cardImages.map((item, index) => {
          return (
            <div style={{ marginLeft: "30px" }} key={index}>
              <Card
                sx={{
                  width: { md: "140px", sm: "130px", xs: "120px" },
                  height: "160px",
                  position: "relative",
                  background: `linear-gradient(180deg, rgba(255, 80, 190, 0) 42.27%, #FF50BE 100%, #FF50BE 100%), url(${item.imageUrl})`,
                  backgroundSize: "cover",
                  px: 2,
                  pt: 2,
                  pb: 4,
                }}
              >
                <Avatar
                  src={item.profile}
                  alt="profile"
                  style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                  }}
                />
                <Typography
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    left: "15px",
                    color: "#fff",
                  }}
                >
                  Alogian Zoey
                </Typography>
              </Card>
            </div>
          );
        })}
        {/* <div style={{marginLeft: "30px"}}>
          <Card
            sx={{
              width: { md: "140px", sm: "130px", xs: "120px" },
              height: "160px",
              position: "relative",
              background:
                "linear-gradient(180deg, rgba(255, 80, 190, 0) 42.27%, #FF50BE 100%, #FF50BE 100%), url('/images/two.jpeg')",
              backgroundSize: "cover",
              px: 2,
              pt: 2,
              pb: 4,
            }}
          >
            <Avatar
              src="/logo/profile.png"
              alt="profile"
              style={{
                position: "absolute",
                top: "15px",
                left: "15px",
              }}
            />
            <Typography
              style={{
                position: "absolute",
                bottom: "15px",
                left: "15px",
                color: "#fff",
              }}
            >
              Alogian Zoey
            </Typography>
          </Card>
        </div>
        <div style={{marginLeft: "30px"}}>
          <Card
            sx={{
              width: { md: "140px", sm: "130px", xs: "120px" },
              height: "160px",
              position: "relative",
              background:
                "linear-gradient(180deg, rgba(255, 80, 190, 0) 42.27%, #FF50BE 100%, #FF50BE 100%), url('/images/one.jpg')",
              backgroundSize: "cover",
              px: 2,
              pt: 2,
              pb: 4,
            }}
          >
            <Avatar
              src="/logo/profile.png"
              alt="profile"
              style={{
                position: "absolute",
                top: "15px",
                left: "15px",
              }}
            />
            <Typography
              style={{
                position: "absolute",
                bottom: "15px",
                left: "15px",
                color: "#fff",
              }}
            >
              Alogian Zoey
            </Typography>
          </Card>
        </div>
        <div style={{marginLeft: "30px"}}>
          <Card
            sx={{
              width: { md: "140px", sm: "130px", xs: "120px" },
              height: "160px",
              position: "relative",
              background:
                "linear-gradient(180deg, rgba(255, 80, 190, 0) 42.27%, #FF50BE 100%, #FF50BE 100%), url('/images/two.jpeg')",
              backgroundSize: "cover",
              px: 2,
              pt: 2,
              pb: 4,
            }}
          >
            <Avatar
              src="/logo/profile.png"
              alt="profile"
              style={{
                position: "absolute",
                top: "15px",
                left: "15px",
              }}
            />
            <Typography
              style={{
                position: "absolute",
                bottom: "15px",
                left: "15px",
                color: "#fff",
              }}
            >
              Alogian Zoey
            </Typography>
          </Card>
        </div>
        <div style={{marginLeft: "30px"}}>
          <Card
            sx={{
              width: { md: "140px", sm: "130px", xs: "120px" },
              height: "160px",
              position: "relative",
              background:
                "linear-gradient(180deg, rgba(255, 80, 190, 0) 42.27%, #FF50BE 100%, #FF50BE 100%), url('/images/one.jpg')",
              backgroundSize: "cover",
              px: 2,
              pt: 2,
              pb: 4,
            }}
          >
            <Avatar
              src="/logo/profile.png"
              alt="profile"
              style={{
                position: "absolute",
                top: "15px",
                left: "15px",
              }}
            />
            <Typography
              style={{
                position: "absolute",
                bottom: "15px",
                left: "15px",
                color: "#fff",
              }}
            >
              Alogian Zoey
            </Typography>
          </Card>
        </div> */}
      </Grid>
    </>
  );
};

export default SliderContent;
