import { useState } from "react";

export default function CompanyJobPost() {
  const [job, setJob] = useState({
    title: "",
    description: "",
    department: "",
    location: "",
    ctc: "",
    deadline: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Job Submitted:", job);
    // You'd typically send job data to the backend here
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Post a New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow p-6 rounded-lg">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
          required
          className="w-full border rounded px-4 py-2"
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={job.description}
          onChange={handleChange}
          required
          className="w-full border rounded px-4 py-2"
        />
        <input
          type="text"
          name="department"
          placeholder="Eligible Departments (e.g. CSE, ECE)"
          value={job.department}
          onChange={handleChange}
          required
          className="w-full border rounded px-4 py-2"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />
        <input
          type="text"
          name="ctc"
          placeholder="CTC (e.g. 6 LPA)"
          value={job.ctc}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />
        <input
          type="date"
          name="deadline"
          value={job.deadline}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Post Job
        </button>
      </form>
    </div>
  );
}
