import { Link } from "react-router-dom"

const NavBar = ({ goHome }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar w-full bg-gray-700 p-4">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 p-2">
            {
              goHome ? 
              <button onClick={goHome} className="font-bold text-lg bg-gradient-to-br from-yellow-300 to-red-600 text-transparent bg-clip-text">
                Random episodes
              </button> :
              <Link className="font-bold text-lg bg-gradient-to-br from-yellow-300 to-red-600 text-transparent bg-clip-text" to="/">
                Random episodes
              </Link>
            }
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="flex space-x-4 items-center">
              <li className="">
                <Link to="/about" className="text-white bg-gray-600 hover:bg-gray-800 font-medium rounded-lg px-5 py-2.5 cursor-pointer">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white bg-gray-600 hover:bg-gray-800 font-medium rounded-lg px-5 py-2.5 cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side z-40">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4 text-xl">
          {/* Sidebar content here */}
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar