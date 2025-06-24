import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import JobDescriptionPage from "./pages/OtherPage/JobdescriptionPage";
import ReportPage from "./pages/OtherPage/ReportPage";
import StudentProjects from "./pages/OtherPage/StudentProjects";
import StudentApplications from "./pages/OtherPage/StudentApplications";
import StudentResume from "./pages/OtherPage/StudentResume";
import StudentCertifications from "./pages/OtherPage/StudentCertifications";
import CompanyApplications from "./pages/OtherPage/CompanyApplications";
import CompanyJobPost from "./pages/OtherPage/CompanyJobPost";
import ForgetPasswordForm from "./components/auth/ForgetPasswordForm";
import ApplicationTracker from "./pages/OtherPage/ApplicationTracker";
import ResumeUpload from "./pages/OtherPage/ResumeUploadPage";
import CompanyListPage from "./pages/Tables/CompanyList";
import StaffListPage from "./pages/Tables/StaffList";
import StudentListPage from "./pages/Tables/StudentList";
import JobsPage from "./pages/OtherPage/JobsPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUserFromStorage } from "./reduxStore/authSlice";
import ProfilePage from "./pages/ProfilePages/UserProfile";
import UserMetaCard from "./components/UserProfile/UserMetaCard";
import UserInfoCard from "./components/UserProfile/UserInfoCard";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile/:id" element={<ProfilePage/>} />
            <Route path="/job/:id" element={<JobDescriptionPage />} />
            <Route path="/job-page" element={<JobsPage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/project" element={<StudentProjects />} />
            <Route path="/resume" element={<StudentResume />} />
            <Route path="/application" element={<StudentApplications />} />
            <Route path="/certificate" element={<StudentCertifications />} />
            <Route path="/jobpost" element={<CompanyJobPost />} />
            <Route path="/company-apply" element={<CompanyApplications />} />
            <Route path="/application-tracker" element={<ApplicationTracker />} />
            <Route path="/resume-upload" element={<ResumeUpload />} />
            <Route path="/usermeta" element={<UserMetaCard/>} />
            <Route path="/userinfo" element={<UserInfoCard/>} />

            {/* Tables */}
            <Route path="/staff-list" element={<StaffListPage />} />
            <Route path="/student-list" element={<StudentListPage />} />
            <Route path="/company-list" element={<CompanyListPage />} />

          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ForgetPasswordForm />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
