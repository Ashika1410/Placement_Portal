import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddCompanyModal from '../Forms/AddCompanyModal';
import Button from '../../components/ui/button/Button';
import EditCompanyModal from '../Forms/EditCompanyModal';
import { FaTrash, FaEdit } from 'react-icons/fa';

interface Company {
  id: number;
  name: string;
  email: string;
  phone: string;
  website?: string;
  address?: string;
  industry?: string;
  description?: string;
}


const CompanyListPage: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [editCompany, setEditCompany] = useState<Company | null>(null);
  const [showModal, setShowModal] = useState(false);

  const fetchCompanies = async () => {
    try {
      const res = await axios.get('http://localhost:3000/company');
      setCompanies(res.data);
    } catch (err) {
      console.error('Error fetching companies', err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this company?')) return;
    try {
      await axios.delete(`http://localhost:3000/company/${id}`);
      fetchCompanies();
    } catch (err) {
      console.error('Error deleting company', err);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleEdit = async (updatedCompany: Company) => {
    try {
      const { id, ...data } = updatedCompany;
      console.log("Updating company with ID:", updatedCompany.id);
      await axios.patch(`http://localhost:3000/company/${id}`, data);
      fetchCompanies();
    } catch (error) {
      console.error('Error updating company:', error);
    }
  };


  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Company List</h2>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setShowModal(true)}
        >
          Add Company
        </button>
      </div>

      {showModal && (
        <AddCompanyModal
          onClose={() => setShowModal(false)}
          onSuccess={fetchCompanies}
        />
      )}
      {editCompany && (
        <EditCompanyModal
          company={editCompany}
          onClose={() => setEditCompany(null)}
          onSuccess={fetchCompanies}
        />
      )}
      <table className="w-full border mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Website</th>
            <th className="p-2 border">Address</th>
            <th className="p-2 border">Industry</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id} className="border-t">
              <td className="p-2 border">{company.name}</td>
              <td className="p-2 border">{company.email}</td>
              <td className="p-2 border">{company.phone}</td>
              <td className="p-2 border">{company.website}</td>
              <td className="p-2 border">{company.address}</td>
              <td className="p-2 border">{company.industry}</td>
              <td className="p-2 border space-x-2 flex">
                <Button
                  onClick={() => setEditCompany(company)}
                  className="bg-green-500 text-white px-2 py-4 rounded"
                >
                  <FaEdit style={{ cursor: 'pointer' }} />
                </Button>
                <Button
                  onClick={() => handleDelete(company.id)}
                  className="bg-red-500 text-white px-2 py-4 rounded"
                >
                  <FaTrash style={{ cursor: 'pointer' }} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default CompanyListPage;
