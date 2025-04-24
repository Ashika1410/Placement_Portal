import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../ui/table";

interface Order {
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

// Define the table data using the interface
const tableData: Order[] = [
    {
        id: 1,
        companyName: {
            image: "/images/user/user-17.jpg",
            name: "Lindsey Curtis",
        },
        url: "Agency Website",
        position: {
            name: [
                "/images/user/user-22.jpg",
                "/images/user/user-23.jpg",
                "/images/user/user-24.jpg",
            ],
        },
        vaccency: 4,
        networth: "Active",
    },
    {
        id: 2,
        companyName: {
            image: "/images/user/user-17.jpg",
            name: "Lindsey Curtis",
        },
        url: "Agency Website",
        position: {
            name: [
                "/images/user/user-22.jpg",
                "/images/user/user-23.jpg",
                "/images/user/user-24.jpg",
            ],
        },
        vaccency: 4,
        networth: "Active",
    },
    {
        id: 3,
        companyName: {
            image: "/images/user/user-17.jpg",
            name: "Lindsey Curtis",
        },
        url: "Agency Website",
        position: {
            name: [
                "/images/user/user-22.jpg",
                "/images/user/user-23.jpg",
                "/images/user/user-24.jpg",
            ],
        },
        vaccency: 4,
        networth: "Active",
    },
    {
        id: 4,
        companyName: {
            image: "/images/user/user-17.jpg",
            name: "Lindsey Curtis",
        },
        url: "Agency Website",
        position: {
            name: [
                "/images/user/user-22.jpg",
                "/images/user/user-23.jpg",
                "/images/user/user-24.jpg",
            ],
        },
        vaccency: 4,
        networth: "Active",
    },
    {
        id: 5,
        companyName: {
            image: "/images/user/user-17.jpg",
            name: "Lindsey Curtis",
        },
        url: "Agency Website",
        position: {
            name: [
                "/images/user/user-22.jpg",
                "/images/user/user-23.jpg",
                "/images/user/user-24.jpg",
            ],
        },
        vaccency: 4,
        networth: "Active",
    },
];

export default function CompanyTable() {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
            <div className="max-w-full overflow-x-auto">
                <Table>
                    {/* Table Header */}
                    <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                        <TableRow>
                            <TableCell
                                isHeader
                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Company Name
                            </TableCell>
                            <TableCell
                                isHeader
                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Website URL
                            </TableCell>
                            <TableCell
                                isHeader
                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Position
                            </TableCell>
                            <TableCell
                                isHeader
                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Vaccency
                            </TableCell>
                            <TableCell
                                isHeader
                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Net Worth
                            </TableCell>
                        </TableRow>
                    </TableHeader>

                    {/* Table Body */}
                    <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                        {tableData.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell className="px-5 py-4 sm:px-6 text-start">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 overflow-hidden rounded-full">
                                            <img
                                                width={40}
                                                height={40}
                                                src={order.companyName.image}
                                                alt={order.companyName.name}
                                            />
                                        </div>
                                        <div>
                                            <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                {order.companyName.name}
                                            </span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    {order.url}
                                </TableCell>
                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    <div className="flex -space-x-2">
                                        {order.position.name.map((teamImage, index) => (
                                            <div
                                                key={index}
                                                className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
                                            >
                                                <img
                                                    width={24}
                                                    height={24}
                                                    src={teamImage}
                                                    alt={`Team member ${index + 1}`}
                                                    className="w-full size-6"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </TableCell>
                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                {order.vaccency}
                                </TableCell>
                                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    {order.networth}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}