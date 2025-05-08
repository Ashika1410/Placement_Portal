import StaffMetaCard from "../StaffProfile/StaffMetaCard";
import StaffInfoCard from "../StaffProfile/StaffInfoCard";
import StaffAddressCard from "../StaffProfile/StaffAddressCard";
import StaffUniversityCard from "../StaffProfile/StaffUniversityCard";

export default function StaffProfile() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
      <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
        Staff Profile
      </h3>
      <div className="space-y-6">
        <StaffMetaCard />
        <StaffInfoCard />
        <StaffUniversityCard /> {/* Add university ID and department here */}
        <StaffAddressCard />
      </div> 
    </div>
  );
}
