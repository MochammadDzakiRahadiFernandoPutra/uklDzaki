export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center">
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 px-6 py-16">

        {/* gambar */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-white shadow-lg rounded-2xl p-12 
                          transform transition-all duration-300 ">

            <img
              src="/laptop.jpg"
              alt="Software Engineering Illustration"
              className="w-64 h-64 object-contain md:w-72 md:h-72"
            />
          </div>
        </div>

        {/* isi */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight capitalize">
            software engineering
          </h2>

          <p className="text-gray-600 mb-10 md:mb-12 text-lg leading-relaxed">
            Rekayasa perangkat lunak adalah penerapan prinsip-prinsip rekayasa secara
            sistematis untuk merancang, mengembangkan, menguji, dan memelihara perangkat
            lunak. Disiplin ini berfokus pada solusi berkualitas tinggi yang efisien,
            terstruktur, dan memenuhi kebutuhan pengguna secara menyeluruh.
          </p>

          <p className="font-semibold text-gray-800 text-lg">
            SMK Telkom Malang
          </p>
        </div>
      </section>
    </main>
  );
}
