interface JobDetails {
  title: string;
  company: string;
  department: string;
  location: string;
  stipend: string;
  eligibility: string;
  lastDate: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const job: JobDetails = {
  title: "Software Engineer Intern",
  company: "Infosys",
  department: "Engineering",
  location: "Bangalore, India",
  stipend: "₹25,000 / month",
  eligibility: "Final Year B.Tech (CSE, IT, ECE) with CGPA > 7.0",
  lastDate: "15 June 2025",
  description:
    "Join Infosys as a Software Engineering Intern for a 6-month internship program, where you will work on real-time projects and learn modern development practices.",
  responsibilities: [
    "Build scalable software solutions under mentorship.",
    "Collaborate with product and design teams.",
    "Contribute to documentation and testing.",
  ],
  requirements: [
    "Strong knowledge of JavaScript/React.",
    "Good understanding of DSA and problem-solving.",
    "Basic knowledge of Git and GitHub.",
    "Excellent communication skills.",
  ],
};

export default function JobDescriptionPage() {
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
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Department:</strong> {job.department}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Stipend:</strong> {job.stipend}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Eligibility:</strong> {job.eligibility}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Last Date to Apply:</strong> {job.lastDate}
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Job Description
          </h2>
          <p className="text-gray-700 dark:text-gray-300">{job.description}</p>
        </div>

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

        <div className="pt-6">
          <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
