import { Autocomplete, Chip, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setProjectTags: Dispatch<SetStateAction<string[] | null>>;
};

export default function ProjectTags({ setProjectTags }: Props) {
  return (
    <div>
      <Autocomplete
        sx={{ mb: 3 }}
        multiple
        id="tags-filled"
        options={tags.map((option) => option.title)}
        onChange={(e, tools: any) => setProjectTags(tools)}
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
          <TextField {...params} variant="filled" placeholder="project tags" />
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
