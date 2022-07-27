import { Autocomplete, TextField } from "@mui/material";
import {
  Control,
  Controller,
  DeepRequired,
  FieldErrorsImpl,
} from "react-hook-form";
import { IFormData } from "./add-project-form";

type Props = {
  control: Control<IFormData>;
  errors: FieldErrorsImpl<DeepRequired<IFormData>>;
};

export default function ProjectCategory({ control, errors }: Props) {
  return (
    <div>
      <Controller
        control={control}
        name={"category"}
        rules={{
          required: "Please select category",
        }}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={category.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                error={Boolean(errors.category)}
                {...params}
                label={
                  errors.category ? errors.category.message : "select category"
                }
                margin="normal"
                variant="outlined"
                placeholder={errors.category?.message}
                onChange={onChange}
              />
            )}
            onChange={(e, value) => onChange(value)}
          />
        )}
      />
    </div>
  );
}

const category = [
  { title: "html" },
  { title: "css" },
  { title: "sass" },
  { title: "bootstrap" },
  { title: "MaterialUI" },
  { title: "tailwind Css" },
  { title: "react js" },
];
