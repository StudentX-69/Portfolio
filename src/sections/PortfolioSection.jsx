import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../assets/data";
import imgProjectScreen from "../assets/queueless.png";
import imgSnakeScreen from "../assets/snake.png";

const screenMap = {
  1: imgProjectScreen,
  2: imgSnakeScreen,
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
          />
        ))}
      </div>
    </section>
  );
}
