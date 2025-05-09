import StudentMetaCard from "../StudentProfile/StudentMetaCard";
import StudentInfoCard from "../StudentProfile/StudentInfoCard";
import StudentAcademicCard from "../StudentProfile/StudentAcademicCard";
import StudentAddressCard from "../StudentProfile/StudentAddressCard";

export default function StudentProfile() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
      <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
        Student Profile
      </h3>
      <div className="space-y-6">
        <StudentMetaCard />
        <StudentInfoCard />
        <StudentAcademicCard />
        <StudentAddressCard />
      </div>
    </div>
  );
} 
