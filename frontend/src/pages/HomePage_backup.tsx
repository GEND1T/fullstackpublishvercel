import '../App.css'
import Button from "../components/ui/Button.tsx";
import SpeakerCard from '../components/ui/SpeakerCard.tsx';
import { Collaps } from '../components/ui/Collaps.tsx';
import { Card } from '../components/ui/Card.tsx';
import { ChevronDown } from 'lucide-react';



function App() {
  const speakers = [
    {
      name:"Dery Agung Triyadi",
      role:"Aws Indonesia",
      imageUrl:"https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png"

    },
    {
      name:"Sowam Habibi",
      role:"Google Indonesia",
      imageUrl:"https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png"

    },{
      name:"Lhuqita Fazry",
      role:"Mobile Development Developer, Founder Rumah Coding Indonesia",
      imageUrl:"https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png"

    },
  ];

  const collapseItem =[
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

  const cardItems =   [
    {
      title: "IT Seminar",
      description:
      "Seminar nasional ini membahas “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif” untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi",
    },
    {
      title: "IT Talkshow",
      description:
      "Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.",
    },
    {
      title: "IT Competition",
      description:
      "Kompetisi “From Creation to Innovation” mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.",
    },
    {
      title: "IT Workshop",
      description:
      "Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.",
    },
  ];

  return (
    <>
      <div className='max-w-7xl mx-auto  px-6 py-2'>
        <section
          id='hero'
          className='py-10 flex gap-10 justify-between items-center'
        >
          <div className='w-2/3 flex flex-col gap-6'>
            <img
              src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
              alt=""
              className='w-96'
            />
            <p>
              Invofest (Informatics Vocational Festival) adalah festival tahunan
              yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
              Indonesia dalam menghadapi era digital. Dengan mengusung tema
              <b>“Beyond Limits, Beyond Intelligence: Innovate for a Smarter
              Tomorrow ”</b>.
            </p>
            <div className='flex gap-3'> 
              <Button label="Info Selengkapnya" variant="primary"/>
              <Button label="Hubungi Panitia" variant="secondary"/>
            </div>
          </div>
          <div className='w-1/3'>
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
              alt=""
            />
          </div>
        </section>

        <section
          id='cards'>
          <div className='w-full'>
            <div>
              <h1 className='text-5xl mb-6 font-semibold text-[#802D43]'>Tentang Invofest</h1>
              <p className='text-sm md:text base lg:text-[1.35rem]'>
                Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika Universitas Harkat Negeri, adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema <b>“Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”</b>. Invofest 2025 menghadirkan berbagai kegiatan menarik seperti kompetisi IT, workshop IT, dan seminar nasional & talkshow dengan para ahli teknologi.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 px-3 py-24'>
              {cardItems.map((item, index) => (
                <Card
                  key={index}
                  className='w-full flex flex-col h-full'>
                  <h3 className='text-2xl text-[#802D43] mb-4 font-bold'>{item.title}</h3>
                  <p>{item.description}</p>
                  <Button
                    label='Info Selengkapnya'
                    variant='primary'
                  />
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id='speaker'
          className='py-24'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-3 w-full'>
            {speakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                name={speaker.name}
                role={speaker.role}
                imageUrl={speaker.imageUrl}
              />
            ))}
          </div>
        </section>

        <section
          id='seminar'
          className='py-10 flex gap-10 justify-between items-center'
        >
          <div className='w-1/3'>
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
              alt=""
            />
          </div>
          <div className='w-2/3 flex flex-col gap-6'>
            <h1 className='text-5xl text-[#802D43] font-semibold'>IT Seminar</h1>
            <p className='text-sm md:text base lg:text-[1.35rem]'>
              Seminar Nasional Teknologi Informasi ini mengangkat tema <b>"Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.”</b>Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.
            </p>
            <div className='flex gap-3'> 
              <Button label="Daftar IT Seminar" variant="primary" />
            </div>
          </div>
        </section>

        <section
          id='talkshow'
          className='py-10 flex gap-10 justify-between items-center'
        >
          <div className='w-2/3 flex flex-col gap-6'>
            <h1 className='text-5xl text-[#802D43] font-semibold'>IT Talkshow</h1>
            <p className='text-sm md:text base lg:text-[1.35rem]'>
              Talkshow berskala nasional: “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan.” Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia. Talkshow ini bertujuan untuk menginspirasi generasi muda dan para penggiat teknologi untuk tidak hanya menjadi pengguna, tetapi juga menjadi arsitek masa depan digital yang lebih manusiawi. Mari bergabung untuk meningkatkan pengetahuan, mengembangkan potensi diri, dan menjadi bagian dari dialog penting dalam membentuk era kolaborasi manusia dan AI.
            </p>
            <div className='flex gap-3'> 
              <Button label="Daftar IT Talkshow" variant="primary" />
            </div>
          </div>
          <div className='w-1/3'>
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
              alt=""
            />
          </div>
        </section>

        <section
          id='workshop'
          className='py-10 flex gap-10 justify-between items-center'
        >
          <div className='w-1/2'>
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
              alt=""
            />
          </div>
          <div className='w-2/3 flex flex-col gap-6'>
            <h1 className='text-5xl text-[#802D43] font-semibold'>IT Workshop</h1>
            <p className='text-sm md:text base lg:text-[1.35rem]'>
              Workshop "AI for a Sustainable Future: The Role of Z Generation in the Digital Era” ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.
            </p>
            <div className='flex gap-3'> 
              <Button label="Daftar IT Workshop" variant="primary" />
            </div>
          </div>
        </section>

        <section
          id='competition'
          className='bg-red-50 w-full py-10'
        >
          <div className= 'max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10 justify-between items-center w-full'>
            <div className='w-2/3 flex flex-col gap-6'>
              <h1 className='text-5xl text-[#802D43] font-semibold'>IT Competition</h1>
              <p className='text-sm md:text base lg:text-[1.35rem]'>
                <b>"From Creation to Innovation"</b> adalah sebuah kompetisi IT yang dirancang untuk menjembatani jurang antara ide kreatif dan inovasi nyata. Ajang ini menantang para talenta digital untuk tidak hanya menciptakan sesuatu yang baru, tetapi juga mengembangkannya menjadi solusi yang berdampak, berkelanjutan, dan bernilai guna tinggi.
              </p>
              <div className='flex gap-3'>
                <Button label="Daftar IT Competition" variant="primary"  />
              </div>
            </div>
            <div className='w-2/3'>
              <img
                src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
                alt=""
              />
            </div>
          </div>
        </section>

        <section
          id='collapse'
          className='py-24'>
          <div className='w-full mx-auto mt-4'>
            <div className='flex flex-col justify-center items-center'>
              <span className='text-1xl font-bold  text-gray-500'>FAQ</span>
              <h1 className='text-4xl font-bold'>Punya Pertanyaan? Lihat </h1>
              <span className='text-4xl font-bold  text-red-900'>Disini</span>
              <p className='text-base text-gray-600 mt-5'>Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat melihat daftar pertanyaan di bawah ini.</p>
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
    </>
  );
}

export default App;
