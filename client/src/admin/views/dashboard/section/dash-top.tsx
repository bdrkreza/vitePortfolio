import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InsertChartIcon from "@mui/icons-material/InsertChartOutlined";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";

const budget = [
  {
    name: "total customers",
    icons: PeopleIcon,
    color: "#14B8A6",
    user: "1,6k",
    percentage: "15",
  },
  {
    name: "Task Project",
    icons: InsertChartIcon,
    color: "#FFB020",
    progress: "75.5",
    percentage: "30",
  },
  {
    name: "total profit",
    icons: AttachMoneyIcon,
    color: "#5048E5",
    price: "$23k",
    percentage: "50",
  },
];

export default function DashTop() {
  function randomColor() {
    let hex = Math.floor(Math.random() * 0xffffff);
    let color = "#" + hex.toString(16);

    return color;
  }
  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {budget.map(
          ({
            name,
            icons: Icon,
            color,
            user,
            progress,
            price,
            percentage,
          }: any) => (
            <Grid item xs={2} sm={4} md={4} key={name}>
              <Paper>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Grid
                      container
                      spacing={3}
                      sx={{ justifyContent: "space-between" }}
                    >
                      <Grid item>
                        <Typography
                          color="textSecondary"
                          gutterBottom
                          variant="overline"
                        >
                          {name}
                        </Typography>
                        <Typography color="textPrimary" variant="h4">
                          {user}
                          {progress}
                          {price}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Avatar
                          sx={{
                            backgroundColor: randomColor(),
                            color: { color },
                            height: 56,
                            width: 56,
                          }}
                        >
                          <Icon />
                        </Avatar>
                      </Grid>
                    </Grid>
                    <Box
                      sx={{
                        pt: 2,
                        display: "flex",
                        alignItems: "center",
                        "& svg": {
                          color: randomColor(),
                        },
                      }}
                    >
                      <ArrowUpwardIcon />
                      <Typography
                        sx={{
                          mr: 1,
                          backgroundColor: randomColor(),
                        }}
                        variant="body2"
                      >
                        {percentage}%
                      </Typography>
                      <Typography color="textSecondary" variant="caption">
                        Since last month
                      </Typography>
                    </Box>
                    <Box sx={{ pt: 3 }}>
                      <LinearProgress
                        value={percentage}
                        variant="determinate"
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
}
