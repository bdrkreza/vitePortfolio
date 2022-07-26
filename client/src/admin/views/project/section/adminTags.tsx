import { Autocomplete, Chip, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setAdminTags: Dispatch<SetStateAction<string[] | null>>;
};

export default function AdminInputTags({ setAdminTags }: Props) {
  return (
    <>
      <Autocomplete
        sx={{ mb: 5 }}
        multiple
        id="tags-filled"
        options={adminTags.map((option: any) => option?.title)}
        // defaultValue={[top100Films?.title]}
        freeSolo
        onChange={(e, tags: any) => setAdminTags(tags)}
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
          <TextField {...params} variant="filled" placeholder="Admin Tags" />
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
