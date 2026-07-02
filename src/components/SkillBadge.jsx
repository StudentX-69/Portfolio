import { imgEllipse7 } from "../assets/images";

export default function SkillBadge({ img, label }) {
  return (
    <div className="relative w-[52px] h-[52px] flex-shrink-0" title={label}>
      <img
        src={imgEllipse7}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img
        src={img}
        alt={label}
        className="absolute inset-0 m-auto w-[32px] h-[32px] object-contain"
      />
    </div>
  );
}
