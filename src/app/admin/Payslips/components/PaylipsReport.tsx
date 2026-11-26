"use client";
import { getPayslips } from "@/Services/Paylips/PaylipsServices";
import { useQuery } from "@tanstack/react-query";
import React from "react";

type PaylipsReportProps = {
  id: string;
};
const PaylipsReport = ({ id }: PaylipsReportProps) => {
  const { data: Payslips = [] } = useQuery({
    queryKey: ["item"],
    queryFn: getPayslips,
  });

  const item = Payslips.find((payslip) => String(payslip.id) === id);

  // if (!item) {
  //   return <p>فیشی با این شناسه پیدا نشد.</p>;
  // }
  return (
    <div>
      <div>
        {Payslips.map((item) => (
          <div key={item.id}>
            <h1>PAYSLIP</h1>
            <p>
              {item.month}/{item.year}
            </p>
            <span className="hpx text-black w-100"></span>
            <div>
              <div>
                <p>Employee Name</p>
                {item.employee?.firstName}/{item.employee?.lastName}
              </div>
              <div>
                <div>
                  <p>POSITION</p>
                  {item.position}
                </div>
                <div>
                  <p>EMAIL</p>
                  {item.email}
                </div>
                <div>
                  <p>PERIOD</p>
                  {item.month}/{item.year}
                </div>
                <table className="border rounded-2xl ">
                  <thead>
                    <tr>
                      <td>DESCRIPTION</td>
                      <td>AMOUNT</td>
                    </tr>
                  </thead>
                  <tr></tr>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaylipsReport;
