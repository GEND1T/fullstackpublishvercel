import type React from "react";

interface InputTextProps {
    label: string;
    nama: string;
    error?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: any; // Menggunakan tipe bawaan react-hook-form
    type?: string; // Tambahan opsional jika butuh input tipe 'password' atau 'email'
    placeholder?: string; // Tambahan opsional untuk custom placeholder
}

export const InputText: React.FC<InputTextProps> = ({
    label,
    nama,
    error,
    register,
    type = "text",
    placeholder,
}) => {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            {/* LABEL */}
            <label htmlFor={nama} className="text-sm font-medium text-gray-700">
                {label}
            </label>
            
            {/* INPUT FIELD */}
            <input
                id={nama}
                type={type}
                {...register(nama)}
                className={`
                    w-full px-4 py-2.5 rounded-lg border bg-white outline-none transition-all duration-200 text-gray-800
                    ${error 
                        ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100" // Warna jika ada error
                        : "border-gray-300 focus:border-red-500 focus:ring-4 focus:ring-red-100 hover:border-gray-400" // Warna normal
                    }
                `}
                placeholder={placeholder || `Masukkan ${label.toLowerCase()}...`}
            />
            
            {/* ERROR MESSAGE DENGAN ICON */}
            {error && (
                <div className="flex items-center gap-1.5 mt-0.5 text-red-500 text-xs font-medium">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{error}</span>
                </div>
            )}
        </div>
    );
};