import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 1. Definisikan Interface Tipe Data untuk TypeScript
interface DashboardData {
    stats: {
        totalEvent: number;
        totalPembicara: number;
        totalKategori: number;
    };
    upcomingEvents: {
        id: number;
        name: string;
        dateEvent: string;
        location: string;
        category: {
            name: string;
        };
    }[];
}

export default function DashboardIndex() {
    const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // 2. Fetch data dari Backend saat halaman pertama kali dimuat
    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await fetch("https://fullstackpublishvercel.vercel.app/dashboard");
                const result = await response.json();

                if (response.ok && result.success) {
                    setDashboardData(result.data);
                } else {
                    setError(result.message || "Gagal memuat data dashboard");
                }
            } catch (err) {
                console.error("Error fetching dashboard data:", err);
                setError("Terjadi kesalahan jaringan saat menghubungi server");
            } finally {
                setIsLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    // 3. Fungsi Helper untuk memformat tanggal ISO menjadi format Indonesia yang rapi
    const formatIndonesianDate = (isoString: string) => {
        try {
            const date = new Date(isoString);
            return date.toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            }) + " WIB";
        } catch (e) {
            console.error("Error formatting date:", e);
            return isoString;
        }
    };

    // --- LOADING STATE ---
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-700 mb-4"></div>
                <p className="text-gray-500 font-medium">Memuat data dashboard...</p>
            </div>
        );
    }

    // --- ERROR STATE ---
    if (error) {
        return (
            <div className="p-4 bg-red-50 border-l-4 border-red-600 text-red-700 rounded-md text-sm my-4">
                <p className="font-bold">Gagal Memuat Layanan</p>
                <p>{error}</p>
            </div>
        );
    }

    // Ambil data stats dari state, jika belum ada berikan nilai default 0
    const statsData = dashboardData?.stats;

    // Susun array statistik menggunakan data riil dari backend
    const stats = [
        { 
            title: "Total Event", 
            value: statsData?.totalEvent ?? 0, 
            icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", 
            color: "text-blue-600", 
            bg: "bg-blue-50" 
        },
        { 
            title: "Total Pembicara", 
            value: statsData?.totalPembicara ?? 0, 
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", 
            color: "text-emerald-600", 
            bg: "bg-emerald-50" 
        },
        { 
            title: "Kategori Aktif", 
            value: statsData?.totalKategori ?? 0, 
            icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z", 
            color: "text-amber-600", 
            bg: "bg-amber-50" 
        },
        { 
            title: "Efisiensi Smart Card", 
            value: "+20%", 
            icon: "M13 10V3L4 14h7v7l9-11h-7z", 
            color: "text-red-600", 
            bg: "bg-red-50", 
            subtitle: "Waktu Registrasi" 
        },
    ];

    return (
        <div className="flex flex-col gap-8 animate-fade-in pb-10">
            
            {/* --- WELCOME BANNER --- */}
            <div className="relative bg-gradient-to-r from-red-800 to-red-600 rounded-2xl p-8 shadow-sm overflow-hidden text-white">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute -bottom-24 right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-xl pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight mb-2">
                            Selamat Datang kembali, Afin! 👋
                        </h1>
                        <p className="text-red-100 max-w-xl text-sm md:text-base leading-relaxed">
                            Pusat kendali Invofest sudah siap. Pantau jadwal, kelola pembicara, dan pastikan seluruh sistem berjalan otomatis dan efisien hari ini.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <Link 
                            to="/dashboard/event/create" 
                            className="inline-flex items-center gap-2 bg-white text-red-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 hover:shadow-lg transition-all active:scale-95"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            Buat Event Baru
                        </Link>
                    </div>
                </div>
            </div>

            {/* --- STATISTIK CARDS --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-red-100 hover:shadow-md transition-all group">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                                </svg>
                            </div>
                            {stat.subtitle && (
                                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                                    {stat.subtitle}
                                </span>
                            )}
                        </div>
                        <div>
                            <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
                            <p className="text-3xl font-bold text-gray-800 mt-1">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                
                {/* --- TABEL JADWAL TERDEKAT --- */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                        <h2 className="text-lg font-bold text-gray-800">Jadwal Event Terdekat</h2>
                        <Link to="/dashboard/event" className="text-sm font-medium text-red-700 hover:text-red-800 hover:underline">
                            Lihat Semua &rarr;
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50/50 text-xs text-gray-500 uppercase tracking-wider">
                                    <th className="px-6 py-4 font-medium">Nama Event</th>
                                    <th className="px-6 py-4 font-medium">Kategori</th>
                                    <th className="px-6 py-4 font-medium">Tanggal & Waktu</th>
                                    <th className="px-6 py-4 font-medium">Lokasi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {dashboardData && dashboardData.upcomingEvents.length > 0 ? (
                                    dashboardData.upcomingEvents.map((event) => (
                                        <tr key={event.id} className="hover:bg-gray-50/80 transition-colors group cursor-default">
                                            <td className="px-6 py-4">
                                                <p className="font-semibold text-gray-800 group-hover:text-red-700 transition-colors">{event.name}</p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-xs font-semibold px-2 py-1 bg-red-50 text-red-700 rounded-md">
                                                    {event.category?.name || "Uncategorized"}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 text-gray-600 text-sm">
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                    {formatIndonesianDate(event.dateEvent)}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 text-gray-600 text-sm">
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                    {event.location}
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="text-center py-8 text-gray-400 text-sm">
                                            Tidak ada jadwal event terdekat dalam waktu dekat.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* --- QUICK ACTIONS --- */}
                <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-lg font-bold text-gray-800 mb-6">Aksi Cepat</h2>
                    
                    <div className="flex flex-col gap-3">
                        <Link 
                            to="/dashboard/category/create" 
                            className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-red-200 hover:bg-red-50 hover:text-red-700 transition-all group"
                        >
                            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-red-700 group-hover:shadow-sm transition-all">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-gray-800 group-hover:text-red-700">Kategori Baru</h3>
                                <p className="text-xs text-gray-500">Buat jenis event baru</p>
                            </div>
                            <svg className="w-5 h-5 text-gray-300 group-hover:text-red-700 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </Link>

                        <Link 
                            to="/dashboard/pembicara/create" 
                            className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-red-200 hover:bg-red-50 hover:text-red-700 transition-all group"
                        >
                            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-red-700 group-hover:shadow-sm transition-all">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-gray-800 group-hover:text-red-700">Data Pembicara</h3>
                                <p className="text-xs text-gray-500">Tambah profil narasumber</p>
                            </div>
                            <svg className="w-5 h-5 text-gray-300 group-hover:text-red-700 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}