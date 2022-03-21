import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";

export default function ProjectSidebar({ project }: any) {
  console.log(project);
  return (
    <Grid item xs={12} md={4}>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          backgroundColor: "var(--darker)",
          boxShadow: 1,
          border: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            color: "var(--color-text)",
          }}
          gutterBottom
        >
          {project.name}
          <Divider />
        </Typography>
        <Typography
          sx={{
            color: "var(--color-text)",
            fontWeight: "bold",
            fontSize: "18px",
            fontFamily: "monospace",
          }}
        >
          {project.title}
        </Typography>

        <Box sx={{ mt: 1 }}>
          <Typography
            sx={{
              fontSize: 20,
              color: "var(--color-text)",
              textTransform: "uppercase",
            }}
          >
            Use Technology
          </Typography>
          <Divider />
          {project.tools.map((tool: any) => (
            <Button sx={{ mt: 2, ml: 1 }} variant="outlined">
              {tool}
            </Button>
          ))}
        </Box>
      </Paper>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ mt: 3, color: "var(--color-text)" }}
      >
        {"archive"}
      </Typography>
    </Grid>
  );
}
