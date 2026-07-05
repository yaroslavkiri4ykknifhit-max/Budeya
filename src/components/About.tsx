import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function About({ dict }: { dict: any }) {
  return (
    <section className="w-full bg-light-gray py-24 pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 relative w-full aspect-square max-w-lg">
            <div className="bg-gradient-to-tr from-primary to-primary-light rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden h-full min-h-[400px]">
              <img 
                src="./images/about.jpg" 
                alt="Team discussing" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
              <div className="text-4xl font-bold text-primary mb-1">100%</div>
              <div className="text-gray-600 font-medium">{dict.nav.advantages}</div>
            </div>
          </div>

          <div className="flex-1">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">-- {dict.nav.advantages}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{dict.about.title}</h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              {dict.about.desc1}
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              {dict.about.desc2}
            </p>

            <div className="space-y-6 mb-10">
              {dict.about.features.map((feature: any, idx: number) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center flex-shrink-0 text-primary font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary transition-colors flex items-center gap-2 group">
              {dict.about.button}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
