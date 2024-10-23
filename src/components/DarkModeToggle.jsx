import React, { useState, useEffect } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md'; // Moon icon for Dark Mode
import { LuSun } from 'react-icons/lu'; // Sun icon for Light Mode

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode on button click
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Persist dark mode preference in localStorage
  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2  rounded-full bg-gray-300 dark:bg-gray-800 focus:outline-none flex items-center justify-center"
    >
      {darkMode ? (
        <LuSun className="w-6 h-6 text-yellow-500 transition-colors duration-300" />
      ) : (
        <MdOutlineDarkMode className="w-6 h-6 text-gray-800 transition-colors duration-300" />
      )}
      <span className="ml-2">
        {darkMode ? 'Light' : 'Dark'}
      </span>
    </button>
  );
};

export default DarkModeToggle;
