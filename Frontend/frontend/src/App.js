import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Search, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';

function App() {
  const [certId, setCertId] = useState(''); // لتخزين الرقم الذي تكتبينه
  const [result, setResult] = useState(null); // لتخزين بيانات الشهادة إذا وُجدت
  const [loading, setLoading] = useState(false); // لحالة الانتظار

  const handleVerify = async () => {
    if (!certId) return alert("Please enter a Certificate ID");
    
    setLoading(true);
    setResult(null);

    try {
      // هذا هو "العصب" الذي يربط بالباك إند
      const response = await fetch(`http://localhost:5000/api/verify/${certId}`);
      const data = await response.json();

      if (response.ok) {
        setResult({ success: true, ...data });
      } else {
        setResult({ success: false, message: data.message || "Certificate not found" });
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
        <p className="text-gray-400 mb-10">Verify any certificate issued by our platform</p>

        {/* مربع البحث */}
        <div className="flex bg-[#111] border border-gray-800 rounded-xl overflow-hidden p-2 max-w-xl mx-auto">
          <input 
            type="text" 
            placeholder="Enter ID (e.g. AUTH-101)" 
            className="w-full bg-transparent p-3 outline-none"
            value={certId}
            onChange={(e) => setCertId(e.target.value)}
          />
          <button 
            onClick={handleVerify}
            className="bg-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all"
          >
            {loading ? "Searching..." : "Verify"}
          </button>
        </div>

        {/* عرض النتائج */}
        {result && (
          <div className={`mt-10 p-6 rounded-2xl border ${result.success ? 'border-green-500/30 bg-green-500/5' : 'border-red-500/30 bg-red-500/5'}`}>
            {result.success ? (
              <div className="text-left">
                <div className="flex items-center gap-2 text-green-400 font-bold mb-4">
                  <CheckCircle2 /> Valid Certificate Found
                </div>
                <p className="text-sm text-gray-400">Student Name:</p>
                <p className="text-xl font-bold mb-2">{result.studentName}</p>
                <p className="text-sm text-gray-400">University:</p>
                <p className="text-lg">{result.university}</p>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-red-400">
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