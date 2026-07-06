const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "https://drive.google.com/file/d/1HkeqRTdWG1HA4zTALw_2VimwzE6CBhCl/view?usp=drive_link" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-[72px]"
      style={{ background: "#1a0b2e", boxShadow: "0 6px 22px -3px rgba(0,0,0,.25)" }}
    >
      {/* Logo */}
      <div className="">
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-xl font-bold  ">Abhay Nirmalkar</h1>
      </div>

      {/* Nav links */}
      <nav className="flex gap-14">
        {navLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-white font-semibold text-xl tracking-wide hover:text-purple-400 transition-colors"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
