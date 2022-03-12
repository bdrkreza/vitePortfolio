import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import { Avatar, Box, Typography } from "@mui/material";

export default function FooterContact({ classes, content }: any) {
  return (
    <Box>
      <Typography component="h1">
        Contact
        <hr />
      </Typography>
      <Box display="flex">
        <div>
          <Avatar sx={classes.iconWrapper}>
            <EmailIcon
              sx={classes.iconWrapper.icon}
              color="primary"
              fontSize="small"
            />
          </Avatar>
        </div>
        <Box ml={3}>
          <Typography component="h2" gutterBottom={true}>
            {content.contact2}
            <Typography component="h3">{content.contact2desc}</Typography>
          </Typography>
        </Box>
      </Box>

      <Box display="flex">
        <div>
          <Avatar sx={classes.iconWrapper}>
            <RoomIcon
              sx={classes.iconWrapper.icon}
              color="primary"
              fontSize="small"
            />
          </Avatar>
        </div>
        <Box ml={3}>
          <Typography component="h2" gutterBottom={true}>
            {content.contact1}
            <Typography component="h3">{content.contact1desc1}</Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
