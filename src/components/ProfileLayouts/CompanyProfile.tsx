import { useState } from "react";
import JobsPosted from "../company/JobsPosted";
import Applications from "../company/Applications";
import EditCompanyProfile from "../company/EditCompanyProfile";

const CompanyProfile = () => {
  const [activeTab, setActiveTab] = useState("jobs");

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center gap-6 border-b pb-6">
        <img
          src="/company-logo.png" // Replace with actual logo path
          alt="Company Logo"
          className="w-24 h-24 rounded-full object-cover border"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">TechNova Pvt. Ltd.</h2>
          <p className="text-gray-600 dark:text-gray-300">Leading AI & Web Solutions</p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Email: hr@technova.com | Website: www.technova.com
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 mt-6 border-b">
        <button
          onClick={() => setActiveTab("jobs")}
          className={`pb-2 border-b-2 ${
            activeTab === "jobs"
              ? "border-brand-500 text-brand-500"
              : "border-transparent text-gray-500"
          } hover:text-brand-600`}
        >
          Jobs Posted
        </button>
        <button
          onClick={() => setActiveTab("applications")}
          className={`pb-2 border-b-2 ${
            activeTab === "applications"
              ? "border-brand-500 text-brand-500"
              : "border-transparent text-gray-500"
          } hover:text-brand-600`}
        >
          Applications Received
        </button>
        <button
          onClick={() => setActiveTab("edit")}
          className={`pb-2 border-b-2 ${
            activeTab === "edit"
              ? "border-brand-500 text-brand-500"
              : "border-transparent text-gray-500"
          } hover:text-brand-600`}
        >
          Edit Profile
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "jobs" && <JobsPosted />}
        {activeTab === "applications" && <Applications />}
        {activeTab === "edit" && <EditCompanyProfile />}
      </div>
    </div>
  );
};

export default CompanyProfile;
