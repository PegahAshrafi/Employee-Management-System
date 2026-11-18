import { api } from "@/lib/axios";
export type Employee = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  basicSalary: number;
  allowances: number;
  deductions: number;
  employmentStatus: string;
  joinDate: string;
  bio: string;
};
export const getEmployees = async (): Promise<Employee[]> => {
  const response = await api.get<Employee[]>("/employees");
  return response.data;
};