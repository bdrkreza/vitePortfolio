import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
export default function AppProjectCard() {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 345,
          borderBottom: 4,
          borderColor: "var(--color-secondary)",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height={300}
            src="https://mui-template.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdashboard_admin.0905c2f0.png&w=640&q=75"
            alt="green iguana"
          />
          <CardContent>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
            <Typography
              sx={{ mt: 2 }}
              gutterBottom
              variant="h5"
              component="div"
            ></Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
