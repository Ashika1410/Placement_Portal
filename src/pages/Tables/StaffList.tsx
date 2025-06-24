import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../../components/ui/button/Button';
import AddStaffModal from '../Forms/AddStaffModal';
import EditStaffModal from '../Forms/EditStaffModal';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface Staff {
  id: number;
  name: string;
  email: string;
  phone: string;
  department?: string;
  designation?: string;
}

const StaffListPage: React.FC = () => {
  const [staffs, setStaffs] = useState<Staff[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editStaff, setEditStaff] = useState<Staff | null>(null);

  const fetchStaffs = async () => {
    try {
      const res = await axios.get('http://localhost:3000/staff');
      setStaffs(res.data);
    } catch (err) {
      console.error('Error fetching staff list', err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this staff member?')) return;
    try {
      await axios.delete(`http://localhost:3000/staff/${id}`);
      fetchStaffs();
    } catch (err) {
      console.error('Error deleting staff', err);
    }
  };

  useEffect(() => {
    fetchStaffs();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Staff List</h2>
        <Button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setShowAddModal(true)}
        >
          Add Staff
        </Button>
      </div>

      {showAddModal && (
        <AddStaffModal
          onClose={() => setShowAddModal(false)}
          onSuccess={fetchStaffs}
        />
      )}

      {editStaff && (
        <EditStaffModal
          staff={editStaff}
          onClose={() => setEditStaff(null)}
          onSuccess={fetchStaffs}
        />
      )}

      <table className="w-full border mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Department</th>
            <th className="p-2 border">Designation</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody> 
          {staffs.map((staff) => (
            <tr key={staff.id} className="border-t">
              <td className="p-2 border">{staff.name}</td>
              <td className="p-2 border">{staff.email}</td>
              <td className="p-2 border">{staff.phone}</td>
              <td className="p-2 border">{staff.department}</td>
              <td className="p-2 border">{staff.designation}</td>
              <td className="flex p-2 border space-x-2">
                <Button
                  onClick={() => setEditStaff(staff)}
                  className="bg-green-500 text-white px-2 py-4 rounded"
                >
                  <FaEdit style={{ cursor: 'pointer' }} />
                </Button>
                <Button
                  onClick={() => handleDelete(staff.id)}
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

export default StaffListPage;
