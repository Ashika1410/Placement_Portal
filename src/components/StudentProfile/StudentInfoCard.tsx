
export default function StudentInfoCard() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
      <h4 className="mb-3 text-base font-semibold text-gray-700 dark:text-white">
        Student Information
      </h4>
      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
        <li>
          <strong>Email:</strong> student@example.com
        </li>
        <li>
          <strong>Phone:</strong> +1 (555) 123-4567
        </li>
        <li>
          <strong>Year of Study:</strong> 3rd Year
        </li>
      </ul>
    </div>
  );
}
