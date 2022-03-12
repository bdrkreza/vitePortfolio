import { Box, Container, Switch, Typography } from "@mui/material";
import React, { useState } from "react";

export default function PricingTop({ content }: any) {
  const [state, setState] = useState({
    checkbox: true,
  });

  const handleChange = (event: any) => {
    setState({ ...state, checkbox: event.target.checked });
  };
  return (
    <React.Fragment>
      <Box mb={3}>
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            sx={{ color: "var(--color-text)" }}
            component="h2"
            gutterBottom={true}
          >
            <Typography variant="h3" component="span" color="primary">
              {content["header-p1"]}
            </Typography>
            <Typography variant="h3" sx={{ ml: 2 }} component="span">
              {content["header-p2"]}
            </Typography>
          </Typography>

          <Box sx={{ textAlign: "center", p: 1 }}>
            <Typography variant="subtitle1" component="span">
              {content["option1"]}
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
              {content["option2"]}
            </Typography>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
