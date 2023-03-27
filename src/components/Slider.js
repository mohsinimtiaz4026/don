import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Iconify from "./Iconify";
import { Card, Avatar, IconButton, Typography } from "@mui/material";
import useSettings from "../hooks/useSettings";

const SliderContent = () => {
  const { themeMode } = useSettings();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div>
        <Card
          style={{
            width: "140px",
            height: "160px",
            position: "relative",
          }}
          sx={{
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
              color: "#fff",
              backgroundColor: themeMode === "light" ? "#7635DC" : "#A49DA7",
            }}
          >
            <Iconify icon="material-symbols:add" />
          </IconButton>
          <Typography style={{
              position: "absolute",
              bottom: "15px",
              left: "15px",
              color: themeMode === "light" ? "#000" : "rgba(255, 255, 255, 0.35)"
            }}>Add a story</Typography>
        </Card>
      </div>
      <div>
        <Card
          style={{
            width: "140px",
            height: "160px",
            position: "relative",
            background:
              "linear-gradient(180deg, rgba(255, 80, 190, 0) 42.27%, #FF50BE 100%, #FF50BE 100%), url('/images/four.jpg')",
            backgroundSize: "cover",
          }}
          sx={{
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
      <div>
        <Card
          style={{
            width: "140px",
            height: "160px",
            position: "relative",
            background:
              "linear-gradient(180deg, rgba(255, 80, 190, 0) 42.27%, #FF50BE 100%, #FF50BE 100%), url('/images/two.jpeg')",
            backgroundSize: "cover",
          }}
          sx={{
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
      <div>
        <Card
          style={{
            width: "140px",
            height: "160px",
            position: "relative",
            background:
              "linear-gradient(180deg, rgba(255, 80, 190, 0) 42.27%, #FF50BE 100%, #FF50BE 100%), url('/images/download.jpg')",
            backgroundSize: "cover",
          }}
          sx={{
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
      <div>
        <Card
          style={{
            width: "140px",
            height: "160px",
            position: "relative",
            background:
              "linear-gradient(180deg, rgba(255, 80, 190, 0) 42.27%, #FF50BE 100%, #FF50BE 100%), url('/images/one.jpg')",
            backgroundSize: "cover",
          }}
          sx={{
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
    </Slider>
  );
};

export default SliderContent;
