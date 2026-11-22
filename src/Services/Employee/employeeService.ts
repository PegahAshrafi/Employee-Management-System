import { api } from "@/lib/axios";
export type TEmployee = {
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
  __v: number;};
export type employeeEditFormData = {
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
  bio: string;
  __v: number;
};
export const getEmployees = async (): Promise<TEmployee[]> => {
  const response = await api.get<TEmployee[]>("/employees");
  return response.data;
};
