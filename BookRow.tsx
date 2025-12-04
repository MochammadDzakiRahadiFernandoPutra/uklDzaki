"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function BookRow({ book }: { book: any }) {
  const [page, setPage] = useState(0);

  const progressPercent = Math.min(100, Math.round((page / book.totalPages) * 100));

  const getProgressLabel = () => {
    if (progressPercent <= 25) return "First quarter";
    if (progressPercent <= 50) return "First half";
    if (progressPercent <= 75) return "Third quarter";
    return "Final quarter";
  };

  return (
    <div className="grid grid-cols-4 items-center py-4 px-2 border-b bg-white">

      {/* Cover */}
      <img
        src={book.cover}
        className="w-12 h-12 rounded-md object-cover border"
      />

      {/* Title */}
      <p className="font-semibold text-gray-900">{book.title}</p>

      {/* Author */}
      <p className="text-gray-700">{book.author}</p>

      {/* Progress section */}
      <div className="flex items-center gap-3">
        {/* Bar */}
        <div className="w-24 h-2 bg-red-500 rounded-full overflow-hidden transition-all">
          <div
            className="h-full bg-gray-700 rounded-full transition-all"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Label */}
        <p className="text-sm text-gray-600 w-24">{getProgressLabel()}</p>

        {/* Button */}
        <button
          onClick={() => setPage(page + 1)}
          className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center hover:bg-red-600 transition-colors"
        >
          <Plus size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
