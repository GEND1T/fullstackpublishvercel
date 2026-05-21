import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


type Pembicara = {
    id: number;
    name: string;
    role: string;
    image: string;
    createdAt: string;
};

export default function PembicaraIndex() {
    const [pembicaras, setPembicaras] = useState<Pembicara[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const API_URL = "http://localhost:3000/pembicara";

    const fetchPembicaras = async () => {
        try {
            const response = await fetch(API_URL);
            const result = await response.json();

            if (response.ok) {
                setPembicaras(result.data);
            } else {
                setError(result.message || "Gagal mengambil data pembicara");
            }
        } catch (error) {
            console.error("Error fetching pembicaras:", error);
            setError("Terjadi kesalahan jaringan saat mengambil data");
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        const isConfirm = window.confirm("Apakah kamu yakin ingin menghapus data pembicara ini?");
        if (!isConfirm) return;

        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            });
            const result = await response.json();

            if (response.ok) {
                setPembicaras(pembicaras.filter((p) => p.id !== id));
                alert("Pembicara berhasil dihapus");
            } else {
                alert(result.message || "Gagal menghapus pembicara");
            }
        } catch (error) {
            console.error("Error deleting pembicara:", error);
            alert("Terjadi kesalahan jaringan saat menghapus data");
        }
    };

    useEffect(() => {
        fetchPembicaras();
    }, []);

    return (
        <div className="flex flex-col gap-6">
            {/* Header & Tombol Tambah */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Daftar Pembicara</h1>
                    <p className="text-sm text-gray-500 mt-1">Kelola data narasumber untuk event kamu di sini.</p>
                </div>
                <Link 
                    to="/dashboard/pembicara/create" 
                    className="flex items-center gap-2 bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 hover:shadow-md transition-all duration-200 active:scale-95"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Tambah Pembicara
                </Link>
            </div>

            {/* Tabel Data */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {isLoading ? (
                    <div className="p-8 text-center text-gray-500">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-700 mx-auto mb-4"></div>
                        Memuat data pembicara...
                    </div>
                ) : error ? (
                    <div className="p-8 text-center text-red-600 bg-red-50">
                        {error}
                    </div>
                ) : pembicaras.length === 0 ? (
                    <div className="p-12 text-center text-gray-500">
                        <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <p className="text-lg font-medium">Belum ada pembicara</p>
                        <p className="text-sm mt-1">Silakan tambahkan data pembicara baru.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500 uppercase tracking-wider">
                                    <th className="px-6 py-4 font-medium">Profil</th>
                                    <th className="px-6 py-4 font-medium">Nama Pembicara</th>
                                    <th className="px-6 py-4 font-medium">Peran / Jabatan</th>
                                    <th className="px-6 py-4 font-medium text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {pembicaras.map((pembicara) => (
                                    <tr key={pembicara.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            {/* Menampilkan gambar jika ada, jika tidak muncul inisial abu-abu */}
                                            {pembicara.image ? (
                                                <img 
                                                    src={pembicara.image} 
                                                    alt={pembicara.name} 
                                                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                                                />
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                                                    {pembicara.name.charAt(0).toUpperCase()}
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900">
                                            {pembicara.name}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                                                {pembicara.role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 flex justify-center gap-3">
                                            <Link 
                                                to={`/dashboard/pembicara/edit/${pembicara.id}`} 
                                                className="text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                                            >
                                                Edit
                                            </Link>
                                            <button 
                                                onClick={() => handleDelete(pembicara.id)}
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