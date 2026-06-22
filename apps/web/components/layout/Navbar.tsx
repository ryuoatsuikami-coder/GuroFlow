export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="text-2xl font-bold text-blue-600">
          GuroFlow
        </div>

        <div className="hidden gap-8 text-sm font-medium text-slate-700 md:flex">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Library</a>
          <a href="#">Pricing</a>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          Login
        </button>

      </div>
    </nav>
  );
}