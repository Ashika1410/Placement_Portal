import React from "react";

export default function AdminPrivilegesCard() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
      <h4 className="mb-3 text-base font-semibold text-gray-700 dark:text-white">
        Admin Privileges
      </h4>
      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
        <li>✔ Manage Users</li>
        <li>✔ Access All Dashboards</li>
        <li>✔ Update System Settings</li>
        <li>✔ View Reports</li>
        <li>✔ Manage Content</li>
      </ul>
    </div>
  );
}
