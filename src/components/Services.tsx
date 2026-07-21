import React from 'react';
import { Building2 } from 'lucide-react';

export default function Services({ dict }: { dict: any }) {
  return (
    <section id="services" className="w-full bg-light-gray py-24 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">-- {dict.nav.services}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{dict.services.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{dict.services.desc}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* B2B Services */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto sm:mx-0">
              <Building2 className="text-primary" size={28} />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{dict.services.b2b.title}</h3>
              <p className="text-gray-500 mb-8 font-medium">{dict.services.b2b.subtitle}</p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
              {dict.services.b2b.list.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
