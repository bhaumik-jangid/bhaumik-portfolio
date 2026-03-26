import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Rocket, Sparkles } from "lucide-react";
import "./projects.css";

const PROJECTS = [
  {
    title: "Resolve",
    desc: "Customer support chat system - A web-based platform for managing customer support interactions through real-time chat functionality.",
    ss: "/project/resolve.jpg",
    tech: ["JavaScript", "React", "Node.js", "Express.js", "Vercel"],
    live: "https://resolve-rose.vercel.app",
    code: "https://github.com/bhaumik-jangid/resolve"
  },
  {
    title: "Sentinel",
    desc: "A full-stack moderated social media platform with content moderation, Q&A, image sharing, and community features.",
    ss: "/project/sentinal.jpg",
    tech: ["Next.js 14", "Node.js", "Express.js", "MongoDB"],
    live: "#",
    code: "https://github.com/bhaumik-jangid/sentinel"
  },
  {
    title: "HarmonyAI",
    desc: "AI-powered stress relief chatbot designed to provide mental wellness support and emotional assistance through intelligent conversation.",
    ss: "/project/harmony.jpg",
    tech: ["Next.js", "TypeScript", "Gemini API", "JavaScript", "Vercel"],
    live: "https://harmony-ai-rust.vercel.app",
    code: "https://github.com/bhaumik-jangid/harmonyAI",
  },
  {
    title: "myauth – Authentication Service",
    desc: "A Next.js-based authentication service built with TypeScript and JavaScript, providing secure user authentication and session management.",
    ss: "/project/myauth.jpg",
    tech: ["TypeScript", "JavaScript", "Next.js", "CSS"],
    live: "#",
    code: "https://github.com/bhaumik-jangid/authentication-service",
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  const sectionRef = useRef(null);
  const controls = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      className="projects-container"
      initial="hidden"
      animate={controls ? "visible" : "hidden"}
      id="projects"
    >
      <motion.div
        className="projects-card"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        {/* Header Section */}
        <motion.div
          className="projects-header align-center"
          variants={fadeUp}
          initial="hidden"
          animate={controls ? "visible" : "hidden"}
        >
          <h2 className="projects-title">
            My <span className="proj">Projects</span>
          </h2>
          <div className="projects-underline" />
          <p className="projects-description">
            <Sparkles className="w-4 h-4 inline-block text-blue-400 mr-2" /> A selection of my work.....centered on backend systems, web applications, and practical implementations.
          </p><br />
        </motion.div>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.45,
                    ease: "easeOut",
                    delay: idx * 0.1,
                  },
                },
              }}
              whileHover={{ scale: 1.04 }}
            >
              <motion.div
                className="project-image-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={p.ss} alt={p.title} className="project-image" />
              </motion.div>

              <div className="project-content">
                <h3 className="project-heading">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    className="code-btn"
                  >
                    <Github size={14} /> Code
                  </motion.a>

                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    className="live-btn"
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}