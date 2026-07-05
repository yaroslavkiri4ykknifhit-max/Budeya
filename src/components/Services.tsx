import React from 'react';
import { Briefcase, Users, FileCheck, Building2, Plane, Scale } from 'lucide-react';

export default function Services({ dict }: { dict: any }) {
  return (
    <section className="w-full bg-light-gray py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">-- {dict.nav.services}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{dict.services.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{dict.services.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* B2B Services */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{dict.services.b2b.title}</h3>
            <p className="text-gray-500 mb-6 font-medium">{dict.services.b2b.subtitle}</p>
            <ul className="space-y-4">
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

          {/* B2C Services */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Users className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{dict.services.b2c.title}</h3>
            <p className="text-gray-500 mb-6 font-medium">{dict.services.b2c.subtitle}</p>
            <ul className="space-y-4">
              {dict.services.b2c.list.map((item: string, idx: number) => (
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
