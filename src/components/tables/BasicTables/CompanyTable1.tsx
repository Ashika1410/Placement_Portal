import { useEffect, useState } from "react";
import axios from "axios";

interface Company {
    id: number;
    name: string;
    email: string;
    phone: string;
    website?: string;
    address?: string;
    industry?: string;
    description?: string;
    user: {
        avatarUrl?: string;
    }
}

export default function CompanyTable() {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/company`);
                setCompanies(res.data);
            } catch (err) {
                console.error("Failed to load companies", err);
            } finally {
                setLoading(false);
            }
        };

        fetchCompanies();
    }, []);

    const renderCompanyRows = () => {
        const rows = [];

        for (let i = 0; i < companies.length; i++) {
            const company = companies[i];
            rows.push(
                <tr key={company.id}>
                    <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                            <img
                                src={company.user?.avatarUrl || "/images/user/profile4.jfif"}
                                alt={company.name || "unknown"}
                                className="rounded-full w-10 h-10 object-cover"
                            />
                        </div>
                    </td>
                    <td className="px-4 py-3">
                        <span className="font-medium text-gray-800 dark:text-white/90">
                            {company.name || "Unknown"}
                        </span>
                    </td>
                    <td className="px-4 py-3">{company.email || "N/A"}</td>
                    <td className="px-4 py-3">{company.phone || "N/A"}</td>
                    <td className="px-4 py-3">
                        {company.website ? (
                            <a
                                href={company.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline dark:text-blue-400"
                            >
                                {company.website}
                            </a>
                        ) : (
                            <span className="text-gray-400 italic">N/A</span>
                        )}
                    </td>
                    <td className="px-4 py-3">{company.address || "N/A"}</td>
                    <td className="px-4 py-3">{company.industry || "N/A"}</td>
                    <td className="px-4 py-3">{company.description || "N/A"}</td>
                </tr>
            );
        }

        return rows;
    };

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
            <div className="max-w-full overflow-x-auto">
                {loading ? (
                    <p className="p-4 text-gray-500">Loading...</p>
                ) : companies.length === 0 ? (
                    <p className="p-4 text-red-500">No companies found.</p>
                ) : (
                    <table className="min-w-full text-sm text-left">
                        <thead className="border-b border-gray-100 dark:border-white/[0.05] bg-gray-50 dark:bg-white/[0.03]">
                            <tr>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-white/80">Profile</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-white/80">Company Name</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-white/80">Email ID</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-white/80">Contact Phone</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-white/80">Website</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-white/80">Address</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-white/80">Industry</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-white/80">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                            {renderCompanyRows()}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

