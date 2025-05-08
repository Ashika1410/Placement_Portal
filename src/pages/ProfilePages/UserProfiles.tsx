import React from 'react';
import StudentProfile from '../../components/ProfileLayouts/StudentProfile';
import StaffProfile from '../../components/ProfileLayouts/StaffProfile';
import AdminProfile from '../../components/ProfileLayouts/AdminProfile';

const loggedInUser = {
  name: 'John Doe',
  role: 'admin' as 'student' | 'staff' | 'admin',
};

const UserProfiles: React.FC = () => {
  const { role } = loggedInUser;

  const renderProfileLayout = () => {
    switch (role) {
      case 'student':
        return <StudentProfile />;
      case 'staff':
        return <StaffProfile />;
      case 'admin':
        return <AdminProfile />;
      default:
        return <p>Invalid role</p>;
    }
  };

  return (
    <div className="container mx-auto mt-10">
      {renderProfileLayout()}
    </div>
  );
};

export default UserProfiles;

