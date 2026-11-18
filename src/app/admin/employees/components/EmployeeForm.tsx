import { X } from "lucide-react";
import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
interface EmployeeFormProps {
  isopen: boolean;
  onclose: () => void;
  mode: "add" | "edit";
  isEdit: boolean;
}
const EmployeeForm = ({ isopen, onclose, mode,isEdit }: EmployeeFormProps) => {
  if (!isopen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl bg-white p-6 shadow-xl my-8">
        {/* header */}
        <div className="flex items-start justify-between border-b pb-4 mb-6">
          <div>
            <h2>{isEdit ? "Edit Employee" : "Add New Employee"}</h2>
            <h3>
              {isEdit
                ? "Update employee details"
                : "Create a user account and employee profile"}
            </h3>
          </div>
          <button
            type="button"
            onClick={onclose}
            className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
          {/* body form */}
          <form className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
            <div className="rounded-xl border border-gray-200 p-4 space-y-4">
              <h3 className="text-sm font-semibold text-gray-800">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Join Date
                  </label>
                  <input
                    type="text"
                    placeholder="mm/dd/yyyy"
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Bio (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Brief description..."
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
            {/* Employee info */}
            <div className="rounded-xl border border-gray-200 p-4 space-y-4">
              <h3 className="text-sm font-semibold text-gray-800">
                Employment Details
              </h3>
              <div className="rounded-xl border border-gray-200 p-4 space-y-4">
                <label className="block text-xs font-medium text-gray-600 ">
                  Department
                  <select className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 mt-1">
                    <option value="">Select Department</option>
                    <option value="">All Departments</option>
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
                </label>
              </div>
              <div className="rounded-xl border border-gray-200 p-4 space-y-4">
                <label className="block text-xs font-medium text-gray-600 ">
                  Position
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 mt-1"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Basic Salary
                </label>
                <div className="relative ">
                  <input
                    type="number"
                    defaultValue={0}
                    step={500}
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 ml-2"
                  />
                  <span className=" pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-sm text-gray-500 ">
                    $
                  </span>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Allowances
                  </label>
                  <input
                    type="number"
                    defaultValue={0}
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Deductions
                  </label>
                  <input
                    type="number"
                    defaultValue={0}
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                {/* ststus filed in edit section */}
                {/*  Account Setup */}
                <div className="rounded-xl border border-gray-200 p-4 space-y-4">
                  <h3 className="text-sm font-semibold text-gray-800">
                    Account Setup
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        placeholder="Work Email"
                        className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        {isEdit
                          ? "Change Password (Optional)"
                          : "Temporary Password"}
                      </label>
                      <input
                        type="password"
                        placeholder={
                          isEdit
                            ? "Leave blank to keep current"
                            : "Temporary Password"
                        }
                        className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        System Role
                      </label>
                      <select className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm bg-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                        <option value="employee">Employee</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* دکمه‌های فوتر مودال */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onclose}
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors"
                  >
                    {isEdit ? "Update Employee" : "Create Employee"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
