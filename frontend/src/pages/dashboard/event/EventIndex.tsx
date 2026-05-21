import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type EventData = {
    id: number;
    name: string;
    location: string;
    dateEvent: string;
    description: string;
    category: {
        name: string;
    };
    // Tambahkan ini di EventIndex.tsx kamu
    pembicara: {
        name: string;
        role: string;
    };
};

export default function EventIndex() {
    const [events, setEvents] = useState<EventData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const API_URL = "http://localhost:3000/events"; // Sesuaikan URL API

    const fetchEvents = async () => {
        try {
            const response = await fetch(API_URL);
            const result = await response.json();

            if (response.ok) {
                setEvents(result.data);
            } else {
                setError(result.message || "Gagal mengambil data event");
            }
        } catch (error) {
            console.error("Error fetching events:", error);
            setError("Terjadi kesalahan jaringan saat mengambil data");
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        const isConfirm = window.confirm("Apakah kamu yakin ingin menghapus event ini?");
        if (!isConfirm) return;

        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            });
            const result = await response.json();

            if (response.ok) {
                setEvents(events.filter((e) => e.id !== id));
                alert("Event berhasil dihapus");
            } else {
                alert(result.message || "Gagal menghapus event");
            }
        } catch (error) {
            console.error("Error deleting event:", error);
            alert("Terjadi kesalahan jaringan saat menghapus data");
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    // Helper untuk format tanggal (contoh: 21 Mei 2026, 15:30)
    const formatDateTime = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('id-ID', {
            dateStyle: 'medium',
            timeStyle: 'short'
        }).format(date);
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Daftar Event</h1>
                    <p className="text-sm text-gray-500 mt-1">Kelola semua jadwal dan informasi event kamu.</p>
                </div>
                <Link 
                    to="/dashboard/event/create" 
                    className="flex items-center gap-2 bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-800 hover:shadow-md transition-all active:scale-95"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Tambah Event
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {isLoading ? (
                    <div className="p-8 text-center text-gray-500">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-700 mx-auto mb-4"></div>
                        Memuat data event...
                    </div>
                ) : error ? (
                    <div className="p-8 text-center text-red-600 bg-red-50">{error}</div>
                ) : events.length === 0 ? (
                    <div className="p-12 text-center text-gray-500">
                        <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-lg font-medium">Belum ada event</p>
                        <p className="text-sm mt-1">Silakan tambahkan event baru.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500 uppercase tracking-wider">
                                    <th className="px-6 py-4 font-medium">Nama Event</th>
                                    <th className="px-6 py-4 font-medium">Kategori</th>
                                    <th className="px-6 py-4 font-medium">Pembicara</th>
                                    <th className="px-6 py-4 font-medium">Tanggal</th>
                                    <th className="px-6 py-4 font-medium">Lokasi</th>
                                    <th className="px-6 py-4 font-medium text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {events.map((event) => (
                                    <tr key={event.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">{event.name}</td>
                                        <td className="px-6 py-4 text-gray-600">
                                            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">
                                                {event.category?.name || "Tidak ada kategori"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {event.pembicara ? (
                                                <div className="flex flex-col">
                                                    <span className="font-medium">{event.pembicara.name}</span>
                                                    <span className="text-xs text-gray-500">{event.pembicara.role}</span>
                                                </div>
                                            ) : (
                                                <span className="text-gray-400 italic">Tidak ada pembicara</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600 text-sm">{formatDateTime(event.dateEvent)}</td>
                                        <td className="px-6 py-4 text-gray-600 text-sm">{event.location}</td>
                                        <td className="px-6 py-4 flex justify-center gap-3">
                                            <Link 
                                                to={`/dashboard/event/edit/${event.id}`} 
                                                className="text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                                            >
                                                Edit
                                            </Link>
                                            <button 
                                                onClick={() => handleDelete(event.id)}
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