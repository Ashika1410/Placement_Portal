
export default function StaffUniversityCard() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
      <h4 className="mb-3 text-base font-semibold text-gray-700 dark:text-white">
        University Details
      </h4>
      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
        <li>
          <strong>University:</strong> XYZ University
        </li>
        <li>
          <strong>Degree:</strong> Master of Science in Computer Science
        </li>
        <li>
          <strong>Graduation Year:</strong> 2015
        </li>
      </ul>
    </div>
  );
}
