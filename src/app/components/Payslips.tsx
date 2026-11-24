'use client'
import { getPayslips } from "@/Services/Paylips/PaylipsServices";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Payslips = () => {
  const {
    data: payslips,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["payslips"],
    queryFn: getPayslips,
  });
  if (isPending) {
    return <div className="p-8">Loading payslips...</div>;
  }

  if (isError) {
    return (
      <div className="p-8 text-red-600">
        {error instanceof Error ? error.message : "Failed to load payslips"}
      </div>
    );
  }
  return <div>Payslips</div>;
};

export default Payslips;
