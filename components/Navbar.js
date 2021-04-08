import Link from "next/link";

function Navbar() {
  return (
    <nav className="grid grid-rows-5 h-screen shadow-md text-gray-500">
      {/* Dashboard */}
      <div className="m-0 cursor-pointer h-full w-full border-2 flex justify-center items-center hover:text-blue-600 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <Link href="/">Dashboard</Link>
      </div>
      {/*staff profile   */}
      <div className="m-0 cursor-pointer h-full w-full border-2 flex justify-center items-center hover:text-blue-600 ">
      
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>

        <Link href="/User">Staff Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;
