import { timelineData } from "./timelineData";
import { Infinity } from "lucide-react";

const Timeline = () => {
  return (
    <section id="timeline" className="">
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-slate-800 rounded-full"></div>
        {/* Timeline Events */}
        {timelineData.map((item, index) => {
          const isLeft = item.align === "left";

          return (
            <div key={index} className="relative mb-12">
              <div
                className={`flex items-center justify-between w-full ${
                  isLeft ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-5/12 ${
                    isLeft ? "text-left pl-8" : "text-right pr-8"
                  }`}
                >
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>

                  {/* Date */}
                  <p
                    className={`font-bold text-sm mt-1`}
                    style={{ color: `var(--tw-${item.color}-400)` }}
                  >
                    {item.date}
                  </p>

                  <p className="text-slate-400 mt-2 text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Dot */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-900 border-4 border-${item.color}-500 rounded-full z-10`}
                ></div>

                <div className="w-5/12"></div>
              </div>
            </div>
          );
        })}
        {/* Infinity Dot */}
        <div className="relative mt-20 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-slate-900 border-4 border-rose-500 flex items-center justify-center z-20 shadow-lg shadow-rose-500/30 animate-pulse">
            <Infinity className="w-8 h-8 text-rose-400" />
          </div>
          <p className="mt-6 text-lg font-semibold text-rose-400">
            Memories Go to Infinity
          </p>
          <p className="text-sm text-slate-400 max-w-sm mt-2">
            Some journeys never truly end. The memories we created together will
            live on forever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
