import React from "react"

const NavBar = ({ goHome }) => {
  return (
    <nav className="bg-gray-700 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <button onClick={goHome} className="font-bold text-lg bg-gradient-to-br from-yellow-300 to-red-600 text-transparent bg-clip-text">
          Random episodes
        </button>
        <ul className="flex space-x-4">
          <li className="container h-full">
            <button className="text-white bg-gray-600 hover:bg-gray-800 font-medium rounded-lg px-5 py-2.5">
              About
            </button>
          </li>
          <li>
            <button className="text-white bg-gray-600 hover:bg-gray-800 font-medium rounded-lg px-5 py-2.5">
              Contact
            </button>
          </li>
        </ul>

      </div>
    </nav>
  )
}

