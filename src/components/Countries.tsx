import React from 'react';

export default function Countries({ dict }: { dict: any }) {
  return (
    <section id="countries" className="w-full bg-white py-16 border-t border-gray-100 scroll-mt-28">
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
              {dict.professions.desc && (
                <p className="text-gray-600 max-w-3xl mx-auto mb-6 text-lg">{dict.professions.desc}</p>
              )}
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
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

            {dict.professions.languageRequirement && (
              <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm">
                <p className="text-amber-900 font-medium text-lg flex items-start sm:items-center">
                  <span className="mr-3 text-2xl block mt-1 sm:mt-0">🗣️</span>
                  <span>{dict.professions.languageRequirement}</span>
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
                      src="/images/masseuse.jpg" 
                      alt="Professional Masseuse" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Media Gallery Section */}
        <div className="mt-24 w-full overflow-hidden pb-12">
          <div className="text-center mb-10 px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{dict.countries.media?.title || "Life & Work"}</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          {/* Swipe Hint for Mobile */}
          <div className="flex md:hidden items-center justify-end px-6 mb-4 text-primary/80 animate-pulse">
            <span className="text-sm font-bold uppercase tracking-wider mr-2">{dict.countries.media?.swipeHint || "Swipe to view more"}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </div>
          
          <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-8 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory hide-scrollbar mx-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            
            {/* Main Promo Video */}
            <div className="snap-center shrink-0 w-[80vw] sm:w-[600px] md:w-[800px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 ring-1 ring-black/5 bg-gray-900">
              <video controls playsInline preload="none" poster="/images/video-poster.png" className="w-full h-auto aspect-video object-cover" src="/videos/promo-video.mp4" />
            </div>

            {/* All other videos */}
            {[
              { id: 2, src: '/videos/video-2.mp4', poster: '/images/video-poster-2.png' },
              { id: 3, src: '/videos/video-3.mp4', poster: '/images/video-poster-3.jpeg' },
              { id: 4, src: '/videos/video-4.mov', poster: '/images/video-poster-4.jpg' },
              { id: 5, src: '/videos/video-5.mov', poster: '/images/video-poster-5.jpg' },
              { id: 6, src: '/videos/video-6.mov', poster: '/images/video-poster-6.jpg' },
              { id: 7, src: '/videos/video-7.mov', poster: '/images/video-poster-7.jpg' },
              { id: 8, src: '/videos/video-8.mov', poster: '/images/video-poster-8.jpg' },
              { id: 9, src: '/videos/video-9.mp4', poster: '/images/video-poster-9.jpg' },
            ].map((v) => (
              <div key={v.id} className="snap-center shrink-0 w-[70vw] sm:w-[400px] md:w-[500px] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white/50 ring-1 ring-black/5 bg-gray-900 aspect-video">
                <video controls playsInline preload="none" poster={v.poster} className="w-full h-full object-cover" src={v.src} />
              </div>
            ))}

            {/* All photos */}
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <div key={`photo-${num}`} className="snap-center shrink-0 w-[70vw] sm:w-[400px] md:w-[500px] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white/50 ring-1 ring-black/5 relative group aspect-video">
                 <img src={`/images/gallery-${num}.jpg`} alt={`Agency Life ${num}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
