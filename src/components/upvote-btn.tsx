"use client";

import { useState } from "react";

export default function UpvoteBtn() {
  const [upvoteCount, setUpVoteCount] = useState(0);

  return (
    <button
      onClick={() => {
        setUpVoteCount(upvoteCount + 1);
      }}
      className="bg-blue-500 text-white p-2 mt-10"
    >
      {upvoteCount === 0 ? "⬆️Upvote" : `⬆️${upvoteCount} Upvotes`}
    </button>
  );
}