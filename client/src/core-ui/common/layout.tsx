import { Container } from "@mui/material";
import { createContext, useState } from "react";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
interface IThemeContext {
  theme: string;
  setTheme: any;
}

export const ThemeContext = createContext({} as IThemeContext);
export default function Layout({ children }: any) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
      <Container
        sx={{
          minHeight: "650px",
          padding: 10,
          mt: { xs: "100px", sm: "10px" },
          color: "white",
          "@media (max-width:599.95px)": {
            padding: 0,
          },
        }}
      >
        {children}
      </Container>
      <Footer />
    </ThemeContext.Provider>
  );
}
