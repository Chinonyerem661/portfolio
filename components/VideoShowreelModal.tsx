"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, Volume2, VolumeX, Sparkles, Film } from "lucide-react";

interface VideoShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VIDEO_PLAYLIST = [
  {
    title: "Liquid Chrome & Abstract Motion",
    subtitle: "High-tech 3D Fluid Dynamics",
    url: "https://cdn.coverr.co/videos/coverr-flowing-abstract-liquid-lines-5847/1080p.mp4",
  },
  {
    title: "Digital Ecosystem & Cyber Lines",
    subtitle: "Web3 & Cloud Architecture Visualizer",
    url: "https://cdn.coverr.co/videos/coverr-futuristic-glowing-digital-network-5872/1080p.mp4",
  },
  {
    title: "Minimalist Geometry in Motion",
    subtitle: "Cuberto Aesthetic Design Motion",
    url: "https://cdn.coverr.co/videos/coverr-geometric-shapes-in-motion-5843/1080p.mp4",
  },
];

export default function VideoShowreelModal({
  isOpen,
  onClose,
}: VideoShowreelModalProps) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeVideo = VIDEO_PLAYLIST[activeVideoIndex];

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999999] flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-2xl"
          onClick={onClose}
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-5xl liquid-glass rounded-3xl overflow-hidden shadow-2xl border border-white/20 p-4 md:p-6 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Controls */}
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                  <Film size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-snug">
                    {activeVideo.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {activeVideo.subtitle}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                data-cursor-text="CLOSE"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Video Viewport */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-inner group">
              <video
                ref={videoRef}
                src={activeVideo.url}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Overlay Glass Controls on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end gap-3">
                  <button
                    onClick={toggleMute}
                    className="p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 hover:bg-black/90 transition text-white"
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={togglePlay}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 text-black font-extrabold hover:bg-cyan-400 transition"
                  >
                    {isPlaying ? (
                      <>
                        <Pause size={18} /> Pause
                      </>
                    ) : (
                      <>
                        <Play size={18} /> Play Reel
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-2 text-xs text-slate-300 bg-black/60 px-4 py-2 rounded-full border border-white/10">
                    <Sparkles size={14} className="text-cyan-400 animate-pulse" />
                    <span>Cuberto Liquid Glass Motion Reel</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Selector Tabs */}
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {VIDEO_PLAYLIST.map((vid, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveVideoIndex(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition border ${
                    activeVideoIndex === idx
                      ? "bg-cyan-500 text-black border-cyan-400 shadow-lg shadow-cyan-500/20"
                      : "bg-white/5 hover:bg-white/15 text-slate-300 border-white/10"
                  }`}
                >
                  Reel {idx + 1}: {vid.title.split("&")[0]}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
