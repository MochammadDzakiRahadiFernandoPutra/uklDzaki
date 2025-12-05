import writers from "@/data/writers";
type ParamsType = Promise<{
  id: string
}>

export default async function WriterDetail({ params }: { params: ParamsType }) {
        // ⬅ debug
  console.log("ALL IDS:", writers.map(w => w.id)); // ⬅ debug
    const {id } = await params;
  const writer = writers.find((w) => w.id === id);

  if (!writer) {
    return (
      <div className="p-6">
        <p className="text-red-500 font-semibold">Writer not found.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Writer</h1>

      <div className="p-6 border rounded-xl shadow bg-white">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={writer.avatarUrl}
            className="w-14 h-14 rounded-full"
          />

          <div>
            <p className="text-xl text-black font-semibold">{writer.name}</p>
            <p className="text-gray-600">
              {writer.followers.toLocaleString()} followers
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">{writer.bio}</p>
      </div>
    </div>
  );
}
