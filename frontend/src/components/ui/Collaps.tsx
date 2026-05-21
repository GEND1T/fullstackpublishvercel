import { useState } from "react";
import { type LucideIcon } from "lucide-react";

interface CollapsProps {
  title: string;
  description?: string;
  variant?: "primary" | "secondary";
  icon: LucideIcon;
}

export const Collaps: React.FC<CollapsProps> = ({
  title,
  description,
  variant = "primary",
  icon: Icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isCollapsible = !!description; 

  const styles = {
    primary: {
      bg: "bg-[#802D43]",
      icon: "text-white",
    },
    secondary: {
      bg: "bg-white",
      icon: "text-[#802D43]",
    },
  };

  const activeStyle = styles[variant];

  return (
    <div className="border-gray-400 border-2 rounded-md shadow-sm border-r-4 border-r-[#802D43] mb-4 overflow-hidden">
      <button
        type="button"
        onClick={isCollapsible ? () => setIsOpen(!isOpen) : undefined}
        className={`w-full flex items-center bg-white transition-all ${
          isCollapsible ? "cursor-pointer hover:bg-gray-50" : "cursor-default"
        }`}
      >
        {/* Icon Box */}
        <div className={`p-4 ${activeStyle.bg} ${activeStyle.icon} flex items-center justify-center min-w-15`}>
          <Icon 
            size={24} 
            className={`transition-transform duration-300 ${
              isCollapsible && isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Judul */}
        <div className="flex-1 px-4 text-left">
          <span className="text-md font-bold text-gray-700">
            {title}
          </span>
        </div>
      </button>

      {isCollapsible && isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      )}
    </div>
  );
};