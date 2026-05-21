import { ChevronDown, Code2, ShieldCheck, Smartphone } from "lucide-react";
import Button from "../components/ui/Button";
import SpeakerCard from "../components/ui/SpeakerCard";
import { WorkshopCard } from "../components/ui/WorkshopCard";
import { Collaps } from "../components/ui/Collaps";

export default function Workshop() {

    const speakers = [
        {
            name: "Lhuqita Fazry",
            role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png"

        },
        {
            name: "M. Dendi Purwanto",
            role: "Artificial Intelligence Software Engineer, PT. Mayar Kernel Supernova",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png"

        }, {
            name: "Danang Avan M",
            role: "Cyber Security Security Analyst, Founder | Contributor TegalSec",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png"

        },
    ];

    const workshopJadwal = [
        {
            
            title: "Mobile Development",
            date: "Selasa, 25 November 2025",
            time: "08.00 WIB - 16.30 WIB",
            location: "Lab Kom D.1",
            icon: Code2,
        },
        {
          
            title: "Artificial Intelligence",
            date: "Selasa, 25 November 2025",
            time: "08.00 WIB - 16.30 WIB",
            location: "Lab Kom D.2",
            icon: Smartphone,
        },
        {
            title: "Cyber Security",
            date: "Rabu, 26 November 2025",
            time: "08.00 WIB - 16.30 WIB",
            location: "Lab Kom D.1",
            icon: ShieldCheck,
        },
    ];
    const collapseItem = [
        {
            title: "Apa itu Invofest?",
            description:
                "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”.",
        },
        {
            title: "Kapan dan di mana Invofest akan diselenggarakan?",
            description:
                "Invofest akan diselenggarakan pada tanggal 15-17 November 2024 di Jakarta Convention Center (JCC), Jakarta, Indonesia.",
        },
        {
            title: "Apakah ada biaya pendaftaran di INVOFEST?",
            description:
                "Semua kegiatan dipastikan berbayar ya teman-teman.",
        },
        {
            title: "Bagaimana saya mengetahui pemenang kompetisi?",
            description:
                "Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harkatnegeri.",
        },
        {
            title: "Apa yang didapat pemenang dalam kompetisi?",
            description:
                "Pemenang kompetisi akan mendapatkan hadiah trophy, uang pembinaan, dan e-sertifikat.",
        },
        {
            title: "Bagaimana cara mendaftar event?",
            description:
                "Buka https://www.invofest-harkatnegeri.com lalu pergi ke halaman event yang anda ingin ikuti atau scroll kebagian bawah halaman beranda dengan klik mendaftar pada salah satu eventnya, jika sudah maka diarahkan ke halaman detail event dan klik tombol 'Registrasi' maka akan diarahkan ke google form pengisian pendaftaran event yang diikuti.",
        },

    ];
    

    return (
        <div className="min-h-screen">
            <section id="hero" className="py-20" >
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10 items-center w-full">
                    <div className="w-full flex flex-col gap-6 md:w-2/1">
                        <h1 className="text-5xl text-[#802D43] font-semibold">IT Workshop</h1>
                        <h3 className='text-3xl text-[#802D43] font-semibold'>“AI for a Sustainable Future: The Role of Z Generation in the Digital Era”</h3>
                        <p>IT Workshop ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.</p>
                        <div className="mt-4">
                            <Button label="Daftar sekarang" variant="primary" />
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
                            alt="logo" />
                    </div>
                </div>
            </section>

            <section id="deskripsi">
                <div className="max-w-7xl mx-auto py-20">
                    <div className="flex flex-col justify-center items-center gap-6 max-w-5xl mx-auto px-6">
                        <h1 className="font-semibold text-3xl text-center text-[#802D43]">Tentang IT Workshop</h1>
                        <p className="text-center md:text-lg">Workshop “AI for a Sustainable Future: The Role of Z Generation in the Digital Era” ini didesain khusus untuk Generasi Z, para digital natives yang berada di persimpangan antara inovasi teknologi dan tantangan keberlanjutan global. Peserta akan diajak untuk menyelami bagaimana Kecerdasan Buatan (AI) bukan hanya sekadar teknologi canggih, tetapi juga alat yang ampuh untuk menciptakan solusi nyata bagi isu-isu lingkungan. Melalui sesi inspiratif, pengenalan konsep, dan praktik langsung (hands-on), workshop ini bertujuan memberdayakan Gen Z untuk menjadi agen perubahan di era digital, menggunakan keahlian mereka untuk masa depan bumi yang lebih baik</p>
                    </div>
                </div>
            </section>

            <section id="speakers">
                <div className="max-w-7xl mx-auto py-20">
                    <div className="py-6">
                        <h2 className="font-semibold text-3xl text-center text-[#802D43]">Temui Pembicara Khusus Kami</h2>
                    </div>
                    <div className="py-20 grid grid-cols-1 md:grid-cols-3 gap-10 px-3 w-full">
                        {speakers.map((speaker, index) => (
                            <SpeakerCard
                                key={index}
                                name={speaker.name}
                                role={speaker.role}
                                imageUrl={speaker.imageUrl}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section id="jadwal">
                <div className="min-h-screen py-16 px-4">
                    <h2 className="text-4xl font-bold text-[#802D43] text-center mb-12">
                        Pelaksanaan IT Workshop
                    </h2>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {workshopJadwal.map((jadwal, index) => (
                            <WorkshopCard
                            key={index}
                            title={jadwal.title}
                            date={jadwal.date}
                            time={jadwal.time}
                            location={jadwal.location}
                            icon={jadwal.icon}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section id="collaps">
                <div className="py-24">
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-1xl font-bold text-gray-500'>FAQ</span>
                        <h1 className='text-4xl fon'>Punya Pertanyaan? Lihat</h1>
                        <span className='text-4xl font-bold text-red-900'>DISINI</span>
                        <p className='flex justify-center text-base text-gray-600 mt-5'>Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat melihat daftar pertanyaan di bawah ini.</p>
                    </div>

                    <div className='py-24 grid grid-cols-1 md:grid-cols-2 gap-6 px-3 items-start'>
                        {collapseItem.map((item, index) => (
                            <Collaps
                                key={index}
                                title={item.title}
                                description={item.description}
                                icon={ChevronDown}
                                variant='secondary'
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}