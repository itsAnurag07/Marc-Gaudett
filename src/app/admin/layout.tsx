import React from "react";

export const metadata = {
  title: "Admin Dashboard | Marc Gaudett",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f6f5f1] font-sans">
      <header className="bg-white border-b border-[#c5c1b9] py-4 px-8 flex justify-between items-center">
        <h1 className="font-georgia font-bold text-xl text-[#171714]">Admin Dashboard</h1>
        <a href="/" className="text-sm text-[#6B6861] hover:text-black transition-colors">
          &larr; Back to Site
        </a>
      </header>
      <main className="p-8 max-w-5xl mx-auto">
        {children}
      </main>
    </div>
  );
}
