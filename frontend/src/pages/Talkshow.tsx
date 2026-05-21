import Button from "../components/ui/Button";
import SpeakerCard from "../components/ui/SpeakerCard";
import { Collaps } from "../components/ui/Collaps";
import { Calendar, ChevronDown, Clock1, MapPin, University } from "lucide-react";

export default function Talkshow() {

    const speakers = [
        {
            name: "Moh. Ichsan Maulana",
            role: "Human Capital Information System (HCIS), PT. Garuda Daya Pratama Sejahtera",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20ichsan.png"

        },
        {
            name: "M. Zaim Zamzami",
            role: "Programmer, PT. Pertamina Drilling Service Indonesia",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20zaim%20zamzami.png"

        }, 
        {
            name: "Daffa Zuhdan Muhtar",
            role: "Android Developer, PT. Astra Internasional",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20daffa.png"

        },
        {
            name: "Bayu Adi Prasetiyo",
            role: "Software Engineer, KOMPAS.ID",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20bayu.png"

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
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10 items-center w-full">
                    <div className="w-full flex flex-col gap-6 md:w-2/1">
                        <h1 className="text-5xl text-[#802D43] font-semibold">IT Talkshow</h1>
                        <h3 className='text-3xl text-[#802D43] font-semibold'>“Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”</h3>
                        <p>Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” Sebuah diskusi interaktif yang mengeksplorasi cara mengintegrasikan nilai-nilai kemanusiaan seperti etika, empati, dan kreativitas ke dalam pengembangan kecerdasan buatan. yang bertujuan menginspirasi audiens untuk membangun dan memanfaatkan AI sebagai alat kolaboratif yang memperkuat potensi unik manusia, bukan sebagai penggantinya.</p>
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
                        <h1 className="font-semibold text-3xl text-center text-[#802D43]">Tentang IT Talkshow</h1>
                        <p className="text-center md:text-lg">Seiring teknologi, khususnya kecerdasan buatan (AI), yang semakin meresap ke dalam setiap aspek kehidupan kita, muncul sebuah pertanyaan fundamental: Apakah kita sedang menciptakan teknologi yang melayani manusia, atau justru sebaliknya? Untuk menjawab pertanyaan tersebut, kami mempersembahkan talkshow berskala nasional: “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan.” Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia.</p>
                    </div>
                </div>
            </section>

            <section id="speakers">
                <div className="max-w-7xl mx-auto py-20">
                    <div className="py-6">
                         <h2 className="font-semibold text-3xl text-center text-[#802D43]" >Temui Pembicara Khusus Kami</h2>
                    </div>
                    <div className=" py-20 grid grid-cols-1 md:grid-cols-4 gap-10 px-3 w-full">
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
                <div>
                    <div className="py-6">
                        <h1 className="font-semibold text-3xl text-center text-[#802D43]">Pelaksanaan IT Seminar</h1>
                    </div>
                    <div className="py-20 grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <Collaps
                        title="Senin, 24 November 2025"
                        icon={Calendar}
                        />
                        <Collaps
                        title="08.00 WIB - 12.00 WIB"
                        icon={Clock1}
                        />
                        <Collaps
                        title="Aula Gedung C"
                        icon={MapPin}
                        />
                        <Collaps
                        title="Kampus 1 (mataram) Universitas Harkat Negeri"
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