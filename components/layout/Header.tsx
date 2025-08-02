const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex flex-row sm:flex-col items-center justify-between gap-4">
        <a href="/" className="text-2xl font-bold text-[#34967C]">
          alx
        </a>

        <nav className="flex flex-wrap gap-4 text-sm text-gray-700">
          <a href="#" className="hover:text-[#34967C] transition">
            Rooms
          </a>
          <a href="#" className="hover:text-[#34967C] transition">
            Mansion
          </a>
          <a href="#" className="hover:text-[#34967C] transition">
            Countryside
          </a>
          <a href="#" className="hover:text-[#34967C] transition">
            Apartments
          </a>
        </nav>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search accommodations..."
            className="border  rounded-md px-3 py-1 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-[#34967C]"
          />
          <div className="flex gap-2">
            <a
              href="#"
              className="px-4 py-1 border border-[#34967C] text-[#34967C] rounded hover:bg-[#34967C] hover:text-white transition"
            >
              Sign In
            </a>
            <a
              href="#"
              className="px-4 py-1 bg-[#34967C] text-white rounded hover:bg-[#26765F] transition"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
