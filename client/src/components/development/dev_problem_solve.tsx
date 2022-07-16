import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

type Props = {};

export default function DevProblemSolve({}: Props) {
  return (
    <div>
      <Box sx={{ mt: 10, minHeight: "400px", textAlign: "center" }}>
        <h1
          className="section_heading"
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            letterSpacing: "-0.8px",
            lineHeight: "37px",
            marginBottom: "50px",
            color: "var(--color-text)",
          }}
          data-outline="Examples of the development problems we solve"
        >
          Examples of the development problems we solve
          <Divider />
        </h1>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data.map(({ id, title }) => (
            <Grid item xs={2} sm={4} md={3} key={id}>
              <Card
                sx={{
                  backgroundColor: "var(--color-section)",
                  minHeight: "90px",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 600,
                      letterSpacing: "-0.53px",
                      lineHeight: "21px",
                      color: "var(--gray)",
                    }}
                  >
                    {title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

const data = [
  {
    id: 1,
    title: "I need to develop a digital product from scratch.",
  },
  {
    id: 2,
    title: "I have a problem with website/app performance.",
  },
  {
    id: 3,
    title: "My product is made with an outdated technology.",
  },
  {
    id: 4,
    title: "I want to do a code audit of my product.",
  },
  {
    id: 5,
    title: "I need to build more features into my product.",
  },
  {
    id: 6,
    title: "I need someone to provide constant development support.",
  },
  {
    id: 7,
    title: "I want a pixel-perfect front-end code.",
  },
  {
    id: 8,
    title: "I want my product to be available on more platforms.",
  },
];
