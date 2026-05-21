import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { z } from "zod";
import { InputText } from '../../../components/ui/InputText';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Button from '../../../components/ui/Button';

// 1. Schema Zod (sama persis dengan halaman Create)
const schema = z.object({
    category: z.string().min(1, "Nama Category harus diisi"),
});

type FormData = z.infer<typeof schema>;

export default function CategoryEdit() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    
    // State khusus untuk loading pengambilan data awal (bukan loading saat submit)
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const [apiError, setApiError] = useState<string | null>(null);

    const API_URL = `http://localhost:3000/categories/${id}`;

    // 2. Inisialisasi useForm (tambahkan fungsi 'reset')
    const {
        register,
        handleSubmit,
        reset, // Digunakan untuk mengisi form setelah data dari API berhasil didapat
        formState: { errors, isSubmitting }
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    // 3. Mengambil data awal dari database saat halaman dibuka
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await fetch(API_URL);
                const result = await response.json();

                if (response.ok) {
                    // Mengisi input form dengan data dari backend
                    // Ingat: kita map 'name' dari database ke field 'category' di form
                    reset({ category: result.data.name });
                } else {
                    setApiError(result.message || "Gagal mengambil data kategori");
                }
            } catch (error) {
                console.error("Error saat mengambil data kategori:", error);    
                setApiError("Terjadi kesalahan jaringan saat mengambil data");
            } finally {
                setIsFetching(false); // Matikan efek loading
            }
        };

        fetchCategory();
    }, [API_URL, reset]);

    // 4. Fungsi submit untuk update data (PUT)
    const onSubmit = async (data: FormData) => {
        setApiError(null);

        try {
            const response = await fetch(API_URL, {
                method: "PUT", // Atau PATCH
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: data.category }), 
            });

            const result = await response.json();

            if (response.ok) {
                navigate("/dashboard/category"); // Kembali ke list
            } else {
                setApiError(result.message || "Gagal mengupdate kategori");
            }
        } catch (error) {
            console.error("Error saat menyimpan kategori:", error);
            setApiError("Terjadi kesalahan jaringan saat menyimpan data");
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto flex flex-col gap-6">
            {/* Header */}
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
                    <h1 className="text-2xl font-bold text-gray-800">Edit Kategori</h1>
                    <p className="text-sm text-gray-500 mt-1">Ubah nama kategori yang sudah ada.</p>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                {/* Tampilkan spinner jika data awal masih di-fetch */}
                {isFetching ? (
                    <div className="text-center py-10">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-700 mx-auto mb-4"></div>
                        <p className="text-gray-500">Memuat data...</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                        
                        {apiError && (
                            <div className="p-4 bg-red-50 border-l-4 border-red-600 text-red-700 rounded-md text-sm">
                                {apiError}
                            </div>
                        )}

                        <div>
                            <InputText
                                label="Nama Kategori"
                                nama="category" 
                                register={register}
                                error={errors.category?.message}
                            />
                        </div>

                        <div className="flex justify-start mt-4">
                            <Button 
                                type="submit" 
                                label={isSubmitting ? "Menyimpan..." : "Simpan Perubahan"} 
                                disabled={isSubmitting}
                            />
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}