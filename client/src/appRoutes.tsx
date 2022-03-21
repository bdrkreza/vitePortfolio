import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./admin/adminLayout/dashboardLayout";
import {
  AppBlog,
  AppCustomer,
  AppDashboard,
  AppProfile,
  AppProject,
  AppSetting,
} from "./admin/views";
import Chat from "./constants/chat";
import { HomeLayout } from "./core-ui";
import {
  AboutUs,
  Contact,
  Home,
  Page404,
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
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="project/:projectId" element={<ProjectDetails />} />
          <Route path="service" element={<Service />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<Page404 />} />
        </Route>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<AppDashboard />} />
          <Route path="app-project" element={<AppProject />} />
          <Route path="app-blog" element={<AppBlog />} />
          <Route path="app-customer" element={<AppCustomer />} />
          <Route path="app-profile" element={<AppProfile />} />
          <Route path="app-setting" element={<AppSetting />} />
        </Route>
      </Routes>
      <Chat />
    </>
  );
}
