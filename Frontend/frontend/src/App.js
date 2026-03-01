import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Search, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';

function App() {
  const [certId, setCertId] = useState('');
  const [searchType, setSearchType] = useState('Course'); 
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!certId) return alert("Please enter an ID");
    
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(`http://localhost:5000/verify?type=${searchType}&id=${certId}`);
      const data = await response.json();

      if (response.ok) {
        setResult({ success: true, ...data });
      } else {
        setResult({ success: false, message: data.message });
      }
    } catch (error) {
      setResult({ success: false, message: "Server is offline. Check your Backend!" });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 pt-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Blockchain Verification
        </h1>
        <p className="text-gray-400 mb-12 text-lg">Secure and instant verification for your digital credentials</p>

        {/* صندوق البحث المطور */}
        <div className="flex flex-col md:flex-row bg-[#111] border border-gray-800 rounded-2xl overflow-hidden p-3 max-w-2xl mx-auto gap-3 shadow-2xl">
          <select 
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="bg-[#1a1a1a] text-white px-4 py-3 outline-none rounded-xl border border-gray-700 cursor-pointer hover:border-blue-500 transition-colors"
          >
            <option value="University">University Degree</option>
            <option value="Course">Professional Course</option>
          </select>

          <input 
            type="text" 
            placeholder="Enter Certificate ID (e.g. AUTH-2026)" 
            className="flex-1 bg-transparent px-4 py-3 outline-none text-lg"
            value={certId}
            onChange={(e) => setCertId(e.target.value)}
          />
          
          <button 
            onClick={handleVerify}
            className="bg-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 active:scale-95"
          >
            {loading ? (
              <span className="animate-pulse">Searching...</span>
            ) : (
              <><Search size={20} /> Verify</>
            )}
          </button>
        </div>

        {/* عرض النتائج - الكرت الفخم */}
        {result && (
          <div className={`mt-12 p-10 rounded-[2.5rem] border-2 transition-all duration-700 transform animate-in fade-in zoom-in-95 slide-in-from-bottom-8
            ${result.success 
              ? 'border-emerald-500/40 bg-emerald-500/5 shadow-[0_0_50px_rgba(16,185,129,0.15)]' 
              : 'border-red-500/40 bg-red-500/5 shadow-[0_0_50px_rgba(239,68,68,0.15)]'}`}>
            
            {result.success ? (
              <div className="text-left relative">
                {/* علامة مائية (الدرع) */}
                <ShieldCheck className="absolute -right-8 -top-8 text-emerald-500/5 w-48 h-48 rotate-12" />
                
                <div className="flex items-center gap-4 text-emerald-400 font-bold mb-8">
                  <div className="bg-emerald-500/20 p-2 rounded-full">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <span className="text-2xl tracking-tight">Authentic Credential Verified</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                  <div className="space-y-1">
                    <p className="text-[10px] text-emerald-500/70 uppercase tracking-[0.2em] font-black">Certificate Holder</p>
                    <p className="text-3xl font-serif font-bold text-white tracking-tight capitalize">
                      {result.studentName}
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-[10px] text-blue-500/70 uppercase tracking-[0.2em] font-black">Credential Type</p>
                    <p className="text-xl text-gray-200 font-medium italic">{result.category}</p>
                  </div>

                  <div className="col-span-1 md:col-span-2 pt-6 border-t border-white/5">
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black mb-2">Issuing Authority</p>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping" />
                      <p className="text-xl text-gray-100 font-semibold tracking-wide">
                        {result.university || result.organization || "Authentiq International Academy"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] text-gray-600 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                    SECURED BY BLOCKCHAIN TECHNOLOGY
                  </div>
                  <div className="bg-white/5 px-3 py-1 rounded-full text-gray-400">
                    CERT-ID: {result.certificateId || "N/A"}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 py-8 text-red-400">
                <div className="bg-red-500/10 p-4 rounded-full">
                  <AlertCircle className="w-12 h-12" />
                </div>
                <p className="text-xl font-bold tracking-tight">{result.message}</p>
                <p className="text-gray-500 text-sm">Please double check the ID or contact the issuer.</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;