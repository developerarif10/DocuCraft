"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="inline-flex gap-4 flex-col">
      <h2 className="text-red-500 font-bold">Something went wrong!</h2>
      <h2>{error?.message}</h2>
      <button
        className="bg-blue-600 px-4 py-2 text-white rounded-md"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
