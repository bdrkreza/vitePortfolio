import { Box } from "@mui/material";
import EducationCart from "./educationCart";

export default function Education({ education }: any) {
  return (
    <Box>
      <div>
        <h1 className="section_heading" data-outline="Education">
          Education
          <hr style={{ border: "solid 2px var(--danger)", width: "300px" }} />
        </h1>
      </div>
      <EducationCart education={education} />
    </Box>
  );
}
