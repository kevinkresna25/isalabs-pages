export function Rules() {
  const rules = [
    {
      nomor: 1,
      description:
        "Seluruh kelompok wajib mematuhi ketentuan dan peraturan yang berlaku.",
    },
    {
      nomor: 2,
      description:
        "Setiap kelompok maksimal menemukan dan mengeksploitasi 5 kerentanan.",
    },
    {
      nomor: 3,
      description:
        "Usahakan setiap kelompok menemukan kerentanan yang berbeda. Jika menemukan kerentanan yang sama, gunakan payload atau teknik yang berbeda.",
    },
    {
      nomor: 4,
      description:
        'Untuk menghindari kerentanan yang sama dengan kelompok lain, silakan hubungi kontak WA terlebih dahulu: [<a href="https://wa.me/6281336827475?text=%61%70%61%6b%61%68%20%6b%65%72%65%6e%74%61%6e%61%6e%20%2e%2e%2e%20%64%69%20%70%6f%72%74%20%2e%2e%2e%0a%73%75%64%61%68%20%64%69%20%65%6b%73%70%6c%6f%72%65%20%6b%65%6c%6f%6d%70%6f%6b%20%6c%61%69%6e%3f" style="color: #3b82f6; text-decoration: none;" onmouseover="this.style.color=\'#2563eb\'" onmouseout="this.style.color=\'#3b82f6\'" target="_blank">WhatsApp</a>].',
    },
    {
      nomor: 5,
      description:
        'Jika berhasil melakukan pentest dan menemukan kerentanan pada WebApp Playground, segera hubungi kontak WA berikut untuk konfirmasi: [<a href="https://wa.me/6281336827475?text=%6b%61%6d%69%20%64%61%72%69%20%6b%65%6c%6f%6d%70%6f%6b%20%3a%20%2e%2e%2e%0a%70%6f%72%74%20%77%65%62%61%70%70%20%3a%20%2e%2e%2e%0a%0a%6a%65%6e%69%73%20%6b%65%72%65%6e%74%61%6e%61%6e%3a%0a%31%2e%20%2e%2e%2e%0a%32%2e%20%2e%2e%2e%0a%33%2e%20%2e%2e%2e" style="color: #3b82f6; text-decoration: none;" onmouseover="this.style.color=\'#2563eb\'" onmouseout="this.style.color=\'#3b82f6\'" target="_blank">WhatsApp</a>].',
    },
    {
      nomor: 6,
      description:
        "Jika terdapat jejak exploitasi dari kelompok lain, artinya kerentanan tersebut sudah dieksplorasi oleh kelompok lain. Sebaiknya cari kerentanan yang lain.",
    },
    {
      nomor: 7,
      description:
        "Disarankan untuk tidak menggunakan data asli saat berada di WebApp Playground.",
    },
    {
      nomor: 8,
      description:
        "Dilarang menyerang target selain WebApp Playground dan port yang sudah disediakan di LABs ini.",
    },
    {
      nomor: 9,
      description:
        "Dilarang melakukan penyerangan atau eksploitasi terhadap sistem utama yang dapat berdampak pada konfidensialitas, integritas, dan/atau ketersediaan data dalam bentuk apapun.",
    },
    {
      nomor: 10,
      description:
        "Dilarang menggunakan teknik serangan yang dapat merusak infrastruktur jaringan atau server (misalnya, DDoS).",
    },
    {
      nomor: 11,
      description:
        "Kelompok yang terindikasi melakukan pelanggaran akan diberikan sanksi berupa <strong>PEMBLOKIRAN IP</strong> selama 1 hari.",
    },
  ];

  return (
    <>
      <h2 className="text-4xl font-bold py-0">Rules</h2>
      <div className="divider"></div>
      <div className="grid gap-4">
        <ul className="space-y-4 w-full ">
          {rules.map((rule, index) => (
            <li
              key={index}
              className="p-4 bg-slate-800 hover:bg-cyan-900 rounded shadow-md"
            >
              <div className="flex">
                <span className="font-semibold mr-2">{rule.nomor}.</span>
                <div className="flex flex-col">
                  <span
                    className="text-left"
                    dangerouslySetInnerHTML={{ __html: rule.description }}
                  ></span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
