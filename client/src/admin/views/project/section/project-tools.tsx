import { Autocomplete, Chip, TextField } from "@mui/material";

export default function ProjectTools({ setProjectTools }: any) {
  return (
    <div>
      <Autocomplete
        sx={{ mb: 3 }}
        multiple
        id="tags-filled"
        options={tools.map((option) => option.title)}
        onChange={(e, tools: any) => setProjectTools(tools)}
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
          <TextField {...params} variant="filled" placeholder="project tools" />
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
