import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/ProfilePages/UserProfiles"; 
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import StudentTable from "./components/tables/BasicTables/StudentTable1";
// import Admin from "./pages/Dashboard/AdminDashboard";
// import Staff from "./pages/Dashboard/StaffDashboard";
// import Student from "./pages/Dashboard/StudentDashboard";
// import Company from "./pages/Dashboard/CompanyDashboard";
import CompanyTable from "./components/tables/BasicTables/CompanyTable1";
import StaffTable from "./components/tables/BasicTables/StaffTable1";
import AdminProfile from "./components/ProfileLayouts/AdminProfile";
import StaffProfile from "./components/ProfileLayouts/StaffProfile";
import StudentProfile from "./components/ProfileLayouts/StudentProfile";
import JobDescriptionPage from "./pages/OtherPage/JobdescriptionPage";
import ReportPage from "./pages/OtherPage/ReportPage";
import StudentProjects from "./pages/OtherPage/StudentProjects";
import StudentApplications from "./pages/OtherPage/StudentApplications";
import StudentResume from "./pages/OtherPage/StudentResume";
import StudentCertifications from "./pages/OtherPage/StudentCertifications";
import CompanyApplications from "./pages/OtherPage/CompanyApplications";
import CompanyJobPost from "./pages/OtherPage/CompanyJobPost";
import CompanyProfile from "./components/ProfileLayouts/CompanyProfile";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            {/* <Route path="/" element={<Admin />} /> */}
            {/* <Route path="/staff-dashboard" element={<Staff />} />
            <Route path="/student-dashboard" element={<Student />} />
            <Route path="/company-dashboard" element={<Company />} /> */}

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/admin-profile" element={<AdminProfile />} />
            <Route path="/staff-profile" element={<StaffProfile />} />
            <Route path="/student-profile" element={<StudentProfile />} />
            <Route path="/company-profile" element={<CompanyProfile /> } />
            <Route path="/jobs" element={<JobDescriptionPage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/project" element={<StudentProjects />} />
            <Route path="/resume" element={<StudentResume />} />
            <Route path="/application" element={<StudentApplications />} />
            <Route path="/certificate" element={<StudentCertifications />} />
            <Route path="/jobpost" element={<CompanyJobPost />} />
            <Route path="/company-apply" element={<CompanyApplications />} />
            {/* <Route path="" element={} /> */}

            {/* Tables */}
            <Route path="/staff-table" element={<StaffTable />} />
            <Route path="/student-table" element={<StudentTable />} />
            <Route path="/company-table" element={<CompanyTable />} />

          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
