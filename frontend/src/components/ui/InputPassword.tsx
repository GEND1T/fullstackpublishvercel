import type React from "react";
import { useState } from "react";


interface InputPasswordProps{
    label:string;
    nama:string;
    error?:string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register:any;
}

export const InputPassword: React.FC <InputPasswordProps> = ({
    label,
    nama,
    error,
    register,
}) => {

    const [show, setShow] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-1 mb-4">
            <label htmlFor={label}>{label}</label>

            <div className="relative">
                <input
                    type={show ? "text" : "password"}
                    {...register(nama)}className={`
                        w-full px-4 py-2.5 rounded-lg border bg-white outline-none transition-all duration-200 text-gray-800
                        ${error 
                            ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100" // Warna jika ada error
                            : "border-gray-300 focus:border-red-500 focus:ring-4 focus:ring-red-100 hover:border-gray-400" // Warna normal
                        }
                    `}
                    placeholder={label}
                />

                <button type="button" onClick={() => setShow(!show)} className="absolute right-2 top-2 text-sm">
                    {show ? "Hide" : "show"}
                </button>
            </div>

            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};