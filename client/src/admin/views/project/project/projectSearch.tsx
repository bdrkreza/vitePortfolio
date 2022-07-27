import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, SvgIcon, TextField } from "@mui/material";
export default function ProjectSearch() {
  return (
    <Box sx={{ maxWidth: { xs: 200, sm: 500 } }}>
      <TextField
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgIcon fontSize="small" color="action">
                <SearchIcon />
              </SvgIcon>
            </InputAdornment>
          ),
        }}
        placeholder="Search product"
        variant="outlined"
      />
    </Box>
  );
}
