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
