import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { InputText } from '../../../components/ui/InputText';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Button from '../../../components/ui/Button';

// 1. Perluas Schema Zod untuk menangani banyak field
const schema = z.object({
    name: z.string().min(1, "Nama pembicara harus diisi"),
    role: z.string().min(1, "Peran/Role harus diisi"),
    // Optional: Kita buat image opsional, jika tidak diisi bernilai string kosong
    // Kamu juga bisa menggunakan .url("Format URL tidak valid") jika inputnya harus berupa link gambar
    image: z.string().optional().default(""), 
});

type FormData = {
    name: string;
    role: string;
    image?: string; // Make image optional
};

export default function PembicaraCreate() {
    const navigate = useNavigate();
    const [apiError, setApiError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const API_URL = "http://localhost:3000/pembicara";

    const onSubmit = async (data: FormData) => {
        setApiError(null);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // Data sudah terstruktur sesuai field, jadi kita bisa langsung kirim objeknya
                body: JSON.stringify(data), 
            });

            const result = await response.json();

            if (response.ok) {
                navigate("/dashboard/pembicara"); 
            } else {
                setApiError(result.message || "Gagal menyimpan pembicara");
            }
        } catch (error) {
          console.error("Error saat menyimpan pembicara:", error);
            setApiError("Terjadi kesalahan jaringan saat menyimpan data");
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <Link 
                    to="/dashboard/pembicara"
                    className="p-2 text-gray-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Tambah Pembicara Baru</h1>
                    <p className="text-sm text-gray-500 mt-1">Lengkapi profil pembicara untuk event.</p>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                    
                    {apiError && (
                        <div className="p-4 bg-red-50 border-l-4 border-red-600 text-red-700 rounded-md text-sm">
                            {apiError}
                        </div>
                    )}

                    {/* Field 1: Nama Pembicara */}
                    <div>
                        <InputText
                            label="Nama Pembicara"
                            nama="name" 
                            register={register}
                            error={errors.name?.message}
                        />
                    </div>

                    {/* Field 2: Role / Peran */}
                    <div>
                        <InputText
                            label="Role / Jabatan"
                            nama="role" 
                            register={register}
                            error={errors.role?.message}
                        />
                    </div>

                    {/* Field 3: Image URL */}
                    <div>
                        <InputText
                            label="URL Foto Profile (Opsional)"
                            nama="image" 
                            register={register}
                            error={errors.image?.message}
                        />
                    </div>

                    <div className="flex justify-start mt-4">
                        <Button 
                            type="submit" 
                            label={isSubmitting ? "Menyimpan..." : "Simpan Pembicara"} 
                            disabled={isSubmitting}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}