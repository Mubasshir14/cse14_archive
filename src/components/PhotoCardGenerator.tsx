/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useState, useEffect } from "react";
import { Download, Upload, Image as ImageIcon, Sparkles } from "lucide-react";
import { toPng } from "html-to-image";

const PhotoCardGenerator = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [name, setName] = useState("Your Name");
  const [studentId, setStudentId] = useState("2023XXXXXXX");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageLoaded(false);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const downloadCard = async () => {
    if (!cardRef.current || !backgroundLoaded || !imageLoaded) {
      alert("Please wait for images to fully load before downloading.");
      return;
    }

    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 3,
        skipFonts: false,
      });

      if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        const newWindow = window.open();
        if (newWindow) {
          newWindow.document
            .write(`<img src="${dataUrl}" style="width:100%;height:auto;display:block; background:transparent" /> 
                <p style="text-align:center;font-family:sans-serif">
      Long press to save image. For best results, use a browser like Chrome in Desktop mode. Best option is to use a PC or Mac to download.
    </p>`);
          newWindow.document.title =
            "Long press to save image. For best results, use a browser like Chrome in Desktop mode. Best option is to use a PC or Mac to download.";
        }
      } else {
        const link = document.createElement("a");
        link.download = "CSE-14th-Intake-Photocard.png";
        link.href = dataUrl;
        link.click();
      }
    } catch (e) {
      console.error("Image export failed", e);
      alert("Failed to export image. Please try again.");
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500/20 to-purple-500/20 rounded-full border border-rose-500/30 mb-4">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span className="text-sm font-semibold text-rose-300">
              Create Your Memory
            </span>
          </div>
          <h1 className="text-xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-400 to-blue-400">
            CSE 14th Intake Photocard
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Upload your photo and create a beautiful memory card celebrating our
            journey together at BRUR
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* CARD PREVIEW */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/30 via-purple-500/30 to-blue-500/30 blur-3xl rounded-3xl"></div>

              <div
                ref={cardRef}
                className="relative  w-[340px] h-[560px] md:w-[400px] md:h-[560px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img
                    src="/backgrounds/1st-intake-day.jpg"
                    alt="Batch Memory"
                    className="w-full h-full object-contain"
                    crossOrigin="anonymous"
                    onLoad={() => setBackgroundLoaded(true)}
                    onError={() => {
                      console.error("Background image failed to load");
                      setBackgroundLoaded(true);
                    }}
                  />

                  {/* Dark Overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-rose-500/30 to-transparent blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/30 to-transparent blur-2xl"></div>
                </div>

                {/* Content Container */}
                <div className="relative h-full flex flex-col items-center justify-between p-8">
                  {/* Top Section - Logo/Badge */}
                  <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                      <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-bold tracking-wider">
                        CSE 14TH INTAKE
                      </span>
                    </div>
                  </div>

                  {/* Center Section - User Photo */}
                  <div className="flex flex-col items-center">
                    {/* Circular Photo Container */}
                    <div className="relative mb-30">
                      {/* Rotating Ring */}
                      <div
                        className="absolute inset-0 -m-3 rounded-full border-4 border-transparent border-t-rose-400 border-r-purple-400 animate-spin"
                        style={{ animationDuration: "3s" }}
                      ></div>

                      {/* Glow Ring */}
                      <div className="absolute inset-0 -m-2 rounded-full bg-gradient-to-r from-rose-500 to-purple-500 opacity-75 blur-lg animate-pulse"></div>

                      {/* Photo Circle */}
                      <div className="relative  w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900">
                        {image ? (
                          <img
                            src={image}
                            alt="Your Photo"
                            className="w-full h-full object-cover"
                            onLoad={() => setImageLoaded(true)}
                            onError={() => {
                              console.error("User image failed to load");
                              setImageLoaded(false);
                            }}
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center h-full text-slate-400">
                            <ImageIcon size={40} strokeWidth={1.5} />
                            <p className="mt-2 text-xs font-medium">
                              Your Photo
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Name Placeholder */}

                    <div className="text-center pt-6 md:pt-4">
                      <h3 className="text-lg font-bold mb-1 text-white drop-shadow-lg">
                        {name}
                      </h3>
                      <p className="text-sm text-rose-300 font-medium">
                        Student ID: {studentId}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Section - Batch Info */}
                  <div className="w-full text-center space-y-2">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                    <div>
                      <h2 className="text-lg font-bold tracking-wide mb-1">
                        Department of CSE
                      </h2>
                      <p className="text-sm text-slate-300 font-medium">
                        Begum Rokeya University, Rangpur
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-rose-500/20 to-purple-500/20 rounded-full border border-white/20 backdrop-blur-sm">
                      <span className="text-xs font-semibold text-rose-200">
                        Batch of Togetherness
                      </span>
                    </div>

                    {/* Decorative Stars */}
                    <div className="flex justify-center gap-2 pt-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTROLS */}
          <div className="space-y-8">
            {/* Upload Section */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">
                  Upload Your Photo
                </label>
                <label className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 cursor-pointer transition-all shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 group">
                  <Upload
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-semibold">Choose Your Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageUpload}
                  />
                </label>
                <p className="text-xs text-slate-500 mt-2">
                  Recommended: Square image (1:1 ratio) for best results
                </p>
              </div>
              {/* Name & ID Inputs */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Student ID
                  </label>
                  <input
                    type="text"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    placeholder="2023XXXXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Download Button */}
              <button
                onClick={downloadCard}
                disabled={!image || !imageLoaded || !backgroundLoaded}
                className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl border-2 transition-all ${
                  image && imageLoaded && backgroundLoaded
                    ? "bg-slate-800 hover:bg-slate-700 border-slate-700 hover:border-slate-600 shadow-lg"
                    : "bg-slate-900 border-slate-800 opacity-50 cursor-not-allowed"
                }`}
              >
                <Download size={20} />
                <span className="font-semibold">
                  {!backgroundLoaded
                    ? "Loading background..."
                    : !imageLoaded && image
                      ? "Loading your photo..."
                      : "Download Photocard"}
                </span>
              </button>
            </div>

            {/* Social Share Note */}
            <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
              <p className="text-xs text-slate-400">
                Share your photocard on Facebook with{" "}
                <span className="text-rose-400 font-semibold">
                  #CSE14thIntake
                </span>{" "}
                <span className="text-purple-400 font-semibold">
                  #BRURMemories
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCardGenerator;
