import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/ProfilePages/UserProfiles"; 
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import StudentTable from "./components/tables/BasicTables/StudentTable1";
import Admin from "./pages/Dashboard/AdminDashboard";
import Staff from "./pages/Dashboard/StaffDashboard";
import Student from "./pages/Dashboard/StudentDashboard";
import Company from "./pages/Dashboard/CompanyDashboard";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/admin-dashboard" element={<Admin />} />
            <Route path="/staff-dashboard" element={<Staff />} />
            <Route path="/student-dashboard" element={<Student />} />
            <Route path="/company-dashboard" element={<Company />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />

            {/* Tables */}
            <Route path="/student-table" element={<StudentTable />} />

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
