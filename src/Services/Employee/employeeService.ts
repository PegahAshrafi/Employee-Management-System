import { api } from "@/lib/axios";
export type Employee = {
  _id: string;
  id: string;
  userId: {
    _id: string;
    email: string;
    role: string;
  };
  user: {
    email: string;
    role: string;
  };
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
  isDeleted: boolean;
  bio: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
export const getEmployees = async (): Promise<Employee[]> => {
  const response = await api.get<Employee[]>("/employees");
  return response.data;
};
