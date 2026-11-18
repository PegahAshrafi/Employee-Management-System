"use client";
import React, { useState } from "react";
import PrimaryButton from "./components/PrimaryButton";
import EmployeeForm from "./components/EmployeeForm";

const EmployeesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Employees</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your team members</p>
        </div>
<>
        <PrimaryButton text={"Add Employee"} onClick={() => setIsModalOpen(true)}>
         
        </PrimaryButton>
         <EmployeeForm
            isopen={isModalOpen}
            onclose={() => setIsModalOpen(false)}
            isEdit={false}
          />
        </>
      </div>
    </main>
  );
};

export default EmployeesPage;
