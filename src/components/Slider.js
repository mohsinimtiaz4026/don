import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Avatar,IconButton } from "@mui/material";
import Image from "next/image";
import Iconify from "./Iconify";

const SliderContent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <Card
          style={{
            width: "140px",
            height: "140px",
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
              backgroundColor: "#7635DC",
              color: "#fff"
            }}
          >
            <Iconify icon="material-symbols:add"/>
          </IconButton>
        </Card>
      </div>
      <div>
        <Card
          style={{
            width: "140px",
            height: "140px",
            position: "relative",
          }}
          sx={{
            px: 2,
            pt: 2,
            pb: 4,
          }}
        >
          <Image src={"/images/four.jpg"} layout="fill" alt="profile" />
          <Avatar
          src="/logo/profile.png"
          alt="profile"
            style={{
              position: "absolute",
              top: "15px",
              left: "15px",
            }}
          />
        </Card>
      </div>
      <div>
        <Card
          style={{
            width: "140px",
            height: "140px",
            position: "relative",
          }}
          sx={{
            px: 2,
            pt: 2,
            pb: 4,
          }}
        >
          <Image src={"/images/two.jpeg"} layout="fill" alt="profile" />
          <Avatar
          src="/logo/profile.png"
          alt="profile"
            style={{
              position: "absolute",
              top: "15px",
              left: "15px",
            }}
          />
        </Card>
      </div>
      <div>
        <Card
          style={{
            width: "140px",
            height: "140px",
            position: "relative",
          }}
          sx={{
            px: 2,
            pt: 2,
            pb: 4,
          }}
        >
          <Image src={"/images/download.jpg"} layout="fill" alt="profile" />
          <Avatar
          src="/logo/profile.png"
          alt="profile"
            style={{
              position: "absolute",
              top: "15px",
              left: "15px",
            }}
          />
        </Card>
      </div>
      <div>
        <Card
          style={{
            width: "140px",
            height: "140px",
            position: "relative",
          }}
          sx={{
            px: 2,
            pt: 2,
            pb: 4,
          }}
        >
          <Image src={"/images/one.jpeg"} layout="fill" alt="profile" />
          <Avatar
          src="/logo/profile.png"
          alt="profile"
            style={{
              position: "absolute",
              top: "15px",
              left: "15px",
            }}
          />
        </Card>
      </div>
    </Slider>
  );
};

export default SliderContent;
