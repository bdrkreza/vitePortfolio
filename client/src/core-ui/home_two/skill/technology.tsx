import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionSummary, Box, Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { FaNode, FaReact } from "react-icons/fa";
import { FcDataConfiguration } from "react-icons/fc";
import {
  SiExpress,
  SiMaterialui,
  SiMongodb,
  SiNativescript,
  SiNextdotjs,
  SiPrisma,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Technology() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Box sx={classes.root}>
        <h1
          className="section_heading"
          data-outline="Technologies we work with"
        >
          Technologies we work with
        </h1>

        <Typography component="h2">
          We create front-end and back-end solutions using top-notch <br /> and
          up-to-date technologies, that are{" "}
          <span>reliable, future-proof and scalable.</span>
        </Typography>
      </Box>
      <Grid container spacing={2} columns={12} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={12} md={6}>
          <Box>
            {panel1.map(
              ({ panel, title, icon: Icon, color, tools, description }) => (
                <Accordion
                  expanded={expanded === panel}
                  onChange={handleChange(panel)}
                  sx={{
                    borderLeft: 2,
                    marginBottom: "20px",
                    borderLeftColor: color,
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={classes.accordionSummary}
                  >
                    <Typography component="h1">
                      <Icon style={{ color: color }} />
                      <span>{tools}</span>
                    </Typography>
                    <Typography component="h2">{title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={classes.accordionDetails}>
                    <Typography component="h3">{description}</Typography>
                  </AccordionDetails>
                </Accordion>
              )
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box>
            {panel2.map(
              ({ panel, title, icon: Icon, color, tools, description }) => (
                <Accordion
                  expanded={expanded === panel}
                  onChange={handleChange(panel)}
                  sx={{
                    borderLeft: 2,
                    marginBottom: "20px",
                    borderLeftColor: color,
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={classes.accordionSummary}
                  >
                    <Typography component="h1">
                      <Icon style={{ color: color }} />
                      <span>{tools}</span>
                    </Typography>
                    <Typography component="h2">{title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={classes.accordionDetails}>
                    <Typography component="h3">{description}</Typography>
                  </AccordionDetails>
                </Accordion>
              )
            )}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

const classes = {
  root: {
    textAlign: "center",
    mt: 5,
    h1: {
      fontSize: "35px",
      fontFamily: "serif",
      color: "var(--color-text)",
    },
    h2: {
      fontSize: "20px",
      fontFamily: "sans-serif",
      color: "var(--color-text)",
      span: {
        fontWeight: 750,
        fontSize: "bold",
      },
    },
  },
  accordionSummary: {
    backgroundColor: "var(--color-section)",
    ".MuiAccordionSummary-content": {
      color: "var(--color-text)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    ".MuiAccordionSummary-expandIconWrapper": {
      color: "var(--color-title)",
      marginLeft: 2,
    },
    h1: {
      display: "flex",
      alignItems: "center",
      fontSize: "20px",
      fontFamily: "cursive",
      svg: {
        marginRight: "15px",
        height: "40px",
        width: "30px",
      },
    },
    h2: {
      color: "var(--color-text)",
      fontSize: "18px",
      letterSpacing: "-0.2px",
      lineHeight: "18px",
    },
  },
  accordionDetails: {
    backgroundColor: "var(--background)",
    h3: {
      color: "var(--gray)",
      fontSize: "20px",
      fontFamily: "Palatino Linotype,Times New Roman,serif",
      fontStyle: "revert",
      fontWeight: "bold",
    },
  },
};

const panel1 = [
  {
    panel: "panel1",
    tools: "React Js",
    title: "Learn more",
    icon: FaReact,
    color: "#61DBFB",
    description: `When creating products, we use the JavaScript library which is perfect choice for building dynamic web applications. Thanks to the use of Virtual DOM, React projects are
    extremely fast and scalable. The logic of the components is
    written in JavaScript, therefore processing complex data
    structures is much easier. React can also render on the
    server side with Node, as well as power mobile applications
    with React Native. m.`,
  },
  {
    panel: "panel2",
    tools: "Next Js",
    title: "Learn more",
    icon: SiNextdotjs,
    color: "black",
    description: `When creating products, we use the JavaScript library which is perfect choice for building dynamic web applications. Thanks to the use of Virtual DOM, React projects are
    extremely fast and scalable. The logic of the components is
    written in JavaScript, therefore processing complex data
    structures is much easier. React can also render on the
    server side with Node, as well as power mobile applications
    with React Native. m.`,
  },
  {
    panel: "panel3",
    tools: "React Native",
    title: "Learn more",
    icon: SiNativescript,
    color: "black",
    description: `When creating products, we use the JavaScript library which is perfect choice for building dynamic web applications. Thanks to the use of Virtual DOM, React projects are
    extremely fast and scalable. The logic of the components is
    written in JavaScript, therefore processing complex data
    structures is much easier. React can also render on the
    server side with Node, as well as power mobile applications
    with React Native. m.`,
  },
  {
    panel: "panel4",
    tools: "Redux toolkit Js",
    title: "Learn more",
    icon: SiRedux,
    color: "#7248B6",
    description: `When creating products, we use the JavaScript library which is perfect choice for building dynamic web applications. Thanks to the use of Virtual DOM, React projects are
    extremely fast and scalable. The logic of the components is
    written in JavaScript, therefore processing complex data
    structures is much easier. React can also render on the
    server side with Node, as well as power mobile applications
    with React Native. m.`,
  },
  {
    panel: "panel4",
    tools: "Material UI",
    title: "Learn more",
    icon: SiMaterialui,
    color: "#007FFF",

    description: `When creating products, we use the JavaScript library which is perfect choice for building dynamic web applications. Thanks to the use of Virtual DOM, React projects are
    extremely fast and scalable. The logic of the components is
    written in JavaScript, therefore processing complex data
    structures is much easier. React can also render on the
    server side with Node, as well as power mobile applications
    with React Native. m.`,
  },
  {
    panel: "panel4",
    tools: "Tailwind CSS",
    title: "Learn more",
    icon: SiTailwindcss,
    color: "#1AB0B5",
    description: `When creating products, we use the JavaScript library which is perfect choice for building dynamic web applications. Thanks to the use of Virtual DOM, React projects are
    extremely fast and scalable. The logic of the components is
    written in JavaScript, therefore processing complex data
    structures is much easier. React can also render on the
    server side with Node, as well as power mobile applications
    with React Native. m.`,
  },
];
const panel2 = [
  {
    panel: "panel5",
    tools: "Node Js",
    title: "Learn more",
    icon: FaNode,
    color: "#659B60",
    description: `When creating products, we use the JavaScript library which is perfect choice for building dynamic web applications. Thanks to the use of Virtual DOM, React projects are
    extremely fast and scalable. The logic of the components is
    written in JavaScript, therefore processing complex data
    structures is much easier. React can also render on the
    server side with Node, as well as power mobile applications
    with React Native. m.`,
  },
  {
    panel: "panel6",
    tools: "Typescript",
    title: "Learn more",
    icon: SiTypescript,
    color: "#2F74C0",
    description: `When creating products, we use the JavaScript library which is perfect choice for building dynamic web applications. Thanks to the use of Virtual DOM, React projects are
    extremely fast and scalable. The logic of the components is
    written in JavaScript, therefore processing complex data
    structures is much easier. React can also render on the
    server side with Node, as well as power mobile applications
    with React Native. m.`,
  },
  {
    panel: "panel7",
    tools: "Express Ja",
    title: "Learn more",
    icon: SiExpress,
    color: "green",
    description: `When creating products, we use the JavaScript library which is perfect choice for building dynamic web applications. Thanks to the use of Virtual DOM, React projects are
    extremely fast and scalable. The logic of the components is
    written in JavaScript, therefore processing complex data
    structures is much easier. React can also render on the
    server side with Node, as well as power mobile applications
    with React Native. m.`,
  },
  {
    panel: "panel8",
    tools: "MongoDB",
    title: "Learn more",
    icon: SiMongodb,
    color: "#4CAB3D",
    description: `When creating products, we use the JavaScript library which is perfect choice for building dynamic web applications. Thanks to the use of Virtual DOM, React projects are
    extremely fast and scalable. The logic of the components is
    written in JavaScript, therefore processing complex data
    structures is much easier. React can also render on the
    server side with Node, as well as power mobile applications
    with React Native. m.`,
  },
  {
    panel: "panel8",
    tools: "Mongoose",
    title: "Learn more",
    icon: FcDataConfiguration,
    color: "#880000",
    description: `When creating products, we use the JavaScript library which is perfect choice for building dynamic web applications. Thanks to the use of Virtual DOM, React projects are
    extremely fast and scalable. The logic of the components is
    written in JavaScript, therefore processing complex data
    structures is much easier. React can also render on the
    server side with Node, as well as power mobile applications
    with React Native. m.`,
  },
  {
    panel: "panel8",
    tools: "Prisma",
    title: "Learn more",
    icon: SiPrisma,
    description: `When creating products, we use the JavaScript library which is perfect choice for building dynamic web applications. Thanks to the use of Virtual DOM, React projects are
    extremely fast and scalable. The logic of the components is
    written in JavaScript, therefore processing complex data
    structures is much easier. React can also render on the
    server side with Node, as well as power mobile applications
    with React Native. m.`,
  },
];
