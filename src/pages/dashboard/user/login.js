import { useState } from "react";
import Link from "next/link";
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

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
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
            Sign in to support your favorite creators
          </Typography>
          <Typography variant="body3" sx={{ color: "#000", fontWeight: 600 }}>
            Log in
          </Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ m: 1, width: "30ch" }}
          >
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
              LOG IN
            </Button>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography><Link href="#">Forget Password?</Link></Typography>
              <Typography><Link href="/dashboard/user/register">Sign up</Link></Typography>
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

export default Login;
