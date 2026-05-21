import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Mendefinisikan tipe data Category sesuai skema Prisma
type Category = {
    id: number;
    name: string;
    createdAt: string;
    
};

export default function CategoryIndex() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Ganti URL ini sesuai dengan URL backend Express kamu
    const API_URL = "https://fullstackpublishvercel.vercel.app/categories";

    // Fungsi untuk mengambil data dari backend
    const fetchCategories = async () => {
        try {
            const response = await fetch(API_URL);
            const result = await response.json();

            if (response.ok) {
                // Sesuai dengan format response backend: { message: "...", data: [...] }
                setCategories(result.data);
            } else {
                setError(result.message || "Gagal mengambil data");
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
            setError("Terjadi kesalahan jaringan saat mengambil data");
        } finally {
            setIsLoading(false);
        }
    };

    // Fungsi untuk menghapus data kategori
    const handleDelete = async (id: number) => {
        // Konfirmasi sebelum menghapus
        const isConfirm = window.confirm("Apakah kamu yakin ingin menghapus kategori ini?");
        if (!isConfirm) return;

        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            });
            const result = await response.json();

            if (response.ok) {
                // Hapus data dari state lokal tanpa perlu memanggil fetchCategories() lagi
                setCategories(categories.filter((cat) => cat.id !== id));
                alert("Kategori berhasil dihapus");
            } else {
                alert(result.message || "Gagal menghapus kategori");
            }
        } catch (error) {
            alert("Terjadi kesalahan jaringan saat menghapus data");
            console.error("Error deleting category:", error);
        }
    };

    // Mengambil data saat komponen pertama kali di-render
    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="flex flex-col gap-6">
            {/* --- HEADER --- */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Daftar Kategori</h1>
                    <p className="text-sm text-gray-500 mt-1">Kelola kategori event sistem kamu di sini.</p>
                </div>
                <Link 
                    to="/dashboard/category/create" 
                    className="flex items-center gap-2 bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 hover:shadow-md transition-all duration-200 active:scale-95"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Tambah Kategori
                </Link>
            </div>

            {/* --- KONTEN UTAMA (TABEL) --- */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {isLoading ? (
                    // Tampilan saat data sedang di-load
                    <div className="p-8 text-center text-gray-500">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-700 mx-auto mb-4"></div>
                        Memuat data kategori...
                    </div>
                ) : error ? (
                    // Tampilan jika terjadi error
                    <div className="p-8 text-center text-red-600 bg-red-50">
                        {error}
                    </div>
                ) : categories.length === 0 ? (
                    // Tampilan jika data kosong
                    <div className="p-12 text-center text-gray-500">
                        <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                        <p className="text-lg font-medium">Belum ada kategori</p>
                        <p className="text-sm mt-1">Silakan buat kategori baru untuk memulai.</p>
                    </div>
                ) : (
                    // Tabel Data Kategori
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500 uppercase tracking-wider">
                                    <th className="px-6 py-4 font-medium">No</th>
                                    <th className="px-6 py-4 font-medium">Nama Kategori</th>
                                    <th className="px-6 py-4 font-medium">Tanggal Dibuat</th>
                                    <th className="px-6 py-4 font-medium text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {categories.map((category, index) => (
                                    <tr key={category.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-gray-600">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900">
                                            {category.name}
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 text-sm">
                                            {new Date(category.createdAt).toLocaleDateString("id-ID", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric"
                                            })}
                                        </td>
                                        <td className="px-6 py-4 flex justify-center gap-3">
                                            {/* Tombol Edit */}
                                            <Link 
                                                to={`/dashboard/category/edit/${category.id}`} 
                                                className="text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                                            >
                                                Edit
                                            </Link>
                                            
                                            {/* Tombol Hapus */}
                                            <button 
                                                onClick={() => handleDelete(category.id)}
                                                className="text-red-600 hover:text-red-800 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                                            >
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}