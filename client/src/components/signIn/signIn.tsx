import { useMutation } from "@apollo/client";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import { LOGIN_USER } from "../../services";

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="primary" align="center" {...props}>
      {"Copyright © "}
      <Link to="/">Your Website</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignInSection() {
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);
  console.log(data);
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    loginUser({
      variables: {
        email: data.get("email"),
        password: data.get("password"),
      },
    });
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ background: "var(--login)" }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          sx={{ color: "var(--color-text)" }}
          variant="h5"
        >
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            placeholder="Email Address"
            autoFocus
            sx={classes.input}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            placeholder="password"
            type="password"
            id="password"
            autoComplete="current-password"
            sx={classes.input}
          />
          <FormControlLabel
            sx={{ color: "var(--color-text)" }}
            control={<Checkbox value="remember" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/">
                <Typography sx={{ color: "var(--color-text)" }}>
                  Forgot password?
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup">
                <Typography sx={{ color: "var(--color-text)" }}>
                  {"Don't have an account? Sign Up"}
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 4, mb: 1, padding: 1 }} />
    </Container>
  );
}

export const classes = {
  input: {
    input: {
      color: "#9e9e9e",
      "&::placeholder": {
        textOverflow: "ellipsis !important",
        color: "#9e9e9e",
      },
    },
    label: {
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      width: "100%",
      color: "#a1887f",
    },
  },
};
