"use client";
import React, { useState } from "react";
import PrimaryButton from "./components/PrimaryButton";
import EmployeeCard from "./components/EmployeeCard";
import EmployeeForm from "./components/EmployeeForm";
import { ChevronDown, Key, Search } from "lucide-react";
import {useQuery } from "@tanstack/react-query";
import { getEmployees } from "@/Services/Employee/employeeService";


const EmployeesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
const {
  data: employees,
  isLoading,
  isError,
} = useQuery({
  queryKey: ["employees"],
  queryFn: getEmployees,
});
console.log({ employees, isLoading, isError });
if (isLoading) return <p>در حال بارگذاری کارمندان...</p>;
if (isError) return <p>گرفتن فهرست کارمندان ناموفق بود.</p>;
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Employees</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your team members</p>
        </div>
        <>
          <PrimaryButton
            text={"Add Employee"}
            onClick={() => setIsModalOpen(true)}
          ></PrimaryButton>
          <EmployeeForm
            isopen={isModalOpen}
            onclose={() => setIsModalOpen(false)}
            isEdit={false}
          />
        </>
      </div>
      <div className="flex items-center gap-4 w-full">
        {/* Search Input Box */}
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Departments Filter Button */}
        <select className="flex items-center justify-between gap-3 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 focus:outline-none">
          <ChevronDown size={16} />
          <option value="">Select Department</option>
          <option value="">Engineering</option>
          <option value="">Human Resources</option>
          <option value="">Marketing</option>
          <option value="">Sales</option>
          <option value="">Finance</option>
          <option value="">Operations</option>
          <option value="">Customer Success</option>
          <option value="">Product Management</option>
          <option value="">Design</option>
        </select>
        {/* employee cards */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {employees?.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={{
              id: employee._id,
              name: `${employee.firstName} ${employee.lastName}`,
              department: employee.department,
              position: employee.position,
            }}
            onEdit={(employee) => console.log("ویرایش:", employee)}
            onDelete={(employee) => console.log("حذف:", employee)}
          />
        ))}
      </div>
    </main>
  );
};

export default EmployeesPage;
