import { Alert, CardMedia, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { IProjects } from "../../../types/types";
interface IProps {
  clearInput: () => void;
  data: IProjects[];
}
export default function DropdownBox({ data, clearInput }: IProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        width: 300,
        height: 300,
        marginTop: "20px",
      }}
    >
      {data?.length > 0 ? (
        data?.map((data: any) => (
          <Link to={`/project/${data._id}`}>
            <Paper
              sx={{ marginTop: "10px", cursor: "pointer" }}
              onClick={clearInput}
            >
              <CardMedia
                component="img"
                sx={{ width: "100%", height: "30px" }}
                image={data.image}
                alt="brandLogon"
              />
              <Typography sx={{ fontFamily: "cursive", marginTop: "2px" }}>
                {data.title}
              </Typography>
            </Paper>
          </Link>
        ))
      ) : (
        <Alert severity="error" sx={{ fontSize: "15px" }}>
          No record found!
        </Alert>
      )}
    </Box>
  );
}
