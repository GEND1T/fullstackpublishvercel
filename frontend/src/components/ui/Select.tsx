import type React from "react";
import { useNavigate } from "react-router-dom";

interface SelectProps {
    label: string;
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: any;
    error?: string;
    options: { label: string; value: string | number }[];
    placeholder?: string;
    // Dua tambahan baru untuk fitur "Tambah Baru"
    addNewPath?: string; 
    addNewLabel?: string; 
}

export const Select: React.FC<SelectProps> = ({
    label,
    name,
    register,
    error,
    options,
    placeholder = "-- Pilih salah satu --",
    addNewPath,
    addNewLabel = "+ Tambah Baru" // Teks default jika tidak diisi
}) => {
    const navigate = useNavigate();

    // Memisahkan onChange bawaan react-hook-form dari properti lainnya
    const { onChange, ...restRegisterProps } = register(name);

    // Fungsi untuk mencegat (intercept) pilihan dropdown
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // Jika user mengklik opsi "Tambah Baru"
        if (e.target.value === "REDIRECT_TO_ADD_NEW" && addNewPath) {
            navigate(addNewPath); // Pindahkan ke halaman create
        } else {
            // Jika memilih opsi normal, teruskan ke react-hook-form
            onChange(e); 
        }
    };

    return (
        <div className="flex flex-col gap-1.5 w-full">
            <label htmlFor={name} className="text-sm font-medium text-gray-700">
                {label}
            </label>

            <div className="relative">
                <select
                    id={name}
                    {...restRegisterProps} // Masukkan name, ref, onBlur (tanpa onChange)
                    onChange={handleChange} // Gunakan custom onChange kita
                    className={`
                        w-full px-4 py-2.5 rounded-lg border bg-white outline-none transition-all duration-200 text-gray-800 cursor-pointer appearance-none pr-10
                        ${error 
                            ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100" 
                            : "border-gray-300 focus:border-red-500 focus:ring-4 focus:ring-red-100 hover:border-gray-400"
                        }
                    `}
                    defaultValue="" 
                >
                    <option value="" disabled hidden className="text-gray-400">
                        {placeholder}
                    </option>
                    
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}

                    {/* Jika addNewPath diberikan, render opsi khusus ini di paling bawah */}
                    {addNewPath && (
                        <option value="REDIRECT_TO_ADD_NEW" className="font-bold text-red-700 bg-red-50">
                            {addNewLabel}
                        </option>
                    )}
                </select>

                <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

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