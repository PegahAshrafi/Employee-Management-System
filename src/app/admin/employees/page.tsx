"use client"
import React, { use, useState } from 'react'
import AddEmployeeButton from './components/AddEmployeeButton';
import EmployeeForm from './components/EmployeeForm';

const EmployeesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Employees</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your team members</p>
        </div>

        <AddEmployeeButton onclick={()=> setIsModalOpen(true)}/>
          {isModalOpen && <EmployeeForm/>}
      </div>
    </main>
  );
};

export default EmployeesPage;
   