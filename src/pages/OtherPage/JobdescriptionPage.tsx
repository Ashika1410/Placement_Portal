import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface JobDetails {
  id?: number;
  title: string;
  company: string;
  department?: string;
  location: string;
  stipend?: string;
  eligibility?: string;
  lastDate?: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  postedDate?: string;
}

export default function JobDescriptionPage() {
  const { id } = useParams();
  const [job, setJob] = useState<JobDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJob() {
      try {
        const res = await fetch(`http://localhost:3000/jobs/${id}`);
        if (!res.ok) throw new Error("Failed to fetch job");
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchJob();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10 text-gray-600">Loading...</div>;
  }

  if (!job) {
    return <div className="text-center py-10 text-red-600">Job not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            {job.title}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {job.company} | {job.location}
          </p>
        </div>

        <div className="space-y-2">
          {job.department && (
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Department:</strong> {job.department}
            </p>
          )}
          {job.stipend && (
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Salary/Stipend:</strong> {job.stipend}
            </p>
          )}
          {job.eligibility && (
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Eligibility:</strong> {job.eligibility}
            </p>
          )}
          {job.lastDate && (
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Last Date to Apply:</strong> {job.lastDate}
            </p>
          )}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Job Description
          </h2>
          <p className="text-gray-700 dark:text-gray-300">{job.description}</p>
        </div>

        {job.responsibilities?.length > 0 && (
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Responsibilities
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
              {job.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {job.requirements?.length > 0 && (
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Requirements
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
              {job.requirements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="pt-6">
          <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
