import { Autocomplete, Chip, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
type Props = {
  setUserTags: Dispatch<SetStateAction<string[] | null>>;
};
export default function UserInputTags({ setUserTags }: Props) {
  return (
    <>
      <Autocomplete
        sx={{ mb: 3 }}
        multiple
        id="tags-filled"
        options={userTags.map((option: any) => option?.title)}
        freeSolo
        onChange={(e, tags: any) => setUserTags(tags)}
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
          <TextField {...params} variant="filled" placeholder="User Tags" />
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
