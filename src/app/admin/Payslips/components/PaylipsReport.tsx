"use client";
import { getPayslips } from "@/Services/Paylips/PaylipsServices";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const Payslip = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: payslips,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Payslips"],
    queryFn: getPayslips,
  });
  console.log("ID داخل URL:", id);
  console.log(
    "ID فیش‌ها:",
    payslips?.map((item) => item.id),
  );
  const payslip = payslips?.find((item) => item.id === id);
  return (
    <>
      {payslip && (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
          <div className="max-w-2xl rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
            <div className="text-center">
              <h1 className="text-xl font-bold tracking-wider text-slate-800">
                PAYSLIP
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {payslip.month}
                {payslip.year}
              </p>
            </div>

            <hr className="my-6 border-gray-200" />

            <div className="grid grid-cols-2 gap-y-6 text-sm">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Employee Name
                </p>
                <p className="font-semibold text-slate-700 mt-1">
                  {payslip.employee.firstName}
                  {payslip.employee.lastName}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Position
                </p>
                <p className="font-semibold text-slate-700 mt-1">
                  {payslip.employee.position}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Email
                </p>
                <p className="font-semibold text-slate-700 mt-1">
                  {payslip.employee.email}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Period
                </p>
                <p className="font-semibold text-slate-700 mt-1">
                  {payslip.month}
                  {payslip.year}
                </p>
              </div>
            </div>
            <div className="mt-8 overflow-hidden rounded-xl border border-gray-200">
              <div className="flex justify-between bg-gray-50 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-200">
                <span>Description</span>
                <span>Amount</span>
              </div>
              <div className="divide-y divide-gray-100 text-sm">
                <div className="flex justify-between px-6 py-4">
                  <span className="text-slate-600">Basic Salary</span>
                  <span className="font-medium text-slate-800">$1,000</span>
                </div>
                <div className="flex justify-between px-6 py-4">
                  <span className="text-slate-600">Allowances</span>
                  <span className="font-medium text-emerald-600">
                    {payslip.allowances}
                  </span>
                </div>
                <div className="flex justify-between px-6 py-4">
                  <span className="text-slate-600">Deductions</span>
                  <span className="font-medium text-rose-600">
                    {payslip.deductions}
                  </span>
                </div>
              </div>
              <div className="flex justify-between bg-gray-50 px-6 py-4 text-base font-bold text-slate-800 border-t border-gray-200">
                <span>Net Salary</span>
                <span>{payslip.netSalary}</span>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => window.print()}
                className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-700 active:scale-95"
              >
                Print Payslip
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Payslip;
