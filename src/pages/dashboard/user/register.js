import { useState } from "react";
import { useRouter } from "next/router";
// mui
import {
  Grid,
  Box,
  Card,
  CardHeader,
  CardContent,
  InputAdornment,
  IconButton,
  Button,
  TextField,
  Typography,
} from "@mui/material";
// components
import Iconify from "../../../components/Iconify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const router = useRouter();
  return (
    <Grid
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Sign up to support your favorite creators
          </Typography>
          <Typography variant="body3" sx={{ color: "#000", fontWeight: 600 }}>
            Create an account
          </Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ m: 1, width: "30ch" }}
          >
            <TextField label="Name" sx={{ mb: 2,width: "30ch"  }} size="small" />
            <TextField label="Email" sx={{ mb: 2,width: "30ch"  }} size="small" />
            <TextField
              size="small"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <Iconify icon="mdi:eye-off-outline" />
                      ) : (
                        <Iconify icon="mdi:eye-outline" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Password"
            />
            <Button variant="contained" fullWidth sx={{ mt: 2 }}>
              SIGN UP
            </Button>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Typography>Already have an account?<Box component="span" sx={{pl:1}}><a onClick={() => router.push("/dashboard/user/login")} style={{textDecoration: "none",color: "#431A9E",cursor:"pointer"}}>Log in</a></Box></Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                background: "#1DA1F2",
                mt: 2,
                ":hover": {
                  bgcolor: "#4285F4",
                  color: "white",
                },
              }}
              fullWidth
              startIcon={<Iconify icon="mdi:twitter" />}
            >
              SIGN IN WITH TWITTER
            </Button>
            <Button
              fullWidth
              sx={{
                mt: 2,
                background: "#4285F4",
                color: "#fff",
                ":hover": {
                  bgcolor: "#3367D6",
                },
              }}
              startIcon={<Iconify icon="mdi:google" />}
            >
              SIGN IN WITH GOOGLE
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Register;
