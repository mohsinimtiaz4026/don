import SvgIconStyle from "./SvgIconStyle";
import  {Stack,Button} from "@mui/material"; 

const NavbarButtons = () => {
  return (
    <Stack>
            <Button
              startIcon={
              <SvgIconStyle src="/icons/ic_go_live.svg" width="1" height="1"/>
            }
              variant={"outlined"}
              style={{ width: "100%" }}
              size="large"
              color="error"
            >
              Go Live
            </Button>
            <Button
              startIcon={
                <SvgIconStyle src="/icons/ic_plus.svg" width="1" height="1" />
              }
              variant={"contained"}
              style={{ width: "100%", marginTop: "20px" }}
              size="large"
            >
              New Post
            </Button>
          </Stack>
  );
}

export default NavbarButtons;