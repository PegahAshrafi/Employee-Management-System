import { api } from "@/lib/axios";

// تعریف ساختار کارمند مطابق پاسخ API
export interface Employee {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  // سایر فیلدهای کارمند در صورت نیاز
}

export interface Payslip {
  id: string; // یا _id
  month: number;
  year: number;
  basicSalary: number;
  allowances: number;
  deductions: number;
  netSalary: number;
  employee: Employee; // داده‌های کارمند 
  employeeId: Employee; // API هر دو را برمی‌گرداند
}

interface PayslipsResponse {
  data: Payslip[];
}

export const getPayslips = async (): Promise<Payslip[]> => {
  const response = await api.get<PayslipsResponse>("/payslips");
  return response.data.data;
};
