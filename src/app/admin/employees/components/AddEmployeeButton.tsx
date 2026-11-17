import { Plus, PlusIcon } from "lucide-react";
import React from "react";
type AddEmployeeButtonProps = {
  onclick: () => void;
};
const AddEmployeeButton = ({ onclick }: AddEmployeeButtonProps) => {
  return (
    <button
      type="button"
      onClick={onclick}
      className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-5 py-3 text-sm font-medium text-white hover:bg-violet-700"
    >
      <PlusIcon className="w-5 h-5" />
      Add Employee
    </button>
  );
};

export default AddEmployeeButton;
