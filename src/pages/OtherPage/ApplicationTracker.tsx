// // src/components/ApplicationTracker.tsx
// import { SetStateAction, useEffect, useState } from "react";
// import { fetchApplications, Application } from "../../api/application";

// export default function ApplicationTracker() {
//   const [applications, setApplications] = useState<Application[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchApplications()
//       .then((data: SetStateAction<Application[]>) => {
//         setApplications(data);
//         setLoading(false);
//       })
//       .catch((err: { message: SetStateAction<string>; }) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   const getStatusBadge = (status: Application["status"]) => {
//     const color =
//       status === "Accepted"
//         ? "bg-green-100 text-green-700"
//         : status === "Rejected"
//         ? "bg-red-100 text-red-700"
//         : "bg-yellow-100 text-yellow-700";
//     return <span className={`px-2 py-1 rounded text-sm font-medium ${color}`}>{status}</span>;
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold mb-4 text-gray-800">Application Tracker</h1>

//       {loading && <p className="text-gray-500">Loading applications...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       {!loading && applications.length === 0 && (
//         <p className="text-gray-500">No applications found.</p>
//       )}

//       {!loading && applications.length > 0 && (
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
//             <thead className="bg-gray-100 text-gray-700">
//               <tr>
//                 <th className="px-4 py-2 text-left">Company</th>
//                 <th className="px-4 py-2 text-left">Position</th>
//                 <th className="px-4 py-2 text-left">Status</th>
//                 <th className="px-4 py-2 text-left">Date Applied</th>
//               </tr>
//             </thead>
//             <tbody>
//               {applications.map((app) => (
//                 <tr key={app.id} className="border-t">
//                   <td className="px-4 py-2">{app.company}</td>
//                   <td className="px-4 py-2">{app.position}</td>
//                   <td className="px-4 py-2">{getStatusBadge(app.status)}</td>
//                   <td className="px-4 py-2">{new Date(app.dateApplied).toLocaleDateString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// src/components/ApplicationTracker.tsx

import { useEffect, useState } from "react";
import { fetchApplications, Application } from "../../api/application";

export default function ApplicationTracker() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications()
      .then((data) => {
        setApplications(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const getStatusColor = (status: Application["status"]) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Accepted":
        return "bg-green-100 text-green-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Tracker</h2>

      {loading ? (
        <p className="text-gray-500">Loading applications...</p>
      ) : applications.length === 0 ? (
        <p className="text-gray-500">No applications found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2">Student</th>
                <th className="px-4 py-2">Company</th>
                <th className="px-4 py-2">Position</th>
                <th className="px-4 py-2">Applied On</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="border-t">
                  <td className="px-4 py-2">{app.student}</td>
                  <td className="px-4 py-2">{app.company}</td>
                  <td className="px-4 py-2">{app.position}</td>
                  <td className="px-4 py-2">{new Date(app.date).toLocaleDateString()}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded text-sm font-medium ${getStatusColor(app.status)}`}>
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
