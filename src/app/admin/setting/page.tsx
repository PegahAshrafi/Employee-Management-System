"use client";

import React, { useEffect, useState } from "react";
import ChangePasswordModal from "./components/ChangePasswordModal";
import { LockIcon, Save, User2Icon } from "lucide-react";
import { getEmployees } from "@/Services/Employee/employeeService";

interface StoredUser {
  userId: string;
  email: string;
  role: string;
}

const SettingsPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
const [isPasswordModalOpen, setIsPasswordModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        const currentUser: StoredUser | null = storedUser
          ? JSON.parse(storedUser)
          : null;

        const employees = await getEmployees();

        // پیدا کردن کارمند مطابق با کاربر وارد شده
        const currentEmployee = employees.find(
          (emp) =>
            emp.email === currentUser?.email ||
            emp.userId?._id === currentUser?.userId,
        );

        if (currentEmployee) {
          setName(
            `${currentEmployee.firstName || ""} ${currentEmployee.lastName || ""}`.trim(),
          );
          setEmail(currentEmployee.email || "");
          setPosition(currentEmployee.position || "");
          setBio(currentEmployee.bio || "");
        } else if (currentUser) {
          setEmail(currentUser.email);
          setName(currentUser.role);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="p-3">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-xl font-bold">Settings</h1>
        <p className="text-slate-400 text-xs">
          Manage your account and preferences
        </p>
      </div>

      {/* Public Profile Card */}
      <div className="border rounded-xl p-4 border-slate-200 bg-white">
        <div className="flex items-center gap-2 mb-4 font-semibold text-slate-700">
          <User2Icon size={18} className="text-slate-400" />
          Public Profile
        </div>

        {isLoading ? (
          <p className="text-sm text-slate-400">Loading profile...</p>
        ) : (
          <div className="space-y-4">
            {/* Name & Email (غیرقابل ویرایش) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-1">
                <label className="text-sm font-medium text-slate-600">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  readOnly
                  disabled
                  className="border rounded-xl p-2 bg-slate-100 text-slate-500 cursor-not-allowed outline-none border-slate-200"
                />
              </div>

              <div className="grid gap-1">
                <label className="text-sm font-medium text-slate-600">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  readOnly
                  disabled
                  className="border rounded-xl p-2 bg-slate-100 text-slate-500 cursor-not-allowed outline-none border-slate-200"
                />
              </div>
            </div>

            {/* Position */}
            <div className="grid gap-1">
              <label className="text-sm font-medium text-slate-600">
                Position
              </label>
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="Software Engineer"
                className="border rounded-xl p-2 border-slate-200 outline-none focus:border-indigo-500"
              />
            </div>

            {/* Bio */}
            <div className="grid gap-1">
              <label className="text-sm font-medium text-slate-600">Bio</label>
              <input
                type="text"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Write a brief bio..."
                className="border rounded-xl p-2 border-slate-200 outline-none focus:border-indigo-500"
              />
              <p className="text-xs text-slate-400">
                This will be displayed on your profile.
              </p>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                type="button"
                className="flex items-center gap-2 border rounded-xl px-4 py-2 text-white bg-[#615fff] hover:bg-[#504ee0] transition"
              >
                <Save size={18} />
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Password Section */}
      <div className="flex items-center justify-between border rounded-xl mt-4 p-4 border-slate-200 bg-white">
        <div className="flex items-center gap-3">
          <div className="border rounded-xl p-2 border-slate-200 text-slate-600 bg-slate-50">
            <LockIcon size={20} />
          </div>
          <div>
            <p className="font-semibold text-slate-800 text-sm">Password</p>
            <p className="text-xs text-slate-400">
              Update your account password
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsPasswordModalOpen(true)}
          className="border rounded-xl px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 border-slate-200 transition"
        >
          Change
        </button>
      </div>

      <ChangePasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
      />
    </div>
  );
};

export default SettingsPage;
