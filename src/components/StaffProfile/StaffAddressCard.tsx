
export default function StaffAddressCard() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
      <h4 className="mb-3 text-base font-semibold text-gray-700 dark:text-white">
        Staff Address
      </h4>
      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
        <li>
          <strong>Office Address:</strong> 123 Admin Street, City, Country
        </li>
        <li>
          <strong>Home Address:</strong> 456 Staff Road, Suburb, City
        </li>
      </ul>
    </div>
  );
}
