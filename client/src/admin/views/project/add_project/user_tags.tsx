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
export default function UserInputTags({ control, errors }: Props) {
  return (
    <>
      <Controller
        control={control}
        name={"user_tags"}
        rules={{
          required: "Please select user tags",
        }}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            sx={{ mb: 3, mt: 2 }}
            multiple
            id="tags-filled"
            options={userTags.map((option) => option.title)}
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
                error={Boolean(errors.user_tags)}
                variant="filled"
                placeholder={
                  errors.user_tags
                    ? errors?.user_tags?.message
                    : "select user tags"
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

const userTags = [
  { title: "user can visit profile" },
  { title: "user permissions with Complete order list" },
  { title: "User can profile edit and add" },
  { title: "user can review service provider" },
];
