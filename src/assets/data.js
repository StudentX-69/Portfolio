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
    title: "QueueLess",
    tag: "Featured Project",
    description:
      "QueueLess is a real-time queue management web application designed to optimize customer flow for service-based businesses. Featuring a clean, responsive interface, it empowers clinics, salons, and small businesses to efficiently manage live queues while allowing customers to track their token status remotely and receive real-time alerts.",
    liveUrl: "https://q1-six-cyan.vercel.app/",
  },
  {
    id: 2,
    side: "left",
    title: "Snake Game",
    tag: "Featured Project",
    description:
     "A responsive, interactive web-based Snake game featuring real-time score tracking, time monitoring, and classic grid-based gameplay.",
    liveUrl: "https://studentx-69.github.io/Snake-Game/",
  },
];
