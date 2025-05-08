export default function StudentApplications() {
    const applications = [
      {
        company: "Google",
        position: "SDE Intern",
        status: "Shortlisted",
        appliedDate: "2025-04-01",
        interviewDate: "2025-04-10",
      },
    ];
  
    return (
      <div className="p-6 space-y-6">
        <h2 className="text-xl font-semibold">Job Applications</h2>
        <table className="w-full border-collapse bg-white shadow rounded-xl">
          <thead className="bg-gray-100 text-left text-sm text-gray-600">
            <tr>
              <th className="p-4">Company</th>
              <th className="p-4">Position</th>
              <th className="p-4">Status</th>
              <th className="p-4">Applied Date</th>
              <th className="p-4">Interview</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index} className="border-t text-sm">
                <td className="p-4">{app.company}</td>
                <td className="p-4">{app.position}</td>
                <td className="p-4">{app.status}</td>
                <td className="p-4">{app.appliedDate}</td>
                <td className="p-4">{app.interviewDate || "TBD"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  