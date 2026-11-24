"use client";
import { getPayslips, Payslip } from "@/Services/Paylips/PaylipsServices";
import { useQuery } from "@tanstack/react-query";
import PrimaryButton from "./PrimaryButton";
import { Download, Plus } from "lucide-react";

const formatPeriod = (month: number, year: number) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, 1)));
};
//  برای سه رقم سه رقم جدا کردن مبالغ حقوق
const formatSalary = (amount: number) => {
  return amount.toLocaleString("en-US");
};
const Payslips = () => {
  const {
    data: Paylips = [],
    isPending,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["paylips"],
    queryFn: getPayslips,
  });

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-slate-500 text-sm">Paylips are loading...</p>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-rose-500 text-sm">Error..</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex  gap-4 sm:flex-row sm:justify-between  flex-col justify-between items-start sm:items-center  mb-8">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Payslips</h1>
          <p className="text-xs text-slate-500 sm:text-sm">
            Manage and view employee payslips
          </p>
        </div>
        <PrimaryButton
          text="Generate Paylips"
          icon={Plus}
          aria-hidden="true"
          className="inline-flex items-center gap-2 whitespace-nowrap"
        />
      </div>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            {/* سرستون‌های جدول */}
            <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase text-slate-500">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Employee
                </th>
                <th scope="col" className="px-6 py-4">
                  Period
                </th>
                <th scope="col" className="px-6 py-4">
                  Basic Salary
                </th>
                <th scope="col" className="px-6 py-4">
                  Allowances
                </th>
                <th scope="col" className="px-6 py-4">
                  Deductions
                </th>
                <th scope="col" className="px-6 py-4">
                  Net Salary
                </th>
                <th scope="col" className="px-6 py-4 text-center">
                  Action
                </th>
              </tr>
            </thead>

            {/* سطرهای داینامیک جدول */}
            <tbody className="divide-y divide-slate-100">
              {Paylips.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-8 text-center text-slate-400"
                  >
                    No payslips found.
                  </td>
                </tr>
              ) : (
                Paylips.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">
                      {item.employee
                        ? `${item.employee.firstName} ${item.employee.lastName}`
                        : `Employee #${item.employeeId}`}
                    </td>

                    {/* دوره ماه و سال با استفاده از تابع کمکی */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      {formatPeriod(item.month, item.year)}
                    </td>

                    {/* حقوق پایه */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      ${formatSalary(item.basicSalary)}
                    </td>

                    {/* مزایا */}
                    <td className="px-6 py-4 whitespace-nowrap text-emerald-600">
                      +${formatSalary(item.allowances)}
                    </td>

                    {/* کسورات */}
                    <td className="px-6 py-4 whitespace-nowrap text-rose-600">
                      -${formatSalary(item.deductions)}
                    </td>

                    {/* خالص پرداختی */}
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-slate-900">
                      ${formatSalary(item.netSalary)}
                    </td>

                    {/* دکمه دانلود فیش */}
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <button
                        title="Download Payslip"
                        className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payslips;
