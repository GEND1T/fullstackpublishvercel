import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
    const logout = useAuthStore((state) => state.logout);
    const location = useLocation();

    const handleLogout = () => {
        logout();
    };

    const menuItems = [
        { 
            name: "Dashboard", 
            path: "/dashboard", 
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        
        { 
            name: "Category", 
            path: "/dashboard/category",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            )
        },
        { 
            name: "Pembicara", 
            path: "/dashboard/pembicara", 
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        { 
            name: "Event", 
            path: "/dashboard/event", 
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            name: "Menu Biodata",
            path: "/dashboard/biodata",
            
            icon: (
                <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                    />
                </svg>
            )
        },
    ];

    return (
        // PERBAIKAN: Ubah min-h-screen menjadi h-screen
        <div className="flex w-full h-screen bg-gray-50 font-sans text-gray-800 overflow-hidden">
            
            {/* --- SIDEBAR KIRI --- */}
            {/* Tambahkan h-full agar tingginya pas dengan parent */}
            <div className="w-72 h-full bg-white border-r-4 border-red-800 rounded-r-2xl flex flex-col justify-between shadow-lg">
                
                {/* Bagian Atas: Logo & Menu */}
                <div className="overflow-y-auto"> {/* Beri overflow-y-auto opsional jika menu sidebar kelak makin banyak */}
                    {/* Logo dengan Gradasi Merah */}
                    <div className="h-20 flex items-center justify-center border-b border-gray-100 shrink-0">
                        <h1 className="font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-500 tracking-tight">
                            Invofest
                        </h1>
                    </div>

                    {/* Navigasi */}
                    <nav className="p-4 mt-4">
                        <ul className="flex flex-col gap-2">
                            {menuItems.map((item) => {
                                const isActive = location.pathname === item.path;

                                return (
                                    <li key={item.name}>
                                        <Link 
                                            to={item.path} 
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                                                isActive 
                                                ? "bg-red-50 text-red-700 shadow-sm " 
                                                : "text-gray-500 hover:bg-red-50 hover:text-red-600"
                                            }`}
                                        >
                                            <span className={`${isActive ? "scale-110 transition-transform" : ""}`}>
                                                {item.icon}
                                            </span>
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>

                {/* Bagian Bawah: Logout Button */}
                {/* shrink-0 mencegah tombol tertekan ke bawah jika menu di atasnya penuh */}
                <div className="p-4 border-t border-gray-100 shrink-0">
                    <button 
                        type="button" 
                        onClick={handleLogout}
                        className="flex items-center justify-center gap-2 w-full p-3 bg-red-700 text-white font-semibold rounded-xl transition-all duration-200 hover:bg-red-800 hover:shadow-md active:scale-95"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                    </button>
                </div>
            </div>

            {/* --- KONTEN KANAN --- */}
            {/* Bagian ini sudah benar, overflow-y-auto akan bekerja dengan baik sekarang */}
            <div className="flex-1 h-full p-8 overflow-y-auto">
                <div className="max-w-7xl mx-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};