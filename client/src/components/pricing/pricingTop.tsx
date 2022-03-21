import { Box, Container, Switch, Typography } from "@mui/material";
import React, { useState } from "react";

export default function PricingTop() {
  const [state, setState] = useState({
    checkbox: true,
  });

  const handleChange = (event: any) => {
    setState({ ...state, checkbox: event.target.checked });
  };
  return (
    <React.Fragment>
      <Box mb={3} pt={20}>
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            sx={{ color: "var(--color-text)" }}
            component="h2"
            gutterBottom={true}
          >
            <Typography variant="h3" component="span" color="primary">
              {"Choose the"}
            </Typography>
            <Typography variant="h3" sx={{ ml: 2 }} component="span">
              {"Web Design that fits your needs"}
            </Typography>
          </Typography>

          <Box sx={{ textAlign: "center", p: 1 }}>
            <Typography variant="subtitle1" component="span">
              {"Monthly"}
            </Typography>
            &nbsp;
            <Switch
              name="checkbox"
              color="primary"
              checked={state.checkbox}
              onChange={handleChange}
            />
            &nbsp;
            <Typography variant="subtitle1" component="span">
              {"Annual"}
            </Typography>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
