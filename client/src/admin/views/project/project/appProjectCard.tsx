import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";

export default function AppProjectCard({ data }: any) {
  return (
    <Card
      sx={{
        maxWidth: 500,
        maxHeight: "950px",
        borderRadius: "3%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${data.url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "350px",
        }}
      >
        <img
          src={data.image}
          style={{
            position: "absolute",
            marginTop: "140px",
            width: "387px",
            height: "70%",
          }}
        />
        <img
          src={data.img}
          style={{
            position: "absolute",
            marginTop: "140px",
            width: "145px",
            left: "5%",
            animationDuration: "10s",
          }}
        />
      </Box>
      <CardContent
        sx={{
          padding: "50px 50px 43px 50px",
          backgroundColor: "var(--color-section)",
          color: "var(--color-text)",
        }}
      >
        <Typography
          sx={{ fontSize: "30px", fontWeight: 700, letterSpacing: "0" }}
          component="h1"
        >
          {data.title}
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 200,
            fontFamily: "euclid",
            letterSpacing: "-0.6px",
            lineHeight: 1.6,
            maxWidth: "400px",
            fontStyle: "inherit",

            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": 2,
            "-webkit-box-orient": "vertical",
          }}
          component="h2"
        >
          {data.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "end",
          backgroundColor: "var(--color-section)",
        }}
      ></CardActions>
    </Card>
  );
}
