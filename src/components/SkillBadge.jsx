
export default function SkillBadge({ img, label }) {
  return (
    <div className="relative w-[60px] h-[60px] flex-shrink-0" title={label}>
      <div className="absolute inset-0 m-auto w-[60px] h-[60px] rounded-full  bg-white/30  " />
      <img
        src={img}
        alt={label}
        className="absolute inset-0 m-auto w-[35px] h-[35px] object-contain brightness-115"
      />
    </div>
  );
}
