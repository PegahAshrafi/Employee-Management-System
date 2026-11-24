import PrimaryButton from "@/app/components/PrimaryButton";
import React from "react";

const Payslips = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-400 mx-auto">
      {/*header:title&buttun*/}
      <div
        className="flex  justify-between gap-4">
        <div className="min-w-0">
          <h1 className="font-bold text-2xl text-slate-900">Payslips</h1>
          <p className="mt-1 text-xs text-slate-500 whitespace-nowrap">
            Generate and manage employee payslips
          </p>
        </div>
        <PrimaryButton
          text="Generate Payslip
        "
        />
      </div>
    </div>
  );
};

export default Payslips;
