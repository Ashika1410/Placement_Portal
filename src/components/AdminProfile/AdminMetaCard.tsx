import React from "react";

export default function AdminMetaCard() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
      <h4 className="mb-3 text-base font-semibold text-gray-700 dark:text-white">
        Admin Meta Info
      </h4>
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 overflow-hidden rounded-full">
          <img
            className="object-cover"
            src="/images/user/admin-avatar.jpg"
            alt="Admin Avatar"
          />
        </div>
        <div>
          <h5 className="font-semibold text-gray-800 dark:text-white">John Doe</h5>
          <p className="text-gray-600 dark:text-gray-300">Administrator</p>
        </div>
      </div>
    </div>
  );
}
