import { useEffect, useState } from "react";
import axios from "axios";

interface Staff {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  user: {
    id: number;
    avatarUrl?: string;
  }
}

export default function StaffTable() {
  const [staffs, setStaffs] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStaffs = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/staff`);
        setStaffs(res.data);
      } catch (err) {
        console.error("Failed to load companies", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStaffs();
  }, []);

  const renderStaffRows = () => {
    const rows = [];

    for (let i = 0; i < staffs.length; i++) {
      const staff = staffs[i];
      rows.push(
        <tr key={staff.id}>
          <td className="px-4 py-3">
            <div className="flex items-center gap-3">
              <img
                src={staff.user?.avatarUrl || "/images/user/profile4.jfif"}
                alt={staff.name || "unknown"}
                className="rounded-full w-10 h-10 object-cover"
              />
            </div>
          </td>
          <td className="px-4 py-3">
            <span className="font-medium text-gray-800 dark:text-white/90">
              {staff.name || "Unknown"}
            </span>
          </td>
          <td className="px-4 py-3">{staff.email || "N/A"}</td>
          <td className="px-4 py-3">{staff.phone || "N/A"}</td>
          <td className="px-4 py-3">{staff.department || "N/A"}</td>
          <td className="px-4 py-3">{staff.designation || "N/A"}</td>
        </tr>
      );
    }

    return rows;
  };
  return (
   <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-purple-300">
      <div className="max-w-full overflow-x-auto">
        {loading ? (
          <p className="p-4 text-gray-500">Loading...</p>
        ) : staffs.length === 0 ? (
          <p className="p-4 text-red-500">No companies found.</p>
        ) : (
          <table className="min-w-full text-sm text-left">
            <thead className="border-b border-gray-100 dark:border-white/[0.05] bg-gray-50 dark:bg-white/[0.03]">
              <tr>
                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-white/80">Profile</th>
                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-white/80">Staff Name</th>
                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-white/80">Email ID</th>
                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-white/80">Mobile Number</th>
                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-white/80">Department</th>
                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-white/80">Designation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {renderStaffRows()}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

