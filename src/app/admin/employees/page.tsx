"use client";
import React from 'react';
import {useState} from "react";

const EmployeePage = () => {
    const [SearchQuery, setSearchQuery] = useState("");
    const [searchDepartment, setSearchDepartment] = useState("");
  return (
    <div className=" p-8 ">
      <header className="flex justify-between p-5">
        <div className="">
          <h1>Employees</h1>
          <p className="text-slate-400">Manage your team members</p>
        </div>
        <button className="flex rounded-xl round bg-indigo-600 hover:bg-indigo-500 items-center p-2 text-amber-50 gap-2">
          <span className="">+</span>Add Employee
        </button>
      </header>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5">
        <search className="relative  w-full max-w-md">
          <span className="absolute inset-y-0 left-0 pl-3 flex pointer-events-none text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4"
              aria-hidden="true"
            >
              <path d="m21 21-4.34-4.34"></path>
              <circle cx="11" cy="11" r="8"></circle>
            </svg>
          </span>
          <input
            type="text"
            placeholder="search employees..."
            className=" border-xl w-full pl-20 pr-10 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={SearchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </search>
        <div>
          <select
            value={searchDepartment}
            onChange={(e) => setSearchDepartment(e.target.value)}
            className='flex-1'
          >
            <option value="">All Departments</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Finance">Finance</option>
            <option value="Operations">Operations</option>
            <option value="IT Support">IT Support</option>
            <option value="Customer Success">Customer Success</option>
            <option value="Product Management">Product Management</option>
            <option value="Design">Design</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default EmployeePage;