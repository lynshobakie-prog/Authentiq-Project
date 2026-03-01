import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Search, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';

function App() {
  const [certId, setCertId] = useState('');
  const [searchType, setSearchType] = useState('Course'); // النوع الافتراضي هو كورس
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!certId) return alert("Please enter an ID");
    
    setLoading(true);
    setResult(null);

    try {
      // نرسل النوع المختاد (type) مع الرقم (id) للسيرفر
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
        <h1 className="text-4xl font-bold mb-4">Blockchain Verification</h1>
        <p className="text-gray-400 mb-10">Verify any certificate by selecting the type and entering the ID</p>

        <div className="flex flex-col md:flex-row bg-[#111] border border-gray-800 rounded-xl overflow-hidden p-2 max-w-2xl mx-auto gap-2">
          {/* قائمة اختيار النوع */}
          <select 
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="bg-[#1a1a1a] text-white p-3 outline-none rounded-lg border border-gray-700 cursor-pointer"
          >
            <option value="University">University Degree</option>
            <option value="Course">Professional Course</option>
          </select>

          <input 
            type="text" 
            placeholder="Enter ID (e.g. AUTH-101)" 
            className="flex-1 bg-transparent p-3 outline-none"
            value={certId}
            onChange={(e) => setCertId(e.target.value)}
          />
          
          <button 
            onClick={handleVerify}
            className="bg-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
          >
            {loading ? "Searching..." : <><Search size={18} /> Verify</>}
          </button>
        </div>

        {/* عرض النتائج */}
        {result && (
          <div className={`mt-10 p-6 rounded-2xl border text-left max-w-xl mx-auto ${result.success ? 'border-green-500/30 bg-green-500/5' : 'border-red-500/30 bg-red-500/5'}`}>
            {result.success ? (
              <div>
                <div className="flex items-center gap-2 text-green-400 font-bold mb-4">
                  <CheckCircle2 /> Valid Certificate Found
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-xs text-gray-500 uppercase">Student Name</p>
                        <p className="text-lg font-semibold">{result.studentName}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase">Category</p>
                        <p className="text-lg font-semibold">{result.category}</p>
                    </div>
                    <div className="col-span-2 border-t border-gray-800 pt-2">
                        <p className="text-xs text-gray-500 uppercase">Organization</p>
                        <p className="text-lg">{result.university || result.universityName || result.providerName}</p>
                    </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-red-400 justify-center">
                <AlertCircle /> {result.message}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;