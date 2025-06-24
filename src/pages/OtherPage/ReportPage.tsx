
interface ReportEntry {
  studentName: string;
  rollNumber: string;
  department: string;
  company: string;
  status: "Placed" | "Not Placed" | "Pending";
  packageOffered?: string;
}

const reportData: ReportEntry[] = [
  {
    studentName: "Arjun Mehta",
    rollNumber: "CSE2021001",
    department: "CSE",
    company: "Google",
    status: "Placed",
    packageOffered: "₹12 LPA",
  },
  {
    studentName: "Neha Sharma",
    rollNumber: "ECE2021002",
    department: "ECE",
    company: "Infosys",
    status: "Placed",
    packageOffered: "₹6.5 LPA",
  },
  {
    studentName: "Rahul Roy",
    rollNumber: "MECH2021003",
    department: "Mechanical",
    company: "-",
    status: "Not Placed",
  },
  {
    studentName: "Anjali Verma",
    rollNumber: "IT2021004",
    department: "IT",
    company: "TCS",
    status: "Pending",
  },
];

export default function ReportPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
        Placement Report
      </h1>

      <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-xl shadow">
        <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
          <thead className="bg-gray-100 dark:bg-gray-800 text-xs uppercase font-medium">
            <tr>
              <th className="px-6 py-4">Student Name</th>
              <th className="px-6 py-4">Roll No</th>
              <th className="px-6 py-4">Department</th>
              <th className="px-6 py-4">Company</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Package</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((entry, i) => (
              <tr
                key={i}
                className="border-t border-gray-200 dark:border-white/[0.05]"
              >
                <td className="px-6 py-4">{entry.studentName}</td>
                <td className="px-6 py-4">{entry.rollNumber}</td>
                <td className="px-6 py-4">{entry.department}</td>
                <td className="px-6 py-4">{entry.company}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                      entry.status === "Placed"
                        ? "bg-green-100 text-green-600"
                        : entry.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {entry.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {entry.packageOffered || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-right">
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Export Report (PDF)
        </button>
      </div>
    </div>
  );
}

// // src/components/ReportPage.tsx
// import { useEffect, useState } from "react";
// import { fetchReports, Report } from "../api/reports";

// export default function ReportPage() {
//   const [reports, setReports] = useState<Report[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchReports()
//       .then((data) => {
//         setReports(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   const getStatusBadge = (status: Report["status"]) => {
//     const color =
//       status === "Completed"
//         ? "bg-green-100 text-green-700"
//         : status === "Missed"
//         ? "bg-red-100 text-red-700"
//         : "bg-yellow-100 text-yellow-700";
//     return <span className={`px-2 py-1 rounded text-sm font-medium ${color}`}>{status}</span>;
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold mb-4 text-gray-800">Report Page</h1>

//       {loading && <p className="text-gray-500">Loading reports...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       {!loading && reports.length === 0 && (
//         <p className="text-gray-500">No reports available.</p>
//       )}

//       {!loading && reports.length > 0 && (
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
//             <thead className="bg-gray-100 text-gray-700">
//               <tr>
//                 <th className="px-4 py-2 text-left">Student</th>
//                 <th className="px-4 py-2 text-left">Company</th>
//                 <th className="px-4 py-2 text-left">Interview Date</th>
//                 <th className="px-4 py-2 text-left">Status</th>
//                 <th className="px-4 py-2 text-left">Feedback</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reports.map((report) => (
//                 <tr key={report.id} className="border-t">
//                   <td className="px-4 py-2">{report.student}</td>
//                   <td className="px-4 py-2">{report.company}</td>
//                   <td className="px-4 py-2">{new Date(report.interviewDate).toLocaleDateString()}</td>
//                   <td className="px-4 py-2">{getStatusBadge(report.status)}</td>
//                   <td className="px-4 py-2 text-gray-700">{report.feedback}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }
