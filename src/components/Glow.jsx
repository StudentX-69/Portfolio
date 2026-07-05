
export default function Glow({
  size = 320,
  color = "#8b5cf6", // brand accent (purple-500)
  opacity = 0.55,
  blur = 90,
  className = "",
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        opacity,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}
