import { Box, TextField, Typography } from "@mui/material";
import {
  DeepRequired,
  FieldErrorsImpl,
  UseFormRegister,
} from "react-hook-form";
import { IFormData } from "./add-project-form";
type Props = {
  register: UseFormRegister<IFormData>;
  errors: FieldErrorsImpl<DeepRequired<IFormData>>;
};
const ProjectDatePicker = ({ register, errors }: Props) => {
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
        sx={{ width: "100%" }}
        error={Boolean(errors.start_date)}
        type="date"
        defaultValue={Date()}
        InputLabelProps={{
          shrink: true,
        }}
        label={errors.start_date ? "start date is required" : "start date"}
        placeholder={errors.start_date?.message}
        {...register("start_date", { required: "start date is required" })}
      />
      <Typography sx={{ fontWeight: 700, fontSize: "25px", padding: "10px" }}>
        to
      </Typography>
      <TextField
        sx={{ width: "100%" }}
        error={Boolean(errors.end_date)}
        type="date"
        defaultValue={new Date()}
        InputLabelProps={{
          shrink: true,
        }}
        label={errors.end_date ? "end date is required" : "end date"}
        placeholder={errors.end_date?.message}
        {...register("end_date", { required: "end date is required" })}
      />
    </Box>
  );
};

export default ProjectDatePicker;
