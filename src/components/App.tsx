/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Heart,
  GraduationCap,
  ChevronDown,
  Star,
  Users,
  Menu,
  X,
} from "lucide-react";
import WelcomeAnimation from "./Welcomeanimation";
import Timeline from "./Timeline";
import { memories } from "./memoriesData";

const App = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [daysPassed, setDaysPassed] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState<any>(null);

  const startDate = new Date("2023-01-29");
  const intakeDay = new Date("2026-01-29");

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();
      const days = Math.floor(difference / (1000 * 3600 * 24));
      setDaysPassed(days);
    };
    calculateTime();

    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredMemories =
    activeTab === "all"
      ? memories
      : memories.filter((m) => m.type === activeTab);

  if (showWelcome) {
    return <WelcomeAnimation onComplete={() => setShowWelcome(false)} />;
  }
  return (
    <div
      className="min-h-screen bg-slate-900 text-slate-100 selection:bg-rose-500 selection:text-white"
      style={{ fontFamily: "'Arima', cursive" }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Arima:wght@100..700&display=swap');
        `}
      </style>

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="text-rose-500 w-8 h-8" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-orange-300">
                CSE 14th
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#home"
                  className="hover:text-rose-400 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#timeline"
                  className="hover:text-rose-400 transition-colors"
                >
                  Timeline
                </a>
                <a
                  href="#archive"
                  className="hover:text-rose-400 transition-colors"
                >
                  Archive
                </a>
                <a
                  href="#messages"
                  className="hover:text-rose-400 transition-colors"
                >
                  Messages
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-200 hover:text-rose-400 transition-colors p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 animate-fade-in-down">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-rose-400"
              >
                Home
              </a>
              <a
                href="#timeline"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-rose-400"
              >
                Timeline
              </a>
              <a
                href="#archive"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-rose-400"
              >
                Archive
              </a>
              <a
                href="#messages"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-rose-400"
              >
                Messages
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80"
            alt="University Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 border border-rose-500/30 rounded-full bg-rose-500/10 backdrop-blur-sm animate-fade-in-up">
            <span className="text-rose-400 text-xs md:text-sm font-semibold tracking-wider uppercase">
              BRUR CSE 14th Intake
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            <span className="block text-slate-100">3 Years of</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-orange-300 to-purple-400 animate-gradient">
              Togetherness
            </span>
          </h1>
          <p className="text-base md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            The journey began on January 29, 2023. Three years have passed,
            carrying countless memories and stories that define who we are
            today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-8">
            <div className="w-full sm:w-auto bg-slate-800/50 backdrop-blur border border-slate-700 p-4 rounded-xl flex items-center gap-3 min-w-[200px]">
              <Calendar className="text-rose-400 w-6 h-6" />
              <div className="text-left">
                <p className="text-xs text-slate-400 uppercase">Started</p>
                <p className="font-bold">29 Jan 2023</p>
              </div>
            </div>
            <div className="w-full sm:w-auto bg-slate-800/50 backdrop-blur border border-slate-700 p-4 rounded-xl flex items-center gap-3 min-w-[200px]">
              <Clock className="text-purple-400 w-6 h-6" />
              <div className="text-left">
                <p className="text-xs text-slate-400 uppercase">Days Passed</p>
                <p className="font-bold">{daysPassed} Days+</p>
              </div>
            </div>
            <div className="w-full sm:w-auto bg-slate-800/50 backdrop-blur border border-slate-700 p-4 rounded-xl flex items-center gap-3 min-w-[200px]">
              <Star className="text-yellow-400 w-6 h-6" />
              <div className="text-left">
                <p className="text-xs text-slate-400 uppercase">Intake Day</p>
                <p className="font-bold">29 Jan 2026</p>
              </div>
            </div>
          </div>

          <a
            href="#archive"
            className="mt-12 inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors animate-bounce"
          >
            Explore Memories <ChevronDown />
          </a>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="px-4 relative">
        <div className="max-w-4xl mx-auto">
          <Timeline />
        </div>
      </section>

      {/* Archive Grid Section */}
      <section id="archive" className="py-20 px-4 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-orange-300 to-purple-400 animate-gradient font-bold mb-4">
              Memory Archive
            </h2>
            <p className="text-slate-400">
              Captured moments from our best days
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {["all", ...new Set(memories.map((m) => m.type))].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 capitalize
        ${
          activeTab === tab
            ? "bg-rose-500 text-white shadow-lg shadow-rose-500/25 scale-105"
            : "bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-700"
        }`}
              >
                {tab.replace(/_/g, " ")}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMemories.map((memory) => (
              <div
                key={memory.id}
                onClick={() => setSelectedMemory(memory)}
                className="group relative bg-slate-800 rounded-2xl overflow-hidden shadow-xl border border-slate-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={memory.src}
                    alt={memory.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-1 bg-rose-500/80 text-white text-xs rounded mb-2 backdrop-blur-sm uppercase tracking-wide">
                    {memory.type.replace(/_/g, " ")}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {memory.title}
                  </h3>
                  <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 line-clamp-2">
                    {memory.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {selectedMemory && (
            <div
              className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
              onClick={() => setSelectedMemory(null)}
            >
              <div
                className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl animate-fade-in"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMemory(null)}
                  className="absolute top-4 right-4 z-10 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition"
                >
                  ✕
                </button>

                {/* Image */}
                <div className="w-full max-h-[70vh] overflow-hidden bg-black">
                  <img
                    src={selectedMemory.src}
                    alt={selectedMemory.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <span className="inline-block mb-2 px-3 py-1 text-xs uppercase tracking-wide bg-rose-500/20 text-rose-400 rounded-full">
                    {selectedMemory.type.replace(/_/g, " ")}
                  </span>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {selectedMemory.title}
                  </h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">
                    {selectedMemory.desc}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Messages/Credits Section */}
      <section id="messages" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-12 h-12 text-rose-500 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl font-bold mb-8">
            From 14th Intake to Infinity
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 relative">
              <Users className="absolute top-4 right-4 text-slate-600" />
              <p className="text-slate-300 italic mb-4">
                These three years of university life became some of the most
                beautiful moments of our lives. Even under the pressure of
                classes and assignments, we learned how to smile and grow
                together.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500"></div>
                <div>
                  <h4 className="font-bold">A Member of CSE 14th</h4>
                  <p className="text-xs text-slate-500">
                    Batch of Togetherness
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 relative">
              <Users className="absolute top-4 right-4 text-slate-600" />
              <p className="text-slate-300 italic mb-4">
                We once thought four years would feel long, but now it seems
                time has passed far too quickly. Every shared laugh and moment
                with my batchmates will always remain close to my heart.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-400 to-orange-500"></div>
                <div>
                  <h4 className="font-bold">A Member of CSE 14th</h4>
                  <p className="text-xs text-slate-500">CSE 14th Intake</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800 text-center">
        <p className="text-slate-400 text-sm">
          A timeless collection of moments, memories and milestones
        </p>
        <p className="text-slate-600 text-xs mt-2">
          © 2026 BRUR CSE 14th Intake · Memories go to infinity
        </p>
      </footer>
      
    </div>
    
  );
};

export default App;
