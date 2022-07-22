import { Autocomplete, Chip, TextField } from "@mui/material";

export default function ProjectTools({ onChange }: any) {
  return (
    <div>
      <TextField
        sx={{ mb: 2 }}
        fullWidth
        id="standard-basic"
        label="about title"
        variant="standard"
      />
      <Autocomplete
        onChange={onChange}
        multiple
        id="tags-filled"
        options={top100Films.map((option) => option.title)}
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
            name="tools"
            {...params}
            variant="filled"
            label="about tools"
          />
        )}
      />
    </div>
  );
}

const top100Films = [
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
