import { X } from "lucide-react";
import React, { useState } from "react";

const EmployeeForm = () => {
    const [isEdit,setIsEdit] = useState(false);
  
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
                : "Create a user account and employee profile"}{" "}
            </h3>
          </div>
          <button
            type="button"
            // onClick={}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
