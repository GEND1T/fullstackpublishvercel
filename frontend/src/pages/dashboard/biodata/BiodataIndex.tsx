import React from "react";

export default function Biodata() {
    return (
        <div className="max-w-5xl mx-auto flex flex-col gap-8 pb-10 animate-fade-in">
            {/* --- HERO SECTION --- */}
            <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mt-4">
                {/* Background Pattern/Gradient */}
                <div className="h-32 md:h-40 bg-gradient-to-r from-red-800 to-red-600 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                </div>
                
                <div className="px-6 sm:px-10 pb-8 flex flex-col sm:flex-row gap-6 relative">
                    {/* Foto Profil */}
                    <div className="-mt-16 relative z-10 flex-shrink-0 mx-auto sm:mx-0">
                        <div className="w-32 h-32 rounded-full border-4 border-white shadow-md bg-gray-200 overflow-hidden flex items-center justify-center text-4xl font-bold text-gray-400">
                            {/* Ganti src dengan link foto asli jika ada */}
                            <img 
                                src="https://api.dicebear.com/9.x/avataaars/svg?seed=n" 
                                alt="Muhammad Afin Aditya"
                                className="w-full h-full object-cover bg-red-50"
                            />
                        </div>
                    </div>
                    
                    {/* Info Utama */}
                    <div className="pt-2 sm:pt-4 text-center sm:text-left flex-1">
                        <h1 className="text-3xl font-bold text-gray-900">Muhammad Afin Aditya</h1>
                        <p className="text-red-700 font-medium text-lg mt-1">Web Developer & Informatics Student</p>
                        
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-sm text-gray-600">
                            <span className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" /></svg>
                                Universitas Harkat Negeri
                            </span>
                            <span className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                Tegal, Jawa Tengah
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* --- KOLOM KIRI (About & Skills) --- */}
                <div className="flex flex-col gap-8 lg:col-span-1">
                    
                    {/* About Me */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            Tentang Saya
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Saya adalah mahasiswa aktif program studi Informatika yang memiliki ketertarikan mendalam pada pengembangan web. 
                            Di luar menulis kode, saya sangat antusias dengan otomasi sistem dan integrasi alat berbasis AI. 
                            Saya senang mengubah alur kerja atau masalah yang kompleks menjadi solusi otomatis yang sederhana dan praktis digunakan.
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                            Tech Stack & Tools
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {['Node.js', 'Express.js', 'Supabase', 'PostgreSQL', 'React', 'Tailwind CSS', 'n8n', 'WAHA', 'Docker', 'GitHub', 'Vercel'].map((tech) => (
                                <span key={tech} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-red-300 hover:bg-red-50 hover:text-red-700 transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- KOLOM KANAN (Projects / Pengalaman) --- */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            Sorotan Proyek
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            
                            {/* Project 1 */}
                            <div className="group border border-gray-100 rounded-xl p-5 hover:border-red-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-700 mb-4 group-hover:bg-red-700 group-hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Ruang Pengajar</h3>
                                <p className="text-sm text-gray-600 line-clamp-3">
                                    Aplikasi ekosistem manajemen pendidikan dengan fitur absensi digital terintegrasi mesin Solution (ADMS protocol) secara *realtime*, rekap bulanan otomatis, hingga sistem *broadcast* pengumuman.
                                </p>
                            </div>

                            {/* Project 2 */}
                            <div className="group border border-gray-100 rounded-xl p-5 hover:border-red-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-700 mb-4 group-hover:bg-red-700 group-hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Smart Card Event</h3>
                                <p className="text-sm text-gray-600 line-clamp-3">
                                    Sistem aplikasi yang dikembangkan untuk mengotomatisasi registrasi dan pemantauan peserta acara. Berhasil memangkas waktu proses registrasi fisik di meja panitia hingga 20%.
                                </p>
                            </div>

                            {/* Project 3 */}
                            <div className="group border border-gray-100 rounded-xl p-5 hover:border-red-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-700 mb-4 group-hover:bg-red-700 group-hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Self-Hosted Home Server</h3>
                                <p className="text-sm text-gray-600 line-clamp-3">
                                    Inisiatif pemanfaatan laptop lama yang diubah menjadi server pribadi menggunakan Ubuntu Server & Docker. Aktif 24/7 untuk menjalankan alur otomasi n8n dan layanan WAHA.
                                </p>
                            </div>

                            {/* Project 4 */}
                            <div className="group border border-gray-100 rounded-xl p-5 hover:border-red-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-700 mb-4 group-hover:bg-red-700 group-hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">monolestarifish.web.id</h3>
                                <p className="text-sm text-gray-600 line-clamp-3">
                                    Membangun situs web company profile berdesain modern single-page untuk bisnis suplai seafood, menampilkan portofolio produk dan integrasi kontak langsung.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}