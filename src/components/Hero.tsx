import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ dict }: { dict: any }) {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-12 pb-24">
      <div className="absolute top-0 right-0 w-1/2 h-[800px] bg-primary/5 rounded-bl-full -z-10 translate-x-1/4 -translate-y-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        <div className="flex-1 pt-12 lg:pt-24 z-10">
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            {dict.hero.title}
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 max-w-xl leading-relaxed font-medium">
            {dict.hero.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex flex-wrap gap-4 pt-4 relative z-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <a href="https://wa.me/375445480808" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20bd5a] hover:scale-110 transition-all shadow-xl">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="https://t.me/alex480808" target="_blank" rel="noopener noreferrer" title="Telegram" className="w-14 h-14 rounded-full bg-[#0088cc] text-white flex items-center justify-center hover:bg-[#007ab8] hover:scale-110 transition-all shadow-xl">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              <a href="https://www.instagram.com/budeya.work/" target="_blank" rel="noopener noreferrer" title="Instagram" className="w-14 h-14 rounded-full bg-[#E1306C] text-white flex items-center justify-center hover:bg-[#c92b60] hover:scale-110 transition-all shadow-xl">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="weixin://dl/chat?alex480808" title="WeChat ID: alex480808" className="w-14 h-14 rounded-full bg-[#07C160] text-white flex items-center justify-center hover:bg-[#06ae56] hover:scale-110 transition-all shadow-xl">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M8.618 1.936C3.868 1.936 0 5.161 0 9.135c0 2.19 1.157 4.148 2.973 5.426-.143.682-.486 1.914-.486 1.914s1.714-.467 2.457-.936c1.129.28 2.37.452 3.674.452.322 0 .638-.02.946-.048-.255-.6-.4-1.258-.4-1.94 0-2.956 2.766-5.353 6.177-5.353h.291c-.512-3.731-4.04-6.714-8.014-6.714zM6.071 5.926c.451 0 .817.366.817.817 0 .452-.366.818-.817.818-.452 0-.818-.366-.818-.818 0-.451.366-.817.818-.817zm5.093 0c.452 0 .817.366.817.817 0 .452-.366.818-.817.818-.451 0-.818-.366-.818-.818 0-.451.367-.817.818-.817zm5.176 4.793c-3.111 0-5.632 2.198-5.632 4.908s2.521 4.908 5.632 4.908c1.07 0 2.08-.28 2.973-.772.632.404 2.222.84 2.222.84s-.325-1.121-.447-1.748c1.439-1.026 2.36-2.585 2.36-4.32 0-2.71-2.521-4.908-5.632-4.908zm-1.892 2.71c.365 0 .66.294.66.66a.661.661 0 0 1-.66.66.66.66 0 0 1-.66-.66c0-.366.295-.66.66-.66zm3.784 0c.365 0 .66.294.66.66a.661.661 0 0 1-.66.66.66.66 0 0 1-.66-.66c0-.366.295-.66.66-.66z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 relative z-10 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-[3rem] transform rotate-3 scale-105 -z-10 blur-sm"></div>
            <img 
              src="./images/hero.jpg" 
              alt="Partnership" 
              className="w-full h-full object-cover rounded-[3rem] shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
