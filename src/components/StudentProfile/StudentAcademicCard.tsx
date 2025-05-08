export default function StudentAcademicCard() {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
        <h4 className="mb-3 text-base font-semibold text-gray-700 dark:text-white">
          Academic Details
        </h4>
        <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
          <li><strong>Register Number:</strong> STU20250123</li>
          <li><strong>Course:</strong> B.Tech Computer Science</li>
          <li><strong>Semester:</strong> 6</li>
          <li><strong>CGPA:</strong></li>
          <li><strong>Back logs:</strong></li>
          <li><strong>Certifications</strong></li>
          <li><strong>Internships</strong></li>
        </ul>
      </div>
    );
  }
  