export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="grid lg:w-8/12 md:w-10/12 self-center text-center gap-8 mx-4">
          <div className="items-center">
            <h2 className="text-4xl font-bold">Welcome</h2>

            <div className="divider"></div>
            <p className="text-justify mb-6">
              ISA LABs adalah sebuah lab WebApp yang dirancang khusus
              untuk pembelajaran dan praktik pentesting, 
              <strong> khususnya digunakan sebagai lab pentesting untuk UAS Information Security and Assurance (ISA)</strong>.
              Di sini, Anda dapat mengeksplorasi berbagai teknik eksploitasi dan keamanan web dalam lingkungan Playground 
              yang sudah kami sediakan. Sebelum mencoba lab, harap baca dan patuhi 
              <a href="/rules" className="font-bold text-blue-400 hover:text-blue-600"> Rules </a> kami.
            </p>
            <p className="text-justify mb-6">
              Untuk pemula yang ingin mempelajari dasar-dasar pentesting, kami
              merekomendasikan dua lab kami: <strong>TIWAP</strong> dan <strong>VulnLab</strong>. Kedua lab ini
              dirancang untuk memberikan pengalaman belajar yang mudah dan praktis. <strong>TIWAP</strong> memiliki total 66 lab 
              yang terbagi dalam level low, medium, dan hard. Sedangkan <strong>VulnLab</strong> memiliki total 52 lab yang siap digunakan.
            </p>
            <p className="text-justify">
              Selain itu, kami juga menyediakan layanan hosting untuk WebApp
              Anda di platform kami. Jika Anda tertarik, silakan hubungi 
              <a href="https://wa.me/6281336827475?text=%6b%61%6d%69%20%64%61%72%69%20%6b%65%6c%6f%6d%70%6f%6b%20%2e%2e%2e%0a%69%6e%67%69%6e%20%6d%65%6e%67%68%6f%73%74%69%6e%67%20%77%65%62%41%70%70%20%6b%61%6d%69%20%64%69%20%50%6c%61%74%66%6f%72%6d%20%49%53%41%20%4c%41%42%73%2e" target="_blank" className="font-bold text-blue-400 hover:text-blue-600"> Kami </a>
              untuk informasi lebih lanjut. (<strong>Syarat dan Ketentuan Berlaku</strong>).
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
