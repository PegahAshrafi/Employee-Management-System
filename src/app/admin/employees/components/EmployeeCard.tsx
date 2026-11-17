import { on } from "events";
import React from "react";
type EmployeeCard = {
  id: string;
  name: string;
  department: string;
  position: string;
};
type EmployeeCardProps = {
  employee: EmployeeCard;
  onEdit: (employee: EmployeeCard) => void;
  onDelete: (employee: EmployeeCard) => void;
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
  const initials = getInitials(EmployeeCard.name);
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white">
      <div className="relative flex h-64 items-center justify-center bg-slate-50">
        <span className="flex h-24 w-24 items-center justify-center rounded-full bg-violet-100 text-2xl text-violet-500">
          {initials}
        </span>
        <div>
          <button
            type="button"
            onClick={() => onEdit}
            className="rounded-md bg-white px-3 py-2 text-sm shadow hover:bg-slate-100"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => onDelete}
            className="rounded-md bg-white px-3 py-2 text-sm text-red-600 shadow hover:bg-red-50"
          >
            Delete
          </button>
        </div>
        <span className="absolute left-4 top-4 rounded-md bg-white px-3 py-1 text-sm shadow-sm">
          {employee.department}
        </span>
      </div>

      <div className="p-5">
        <h2 className="font-medium text-slate-900">{employee.name}</h2>
        <p className="mt-1 text-sm text-slate-500">{employee.position}</p>
      </div>
    </article>
  );
};

export default EmployeeCard;
