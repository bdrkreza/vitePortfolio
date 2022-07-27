import React from "react";
// eslint-disable-next-line
import "react-toastify/dist/ReactToastify.css";
import "swiper/css/bundle";
import AppRoutes from "./appRoutes";
import "./scss/main.scss";
function App() {
  return (
    <React.Fragment>
      <AppRoutes />
    </React.Fragment>
  );
}

export default App;
