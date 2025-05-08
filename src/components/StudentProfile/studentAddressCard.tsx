export default function StudentAddressCard() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
      <h4 className="mb-3 text-base font-semibold text-gray-700 dark:text-white">
        Student Address
      </h4>
      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
        <li>
          <strong>Home Address:</strong> 789 College Road, City, Country
        </li>
        <li>
          <strong>Campus Address:</strong> University Campus, Block A, Room 101
        </li>
      </ul>
    </div>
  );
}
