import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import video from "@/assets/goodarzi-trading-video.mp4.asset.json";
import poster from "@/assets/goodarzi-trading-video-poster.jpg.asset.json";

export function HomeVideo({ label, className }: { label: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {
            el.muted = true;
            setMuted(true);
            el.play().catch(() => {});
          });
        } else {
          el.pause();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
    if (el.paused) el.play().catch(() => {});
  };

  return (
    <div className="relative">
      <video
        ref={ref}
        src={video.url}
        poster={poster.url}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        className={className}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={muted ? "Turn sound on" : "Turn sound off"}
        className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--navy-deep)]/80 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition-colors hover:bg-[color:var(--navy-deep)]"
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        {muted ? "Sound on" : "Sound off"}
      </button>
    </div>
  );
}
