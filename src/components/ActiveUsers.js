import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SvgIconStyle from "./SvgIconStyle";
import { Avatar, Box } from "@mui/material";

const ActiveUsers = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <Box sx={{
        my: 2
      }}>
        <Box style={{position: "relative"}}>
          <Avatar src="/images/1.png" />
        </Box>
        <Box style={{
            position: "absolute",
            top: "33px",
            left: "22px"
        }}>
          <SvgIconStyle src="/icons/ic_active.svg" width="1" height="1"/>
        </Box>
      </Box>
      <Box sx={{
        my: 2
      }}>
        <Box style={{position: "relative"}}>
          <Avatar src="/images/1.png" />
        </Box>
        <Box style={{
            position: "absolute",
            top: "33px",
            left: "22px"
        }}>
          <SvgIconStyle src="/icons/ic_active.svg" width="1" height="1"/>
        </Box>
      </Box>
    </Slider>
  );
};

export default ActiveUsers;
