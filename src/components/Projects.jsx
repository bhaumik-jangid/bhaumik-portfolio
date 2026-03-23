import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Rocket, Sparkles } from "lucide-react";
import "./projects.css";

const PROJECTS = [
  {
    title: "Mammogram Malignancy Detector",
    desc: "Hybrid CNN + YOLOv8 ensemble for full-image breast cancer detection with ROI preprocessing and sliding-window inference.",
    ss: "/mamo.png",
    tech: ["TensorFlow", "Keras", "OpenCV", "YOLOv8"],
    live: "#",
    code: "https://github.com/kunjdesai/mammo-detector",
  },
  {
    title: "Mental Health Analyzer",
    desc: "NLP-based system that analyzes user text for anxiety, stress, and depression indicators.",
    ss: "/mentalhealth.jpg",
    tech: ["Python", "Transformers", "NLTK", "scikit-learn"],
    live: "https://mental-health-analyzer.streamlit.app/",
    code: "https://github.com/kunj2803/Mental-Health-Analyzer",
  },
  {
    title: "Indian Sign Language Interpreter",
    desc: "Real-time gesture recognition using Mediapipe + TensorFlow for sign-to-text translation.",
    ss: "/ISL.png",
    tech: ["Mediapipe", "TensorFlow", "React", "Flask"],
    live: "#",
    code: "https://github.com/kunjdesai/ISL-Interpreter",
  },
  {
    title: "Portfolio Website",
    desc: "Modern portfolio built with React + Framer Motion with smooth animations and clean UI.",
    ss: "/portfolio.jpg",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    live: "https://kunj-desai.vercel.app/",
    code: "https://github.com/kunj2803/Kunj-Portfolio",
  },
  {
    title: "DocuChat – Gemini AI Chatbot",
    desc: "Gemini-powered PDF analyzer that answers queries from uploaded documents.",
    ss: "/Docuchat.png",
    tech: ["Gemini API", "LangChain", "Python", "Streamlit"],
    live: "https://docuchat-chatbot.streamlit.app/",
    code: "https://github.com/kunj2803/Docuchat-Chatbot",
  },
  {
    title: "ProfileX – Data Profiler",
    desc: "Smart data profiling dashboard for CSV datasets — summary, visualization, and cleaning.",
    ss: "/ProfileX.png",
    tech: ["Streamlit", "Pandas", "Plotly"],
    live: "https://profilex.streamlit.app/",
    code: "https://github.com/kunjdesai/ProfileX",
  },
  {
    title: "Breast Cancer Prediction",
    desc: "ML pipeline using SVC, RF, and XGBoost with SMOTE for dataset balancing.",
    ss: "/breastpred.jpg",
    tech: ["scikit-learn", "XGBoost", "Pandas"],
    live: "#",
    code: "https://github.com/kunjdesai/BreastCancerPrediction",
  },
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