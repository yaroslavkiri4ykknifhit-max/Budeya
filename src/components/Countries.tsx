import React from 'react';

export default function Countries({ dict }: { dict: any }) {
  return (
    <section className="w-full bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{dict.countries.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{dict.countries.desc}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
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

            {dict.professions.videoRequirement && (
              <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm">
                <p className="text-blue-900 font-medium text-lg flex items-start sm:items-center">
                  <span className="mr-3 text-2xl block mt-1 sm:mt-0">📹</span>
                  <span>{dict.professions.videoRequirement}</span>
                </p>
              </div>
            )}

            {dict.professions.masseuse && (
              <div className="mt-16 bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 sm:p-12 shadow-lg border border-pink-100 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{dict.professions.masseuse.title}</h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {dict.professions.masseuse.desc}
                  </p>
                </div>
                <div className="w-full md:w-1/3 shrink-0">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 aspect-[3/4]">
                    <img 
                      src="./images/masseuse.jpg" 
                      alt="Professional Masseuse" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Video Section */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 ring-1 ring-black/5 bg-gray-900">
            <video 
              controls
              playsInline
              preload="none"
              poster="./images/video-poster.png"
              className="w-full h-auto aspect-video object-cover"
              src="./videos/promo-video.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

      </div>
    </section>
  );
}
