import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import Badge from "../../ui/badge/Badge";

interface StaffMember {
  id: number;
  user: {
    image: string;
    name: string;
    role: string;
  };
  universityId: string;
  status: string;
  departments: string[]; // New field
  subjects: string[]; // New field
}

const staffData: StaffMember[] = [
  {
    id: 1,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Lindsey Curtis",
      role: "Assistant Professor",
    },
    universityId: "U12345",
    status: "Active",
    departments: ["Computer Science", "Information Technology"],
    subjects: ["Data Structures", "Web Development"],
  },
  {
    id: 2,
    user: {
      image: "/images/user/user-18.jpg",
      name: "Kaiya George",
      role: "Lecturer",
    },
    universityId: "U12346",
    status: "Pending",
    departments: ["Mechanical Engineering"],
    subjects: ["Thermodynamics", "Fluid Mechanics"],
  },
  {
    id: 3,
    user: {
      image: "/images/user/user-20.jpg",
      name: "Abram Schleifer",
      role: "HOD",
    },
    universityId: "U12347",
    status: "Active",
    departments: ["Civil Engineering"],
    subjects: ["Structural Analysis", "Surveying"],
  },
];

export default function StaffTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                User
              </TableCell>
              <TableCell className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                University ID
              </TableCell>
              <TableCell className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Status
              </TableCell>
              <TableCell className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Departments
              </TableCell>
              <TableCell className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Subjects
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {staffData.map((staff) => (
              <TableRow key={staff.id}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img
                        width={40}
                        height={40}
                        src={staff.user.image}
                        alt={staff.user.name}
                      />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {staff.user.name}
                      </span>
                      <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                        {staff.user.role}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                  {staff.universityId}
                </TableCell>
                <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                      staff.status === "Active"
                        ? "success"
                        : staff.status === "Pending"
                        ? "warning"
                        : "error"
                    }
                  >
                    {staff.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                  {staff.departments.join(", ")}
                </TableCell>
                <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                  {staff.subjects.join(", ")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

