import { Autocomplete, Chip, TextField } from "@mui/material";
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
export default function ProjectTools({ control, errors }: Props) {
  return (
    <div>
      <Controller
        control={control}
        name={"project_tools"}
        rules={{
          required: "Please select project tools",
        }}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            sx={{ mb: 3, mt: 2 }}
            multiple
            id="tags-filled"
            options={tools.map((option) => option.title)}
            onChange={(e, tools: any) => onChange(tools)}
            freeSolo
            renderTags={(value: readonly string[], getTagProps) =>
              value.map((option: string, index: number) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                error={Boolean(errors.project_tools)}
                variant="filled"
                placeholder={
                  errors.project_tools
                    ? errors?.project_tools?.message
                    : "select project tools"
                }
                onChange={onChange}
              />
            )}
            value={value}
          />
        )}
      />
    </div>
  );
}

const tools = [
  { title: "html" },
  { title: "css" },
  { title: "sass" },
  { title: "bootstrap" },
  { title: "MaterialUI" },
  { title: "tailwind Css" },
  { title: "react js" },
  { title: "next js" },
  { title: "redux" },
  { title: "flux" },
  { title: "node js" },
  { title: "express js" },
  { title: "mongodb" },
  { title: "mongoose" },
  { title: "prisma" },
  { title: "firebase" },
  { title: "ssl-commerce" },
];
