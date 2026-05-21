import { Calendar, ChevronDown, Clock1, MapPin, University } from "lucide-react";
import Button from "../components/ui/Button";
import { Collaps } from "../components/ui/Collaps";
import SpeakerCard from "../components/ui/SpeakerCard";

export default function Seminar() {

    const speakers = [
        {
            name: "Dery Agung Triyadi",
            role: "Aws Indonesia",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png"

        },
        {
            name: "Sowam Habibi",
            role: "Google Indonesia",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png"

        }, {
            name: "Lhuqita Fazry",
            role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png"

        },
    ];
    const collapseItem = [
        {
            title: "Apa itu InpoPest?",
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

            <section id="hero" className="py-20">
                
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10  items-center w-full">

                    <div className="w-full flex flex-col gap-6 md:w-2/1">
                        <h1 className="text-5xl text-[#802D43] font-semibold">IT Seminar</h1>
                        <h3 className='text-3xl text-[#802D43] font-semibold'>“Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif”</h3>
                        <p>Seminar nasional yang membahas strategi dan arsitektur teknologi untuk menciptakan sistem di mana manusia dan AI bekerja sebagai mitra yang sinergis.Yang bertujuan mengubah paradigma dari persaingan menjadi kolaborasi, serta meningkatkan pengetahuan peserta dalam merancang teknologi AI yang berpusat pada manusia.</p>
                        <div className="mt-4">
                            <Button label="Daftar sekarang" variant="primary"/>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
                            alt=""
                        />
                    </div>
                </div>
            </section>

            <section id="deskripsi">
                <div className="max-w-7xl mx-auto py-20">
                    <div className="flex flex-col justify-center items-center gap-6 max-w-5xl mx-auto px-6">
                        <h1 className="font-semibold text-3xl text-center text-[#802D43]">Tentang IT SEMINAR</h1>
                        <p className="text-center md:text-lg">Seminar bertajuk “Human-AI Integration: Merancang Arsitektur Kolaboratif, Di tengah pesatnya kemajuan kecerdasan buatan (AI), narasi yang sering muncul adalah tentang persaingan antara manusia dan mesin. Kekhawatiran akan penggantian peran manusia oleh teknologi cerdas menjadi diskusi utama di berbagai sektor. Namun, bagaimana jika kita mengubah paradigma tersebut? Seminar Nasional Teknologi Informasi ini hadir untuk menjawab tantangan itu dengan mengangkat tema "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.” Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.</p>
                    </div>
                </div>
            </section>

            <section id="card">
                <div className="max-w-7xl mx-auto py-20">
                    <div className="py-6">
                        <h1 className="font-semibold text-3xl text-center text-[#802D43]">Temui Pembicara Khusus Kami</h1>
                    </div>

                    <div className="py-20 grid grid-cols-1 md:grid-cols-3 gap-10 p-3 w-full">
                        {speakers.map((speaker, index) =>(
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
                <div>
                    <div className="py-6">
                        <h1 className="font-semibold text-3xl text-center text-[#802D43]">Pelaksanaan IT Seminar</h1>
                    </div>
                    <div className="py-20 grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <Collaps
                        title="Kamis, 27 November 2025"
                        icon={Calendar}
                        />
                        <Collaps
                        title="08.00 WIB - 12.00 WIB"
                        icon={Clock1}
                        />
                        <Collaps
                        title="Kamis, 27 November 2025"
                        icon={MapPin}
                        />
                        <Collaps
                        title="Kamis, 27 November 2025"
                        icon={University}
                        />
                    </div>
                </div>
            </section>

            <section id="collaps">
                <div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-1xl font-bold text-gray-500'>FAQ</span>
                        <h1 className='text-4xl fon'>Punya Pertanyaan? Lihat</h1>
                        <span className='text-4xl font-bold text-[#802D43]'>DISINI</span>
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

            <section>
                <div>
                    <div className='h-fit mt-4 sm:mt-8 lg:mt-16 rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden'>
                        <h1 className='text-4xl font-semibold'>Sponsor
                            <span className='text-4xl font-bold text-red-900'>INVOVEST 2025</span>
                        </h1>
                    </div>

                    <div className='h-fit mt-4 sm:mt-8 lg:mt-16 rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden'>
                        <h1 className='text-4xl font-semibold'>Media Partner
                            <span className='text-4xl font-bold text-red-900'>INVOVEST 2025</span>
                        </h1>
                    </div>
                </div>
            </section>

        </div>
    )
}