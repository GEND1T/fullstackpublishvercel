import type React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    variant?: "primary" | "secondary";
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    label,
    variant = "primary",
    type = "button",
    isLoading = false,
    onClick,
    disabled,
    className = "",
    ...props
}) => {
    const baseStyle = "relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 outline-none active:scale-95 disabled:opacity-65 disabled:cursor-not-allowed disabled:active:scale-100";
    
    // Warna diubah menyesuaikan tema sidebar (red-700 dan red-800)
    const varianStyle = {
        primary: "bg-red-700 text-white hover:bg-red-800 shadow-sm hover:shadow focus:ring-4 focus:ring-red-200",
        secondary: "bg-transparent border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:ring-red-200"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isLoading || disabled}
            className={`${baseStyle} ${varianStyle[variant]} ${className}`}
            {...props}
        >
            {isLoading ? (
                <>
                    <svg className="animate-spin h-5 w-5 text-current" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Memproses...
                </>
            ) : (
                label
            )}
        </button>
    );
};

export default Button;