// @mui
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Button, Card, Avatar, Box, IconButton } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import SvgIconStyle from "@/components/SvgIconStyle";
// ----------------------------------------------------------------------

const RowStyle = styled("div")({
  display: "flex",
  alignItems: "center",
});

// ----------------------------------------------------------------------

export default function NewPost() {
  const theme = useTheme();
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "22px",
    backgroundColor: alpha(theme.palette.common.black, 0.1),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.12),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(2)})`,
      transition: theme.transitions.create("width"),
      width: "300px !important",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  
  return (
    <Card sx={{ px: 3, py: 2 }}>
      <RowStyle>
        <Avatar src="" alt="logo" />
        <Search>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </RowStyle>
      <Box
        sx={{ py: 2, px: 5 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ pl: 2 }}>
          <IconButton>
            <SvgIconStyle src={"/icons/ic_picture.svg"} width={1} height={1} />
          </IconButton>
          <IconButton>
            <SvgIconStyle
              src={"/icons/ic_videos.svg"}
              width={1}
              height={1}
            />
          </IconButton>
          <IconButton>
            <SvgIconStyle
              src={"/icons/ic_mircophone.svg"}
              width={1}
              height={1}
            />
          </IconButton>
          <IconButton>
            <SvgIconStyle
              src={"/icons/ic_go_live.svg"}
              width={1}
              height={1}
            />
          </IconButton>
        </Box>
        <Box>
          <Button variant="contained">Post</Button>
        </Box>
      </Box>
    </Card>
  );
}
