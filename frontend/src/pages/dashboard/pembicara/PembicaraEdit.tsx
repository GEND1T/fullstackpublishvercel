import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { z } from "zod";
import { InputText } from '../../../components/ui/InputText';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import Button from '../../../components/ui/Button';

// Skema Zod disamakan dengan tabel pembicara
const schema = z.object({
    name: z.string().min(1, "Nama pembicara harus diisi"),
    role: z.string().min(1, "Peran/Role harus diisi"),
    image:  z.string().default(" ").optional(), // Bisa opsional, tapi jika diisi harus valid
});

type FormData = z.infer<typeof schema>;

export default function PembicaraEdit() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const [apiError, setApiError] = useState<string | null>(null);

    const API_URL = `https://fullstackpublishvercel.vercel.app/pembicara/${id}`;

    const {
        register,
        handleSubmit,
        reset, 
        formState: { errors, isSubmitting }
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    // Ambil data pembicara untuk pre-fill form
    useEffect(() => {
        const fetchPembicara = async () => {
            try {
                const response = await fetch(API_URL);
                const result = await response.json();

                if (response.ok) {
                    reset({ 
                        name: result.data.name,
                        role: result.data.role,
                        image: result.data.image || "" // fallback jika di database null
                    });
                } else {
                    setApiError(result.message || "Gagal mengambil data pembicara");
                }
            } catch (error) {
                console.error("Error saat mengambil data pembicara:", error);
                setApiError("Terjadi kesalahan jaringan saat mengambil data");
            } finally {
                setIsFetching(false);
            }
        };

        fetchPembicara();
    }, [API_URL, reset]);

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        setApiError(null);

        try {
            const response = await fetch(API_URL, {
                method: "PUT", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data), 
            });

            const result = await response.json();

            if (response.ok) {
                navigate("/dashboard/pembicara"); 
            } else {
                setApiError(result.message || "Gagal mengupdate pembicara");
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
                    <h1 className="text-2xl font-bold text-gray-800">Edit Pembicara</h1>
                    <p className="text-sm text-gray-500 mt-1">Ubah informasi narasumber yang sudah ada.</p>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                {isFetching ? (
                    <div className="text-center py-10">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-700 mx-auto mb-4"></div>
                        <p className="text-gray-500">Memuat profil pembicara...</p>
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
                                label="Nama Pembicara"
                                nama="name" 
                                register={register}
                                error={errors.name?.message}
                            />
                        </div>

                        <div>
                            <InputText
                                label="Role / Jabatan"
                                nama="role" 
                                register={register}
                                error={errors.role?.message}
                            />
                        </div>

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