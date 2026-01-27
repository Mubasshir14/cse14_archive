/* eslint-disable react-hooks/purity */
"use client";
import React, { useState, useEffect } from "react";
import { Heart, Sparkles, GraduationCap } from "lucide-react";

const WelcomeAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 500);
    const timer2 = setTimeout(() => setStep(2), 1500);
    const timer3 = setTimeout(() => setStep(3), 2500);
    const timer4 = setTimeout(() => onComplete(), 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  const startDate = new Date("2023-01-29T09:00:00");

  const calculateDuration = () => {
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      const prevMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        0,
      ).getDate();
      days += prevMonth;
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }

    return { years, months, days, hours, minutes, seconds };
  };

  const [duration, setDuration] = useState(calculateDuration());

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(calculateDuration());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 flex items-center justify-center overflow-hidden px-4"
      style={{ fontFamily: "'Arima', cursive" }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Arima:wght@100..700&display=swap');
        `}
      </style>

      {/* Background dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-rose-500/30 rounded-full animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center w-full max-w-4xl">
        {/* Logo */}
        <div
          className={`mb-6 transition-all duration-1000 ${
            step >= 1
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-75 translate-y-6"
          }`}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 -m-3 sm:-m-4">
              <div className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-rose-500/30 rounded-full animate-ping-slow"></div>
            </div>
            <div className="absolute inset-0 -m-6 sm:-m-8">
              <div className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-pink-500/20 rounded-full animate-ping-slower"></div>
            </div>

            <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl animate-bounce-gentle">
              <GraduationCap size={40} className="text-white animate-wiggle" />
            </div>

            <Sparkles
              className="absolute -top-2 -right-2 text-yellow-400 animate-spin-slow"
              size={18}
            />
            <Sparkles
              className="absolute -bottom-2 -left-2 text-yellow-400 animate-spin-slow"
              size={14}
            />
          </div>
        </div>

        {/* Countdown */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 my-6">
          {Object.entries(duration).map(([key, value]) => (
            <div
              key={key}
              className="bg-slate-800/70 backdrop-blur border border-slate-700 rounded-xl py-3 sm:py-4"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-rose-400">
                {value}
              </div>
              <div className="text-[10px] sm:text-xs uppercase text-slate-400 mt-1">
                {key}
              </div>
            </div>
          ))}
        </div>

        {/* Text */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-3 bg-gradient-to-r from-white via-rose-200 to-pink-300 bg-clip-text text-transparent animate-gradient">
          Where Memories Began
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-2 text-base sm:text-xl text-rose-300">
          <span>with</span>
          <Heart className="text-rose-500 animate-heartbeat" size={20} />
          <span className="font-semibold">CSE 14th Intake</span>
        </div>

        <p className="text-sm sm:text-lg text-slate-400 max-w-md mx-auto mt-4">
          A journey of memories, friendship, and togetherness
        </p>
      </div>
    </div>
  );
};

export default WelcomeAnimation;
