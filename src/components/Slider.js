import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Iconify from './Iconify';
import {Card, Avatar, IconButton, Typography, Grid} from '@mui/material';
import useSettings from '../hooks/useSettings';

const SliderContent = () => {
  const {themeMode} = useSettings();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Grid
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <div>
          <Card
            sx={{
              width: {md: '140px', sm: '130px', xs: '120px'},
              height: '160px',
              position: 'relative',
              background:
                "linear-gradient(180deg, rgba(255, 80, 190, 0) 42.27%, #FF50BE 100%, #FF50BE 100%), url('/images/two.jpeg')",
              backgroundSize: 'cover',
              px: 2,
              pt: 2,
              pb: 4,
            }}
          >
            <Avatar
              src="/logo/profile.png"
              alt="profile"
              style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
              }}
            />
            <Typography
              style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                color: '#fff',
              }}
            >
              Alogian Zoey
            </Typography>
          </Card>
        </div>
        <div>
          <Card
            sx={{
              width: {md: '140px', sm: '130px', xs: '120px'},
              height: '160px',
              position: 'relative',
              background:
                "linear-gradient(180deg, rgba(255, 80, 190, 0) 42.27%, #FF50BE 100%, #FF50BE 100%), url('/images/download.jpg')",
              backgroundSize: 'cover',
              px: 2,
              pt: 2,
              pb: 4,
            }}
          >
            <Avatar
              src="/logo/profile.png"
              alt="profile"
              style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
              }}
            />
            <Typography
              style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                color: '#fff',
              }}
            >
              Alogian Zoey
            </Typography>
          </Card>
        </div>
        <div>
          <Card
            sx={{
              width: {md: '140px', sm: '130px', xs: '120px'},
              height: '160px',
              position: 'relative',
              background:
                "linear-gradient(180deg, rgba(255, 80, 190, 0) 42.27%, #FF50BE 100%, #FF50BE 100%), url('/images/one.jpg')",
              backgroundSize: 'cover',
              px: 2,
              pt: 2,
              pb: 4,
            }}
          >
            <Avatar
              src="/logo/profile.png"
              alt="profile"
              style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
              }}
            />
            <Typography
              style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                color: '#fff',
              }}
            >
              Alogian Zoey
            </Typography>
          </Card>
        </div>
      </Grid>
    </>
    // <Slider {...settings}>
    // </Slider>
  );
};

export default SliderContent;
