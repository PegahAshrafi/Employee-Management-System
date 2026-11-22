import { getEmployees } from "@/Services/Employee/employeeService";
import { on } from "events";
import { Key } from "lucide-react";
import React, { useState } from "react";
type EmployeeCardData = {
  id: string;
  name: string;
  department: string;
  position: string;
};
type EmployeeCardProps = {
  employee: EmployeeCardData;
  onEdit: (employee: EmployeeCardData) => void;
  onDelete: (employee: EmployeeCardData) => void;
};
const getInitials = (name: string) => {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
};
const EmployeeCard = ({ employee, onEdit, onDelete }: EmployeeCardProps) => {
  const initials = getInitials(employee.name);
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-slate-50 sm:h-52 lg:h-56">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-lg text-violet-500 transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20 sm:text-xl">
          {initials}
        </span>

        <div className="absolute inset-0 flex items-end justify-center gap-2 bg-linear-to-t from-indigo-700/25 via-transparent to-transparent pb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:gap-3 sm:pb-5">
          <button
            type="button"
            onClick={() => onEdit(employee)}
            className="rounded-md bg-white px-2.5 py-1.5 text-xs text-slate-700 shadow-md transition-all hover:scale-105 hover:bg-slate-100 hover:text-indigo-600 sm:px-3 sm:py-2 sm:text-sm"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => onDelete(employee)}
            className="rounded-md bg-white px-2.5 py-1.5 text-xs text-slate-700 shadow-md transition-all hover:scale-105 hover:bg-red-50 hover:text-red-600 sm:px-3 sm:py-2 sm:text-sm">
            Delete
          </button>
        </div>
        <span className="absolute left-2 top-2 max-w-[calc(100%-1rem)] truncate rounded-md bg-white px-2 py-1 text-[11px] text-slate-600 shadow-sm sm:left-3 sm:top-3 sm:px-3 sm:text-xs">
          {employee.department}
        </span>
      </div>
      <div className="p-3 sm:p-4">
        <h2 className="truncate text-sm font-medium text-slate-900 sm:text-base">
          {employee.name}
        </h2>
        <p className="mt-1 truncate text-xs text-slate-500 sm:text-sm">
          {employee.position}
        </p>
      </div>
    </article>
  );
};

export default EmployeeCard;
