import React, { useState, useEffect } from 'react'
import { FaBell, FaEnvelope, FaArrowRight, FaStar } from "react-icons/fa"
import { MdOutlineAdd } from "react-icons/md"
import { LuMoreVertical } from "react-icons/lu"
import { TfiEmail } from "react-icons/tfi"
import { BsLightningFill } from "react-icons/bs"
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx"
import logo from "../assets/logo.png"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      <nav className={`bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between px-4 py-4">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-[30px] md:h-[25px] " />
            <div className="flex space-x-4 mx-4 md:mx-3 text-gray-600 dark:text-gray-300">
              <div className="relative group">
                <button className="hover:text-black border-l-2 border-gray-300 h-full pl-4 md:pl-2 dark:hover:text-white">
                  My Apps
                </button>
              </div>
              <a href="#" className="hover:text-black border-l-2 border-gray-300 pl-4 md:pl-2  dark:hover:text-white">Home</a>
              <a href="#" className="hover:text-black border-l-2 border-gray-300 pl-4 md:pl-2  dark:hover:text-white">Explore</a>
            </div>
          </div>

          <div className="flex-1 max-w-lg mx-4">
            <input
              type="text"
              placeholder="Search for contacts and more..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center space-x-7">
            <div className="flex items-center text-gray-600 dark:text-gray-300 space-x-4">
              <div className="relative flex items-center">
                <FaBell className="w-4 h-4" />
                <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs rounded-full px-1">11</span>
              </div>
              <TfiEmail className="w-4 h-4" />
              <div className="relative flex items-center">
                <BsLightningFill className="w-4 h-4" />
                <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs rounded-full px-1">14</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 md:space-x-2 ">
              <div className="flex items-center space-x-2">
                <img
                  src="https://d3qsvir2x44t6z.cloudfront.net/staging/storage/users/2178/avatars/square/data?1729505581"
                  alt="User profile"
                  className="w-7 h-7 rounded-md"
                />
                <span className="text-gray-900 dark:text-white font-semibold md:hidden lg:block  ">Yael Adamson-Brown</span>
              </div>

              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 md:px-2 rounded-lg flex items-center space-x-2 md:space-x-1">
                <MdOutlineAdd className="w-5 h-5 md:w-4 md:h-4" />
                <span  className='md:text-sm'>Create</span>
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white py-2 px-4 md:px-2 rounded-lg flex items-center space-x-2 md:space-x-1">
                <FaStar className="w-4 h-4 md:w-4 md:h-4" />
                <span className='md:text-sm'>Upgrade</span>
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white py-2 px-4 md:px-2 rounded-lg flex items-center space-x-2 md:space-x-1">
                <LuMoreVertical className="w-4 h-4" />
                <span className='md:text-sm'>More</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center justify-between px-4 py-4">
          <button onClick={toggleMenu} className="text-gray-600 dark:text-gray-300">
            <RxHamburgerMenu className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-4">
            
            <a href="#" className="text-gray-600 left-12 absolute dark:text-gray-300">Home</a>
            <button className="text-gray-600 dark:text-gray-300">
              <FaBell className="w-5 h-5" />
            </button>
            <button className="text-gray-600 dark:text-gray-300">
              <TfiEmail className="w-5 h-5" />
            </button>
            <button className="text-gray-600 dark:text-gray-300">
              <BsLightningFill className="w-5 h-5" />
            </button>
            <img
              src="https://d3qsvir2x44t6z.cloudfront.net/staging/storage/users/2178/avatars/square/data?1729505581"
              alt="User profile"
              className="w-7 h-7 rounded-md"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed inset-y-0 left-0 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-white dark:bg-gray-800 overflow-y-auto transition duration-300 ease-in-out z-50 md:hidden`}>
       
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <img src={logo} alt="Logo" className="h-[30px]" />
            <button onClick={toggleMenu} className="text-gray-600 dark:text-gray-300">
              <RxCross2 className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 max-w-lg ">
            <input
              type="text"
              placeholder="Search for contacts & more..."
              className="w-full px-2 py-2 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>
          <nav className="space-y-4">
            <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">My Apps</a>
            <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Home</a>
            <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Explore</a>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 mt-4">
              <MdOutlineAdd className="w-5 h-5" />
              <span>Create</span>
            </button>
            <button className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2">
              <FaStar className="w-4 h-4" />
              <span>Upgrade</span>
            </button>
            <button className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2">
              <LuMoreVertical className="w-4 h-4" />
              <span>More</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleMenu}></div>
      )}

      {/* Spacer to prevent content from being hidden under the fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  )
}