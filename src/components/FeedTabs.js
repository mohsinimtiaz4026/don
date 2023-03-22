import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
} from "@mui/material";
import Iconify from "./Iconify";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import SvgIconStyle from "./SvgIconStyle";

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
          <CardHeader
            avatar={<Avatar src="/logo/icandy-logo.png" />}
            action={
              <IconButton aria-label="settings">
                <Iconify icon="ic:outline-more-horiz" />
              </IconButton>
            }
            title="HottiGras"
            subheader="@hottigras"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Congras <Link href={""}>@icandy</Link> for wining a Product Hunt
              T-shirt! DM us to claim your price.
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="220"
            image="/images/image.png"
            alt="Post"
            sx ={{p:2}}
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
        Item Two
      </TabPanel>
    </Box>
  );
}
