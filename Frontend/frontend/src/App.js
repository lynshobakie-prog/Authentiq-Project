/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ShieldCheck, Search, ArrowRight, CheckCircle2, X, Lock, Mail } from 'lucide-react';

function App() {
  const [certId, setCertId] = useState('');
  const [searchType, setSearchType] = useState('Course'); 
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✨ 1. الحالة الخاصة بفتح وإغلاق النافذة
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVerify = async () => {};

  return (
    <>
      {/* 2. حاوية الموقع الرئيسية */}
      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-blue-500/30 relative">
        
        {/* نمرر وظيفة الفتح للنافبار إذا كان يحتوي على زر Sign In */}
        <Navbar onSignInClick={() => setIsModalOpen(true)} />
        
        <main className="relative">
          {/* 1. قسم الواجهة الرئيسية (Hero Section) */}
          <section id="home" className="relative isolate px-6 pt-14 lg:px-8 min-h-screen flex items-center justify-center">
            
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
              <div 
                style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#10b981] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
              />
            </div>

            <div className="mx-auto max-w-3xl text-center z-10 animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8">
                Verify with <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Confidence.</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl font-medium text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Authentiq provides a tamper-proof blockchain ecosystem for academic and professional credentials. No more fakes, only facts.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                {/* ✨ عند الضغط هنا تفتح النافذة */}
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="group relative bg-white text-black px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-2xl"
                >
                  Get Started Now
                  <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-[-20%] -z-10 transform-gpu overflow-hidden blur-3xl">
              <div 
                style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#3b82f6] to-[#10b981] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" 
              />
            </div>
          </section>

          {/* 2. قسم الـ About */}
          <section id="about" className="relative isolate px-6 py-40 -mt-20 overflow-hidden bg-transparent">
            <div className="mx-auto max-w-7xl relative z-10">
              <div className="text-center mb-24">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
                  Everything is <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent italic font-serif text-6xl md:text-8xl">Connected.</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                  Our ecosystem bridges the gap between institutions and verifyers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group relative p-8 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.06] hover:border-blue-500/50 transition-all duration-700">
                  <div className="mb-8 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <ShieldCheck className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Institutional Security</h3>
                  <p className="text-gray-400 text-sm">Digitize diplomas with zero risk of forgery.</p>
                </div>

                <div className="group relative p-8 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.06] hover:border-emerald-500/50 transition-all duration-700">
                  <div className="mb-8 w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                    <CheckCircle2 className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Smart Credentials</h3>
                  <p className="text-gray-400 text-sm">Your achievements stored in a decentralized vault.</p>
                </div>

                <div className="group relative p-8 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.06] hover:border-purple-500/50 transition-all duration-700">
                  <div className="mb-8 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <Search className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">One-Click Verify</h3>
                  <p className="text-gray-400 text-sm">Verify authenticity in milliseconds through our API.</p>
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-[-10%] -z-10 transform-gpu overflow-hidden blur-3xl">
              <div 
                style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#10b981] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
              />
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* ✨ 3. الـ Modal (منفصل تماماً لضمان الوضوح التام) ✨ */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-6">
          {/* الطبقة الخلفية المغبشة (Overlay) */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300" 
            onClick={() => setIsModalOpen(false)} 
          />
          
          {/* جسم النافذة الواضح (Sharp Modal) */}
          <div className="relative w-full max-w-md bg-[#111111] border border-white/10 rounded-[2.5rem] p-10 shadow-2xl animate-in zoom-in duration-300">
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="relative">
              <h3 className="text-3xl font-black tracking-tighter mb-2 text-white">Welcome Back.</h3>
              <p className="text-gray-400 text-sm mb-8 font-medium italic">Please enter your credentials.</p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 ml-1">Email Address</label>
                  <div className="relative mt-2 group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                    <input 
                      type="email" 
                      placeholder="name@university.edu" 
                      className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-500/50 transition-all text-white" 
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 ml-1">Password</label>
                  <div className="relative mt-2 group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-400 transition-colors" size={18} />
                    <input 
                      type="password" 
                      placeholder="••••••••" 
                      className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-emerald-500/50 transition-all text-white" 
                    />
                  </div>
                </div>

                <button className="w-full bg-white text-black font-black py-4 rounded-2xl text-xs uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5 active:scale-[0.98]">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;