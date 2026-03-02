/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// أزلنا Github من هنا لأنه غير مستخدم، وأبقينا ما تحتاجه الأيقونات الأخرى
import { Twitter, Linkedin, Mail, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-white/5 bg-[#0a0a0a] py-12 overflow-hidden">
      {/* إضاءة خلفية خفيفة جداً للفوتر */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* العمود الأول: اللوجو */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="text-blue-500" size={24} />
              <span className="text-xl font-black tracking-tighter text-white">AUTHENTIQ.</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Securing the future of academic achievements through blockchain technology.
            </p>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">How it works</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Verification</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Institutions</a></li>
            </ul>
          </div>

          {/* العمود الثالث: الشركة */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* العمود الرابع: التواصل الاجتماعي */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-400 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-400 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-400 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* الحقوق السفلية */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Authentiq Blockchain Ecosystem. All rights reserved.
          </p>
          <div className="flex gap-8 text-gray-600 text-xs font-medium">
            <a href="#" className="hover:text-white transition-colors">Status</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;