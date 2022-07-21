import { Avatar, CardMedia } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

export default function TestimonialCard({ data }: any) {
  return (
    <section>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          cursor: "pointer",
        }}
        style={{ display: "flex" }}
      >
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar>
              <CardMedia
                component="img"
                width="60"
                height="10"
                src={data.image}
                alt="testimonials image"
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={data.name}
            secondary={
              <>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {data.designation}
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
    </section>
  );
}
