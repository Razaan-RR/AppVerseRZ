import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import logo from '../assets/logo.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="bg-white shadow">
      <div className="flex justify-between items-center px-2 sm:px-14 py-2">
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <img className="w-5 h-5 sm:w-6 sm:h-6" src={logo} alt="logo" />
          <Link
            to="/"
            className="text-[#9F62F2] font-bold text-sm sm:text-base truncate max-w-[120px] sm:max-w-full"
          >
            AppVerseRZ
          </Link>
          <div className="lg:hidden ml-1">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    menuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden lg:flex space-x-4 font-semibold text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-2 py-1 border-b-2 border-transparent hover:text-[#632EE3] hover:border-[#632EE3] ${
                isActive ? '!text-[#632EE3] !border-[#632EE3]' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/apps"
            className={({ isActive }) =>
              `px-2 py-1 border-b-2 border-transparent hover:text-[#632EE3] hover:border-[#632EE3] ${
                isActive ? '!text-[#632EE3] !border-[#632EE3]' : ''
              }`
            }
          >
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            className={({ isActive }) =>
              `px-2 py-1 border-b-2 border-transparent hover:text-[#632EE3] hover:border-[#632EE3] ${
                isActive ? '!text-[#632EE3] !border-[#632EE3]' : ''
              }`
            }
          >
            Installation
          </NavLink>
        </div>

        <div className="flex items-center">
          <div className="hidden lg:block">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn bg-black text-white border-black bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-sm">
                <svg
                  aria-label="GitHub logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                  ></path>
                </svg>
                Contribute
              </button>
            </a>
          </div>

          <div className="lg:hidden flex-shrink-0 ml-1">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn text-xs px-1 py-1 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] truncate max-w-[80px]">
                Contribute
              </button>
            </a>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white px-2 py-2 flex flex-col space-y-2">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `px-2 py-1 border-b-2 border-transparent hover:text-[#632EE3] hover:border-[#632EE3] ${
                isActive ? '!text-[#632EE3] !border-[#632EE3]' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/apps"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `px-2 py-1 border-b-2 border-transparent hover:text-[#632EE3] hover:border-[#632EE3] ${
                isActive ? '!text-[#632EE3] !border-[#632EE3]' : ''
              }`
            }
          >
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `px-2 py-1 border-b-2 border-transparent hover:text-[#632EE3] hover:border-[#632EE3] ${
                isActive ? '!text-[#632EE3] !border-[#632EE3]' : ''
              }`
            }
          >
            Installation
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Navbar
