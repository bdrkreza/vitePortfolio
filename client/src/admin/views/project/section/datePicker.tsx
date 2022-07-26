import { Box, TextField, Typography } from "@mui/material";
type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const ProjectDatePicker = ({ onChange }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pt: 3,
        mb: 3,
      }}
    >
      <TextField
        onChange={onChange}
        name="start_date"
        id="date"
        label="Start Date"
        type="date"
        defaultValue="2022-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Typography sx={{ fontWeight: 700, fontSize: "25px" }}>to</Typography>
      <TextField
        onChange={onChange}
        id="date"
        name="end_date"
        label="End Date"
        type="date"
        defaultValue="2022-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
};

export default ProjectDatePicker;
