import { Snackbar } from "@mui/material";
import Slide from "@mui/material/Slide";
import { useState } from "react";
type Props = {};

export default function error({}: Props) {
  const [transition, setTransition] = useState(undefined);
  function TransitionRight(props: any) {
    return <Slide {...props} direction="right" />;
  }
  return (
    <div>
      <Snackbar
        TransitionComponent={transition}
        message="I love snacks"
        key={transition ? transition.name : ""}
      />
    </div>
  );
}
