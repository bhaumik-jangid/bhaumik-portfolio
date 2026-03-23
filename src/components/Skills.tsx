import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "./Skills.css";
import { Sparkles, Zap } from "lucide-react";

interface SkillRow {
  title: string;
  items: { name: string; level: number }[];
}

const SKILLS = [
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },

  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },

  { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Express.js", logo: "https://cdn.simpleicons.org/express/ffffff" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },

  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },

  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
];

const ROWS: SkillRow[][] = [
  [
    {
      title: "Programming Languages",
      items: [
        { name: "C", level: 80 },
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 95 },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Tailwind CSS", level: 80 },
        { name: "React Js", level: 80 },
        { name: "Next Js", level: 75 },
      ],
    },
    {
      title: "Databases & Tools",
      items: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "Git", level: 85 },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Express.js", level: 80 },
        { name: "Django", level: 75 },
        { name: "Node.js", level: 70 },
      ],
    },
  ],
  [
    {
      title: "Core Concepts",
      items: [
        { name: "Data Structures & Algorithms", level: 95 },
        { name: "DBMS", level: 90 },
        { name: "Computer Networks", level: 88 },
        { name: "Operating Systems", level: 80 },
      ],
    },
    {
      title: "Soft Skills",
      items: [
        { name: "Problem Solving", level: 95 },
        { name: "Team Player", level: 90 },
        { name: "Quick Learner", level: 92 },
        { name: "Adaptability", level: 88 },
      ],
    },
  ],
];

/* 🚀 ADDED ANIMATION VARIANTS */
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, duration: 0.6 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const Skills: React.FC = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(stageRef, { once: true });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const circles = Array.from(stage.querySelectorAll<HTMLDivElement>(".skill-circle"));
    const rect = stage.getBoundingClientRect();
    const placed: { x: number; y: number; size: number }[] = [];

    const isOverlapping = (x: number, y: number, size: number) =>
      placed.some((p) => Math.hypot(p.x - x, p.y - y) < p.size / 2 + size / 2 + 40);

    circles.forEach((circle) => {
      const size = circle.offsetWidth;
      let x: number, y: number, tries = 0;
      do {
        x = Math.random() * (rect.width - size - 20);
        y = Math.random() * (rect.height - size - 20);
        tries++;
      } while (isOverlapping(x, y, size) && tries < 150);

      placed.push({ x, y, size });
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * 100;
      const dy = (Math.random() - 0.5) * 100;
      circle.animate(
        [{ transform: "translate(0,0)" }, { transform: `translate(${dx}px,${dy}px)` }],
        {
          duration: 6000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }, []);

  return (
    <section id="skills" className="skills-container">
      <motion.div className="skills-header" variants={fadeUp} initial="hidden" animate={controls}>
        <h2 className="skills-title">
          My <span className="grad">Skills</span>
        </h2>
        <div className="skills-underline" />
        <p className="skills-description">
          <Sparkles className="w-4 h-4 inline-block text-blue-400 mr-2" /> A fusion of technical expertise and creativity.....see my core strengths below.
        </p>
      </motion.div>

      {/* FLOATING ICON CLOUD */}
      <motion.div
        ref={stageRef}
        className="skills-stage"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        {SKILLS.map((s) => (
          <motion.div
            key={s.name}
            className="skill-circle"
            variants={fadeUp}
            whileHover={{ scale: 1.3 }}
          >
            <img src={s.logo} className="skill-logo" alt={s.name} />
            <span className="skill-name">{s.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* TABLE PART */}
      <div className="skills-table">
        {ROWS.map((row, i) => (
          <div key={i} className="skills-row">
            {row.map((col) => (
              <motion.div
                key={col.title}
                className="skill-box"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3>{col.title}</h3>
                <ul>
                  {col.items.map((item, j) => (
                    <li key={j} className="skill-item">
                      <div className="skill-item-header">
                        <span>{item.name}</span>
                        <span className="skill-percent">{item.level}%</span>
                      </div>
                      <div className="skill-progress">
                        <div className="skill-progress-fill" style={{ width: `${item.level}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
