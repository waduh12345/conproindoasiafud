"use client";

import { useState, useRef, useEffect } from "react";
import { IconSearch } from "@tabler/icons-react";

export default function SearchToggle() {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fokus otomatis saat input muncul
  useEffect(() => {
    if (showInput) {
      inputRef.current?.focus();
    }
  }, [showInput]);

  return (
    <div className="relative">
      {!showInput ? (
        <div
          onClick={() => setShowInput(true)}
          className="flex items-center gap-2 text-sm text-gray-800 hover:text-[#A80038] cursor-pointer"
        >
          <IconSearch size={18} />
        </div>
      ) : (
        <input
          ref={inputRef}
          type="text"
          placeholder="Cari..."
          className="border border-gray-300 px-3 py-1 rounded-md text-sm focus:outline-none focus:ring focus:border-[#A80038] transition"
          onBlur={() => setShowInput(false)}
        />
      )}
    </div>
  );
}