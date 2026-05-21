
import { ChevronDown } from 'lucide-react';
import '../App.css'
import Button from "../components/ui/Button.tsx";
import { Collaps } from '../components/ui/Collaps.tsx';
import { CompetitionCard } from '../components/ui/CompetitionCard.tsx';

export default function Copetition() {

    const cardCompetition = [
        {
            name: "Poster Design Competition",
            description: "Poster Design Competition ini adalah kompetisi untuk menciptakan suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif, guna menyuarakan gagasan atau solusi visual terhadap permasalahan yang ada sekarang ini.",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/competition-card/software_dev.png"

        },
        {
            name: "UI/UX Design Competition",
            description: "UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital yang dapat berupa website maupun mobile apps serta dapat membuat nyaman calon pengguna.",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/competition-card/ui_ux.png"

        },
        {
            name: "Web Design Competition",
            description: "Web Design Competition ini adalah kompetisi untuk menciptakan suatu perangkat lunak berbasis website yang menggunakan desain menarik, unik, dan responsive pada semua device serta sesuai dengan tema kompetisi.",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/competition-card/web_design.png"

        },

    ];
      const collapseItem =[
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
        <div className='min-h-screen'>
            <section id='hero' className="py-20">
                <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10 justify items-center w-full'>
                    
                    <div className='w-full md:w-2/3 flex flex-col gap-6'>
                        <h1 className='text-5xl text-[#802D43] font-semibold'>IT Competition</h1>
                        <h3 className='text-3xl text-[#802D43] font-semibold'>"From Creation to Innovation"</h3>
                        <p className='text-sm md:text-base lg:text-[1.35rem]'>
                            Kompetisi dalam INVOFEST ini mengusung tema <b>“From Creation to Innovation”</b> , Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.
                        </p>
                        <div className='flex gap-3 mt-4'>
                            <Button label="Daftar IT Competition" variant="primary" />
                            <Button label="Hubungi Panitia" variant="secondary"/>
                        </div>
                    </div>
                   
                    <div className='w-full md:w-1/3 flex justify-center'>
                        <img
                            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
                            alt="Maskot Invofest"
                            className="w-2/3 md:w-full max-w-sm"
                        />
                    </div>
                </div>
            </section>

            <section id='deskripsi'>
                <div className='max-w-7xl mx-auto py-20'>
                    <div className='flex flex-col justify-center items-center gap-6 max-w-5xl mx-auto px-6'>
                        <h1 className='font-semibold text-3xl text-center'>DESKRIPSI KOMPETISI</h1>
                        <p className='text-center md:text-lg'>Kompetisi atau perlombaan yang ada dalam kegiatan <b>INVOFEST (Infomatics Vocational Festival) 2025</b> adalah diantaranya National Poster Design Competition, UI UX Design Competition, dan juga UI/UX Design Competition. Kompetisi dalam INVOFEST ini mengusung tema <b>“From Creation to Innovation”</b>Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan. Melalui pendekatan ini, diharapkan generasi ini akan berperan dalam menciptakan solusi-solusi baru untuk tantangan masa kini dan mendatang, baik dalam hal teknologi, lingkungan, pendidikan, maupun tanggung jawab sosial.</p>
                    </div>     
                </div>
            </section>

            <section id='card-kompetisi'>
                <div className='max-w-7xl mx-auto  px-6 py-10 '>
                    <div className='flex flex-col justify-center items-center gap-6 max-w-5xl mx-auto px-6'>
                        <h1 className='text-5xl font-semibold text-[#802D43]'>DAFTAR KOMPETISI</h1>
                        <p className='text-xl'>Berikut Adalah Daftar Kompetisi Yang Ada Pada Event INVOFEST.</p>
                    </div>
                    <div className='py-10 grid grid-cols-1 md:grid-cols-3 gap-5 items-start'>
                        {cardCompetition.map((item, index) => (
                            <CompetitionCard
                                key={index}
                                name={item.name}
                                description={item.description}
                                imageUrl={item.imageUrl}>  
                                <Button
                                    label='Info Selengkapnya'
                                    variant='primary'
                                    type='button'
                                />
                            </CompetitionCard>
                        ))}

                    </div>
                    
                </div>
            </section>

            <section id='collapse'>
                <div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-1xl font-bold text-gray-500'>FAQ</span>
                        <h1 className='text-4xl fon'>Punya Pertanyaan? Lihat</h1>
                        <span className='text-4xl font-bold text-[#802D43]'>DISINI</span>
                        <p className='flex justify-center text-base text-gray-600 mt-5'>Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat melihat daftar pertanyaan di bawah ini.</p>
                    </div>

                    <div className='py-24 grid grid-cols-1 md:grid-cols-2 gap-6 px-3 items-start'>
                        {collapseItem.map((item, index) =>(
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