import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Grid,
  IconButton,
} from "@mui/material";
import Iconify from "./Iconify";
import SvgIconStyle from "./SvgIconStyle";
import useSettings from "../hooks/useSettings";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player";
import Image from "./Image";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { themeMode } = useSettings();
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Popular Posts" {...a11yProps(0)} />
          <Tab label="Recent Posts" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Card>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 2,
            }}
          >
            <Grid sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <Avatar src="/logo/icandy-logo.png" />
              </Box>
              <Box sx={{ pl: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: themeMode === "light" ? "#000" : "#fff",
                  }}
                >
                  HottiGras
                </Typography>
                <Typography
                  sx={{
                    color: "#92A1AF",
                  }}
                >
                  @hottigras
                </Typography>
              </Box>
              <Box sx={{ pl: 1 }}>
                <SvgIconStyle src="/icons/ic_batch.svg" bgColor="#1DA1F2" />
              </Box>
            </Grid>
            <Grid sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  color: "#92A1AF",
                }}
              >
                5 min ago
              </Typography>
              <IconButton aria-label="settings">
                <Iconify icon="ic:outline-more-horiz" />
              </IconButton>
            </Grid>
          </Grid>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Congras
              <Box
                component="span"
                style={{
                  color: "#1DA1F2",
                  textDecoration: "none",
                  padding: "0 4px",
                  cursor: "pointer",
                }}
              >
                @icandy
              </Box>
              for wining a Product Hunt T-shirt! DM us to claim your price.
            </Typography>
          </CardContent>
          <CardMedia
            component="video"
            height="250px"
            src="/images/_2.mp4"
            style={{
              padding: "0 12px",
              borderRadius: "8px",
            }}
            controls
            poster="/images/image.png"
          />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Iconify icon="mdi:cards-heart" />
            </IconButton>
            <IconButton aria-label="share">
              <Iconify icon="material-symbols:share" />
            </IconButton>
          </CardActions>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Card>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 2,
            }}
          >
            <Grid sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <Avatar src="/logo/icandy-logo.png" />
              </Box>
              <Box sx={{ pl: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: themeMode === "light" ? "#000" : "#fff",
                  }}
                >
                  HottiGras
                </Typography>
                <Typography
                  sx={{
                    color: "#92A1AF",
                  }}
                >
                  @hottigras
                </Typography>
              </Box>
              <Box sx={{ pl: 1 }}>
                <SvgIconStyle src="/icons/ic_batch.svg" bgColor="#1DA1F2" />
              </Box>
            </Grid>
            <Grid sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  color: "#92A1AF",
                }}
              >
                5 min ago
              </Typography>
              <IconButton aria-label="settings">
                <Iconify icon="ic:outline-more-horiz" />
              </IconButton>
            </Grid>
          </Grid>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Congras
              <Box
                component="span"
                style={{
                  color: "#1DA1F2",
                  textDecoration: "none",
                  padding: "0 4px",
                  cursor: "pointer",
                }}
              >
                @icandy
              </Box>
              for wining a Product Hunt T-shirt! DM us to claim your price.
            </Typography>
          </CardContent>
          <CardMedia
            component="video"
            height="250px"
            src="/images/_2.mp4"
            style={{
              padding: "0 12px",
              borderRadius: "8px",
            }}
            controls
            poster="/images/image.png"
          />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Iconify icon="mdi:cards-heart" />
            </IconButton>
            <IconButton aria-label="share">
              <Iconify icon="material-symbols:share" />
            </IconButton>
          </CardActions>
        </Card>
      </TabPanel>
    </Box>
  );
}
