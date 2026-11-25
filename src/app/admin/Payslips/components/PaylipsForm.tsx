import { X } from "lucide-react";
import { LucideIcon } from "lucide-react/types";
import React, { useState } from "react";
interface PaylipsFormProps {
  onClose:() => void;
}
const PaylipsForm = ({onClose}: PaylipsFormProps) => {
  const startYear = 1990;
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => currentYear - i,
  );
  const selectMonth = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div className="relative  w-full max-w-3xl rounded-2xl bg-white p-6 shadow-xl my-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-slate-900">
            Generate Monthly Payslip
          </h3>
          <button
            className="text-slate-400 hover:text-slate-600 p-1"
            type="button"
            onClick={onClose}
          >
            <X />
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Employee
            </label>
            <select name="employeeId" required>
              <option>James Thomas (Marketing)</option>
              <option>Richard Robert (Software Developer)</option>
              <option>David Musk (Software Developer)</option>
              <option>Alex Michael (Associate Business Support)</option>
              <option>John Doe (Senior Software Developer)</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Month
              </label>
              <select name="month">
                {selectMonth.map((month) => (
                  <option key={month}>{month}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Year
              </label>
              <select name="year">
                {years.map((year) => (
                  <option value="2026" key={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Basic Salary
            </label>
            <input
              type="number"
              name="basicSalary"
              placeholder="5000"
              step={1}
              required
            ></input>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Allowances
              </label>
              <input type="number" step={1} name="allowances"></input>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Deductions
              </label>
              <input type="number" step={1} name="deductions"></input>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="">
              Cancel
            </button>
            <button type="submit" className="btn-primary flex items-center">
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaylipsForm;
