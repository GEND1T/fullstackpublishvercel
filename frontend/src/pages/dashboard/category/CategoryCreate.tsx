import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { InputText } from '../../../components/ui/InputText';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Button from '../../../components/ui/Button';

// Schema Zod untuk validasi
const schema = z.object({
    category: z.string().min(1, "Nama Category harus diisi"),
});

// Infer tipe dari schema Zod agar tidak perlu menulis ulang manual
type FormData = z.infer<typeof schema>;

export default function CategoryCreate() {
    const navigate = useNavigate();
    const [apiError, setApiError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const API_URL = "https://fullstackpublishvercel.vercel.app/categories";

    // Fungsi onSubmit sekarang diletakkan di dalam agar memiliki akses ke 'navigate' dan state
    const onSubmit = async (data: FormData) => {
        setApiError(null); // Reset error saat mulai submit

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // Ingat: backend kita mengharapkan { name: "..." }, 
                // jadi kita mapping data.category dari form menjadi 'name'
                body: JSON.stringify({ name: data.category }), 
            });

            const result = await response.json();

            if (response.ok) {
                navigate("/dashboard/category"); // Langsung kembali ke list jika sukses
            } else {
                setApiError(result.message || "Gagal menyimpan kategori");
            }
        } catch (error) {
          console.error("Error saat menyimpan kategori:", error);
            setApiError("Terjadi kesalahan jaringan saat menyimpan data");
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto flex flex-col gap-6">
            {/* Header dengan tombol kembali */}
            <div className="flex items-center gap-4">
                <Link 
                    to="/dashboard/category"
                    className="p-2 text-gray-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Tambah Kategori Baru</h1>
                    <p className="text-sm text-gray-500 mt-1">Gunakan form di bawah untuk menambah kategori.</p>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                    
                    {/* Alert jika terjadi error dari Backend */}
                    {apiError && (
                        <div className="p-4 bg-red-50 border-l-4 border-red-600 text-red-700 rounded-md text-sm">
                            {apiError}
                        </div>
                    )}

                    {/* Input Nama */}
                    <div>
                        {/* 
                            Catatan: Pastikan prop di komponen InputText kamu benar 'nama="category"'. 
                            Jika di dalam komponen menggunakan 'name', kamu mungkin perlu mengubahnya menjadi 'name="category"'. 
                        */}
                        <InputText
                            label="Nama Kategori"
                            nama="category" 
                            register={register}
                            error={errors.category?.message}
                        />
                    </div>

                    {/* Tombol Simpan */}
                    <div className="flex justify-start mt-4 ">
                        {/* 
                            Kita manfaatkan state 'isSubmitting' dari react-hook-form 
                            untuk mengubah label tombol dan menonaktifkannya saat proses fetch.
                            Pastikan komponen <Button> kamu mendukung prop 'disabled'.
                        */}
                        <Button 
                            type="submit" 
                            label={isSubmitting ? "Menyimpan..." : "Simpan"} 
                            disabled={isSubmitting}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}