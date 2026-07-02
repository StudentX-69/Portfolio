import { imgLogo } from "../assets/images";

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-[72px]"
      style={{ background: "#1a0b2e", boxShadow: "0 6px 22px -3px rgba(0,0,0,.25)" }}
    >
      {/* Logo */}
      <div className="">
        {/* <img src={imgLogo} alt="Logo" className="h-full w-full object-contain" /> */}
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-xl font-bold  ">Abhay Nirmalkar</h1>
      </div>

      {/* Nav links */}
      <nav className="flex gap-14">
        {["Home", "About", "Resume"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white font-semibold text-xl tracking-wide hover:text-purple-400 transition-colors"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
