import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./admin/adminLayout/dashboardLayout";
import {
  AddProject,
  AppBlog,
  AppCustomer,
  AppDashboard,
  AppProfile,
  AppProject,
  AppSetting,
} from "./admin/views";
import { MessengerChat } from "./constants/chatCustomer";
import { HomeLayout } from "./core-ui";
import {
  AboutUs,
  Contact,
  Page404,
  Pricing,
  Project,
  ProjectDetails,
  Service,
  SignIn,
  SignUp,
} from "./pages";
import Development from "./pages/development";
import Home from "./pages/home_2";

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
          <Route path="development" element={<Development />} />
          <Route path="login" element={<SignIn />} />
          <Route path="register" element={<SignUp />} />
          <Route path="*" element={<Page404 />} />
        </Route>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<AppDashboard />} />
          <Route path="app-project" element={<AppProject />} />
          <Route path="add-project" element={<AddProject />} />
          <Route path="app-blog" element={<AppBlog />} />
          <Route path="app-customer" element={<AppCustomer />} />
          <Route path="app-profile" element={<AppProfile />} />
          <Route path="app-setting" element={<AppSetting />} />
        </Route>
      </Routes>
      <MessengerChat
        pageId="106233291300205"
        loggedInGreeting="Hello logged in user!"
        loggedOutGreeting="Hello stranger!"
        themeColor="#F2F3G2"
        height={24}
      />
    </>
  );
}
