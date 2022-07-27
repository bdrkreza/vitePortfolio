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

export default function ProjectTags({ control, errors }: Props) {
  return (
    <div>
      <Controller
        control={control}
        name={"project_tags"}
        rules={{
          required: "Please select project tags",
        }}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            sx={{ mb: 3, mt: 2 }}
            multiple
            id="tags-filled"
            options={tags.map((option) => option.title)}
            onChange={(e, tags: any) => onChange(tags)}
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
                error={Boolean(errors.project_tags)}
                variant="filled"
                placeholder={
                  errors.project_tags
                    ? errors?.project_tags?.message
                    : "select project tags"
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

const tags = [
  { title: "modus theme for modern creative websites" },
  { title: "set of e-commerce designer and artist templates" },
  { title: "dynamic admin dashboard builder compatibility" },
];
