import { imgEllipse7 } from "../assets/images";

export default function SkillBadge({ img, label }) {
  return (
    <div className="relative w-[60px] h-[60px] flex-shrink-0" title={label}>
      <div className="absolute inset-0 m-auto w-[60px] h-[60px] rounded-full  bg-white/20 " />
      <img
        src={img}
        alt={label}
        className="absolute inset-0 m-auto w-[32px] h-[32px] object-contain"
      />
    </div>
  );
}
