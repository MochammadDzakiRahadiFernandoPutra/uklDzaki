"use client";

import { Writer } from "@/data/writers";
import Link from "next/link";
import { useState } from "react";

export default function WriterItem({ writer }: { writer: Writer }) {
  const [following, setFollowing] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 border rounded-xl bg-white shadow-sm
                    max-sm:flex-col max-sm:items-start max-sm:gap-3">

      {/* Left Area → Go to Detail */}
      <Link
        href={`/writers/${writer.id}`}
        className="flex items-center gap-4 flex-1 max-sm:w-full"
      >
        {/* Avatar */}
        <img
          src={writer.avatarUrl}
          className="rounded-full w-12 h-12 sm:w-14 sm:h-14"
        />
        {/* Info */}
        <div className="min-w-0">
          <p className="font-semibold text-base sm:text-lg text-black truncate">
            {writer.name}
          </p>
          <p className="text-sm text-black">
            {writer.followers.toLocaleString()} followers
          </p>
          <p className="text-sm text-gray-500 truncate mt-1">
            {writer.bio}
          </p>
        </div>
      </Link>

      {/* Follow Button */}
      <button
        onClick={() => setFollowing(!following)}
        className={`px-4 py-1 rounded-lg text-sm font-medium w-full sm:w-auto
          ${following ? "bg-gray-300 text-black" : "bg-blue-600 text-white"}
        `}
      >
        {following ? "Following" : "Follow"}
      </button>
    </div>
  );
}
