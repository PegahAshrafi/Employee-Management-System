import { Building2, CalendarCheck, FileText, User, Users } from "lucide-react";
import React from "react";
export const instant = false;
const stats = [
  { title: "Total Employees", value: 5, icon: Users },
  { title: "Departments", value: 10, icon: Building2 },
  { title: "Today's Attendance", value: 0, icon: CalendarCheck },
  { title: "Pending Leaves", value: 0, icon: FileText },
];
const DashboardPage = () => {
  return (
    <div className="p-5">
      <header>
        <h1 className="text-xl font-semibold text-slate-900">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-500">
          Welcome back, Admin — here's your overview
        </p>
      </header>
      <section className="grid mt-10 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 shadow-sm  ">
        {stats.map(({ title, value, icon: Icon }) => (
          <div
            key={title}
            className="flex justify-between items-center border rounded-xl border-slate-100 border-l-4 bg-white p-5 "
          >
            <div className="p-2">
              <p className="text-sm text-slate-500">{title}</p>
              <h2 className="mt-1 text-2xl font-bold text-slate-800">
                {value}
              </h2>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
              <Icon className="h-5 w-5" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
export default DashboardPage;
