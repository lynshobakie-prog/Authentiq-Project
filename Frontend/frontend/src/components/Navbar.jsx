import React, { useState } from 'react';
import { Shield, ChevronDown, GraduationCap, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-6 bg-black border-b border-gray-800 text-white">
      <div className="flex items-center gap-2 text-2xl font-bold">
        <Shield className="text-blue-500" /> AUTHENTIQ
      </div>
      
      <div className="flex gap-8 items-center">
        <div className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all"
          >
            Verify Certificate <ChevronDown size={18} />
          </button>
          
          {isOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-[#111] border border-gray-700 rounded-xl shadow-xl z-50 overflow-hidden">
              <button className="flex items-center gap-3 w-full p-4 hover:bg-gray-800 text-sm transition-colors text-left">
                <GraduationCap size={18} className="text-blue-400" /> University Degree
              </button>
              <button className="flex items-center gap-3 w-full p-4 hover:bg-gray-800 text-sm border-t border-gray-800 transition-colors text-left">
                <BookOpen size={18} className="text-green-400" /> Professional Course
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;