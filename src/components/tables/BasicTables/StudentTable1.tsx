import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import Badge from "../../ui/badge/Badge";

interface Placement {
  id: number;
  student: {
    image: string;
    name: string;
    department: string;
  };
  company: string;
  role: string;
  package: string;
  status: string;
}

const placementData: Placement[] = [
  {
    id: 1,
    student: {
      image: "/images/student/student-1.jpg",
      name: "Aarav Sharma",
      department: "Computer Science",
    },
    company: "Google",
    role: "Software Engineer",
    package: "18 LPA",
    status: "Placed",
  },
  {
    id: 2,
    student: {
      image: "/images/student/student-2.jpg",
      name: "Neha Verma",
      department: "Electronics",
    },
    company: "TCS",
    role: "Systems Engineer",
    package: "3.6 LPA",
    status: "Placed",
  },
  {
    id: 3,
    student: {
      image: "/images/student/student-3.jpg",
      name: "Rohan Mehta",
      department: "Mechanical",
    },
    company: "Infosys",
    role: "Analyst",
    package: "4.2 LPA",
    status: "Pending",
  },
  {
    id: 4,
    student: {
      image: "/images/student/student-4.jpg",
      name: "Sara Ali",
      department: "Information Technology",
    },
    company: "Wipro",
    role: "Project Engineer",
    package: "3.5 LPA",
    status: "Placed",
  },
  {
    id: 5,
    student: {
      image: "/images/student/student-5.jpg",
      name: "Vikram Singh",
      department: "Civil",
    },
    company: "-",
    role: "-",
    package: "-",
    status: "Not Placed",
  },
];

export default function StudentTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell isHeader className="px-5 py-3 text-start text-gray-500 text-theme-xs dark:text-gray-400">
                Student
              </TableCell>
              <TableCell isHeader className="px-5 py-3 text-start text-gray-500 text-theme-xs dark:text-gray-400">
                Department
              </TableCell>
              <TableCell isHeader className="px-5 py-3 text-start text-gray-500 text-theme-xs dark:text-gray-400">
                Company
              </TableCell>
              <TableCell isHeader className="px-5 py-3 text-start text-gray-500 text-theme-xs dark:text-gray-400">
                Role
              </TableCell>
              <TableCell isHeader className="px-5 py-3 text-start text-gray-500 text-theme-xs dark:text-gray-400">
                Package
              </TableCell>
              <TableCell isHeader className="px-5 py-3 text-start text-gray-500 text-theme-xs dark:text-gray-400">
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {placementData.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img
                        width={40}
                        height={40}
                        src={entry.student.image}
                        alt={entry.student.name}
                      />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {entry.student.name}
                      </span>
                      <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                        {entry.student.department}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                  {entry.student.department}
                </TableCell>
                <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                  {entry.company}
                </TableCell>
                <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                  {entry.role}
                </TableCell>
                <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                  {entry.package}
                </TableCell>
                <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                      entry.status === "Placed"
                        ? "success"
                        : entry.status === "Pending"
                        ? "warning"
                        : "error"
                    }
                  >
                    {entry.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
