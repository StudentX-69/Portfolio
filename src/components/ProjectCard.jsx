import { useFadeIn } from "../hooks/useFadeIn";
import { imgGradient2 } from "../assets/images";

export default function ProjectCard({ side, title, tag, description, liveUrl, screen, clickIcon }) {
  const [ref, visible] = useFadeIn(0.12);
  const isLeft = side === "left";

  return (
    <div
      ref={ref}
      className="relative max-w-5xl mx-auto px-6 mb-28 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
      }}
    >
      
      <div
        className={`flex flex-col ${
          isLeft ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-10`}
      >
        {/* Screenshot */}
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-full md:w-[500px] rounded-xl overflow-hidden border border-white/10 hover:scale-[1.02] transition-transform duration-300 ease-in shadow-2xl"
        >
          <img src={screen} alt={title} className="w-full h-5/6 object-cover block hover:grayscale lazy-loading" />
        </a>

        {/* Text card with glassmorphism */}
        <div className="flex-1 relative rounded-2xl overflow-hidden">
          {/* Glass background */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "rgba(43,11,58,0.55)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          />

          <div className={`relative z-10 p-5 ${isLeft ? "text-left" : "text-right"}`}>
            <p
              className="text-purple-400 text-sm font-semibold mb-1 uppercase tracking-widest"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {tag}
            </p>

            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#ccd6f6] text-2xl md:text-3xl font-semibold mb-4 hover:text-purple-300 transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {title}
            </a>

            <p
              className="text-[#ccd6f6] text-base leading-relaxed mb-6"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
            >
              {description}
            </p>
      
          </div>
        </div>
      </div>
    </div>
    
  );
}
