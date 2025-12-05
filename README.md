page.tsx read book
import BookRow from "@/component/book/BookRow";

export default function BookList() {
  const books = [
    {
      id: 1,
      cover: "/bird.jpg",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      totalPages: 200,
    },
    {
      id: 2,
      cover: "/don.jpg",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      totalPages: 250,
    },
    {
      id: 3,
      cover: "/wild.jpg",
      title: "1984",
      author: "George Orwell",
      totalPages: 180,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white shadow rounded-2xl p-6 mt-20">
      <h1 className="text-2xl font-bold mb-4 text-gray-600">Book list</h1>

      {/* Table header */}
      <div className="grid grid-cols-4 px-4 py-4 text-gray-500 font-medium border-b bg-white">
        <p>Cover</p>
        <p>Title</p>
        <p>Author</p>
        <p>Progress</p>
      </div>

      {books.map((b) => (
        <BookRow key={b.id} book={b} />
      ))}
    </div>
  );
}






page.tsx writer
import WriterItem from "@/component/WriterItem";
import writers from "@/data/writers";

export default function WritersPage() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Writers</h1>

      <div className="space-y-3">
        {writers.map((w) => (
          <WriterItem key={w.id} writer={w} />
        ))}
      </div>
    </div>
  );
}




home page 
page.tsx
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
