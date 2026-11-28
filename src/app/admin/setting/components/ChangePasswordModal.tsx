"use client";

import React, { useState } from "react";
import { X, Lock, Eye, EyeOff } from "lucide-react";

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // اگر مودال باز نبود، چیزی رندر نشود
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // در مرحله بعد لاجیک ارسال به سرور را می‌گذاریم
    console.log({ currentPassword, newPassword, confirmPassword });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        {/* Header مودال */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 font-semibold text-slate-800">
            <Lock size={18} className="text-[#615fff]" />
            Change Password
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* فرم */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {/* Current Password */}
          <div className="grid gap-1">
            <label className="text-sm font-medium text-slate-600">
              Current Password
            </label>
            <input
              type="password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="••••••••"
              className="rounded-xl border border-slate-200 p-2.5 text-sm outline-none focus:border-[#615fff]"
            />
          </div>

          {/* New Password */}
          <div className="grid gap-1">
            <label className="text-sm font-medium text-slate-600">
              New Password
            </label>
            <input
              type="password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="••••••••"
              className="rounded-xl border border-slate-200 p-2.5 text-sm outline-none focus:border-[#615fff]"
            />
          </div>

          {/* Confirm Password */}
          <div className="grid gap-1">
            <label className="text-sm font-medium text-slate-600">
              Confirm New Password
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="rounded-xl border border-slate-200 p-2.5 text-sm outline-none focus:border-[#615fff]"
            />
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-[#615fff] px-4 py-2 text-sm text-white hover:bg-[#504ee0] transition"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
