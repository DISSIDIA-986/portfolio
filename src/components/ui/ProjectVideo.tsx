"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

interface ProjectVideoProps {
  src: string;
  poster: string;
  title: string;
  /** rough duration label, e.g. "1:23" — shown on the play badge */
  durationLabel?: string;
}

export default function ProjectVideo({
  src,
  poster,
  title,
  durationLabel,
}: ProjectVideoProps) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Play demo video for ${title}`}
        className="group relative block w-full h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
      >
        <Image
          src={poster}
          alt={`${title} demo preview`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 dark:bg-stone-900/95 backdrop-blur shadow-lg group-hover:scale-105 transition-transform">
            <Play
              className="w-5 h-5 text-primary-700 dark:text-primary-400 fill-current"
              aria-hidden
            />
            <span className="text-sm font-medium text-stone-900 dark:text-white">
              Watch demo
              {durationLabel && (
                <span className="ml-1.5 text-stone-500 dark:text-stone-400 font-normal">
                  · {durationLabel}
                </span>
              )}
            </span>
          </div>
        </div>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} demo video`}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close video"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="w-5 h-5" aria-hidden />
          </button>

          <video
            ref={videoRef}
            src={src}
            poster={poster}
            controls
            autoPlay
            preload="metadata"
            playsInline
            className="max-w-full max-h-full w-auto h-auto rounded-lg shadow-2xl"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </>
  );
}
