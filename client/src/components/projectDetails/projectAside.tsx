import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { TAbout } from "../../types/types";
interface IProps {
  about: TAbout | undefined;
}
export default function ProjectAside({ about }: IProps) {
  return (
    <>
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
          about
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
          {about?.title}
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
          {about?.tools.map((tool: string) => (
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
    </>
  );
}
