import React from 'react';
import Navbar from './components/Navbar';
import { Search, ShieldCheck} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      
      {/* الجزء الرئيسي (Hero Section) */}
      <main className="max-w-6xl mx-auto px-6 pt-20 pb-32 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-8 animate-bounce">
          <ShieldCheck size={16} />
          <span>Blockchain Secured Verification</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Verify Certificates <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            Instantly & Securely
          </span>
        </h1>

        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          The global standard for academic and professional credential verification 
          powered by immutable blockchain technology.
        </p>

        {/* مربع البحث الفخم */}
        <div className="relative max-w-2xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative flex items-center bg-[#111] border border-gray-800 rounded-xl overflow-hidden p-2">
            <Search className="ml-4 text-gray-500" size={24} />
            <input 
              type="text" 
              placeholder="Enter Certificate ID (e.g., AUTH-2026-XXXX)" 
              className="w-full bg-transparent border-none focus:ring-0 px-4 py-3 text-lg outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-900/20">
              Verify
            </button>
          </div>
        </div>

        {/* إحصائيات سريعة */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-900 pt-12">
          <div>
            <div className="text-3xl font-bold">1M+</div>
            <div className="text-gray-500 text-sm">Verified Documents</div>
          </div>
          <div>
            <div className="text-3xl font-bold">500+</div>
            <div className="text-gray-500 text-sm">Partner Universities</div>
          </div>
          <div>
            <div className="text-3xl font-bold">0.0s</div>
            <div className="text-gray-500 text-sm">Verification Time</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;