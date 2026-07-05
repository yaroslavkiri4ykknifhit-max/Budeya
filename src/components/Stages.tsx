import React from 'react';
import { FileText, Users, UserCheck, FileSignature, MapPin, ShieldCheck } from 'lucide-react';

export default function Stages({ dict }: { dict: any }) {
  if (!dict.stages) return null;

  const icons = [
    <FileText size={48} className="text-blue-500" strokeWidth={1.5} />,
    <Users size={48} className="text-blue-500" strokeWidth={1.5} />,
    <UserCheck size={48} className="text-blue-500" strokeWidth={1.5} />,
    <FileSignature size={48} className="text-blue-500" strokeWidth={1.5} />,
    <MapPin size={48} className="text-blue-500" strokeWidth={1.5} />,
    <ShieldCheck size={48} className="text-blue-500" strokeWidth={1.5} />
  ];

  return (
    <section className="w-full bg-white py-24 border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight uppercase">
            {dict.stages.title}
          </h2>
          <div className="w-32 h-1.5 bg-primary mx-auto rounded-full"></div>
          {/* subtle line across */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -z-10 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {dict.stages.steps.map((step: any, index: number) => (
            <div key={index} className="flex flex-col items-center text-center group h-full">
              
              <div className="h-16 flex items-end justify-center mb-2">
                <h3 className="font-bold text-gray-900 text-lg sm:text-base md:text-lg uppercase tracking-wider group-hover:text-primary transition-colors leading-tight">
                  {step.title}
                </h3>
              </div>
              <span className="text-gray-400 font-bold text-lg mb-6 block">
                0{index + 1}
              </span>
              
              <div className="w-32 h-32 mb-8 relative flex items-center justify-center">
                {/* Background decorative blob/circle */}
                <div className="absolute inset-0 bg-blue-50 rounded-full group-hover:scale-110 transition-transform duration-500 ease-out"></div>
                <div className="absolute inset-2 bg-gradient-to-tr from-blue-100 to-white rounded-full shadow-inner"></div>
                
                {/* Icon */}
                <div className="relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                  {icons[index]}
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed max-w-[200px]">
                {step.desc}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
