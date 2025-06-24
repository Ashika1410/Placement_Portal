// // src/api/applications.ts
// export type Application = {
//   id: number;
//   company: string;
//   position: string;
//   status: "Pending" | "Accepted" | "Rejected";
//   dateApplied: string;
// };

// export const fetchApplications = async (): Promise<Application[]> => {
//   const response = await fetch("http://localhost:3000/api/applications");
//   if (!response.ok) throw new Error("Failed to fetch applications");
//   return await response.json();
// };

// src/api/applications.ts

export type Application = {
  id: number;
  student: string;
  company: string;
  position: string;
  date: string;
  status: "Pending" | "Accepted" | "Rejected";
};

export const fetchApplications = async (): Promise<Application[]> => {
  // Simulating API call with sample data
  return [
    {
      id: 1,
      student: "Alice Johnson",
      company: "Infosys",
      position: "Software Engineer",
      date: "2025-04-01",
      status: "Pending",
    },
    {
      id: 2,
      student: "Bob Smith",
      company: "TCS",
      position: "Backend Developer",
      date: "2025-04-05",
      status: "Accepted",
    },
    {
      id: 3,
      student: "Carla Lee",
      company: "Wipro",
      position: "Data Analyst",
      date: "2025-04-10",
      status: "Rejected",
    },
  ];
};
