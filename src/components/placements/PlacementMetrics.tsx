import { Building2, UserPlus, Users } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

interface MetricsData {
  staffs: number;
  students: number;
  companies: number;
  placedStudents: number;
  status: string;
}

export default function PlacementMetrics() {

  const [metrics, setMetrics] = useState<MetricsData>({
    staffs: 0,
    students: 0,
    companies: 0,
    placedStudents: 0,
    status: "PLACED",
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/metrics`);
        setMetrics(res.data);
      } catch (error) {
        console.error("Failed to fetch placement metrics:", error);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 md:p-6 gap-6">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-purple-300 md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-white">
          <UserPlus />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-3xl text-black dark:text-black">
              Staffs
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-green-900">
              {metrics.staffs}
            </h4>
          </div>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-purple-300 md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-white">
          <Users />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-3xl text-black dark:text-black">
              Students
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-green-900">
              {metrics.students}
            </h4>
          </div>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-purple-300 md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-white">
          <Building2 />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-3xl text-black dark:text-black">
              Companies
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-green-900">
              {metrics.companies}
            </h4>
          </div>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-purple-300 md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-white">
          <Users />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-3xl text-black dark:text-black">
              Placed Students
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-green-900">
              {metrics.placedStudents}
            </h4>
          </div>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}
    </div>
  );
}
