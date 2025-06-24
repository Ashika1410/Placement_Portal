import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddStudentModal from '../Forms/AddStudentModal';
import EditStudentModal from '../Forms/EditStudentModal';
import Button from '../../components/ui/button/Button';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  registerNumber: string;
  department: string;
  batch: string;
  year: number;
  resumeUrl?: string;
  Cgpa?: Float32Array;
  skills?: string; 
}

const StudentListPage: React.FC = () => { 
  const [students, setStudents] = useState<Student[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editStudent, setEditStudent] = useState<Student | null>(null);

  const fetchStudents = async () => {
    try {
      const res = await axios.get('http://localhost:3000/student');
      setStudents(res.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this student?')) return;
    try {
      await axios.delete(`http://localhost:3000/student/${id}`);
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Student List</h2>
        <Button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setShowAddModal(true)}
        >
          Add Student
        </Button>
      </div>

      {showAddModal && (
        <AddStudentModal
          onClose={() => setShowAddModal(false)}
          onSuccess={() => {
            fetchStudents();
            setShowAddModal(false);
          }}
        />
      )}

      {editStudent && (
        <EditStudentModal
          student={editStudent}
          onClose={() => setEditStudent(null)}
          onSuccess={() => {
            fetchStudents();
            setEditStudent(null);
          }}
        />
      )}

      <table className="w-full border mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Register Number</th>
            <th className="p-2 border">Department</th>
            <th className="p-2 border">Batch</th>
            <th className="p-2 border">Year</th>
            <th className="p-2 border">Resume Url</th>
            <th className="p-2 border">CGPA</th>
            <th className="p-2 border">Skills</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-t">
              <td className="p-2 border">{student.name}</td>
              <td className="p-2 border">{student.email}</td>
              <td className="p-2 border">{student.phone}</td>
              <td className="p-2 border">{student.registerNumber}</td>
              <td className="p-2 border">{student.department}</td>
              <td className="p-2 border">{student.batch}</td>
              <td className="p-2 border">{student.year}</td>
              <td className="p-2 border">{student.resumeUrl}</td>
              <td className="p-2 border">{student.Cgpa}</td>
              <td className="p-2 border">{student.skills}</td>
              <td className="p-2 border space-x-2">
               <Button
                  onClick={() => setEditStudent(student)}
                  className="bg-green-500 text-white px-2 py-4 rounded"
                >
                  <FaEdit style={{ cursor: 'pointer' }} />
                </Button>
                <Button
                  onClick={() => handleDelete(student.id)}
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

export default StudentListPage;
