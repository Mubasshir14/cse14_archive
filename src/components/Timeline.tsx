
import { timelineData } from "./timelineData";
import { Infinity } from "lucide-react";

const Timeline = () => {
  return (
    <section id="timeline" className="px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-400 to-blue-400 mb-2 md:mb-4">
            Our Journey Together
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Every moment, every memory, every milestone
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line with Gradient - Desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-500/20 via-purple-500/20 to-blue-500/20 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-b from-rose-500 via-purple-500 to-blue-500 rounded-full opacity-50 blur-sm"></div>
          </div>

          {/* Vertical Line - Mobile */}
          <div className="md:hidden absolute left-4 top-0 w-0.5 h-full bg-gradient-to-b from-rose-500/30 via-purple-500/30 to-blue-500/30"></div>

          {/* Timeline Events */}
          {timelineData.map((item, index) => {
            const isLeft = item.align === "left";

            return (
              <div key={index} className="relative mb-8 md:mb-20 group">
                {/* Desktop Layout */}
                <div
                  className={`hidden md:flex items-center justify-between w-full ${
                    isLeft ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-5/12 ${
                      isLeft ? "text-left pl-12" : "text-right pr-12"
                    }`}
                  >
                    <div
                      className={`relative bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo} p-6 rounded-2xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${item.shadowColor} border border-white/10 backdrop-blur-sm`}
                    >
                      {/* Decorative Corner */}
                      <div className={`absolute ${isLeft ? 'top-0 left-0' : 'top-0 right-0'} w-16 h-16 opacity-20`}>
                        <div className={`absolute ${isLeft ? 'top-2 left-2' : 'top-2 right-2'} w-12 h-12 border-t-2 border-l-2 ${item.borderColor} rounded-tl-xl`}></div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                        {item.title}
                      </h3>

                      {/* Date Badge */}
                      <div className={`inline-block px-4 py-1.5 rounded-full ${item.badgeColor} mb-3`}>
                        <p className="font-semibold text-sm text-white">
                          {item.date}
                        </p>
                      </div>

                      <p className="text-slate-200 leading-relaxed text-sm relative z-10">
                        {item.description}
                      </p>

                      {/* Decorative Glow */}
                      <div className={`absolute inset-0 ${item.glowColor} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}></div>
                    </div>
                  </div>

                  {/* Center Dot with Animation */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-20">
                    <div className={`relative w-12 h-12 bg-slate-900 ${item.borderColor} border-4 rounded-full shadow-lg transition-all duration-500 group-hover:scale-125 flex items-center justify-center`}>
                      {/* Pulsing Ring */}
                      <div className={`absolute inset-0 ${item.borderColor} border-2 rounded-full animate-ping opacity-75`}></div>
                      
                      {/* Inner Glow */}
                      <div className={`w-4 h-4 ${item.dotColor} rounded-full animate-pulse`}></div>
                    </div>
                  </div>

                  <div className="w-5/12"></div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex items-start gap-3 pl-2">
                  {/* Left Side - Dot */}
                  <div className="flex flex-col items-center flex-shrink-0 pt-1">
                    <div className={`relative w-8 h-8 bg-slate-900 ${item.borderColor} border-3 rounded-full shadow-lg flex items-center justify-center z-10`}>
                      {/* Pulsing Ring */}
                      <div className={`absolute inset-0 ${item.borderColor} border rounded-full animate-ping opacity-75`}></div>
                      
                      {/* Inner Glow */}
                      <div className={`w-2.5 h-2.5 ${item.dotColor} rounded-full animate-pulse`}></div>
                    </div>
                  </div>

                  {/* Right Side - Content Card */}
                  <div className="flex-1">
                    <div
                      className={`relative bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo} p-4 rounded-xl shadow-lg border border-white/10 backdrop-blur-sm`}
                    >
                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-10 h-10 opacity-20">
                        <div className={`absolute top-1 right-1 w-8 h-8 border-t-2 border-r-2 ${item.borderColor} rounded-tr-lg`}></div>
                      </div>

                      <h3 className="text-base font-bold text-white mb-1.5 relative z-10 pr-8">
                        {item.title}
                      </h3>

                      {/* Date Badge */}
                      <div className={`inline-block px-3 py-1 rounded-full ${item.badgeColor} mb-2`}>
                        <p className="font-semibold text-xs text-white">
                          {item.date}
                        </p>
                      </div>

                      <p className="text-slate-200 leading-relaxed text-xs relative z-10">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Infinity Section */}
          <div className="relative mt-16 md:mt-32 flex flex-col items-center text-center px-4">
            {/* Glowing Orb Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Infinity Symbol Container */}
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-rose-600 to-purple-600 flex items-center justify-center z-20 shadow-2xl shadow-rose-500/50 animate-pulse border-4 border-white/20">
                <Infinity className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={2.5} />
              </div>
              
              {/* Rotating Ring */}
              <div className="absolute inset-0 border-4 border-transparent border-t-rose-400 border-r-purple-400 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 mt-6 md:mt-8 space-y-3 md:space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-400 to-blue-400">
                Memories Go to Infinity
              </h3>
              <p className="text-slate-300 max-w-md mx-auto leading-relaxed text-sm md:text-base px-4">
                Some journeys never truly end. The memories we created together will
                live on forever, etched in our hearts and minds.
              </p>
              
              {/* Decorative Stars */}
              <div className="flex justify-center gap-2 pt-2 md:pt-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;