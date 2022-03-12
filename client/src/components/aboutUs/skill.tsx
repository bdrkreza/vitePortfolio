import { Box } from "@mui/material";
import SkillCart from "./skillCart";

export default function MySkill({ skill }: any) {
  console.log(skill);
  return (
    <Box sx={{ mt: 10 }}>
      <>
        <h1 className="section_heading" data-outline="MySkill">
          My Skill
          <hr style={{ border: "solid 2px var(--danger)", width: "300px" }} />
        </h1>
      </>

      {skill.map((skill: any, index: any) => (
        <SkillCart skill={skill} key={index} />
      ))}
      {/* <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <SkillCart />
      </Grid> */}
    </Box>
  );
}
