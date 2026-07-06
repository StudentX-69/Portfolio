import { useFadeIn } from "../hooks/useFadeIn";
import {Mail} from 'lucide-react';
import 'remixicon/fonts/remixicon.css'

export default function ContactSection() {
  const [ref, visible] = useFadeIn(0.1);

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      
      <div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto px-6 transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
        }}
      >
        <h2
          className="text-white text-2xl font-normal mb-8"
          style={{ fontFamily: "'Preahvihear', sans-serif", letterSpacing: "0.02em" }}
        >
          Contact
        </h2>

        <p
          className="text-white text-lg leading-relaxed  mb-8 max-w-2xl"
          style={{ fontFamily: "'Preahvihear', sans-serif", letterSpacing: "0.01em" }}
        >
          I'm currently looking to join a cross-functional team that values improving people's
          lives through accessible design. Have a project in mind? Let's connect.
        </p>

        <p
          className="text-white text-base mb-8"
          style={{ fontFamily: "'Preahvihear', sans-serif" }}
        >
          nabhay114@gmail.com
        </p>
        <div className="flex gap-4 p-2">
        <a href="mailto:nabhay114@gmail.com"><Mail className="my-[6px]" /></a>
        <a href="https://github.com/StudentX-69" target="_blank" rel="noopener noreferrer">
          <i class="ri-github-fill" style={{ fontSize: "1.25rem" }}></i>
        </a>
        <a href="https://x.com/Abhaynirmalkar1" target="_blank" rel="noopener noreferrer">
          <i class="ri-twitter-x-line" style={{ fontSize: "1.25rem" }}></i>
        </a>
        </div>
      </div>
    </section>
  );
}
