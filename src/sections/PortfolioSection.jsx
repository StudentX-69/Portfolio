import ProjectCard from "../components/ProjectCard";
import { imgGradient0, imgGradient1, imgIconClick, imgIconClick1 } from "../assets/images";
import { PROJECTS } from "../assets/data";
import imgProjectScreen from "../assets/monk.png";
import imgNetflixScreen from "../assets/netflix.png";

const screenMap = {
  1: imgProjectScreen,
  2: imgNetflixScreen,
};

const iconMap = {
  1: imgIconClick,
  2: imgIconClick1,
};

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-20 overflow-hidden">
      {/* Gradient blobs — background layer behind all cards */}
      {/* <img src={imgGradient0} alt="" aria-hidden className=" pointer-events-none select-none absolute right-0 top-0 w-[500px] opacity-60" style={{ zIndex: -2 }} />
      <img src={imgGradient1} alt="" aria-hidden className="pointer-events-none select-none absolute right-0 top-10 w-[480px] opacity-50" style={{ zIndex: -1 }} /> */}

      <div className="relative z-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            side={project.side}
            title={project.title}
            tag={project.tag}
            description={project.description}
            liveUrl={project.liveUrl}
            screen={screenMap[project.id]}
            clickIcon={iconMap[project.id]}
          />
        ))}
      </div>
    </section>
  );
}
