import React from 'react'
import { FaLinkedin, FaYoutube, FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white pt-10 pb-4">
      {/* Colorful top bar */}
      <div className="h-2 bg-gradient-to-r from-blue-500 via-green-500 to-pink-500"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Makerble Section */}
          <div>
            <h2 className="text-purple-700 font-bold text-xl mb-4">Makerble</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-700">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Privacy & Cookies</a></li>
            </ul>
          </div>

          {/* Organisations Section */}
          <div>
            <h2 className="text-purple-700 font-bold text-xl mb-4">ORGANISATIONS</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Control Panel</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Discover the Marketplace</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Create Organisation Account</a></li>
            </ul>
          </div>

          {/* Your Account Section */}
          <div>
            <h2 className="text-purple-700 font-bold text-xl mb-4">YOUR ACCOUNT</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Library</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Profile</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Projects</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Help</a></li>
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <h2 className="text-purple-700 font-bold text-xl mb-4">EXPLORE</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Metrics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Networks</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Strategies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Projects</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Surveys</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Tips</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700">Vouchers</a></li>
            </ul>
          </div>

          {/* Follow Section */}
          <div>
            <h2 className="text-purple-700 font-bold text-xl mb-4">FOLLOW THE MAKERBLE STORY</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800"><FaLinkedin size={24} /></a>
              <a href="#" className="text-red-600 hover:text-red-800"><FaYoutube size={24} /></a>
              <a href="#" className="text-pink-600 hover:text-pink-800"><FaInstagram size={24} /></a>
              <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={24} /></a>
              <a href="#" className="text-blue-800 hover:text-blue-900"><FaFacebookF size={24} /></a>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-gray-300 rounded-full p-2 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-gray-600">contact@makerble.com</span>
          </div>
          <div className="flex items-center">
            <div className="bg-gray-300 rounded-full p-2 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-gray-600">020 8123 6233</span>
          </div>
        </div>
      </div>

      {/* Colorful bottom bar */}
      <div className="h-2 bg-gradient-to-r from-blue-500 via-green-500 to-pink-500 mt-8"></div>
    </footer>
  )
}