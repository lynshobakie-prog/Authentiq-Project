import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, UserPlus, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 z-[100]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* 1. اللوجو (يسار) - تصغير الحجم قليلًا */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-6 transition-transform duration-300">
            <ShieldCheck className="text-white" size={20} />
          </div>
          <span className="text-lg font-bold tracking-tighter text-white uppercase">Authentiq</span>
        </div>

        {/* 2. الروابط (المنتصف) - خط أصغر ومسافات أضيق */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em]">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          
          <div 
            className="relative group py-5"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-white transition-colors outline-none">
              Categories <ChevronDown size={12} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-[85%] left-0 w-48 bg-[#111] border border-white/10 rounded-xl shadow-xl p-1.5 animate-in fade-in zoom-in-95">
                <a href="#uni" className="block px-3 py-2 hover:bg-white/5 rounded-lg text-[11px] text-gray-400 hover:text-blue-400 uppercase tracking-widest">University</a>
                <a href="#course" className="block px-3 py-2 hover:bg-white/5 rounded-lg text-[11px] text-gray-400 hover:text-emerald-400 uppercase tracking-widest">Courses</a>
              </div>
            )}
          </div>

          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#security" className="hover:text-white transition-colors">Security</a>
        </div>

        {/* 3. زر الحساب (يمين) - شكل أنعم */}
        <div className="hidden md:block">
          <button className="border border-white/10 text-white px-5 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-white hover:text-black transition-all active:scale-95">
            <UserPlus size={14} />
            Join Us
          </button>
        </div>

        {/* زر الموبايل */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* قائمة الموبايل (نحيفة أيضاً) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/5 p-4 flex flex-col gap-3">
          <a href="#home" className="text-gray-400 font-bold uppercase tracking-widest text-[11px]">Home</a>
          <a href="#categories" className="text-gray-400 font-bold uppercase tracking-widest text-[11px]">Categories</a>
          <button className="bg-blue-600 text-white py-2 rounded-lg font-bold uppercase tracking-widest text-[11px] mt-2">Join Us</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;