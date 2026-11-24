
import { api } from "@/lib/axios";
export interface Payslip {
  id: string;
  employeeId: string;
  month: number;
  year: number;
  basicSalary: number;
  allowances: number;
  deductions: number;
  netSalary: number;
  employee: {
    firstName: string;
    lastName: string;
  };
}

interface PayslipsResponse {
  data: Payslip[];
}

export const getPayslips = async (): Promise<Payslip[]> => {
  const response = await api.get<PayslipsResponse>("/payslips");

  return response.data.data;
};