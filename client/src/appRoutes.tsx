import { Route, Routes } from "react-router-dom";
import Chat from "./constants/chat";
import { Layout } from "./core-ui";
import {
  AboutUs,
  Contact,
  Home,
  NoMatch,
  Pricing,
  Project,
  ProjectDetails,
  Service,
  SignIn,
  SignUp,
} from "./pages";
export default function AppRoutes() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="project/:projectId" element={<ProjectDetails />} />
          <Route path="service" element={<Service />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Chat />
      </Layout>
    </>
  );
}
