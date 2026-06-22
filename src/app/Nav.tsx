"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="px-6 py-4 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-800">bestaitutoring.com</span>

        {/* Desktop links — hidden below sm */}
        <div className="hidden sm:flex items-center gap-6">
          <a href="#definition" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">My Definition</a>
          <a href="#ruled-out" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Ruled Out</a>
          <a href="#top-picks" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Top Picks</a>
          <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</a>
        </div>

        {/* Hamburger — visible below sm */}
        <button
          className="sm:hidden p-1 text-gray-600 hover:text-gray-900 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden border-t border-gray-100 px-6 py-3 flex flex-col gap-1">
          <a href="#definition" onClick={() => setOpen(false)} className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-2">My Definition</a>
          <a href="#ruled-out" onClick={() => setOpen(false)} className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-2">Ruled Out</a>
          <a href="#top-picks" onClick={() => setOpen(false)} className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-2">Top Picks</a>
          <a href="#about" onClick={() => setOpen(false)} className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-2">About</a>
        </div>
      )}
    </nav>
  );
}
