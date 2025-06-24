// import { useEffect, useState } from "react";

// interface Job {
//   id: number;
//   title: string;
//   company: string;
//   location: string;
//   postedDate: string;
//   description: string;
//   employmentType: string;
//   salaryMin?: number;
//   salaryMax?: number;
//   applicationDeadline: string;
// }

// export default function JobsPage() {
//   const [jobs, setJobs] = useState<Job[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/jobs");
//         const data = await res.json();
//         setJobs(data);
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   return (
//     <div className="p-6 max-w-5xl mx-auto space-y-4">
//       <h2 className="text-3xl font-bold mb-4">Available Jobs</h2>
//       {loading ? (
//         <p>Loading jobs...</p>
//       ) : jobs.length === 0 ? (
//         <p>No jobs found.</p>
//       ) : (
//         jobs.map((job) => (
//           <div
//             key={job.id}
//             className="p-4 border rounded shadow hover:shadow-lg transition"
//           >
//             <h3 className="text-xl font-semibold">{job.title}</h3>
//             <p className="text-sm text-gray-600">{job.company} • {job.location}</p>
//             <p className="text-sm text-gray-500">
//               Type: {job.employmentType} | Salary: ₹
//               {job.salaryMin || "-"} - ₹{job.salaryMax || "-"}
//             </p>
//             <p className="mt-2">{job.description.slice(0, 150)}...</p>
//             <p className="text-xs text-gray-400 mt-2">
//               Posted on: {new Date(job.postedDate).toLocaleDateString()} | Apply by:{" "}
//               {new Date(job.applicationDeadline).toLocaleDateString()}
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import EditJobModal from "../Forms/EditJobModal";
import Button from "../../components/ui/button/Button";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    postedDate: string;
    description: string;
    employmentType: string;
    salaryMin?: number;
    salaryMax?: number;
    applicationDeadline: string;
}

export default function JobsPage() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchJobs = async () => {
        try {
            const res = await fetch(`http://localhost:3000/jobs`);
            const data = await res.json();
            setJobs(data);
        } catch (error) {
            console.error("Error fetching jobs:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleDelete = async (id: number) => {
        const confirmed = confirm("Are you sure you want to delete this job?");
        if (!confirmed) return;

        try {
            const res = await fetch(`http://localhost:3000/jobs/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                alert("Job deleted.");
                fetchJobs();
            } else {
                alert("Failed to delete job.");
            }
        } catch (error) {
            console.error("Error deleting job:", error);
            alert("Something went wrong.");
        }
    };

    return (
        <div className="p-6 max-w-5xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold mb-4">Available Jobs</h2>
            {loading ? (
                <p>Loading jobs...</p>
            ) : jobs.length === 0 ? (
                <p>No jobs found.</p>
            ) : (
                jobs.map((job) => (
                    <div
                        key={job.id}
                        className="p-4 border rounded shadow hover:shadow-lg transition"
                    >
                        <Link to={`/jobs/${job.id}`} className="text-blue-600 hover:underline">
                            {job.title}
                        </Link>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p className="text-sm text-gray-600">{job.company} • {job.location}</p>
                        <p className="text-sm text-gray-500">
                            Type: {job.employmentType} | Salary: ₹
                            {job.salaryMin || "-"} - ₹{job.salaryMax || "-"}
                        </p>
                        <p className="mt-2">{job.description.slice(0, 150)}...</p>
                        <p className="text-xs text-gray-400 mt-2">
                            Posted: {new Date(job.postedDate).toLocaleDateString()} | Apply by:{" "}
                            {new Date(job.applicationDeadline).toLocaleDateString()}
                        </p>
                        <div className="mt-4 flex gap-4">
                            <Button
                                onClick={() => {
                                    setSelectedJob(job);
                                    setIsModalOpen(true);
                                }}
                                className="bg-green-500 text-white px-2 py-4 rounded"
                            >
                                <FaEdit style={{ cursor: 'pointer' }} />
                            </Button>
                            <Button
                                onClick={() => handleDelete(job.id)}
                                className="bg-red-500 text-white px-2 py-4 rounded"
                            >
                                <FaTrash style={{ cursor: 'pointer' }} />
                            </Button>
                        </div>
                    </div>
                ))
            )}

            {/* Edit Modal */}
            <EditJobModal
                job={selectedJob}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onUpdate={fetchJobs}
            />
        </div>
    );
}
