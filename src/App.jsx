import React from 'react';
import Navbar from './components/Navbar';
import DarkModeToggle from './components/DarkModeToggle';
import Left from './components/Left';
import Middle from './components/Middle';
import Right from './components/Right';
import Footer from './components/Footer';

const App = () => {
  return (
    <div  className="bg-gray-100 min-h-screen">
      <Navbar /> <div className='md:flex '> <Middle/> <Right/>   <Left/></div>
        
    
    <div className=' -mt-[900px] lg:mt-auto  '>
      <Footer/>
    </div>
      
      
        

    </div>
  );
};

export default App;
