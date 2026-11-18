import { LucideIcon, Plus, PlusIcon } from "lucide-react";
import React from "react";
type PrimaryButtonProps = {
  text: string;
  onClick?: () => void;
  icon?: LucideIcon;
  type?: "button" | "submit";
  className?: string;
};
const PrimaryButton = ({
  text,
  onClick,
  type = "button",
  icon:Icon,
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-5 py-3 text-sm font-medium text-white hover:bg-violet-700"
    >
      {Icon && <Icon size={16} />}
      <span>{text}</span>
    </button>
  );
};

export default PrimaryButton;
