import { Autocomplete, createFilterOptions, TextField } from "@mui/material";

import { Dispatch, SetStateAction, useState } from "react";

interface ICategory {
  inputValue?: string;
  title: string;
}

type Props = {
  setProjectCategory: Dispatch<SetStateAction<ICategory | null>>;
};
const filter = createFilterOptions<ICategory>();
export default function ProjectCategory({ setProjectCategory }: Props) {
  const [value, setValue] = useState<ICategory | null>(null);
  setProjectCategory(value);
  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue: any) => {
          if (typeof newValue === "string") {
            setValue({
              title: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              title: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some(
            (option) => inputValue === option.title
          );
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              inputValue,
              title: `Add "${inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={category}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.title;
        }}
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        sx={{ width: "100%", mb: 3 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="select category" />
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
