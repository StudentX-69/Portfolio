import {
  imgSkillPython,
  imgSkillDjango,
  imgSkillRedux,
  imgSkillNodejs,
  imgSkillFigma,
  imgSkillSQL,
  imgSkillExpressjs,
  imgSkillMongoDB,
  imgSkillGO,
  imgSkillGraphQL,
  imgSkillTypescript,
} from "./images";

export const SKILL_ICONS_ROW1 = [
  { img: imgSkillFigma,       label: "Figma"    },
  { img: imgSkillNodejs,      label: "Node.js"  },
  { img: imgSkillExpressjs,   label: "Express.js" },
  { img: imgSkillRedux,       label: "Redux"  },
  { img: imgSkillTypescript,  label: "typescript"},
  { img: imgSkillDjango,      label: "Django"   },
  
];

export const SKILL_ICONS_ROW2 = [
  { img: imgSkillMongoDB, label: "MongoDB" },
  { img: imgSkillGraphQL, label: "GraphQL" },
  { img: imgSkillSQL,      label: "SQL"      },
  { img: imgSkillPython,   label: "Python"   },
  { img: imgSkillGO,       label: "GO"       },
];

export const PROJECTS = [
  
  {
    id: 1,
    side: "right",
    title: "Monk Chocolate",
    tag: "Featured Project",
    description:
      "An e-commerce storefront for a chocolate brand, built with React and Tailwind CSS. Features a product catalog with category browsing, a shopping cart, and a clean, responsive layout designed to make the product photography do the talking.",
    liveUrl: "https://monk-psi-flame.vercel.app/",
  },
  {
    id: 2,
    side: "left",
    title: "Netflix-Clone",
    tag: "Featured Project",
    description:
      "A modern web app replicating the Netflix interface, featuring dynamic movie data integration, responsive design, and smooth user navigation.",
    liveUrl: "https://netflix-clone-hy6v8i6xa-studentx-69s-projects.vercel.app/",
  },
];
