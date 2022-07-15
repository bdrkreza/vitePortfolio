import { useQuery } from "@apollo/client";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { ProjectDetailsSection } from "../../components";
import { GET_SINGLE_PROJECT } from "../../services";

export default function ProjectDetails() {
  let { projectId } = useParams();
  const { loading, error, data, refetch } = useQuery(GET_SINGLE_PROJECT, {
    variables: {
      singleProjectId: projectId,
    },
  });
  console.log(projectId);
  console.log(error);
  return (
    <Container maxWidth="xl">
      <ProjectDetailsSection project={data?.singleProject} />
    </Container>
  );
}
