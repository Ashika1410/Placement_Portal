// import { useState } from "react";

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// interface JobPost {
//   id: number;
//   title: string;
//   company: string;
//   location: string;
//   description: string;
//   requirements: string[];
//   responsibilities: string[];
//   postedDate: string;
//   salaryRange?: {
//     min: number;
//     max: number;
//   };
//   employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Temporary' | 'Internship';
//   benefits?: string[];
//   applicationDeadline?: string;
//   contactEmail: string;
// }

// export default function CompanyJobPost() {
//   const [job, setJob] = useState({
//     title: "",
//     description: "", 
//     department: "",
//     location: "",
//     ctc: "",
//     deadline: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setJob({ ...job, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Job Submitted:", job);
//     // You'd typically send job data to the backend here
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto space-y-6">
//       <h2 className="text-2xl font-bold">Post a New Job</h2>
//       <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow p-6 rounded-lg">
//         <input
//           type="text"
//           name="title"
//           placeholder="Job Title"
//           value={job.title}
//           onChange={handleChange}
//           required
//           className="w-full border rounded px-4 py-2"
//         />
//         <textarea
//           name="description"
//           placeholder="Job Description"
//           value={job.description}
//           onChange={handleChange}
//           required
//           className="w-full border rounded px-4 py-2"
//         />
//         <input
//           type="text"
//           name="department"
//           placeholder="Eligible Departments (e.g. CSE, ECE)"
//           value={job.department}
//           onChange={handleChange}
//           required
//           className="w-full border rounded px-4 py-2"
//         />
//         <input
//           type="text"
//           name="location"
//           placeholder="Location"
//           value={job.location}
//           onChange={handleChange}
//           className="w-full border rounded px-4 py-2"
//         />
//         <input
//           type="text"
//           name="ctc"
//           placeholder="CTC (e.g. 6 LPA)"
//           value={job.ctc}
//           onChange={handleChange}
//           className="w-full border rounded px-4 py-2"
//         />
//         <input
//           type="date"
//           name="deadline"
//           value={job.deadline}
//           onChange={handleChange}
//           className="w-full border rounded px-4 py-2"
//         />
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//         >
//           Post Job
//         </button>
//       </form>
//     </div>
//   );
// }

import { FormEvent, useState } from "react";
import Button from "../../components/ui/button/Button";
import Input from "../../components/form/input/InputField";
import TextAreaInput from "../../components/form/form-elements/TextAreaInput";

export default function CompanyJobPost() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    requirements: "",
    responsibilities: "",
    postedDate: "",
    salaryMin: "",
    salaryMax: "",
    employmentType: "Full-time",
    benefits: "",
    applicationDeadline: "",
    contactEmail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      title: job.title,
      company: job.company,
      location: job.location,
      description: job.description,
      requirements: job.requirements
        .split(",")
        .map((req) => req.trim())
        .filter((req) => req !== ""),
      responsibilities: job.responsibilities
        .split(",")
        .map((res) => res.trim())
        .filter((res) => res !== ""),
      postedDate: new Date().toISOString(),
      salaryMin: job.salaryMin ? Number(job.salaryMin) : undefined,
      salaryMax: job.salaryMax ? Number(job.salaryMax) : undefined,
      employmentType: job.employmentType,
      benefits: job.benefits
        .split(",")
        .map((b) => b.trim())
        .filter((b) => b !== ""),
      applicationDeadline: job.applicationDeadline,
      contactEmail: job.contactEmail,
    };

    console.log("Submitting Job:", payload);

    try {
      const res = await fetch(`http://localhost:3000/jobs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("Job posted successfully!");
        setJob({
          title: "",
          company: "",
          location: "",
          description: "",
          requirements: "",
          responsibilities: "",
          postedDate: "",
          salaryMin: "",
          salaryMax: "",
          employmentType: "Full-time",
          benefits: "",
          applicationDeadline: "",
          contactEmail: "",
        });
      } else {
        alert("Failed to post job.");
      }
    } catch (err) {
      console.error("Error posting job:", err);
      alert("An error occurred.");
    }
  };

  return (
    <>
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Post a New Job</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white shadow p-6 rounded-lg"
      >
        <Input
          type="text"
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
          required
          className="w-full border rounded px-4 py-2"
        />
        <Input
          type="text"
          name="company"
          placeholder="Company Name"
          value={job.company}
          onChange={handleChange}
          required
          className="w-full border rounded px-4 py-2"
        />
        <Input
          type="text"
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
          required
          className="w-full border rounded px-4 py-2"
        />
        <TextAreaInput
          name="description"
          placeholder="Job Description"
          value={job.description}
          onChange={handleChange}
          required
          className="w-full border rounded px-4 py-2"
        />
        <Input
          type="text"
          name="requirements"
          placeholder="Requirements (comma separated)"
          value={job.requirements}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />
        <Input
          type="text"
          name="responsibilities"
          placeholder="Responsibilities (comma separated)"
          value={job.responsibilities}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />
        <div className="flex gap-4">
          <Input
            type="number"
            name="salaryMin"
            placeholder="Min Salary"
            value={job.salaryMin}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />
          <Input
            type="number"
            name="salaryMax"
            placeholder="Max Salary"
            value={job.salaryMax}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />
        </div>
        <select
          name="employmentType"
          value={job.employmentType}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        >
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Temporary">Temporary</option>
          <option value="Internship">Internship</option>
        </select>
        <Input
          type="text"
          name="benefits"
          placeholder="Benefits (comma separated)"
          value={job.benefits}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />
        <Input
          type="date"
          name="applicationDeadline"
          value={job.applicationDeadline}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />
        <Input
          type="email"
          name="contactEmail"
          placeholder="Contact Email"
          value={job.contactEmail}
          onChange={handleChange}
          required
          className="w-full border rounded px-4 py-2"
        />
        <Button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Post Job
        </Button>
      </form>
    </div>
    </>
  );
}
