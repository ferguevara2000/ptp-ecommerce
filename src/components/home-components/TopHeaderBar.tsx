"use client";

export function TopHeaderBar() {
  return (
    <div className="bg-slate-900 text-white text-sm">
      <div className="container mx-auto px-4 flex justify-between items-center h-8">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
            <span>🚚 We ship in 24 hours or less. Have a question? Text us at (555) 123-4567 • Hablamos Español</span>
          </div>
        </div>
      </div>
    </div>
  );
}
