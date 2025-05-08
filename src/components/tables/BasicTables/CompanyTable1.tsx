import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../ui/table";

interface Company {
    id: number;
    companyName: {
        image: string;
        name: string;
    };
    url: string;
    position: {
        name: string[];
    };
    vaccency: number;
    networth: string;
}

const tableData: Company[] = [
    {
        id: 1,
        companyName: {
            image: "/images/company/google.png",
            name: "Google LLC",
        },
        url: "https://careers.google.com",
        position: {
            name: ["Frontend Developer", "Backend Engineer", "Cloud Architect"],
        },
        vaccency: 12,
        networth: "$1.7T",
    },
    {
        id: 2,
        companyName: {
            image: "/images/company/microsoft.png",
            name: "Microsoft",
        },
        url: "https://careers.microsoft.com",
        position: {
            name: ["Software Engineer", "Data Scientist"],
        },
        vaccency: 8,
        networth: "$2.5T",
    },
    {
        id: 3,
        companyName: {
            image: "/images/company/amazon.png",
            name: "Amazon",
        },
        url: "https://www.amazon.jobs",
        position: {
            name: ["DevOps Engineer"],
        },
        vaccency: 5,
        networth: "$1.8T",
    },
    {
        id: 4,
        companyName: {
            image: "/images/company/meta.png",
            name: "Meta Platforms",
        },
        url: "https://www.metacareers.com",
        position: {
            name: ["AI Researcher", "UX Designer"],
        },
        vaccency: 6,
        networth: "$900B",
    },
    {
        id: 5,
        companyName: {
            image: "/images/company/infosys.png",
            name: "Infosys",
        },
        url: "https://www.infosys.com/careers",
        position: {
            name: ["Full Stack Developer", "Business Analyst", "QA Tester"],
        },
        vaccency: 15,
        networth: "$85B",
    },
];

export default function CompanyTable() {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
            <div className="max-w-full overflow-x-auto">
                <Table>
                    <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                        <TableRow>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                Company Name
                            </TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                Website URL
                            </TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                Positions
                            </TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                Vacancy
                            </TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                Net Worth
                            </TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                        {tableData.map((company) => (
                            <TableRow key={company.id}>
                                <TableCell className="px-5 py-4 sm:px-6 text-start">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 overflow-hidden rounded-full">
                                            <img
                                                width={40}
                                                height={40}
                                                src={company.companyName.image}
                                                alt={company.companyName.name}
                                            />
                                        </div>
                                        <div>
                                            <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                {company.companyName.name}
                                            </span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    <a href={company.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline dark:text-blue-400">
                                        {company.url}
                                    </a>
                                </TableCell>
                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    {company.position.name.join(", ")}
                                </TableCell>
                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    {company.vaccency}
                                </TableCell>
                                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    {company.networth}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
