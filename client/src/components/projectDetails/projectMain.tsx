import { Box, Typography } from "@mui/material";
interface IProps {
  image: string | undefined;
}

export default function ProjectMain({ image }: IProps) {
  return (
    <Box sx={{ borderTop: 2 }}>
      <Typography
        variant="h6"
        sx={{ color: "var(--color-text)", fontSize: 30 }}
        gutterBottom
      >
        From the firehose
      </Typography>
      <hr />
      <img src={image} style={{ width: "100%" }} alt="" />
    </Box>
  );
}
