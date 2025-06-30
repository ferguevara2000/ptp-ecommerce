"use client";

export function TopHeaderBar() {
  return (
    <div className="bg-slate-900 text-white text-xs sm:text-sm tracking-wide">
      <div className="container mx-auto px-4 flex justify-center sm:justify-between items-center h-auto py-1">
        <div className="flex items-center text-center sm:text-left max-w-full sm:max-w-none">
          <span className="cursor-pointer hover:text-gray-300">
            🚚 We ship in 24 hours or less. Have a question? Text us at (555) 123-4567 • Hablamos Español
          </span>
        </div>
      </div>
    </div>
  );
}
