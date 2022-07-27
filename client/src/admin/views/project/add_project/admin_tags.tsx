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

export default function AdminInputTags({ control, errors }: Props) {
  return (
    <>
      <Controller
        control={control}
        name={"admin_tags"}
        rules={{
          required: "Please select admin tags",
        }}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            sx={{ mb: 3, mt: 2 }}
            multiple
            id="tags-filled"
            options={adminTags.map((option) => option.title)}
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
                error={Boolean(errors.admin_tags)}
                variant="filled"
                placeholder={
                  errors.admin_tags
                    ? errors?.admin_tags?.message
                    : "select admin tags"
                }
                onChange={onChange}
              />
            )}
            value={value}
          />
        )}
      />
    </>
  );
}

const adminTags = [
  { title: "admin List with add/Edit Modals" },
  { title: "admin permissions with Complete CRUD" },
  { title: "admin Roles with complete CRUD" },
  { title: "full width or sidebar single pages" },
];
