import React from 'react';

export default function Countries({ dict }: { dict: any }) {
  return (
    <section className="w-full bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{dict.countries.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{dict.countries.desc}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {dict.countries.list.map((country: string, index: number) => {
            const flags = [
              "https://flagcdn.com/bd.svg", // Bangladesh
              "https://flagcdn.com/in.svg", // India
              "https://flagcdn.com/ng.svg", // Nigeria
              "https://flagcdn.com/pk.svg", // Pakistan
              "https://flagcdn.com/id.svg"  // Indonesia
            ];
            return (
              <div key={index} className="flex flex-col items-center justify-center p-6 sm:p-8 bg-gray-50 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
                <div className="w-24 h-16 sm:w-32 sm:h-24 mb-6 rounded-md overflow-hidden shadow-sm border border-gray-200 group-hover:scale-105 transition-transform">
                  <img 
                    src={flags[index]} 
                    alt={`${country} flag`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-black text-lg sm:text-2xl text-gray-900 text-center">{country}</h3>
              </div>
            );
          })}
        </div>

        {/* Professions Section */}
        {dict.professions && (
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{dict.professions.title}</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dict.professions.categories.map((cat: any, i: number) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                  <div className="text-5xl mb-6 bg-gray-50 w-20 h-20 flex items-center justify-center rounded-2xl shadow-sm border border-gray-100">
                    {cat.icon}
                  </div>
                  <div className="h-20 flex items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight">{cat.name}</h3>
                  </div>
                  <ul className="space-y-3">
                    {cat.jobs.map((job: string, j: number) => (
                      <li key={j} className="flex items-start text-gray-700 text-lg">
                        <span className="text-primary mr-3 font-bold mt-1">•</span>
                        <span className="leading-tight">{job}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Video Section */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 ring-1 ring-black/5 bg-gray-900">
            <video 
              controls
              playsInline
              preload="none"
              poster="./images/hero.jpg"
              className="w-full h-auto aspect-video object-cover"
              src="./videos/promo-video.mp4" 
            >  Your browser does not support the video tag.
            </video>
          </div>
        </div>

      </div>
    </section>
  );
}
