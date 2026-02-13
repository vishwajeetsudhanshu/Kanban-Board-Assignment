export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-lg font-semibold text-white">
          🚀 KanbanPro
        </h2>

        <p className="text-sm mt-2">
          Simple Kanban board for agile teams.
        </p>

        {/* Company Links */}
        <div className="mt-6">
          <h3 className="text-white font-semibold mb-2">Company</h3>
          <div className="flex justify-center gap-6 text-sm">
            <span className="hover:text-white cursor-pointer">About</span>
            <span className="hover:text-white cursor-pointer">Careers</span>
            <span className="hover:text-white cursor-pointer">Blog</span>
            <span className="hover:text-white cursor-pointer">Contact</span>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} KanbanPro. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
