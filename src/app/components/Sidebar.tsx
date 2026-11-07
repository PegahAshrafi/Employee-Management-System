"use client";
import { Component, Icon } from "lucide-react";
import icon from "lucide-react/icons/";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentType } from "react";
const menuItems = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: (
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
        className="lucide lucide-layout-grid w-[17px] h-[17px] shrink-0 text-indigo-300"
        aria-hidden="true"
      >
        <rect width="7" height="7" x="3" y="3" rx="1"></rect>
        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
      </svg>
    ),
  },
  {
    name: "Employee",
    href: "/admin/Employee",
    icon: (
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
        className="lucide lucide-user w-[17px] h-[17px] shrink-0 text-indigo-300"
        aria-hidden="true"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  },
  {
    name: "Leave",
    href: "/admin/Leave",
    icon: (
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
        className="lucide lucide-file-text w-[17px] h-[17px] shrink-0 text-slate-400 group-hover:text-slate-300"
        aria-hidden="true"
      >
        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
        <path d="M10 9H8"></path>
        <path d="M16 13H8"></path>
        <path d="M16 17H8"></path>
      </svg>
    ),
  },

  {
    name: "Payslips",
    href: "/admin/Payslips",
    icon: (
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
        className="lucide lucide-dollar-sign w-[17px] h-[17px] shrink-0 text-slate-400 group-hover:text-slate-300"
        aria-hidden="true"
      >
        <line x1="12" x2="12" y1="2" y2="22"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  },
  {
    name: "Settings",
    href: "/admin/Settings",
    icon: (
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
        className="lucide lucide-settings w-[17px] h-[17px] shrink-0 text-slate-400 group-hover:text-slate-300"
        aria-hidden="true"
      >
        <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="bg-[#020618] flex flex-col w-64 text-slate-300 min-h-screen border-r border-slate-800">
      <div className="p-4 ">
        <div className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user text-white size-7"
            aria-hidden="true"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <div>
            <p>Employee MS</p>
            <p>Management System</p>
          </div>
        </div>
      </div>
      <div className="border-b border-slate-800"></div>
      {/* ....... */}
      <div className="bg-white/5 border w-60 h-18 m-2 border-slate-800 rounded-2xl ">
        <div className="flex gap-3 pt-3 ">
          <div className="border w-10 h-10 ml-2 text-2xl border-slate-800 rounded-2xl font-bold flex justify-center items-center text-slate-700 ">
            A
          </div>
          <div>
            <p>Admin</p>
            <p>Administrator</p>
          </div>
        </div>
      </div>
      {/* .... */}
      <div className="px-2 font-semibold text-slate-500 text-[10px]">
        Navigation
      </div>
      <nav className="space-y-1 px-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const IconComponent = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30"
                  : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
