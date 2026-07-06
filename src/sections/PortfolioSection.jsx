import ProjectCard from "../components/ProjectCard";
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
