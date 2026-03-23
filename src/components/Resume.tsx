import { motion } from "motion/react";
import { Download, GraduationCap, Layers, ChevronDown } from "lucide-react";
import { useState } from "react";
import "./Resume.css";
import { Skills } from "./Skills";

export function Resume() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // Education Data with Real College Logos
  const educationData = [
    {
      id: "btech",
      category: "B.TECH (CSE)",
      cgpa: 8.1,
      displayScore: "8.0 CGPA",
      period: "2023-Present",
      institution: "LoveLy Professional University",
      logo: "/lpu_logo.png",
      color: "#a855f7",
      icon: "🎓",
      breakdown: [
        { label: "Sem 1", score: 8.73, weight: "Strong Start" },
        { label: "Sem 2", score: 7.46, weight: "Adjustment" },
        { label: "Sem 3", score: 7.84, weight: "Recovery" },
        { label: "Sem 4", score: 7.71, weight: "Recovery" },
        { label: "Sem 5", score: 8.36, weight: "Upward Trend" }
      ],
      description: "Consistent Performance & Excellence",
      details: "Maintaining strong CGPA in Computer Science & Engineering with focus on AI, Deep Learning, and emerging technologies."
    },
    {
      id: "secondary",
      category: "HIGHER SECONDARY",
      cgpa: 81,
      displayScore: "81%",
      period: "2021-23",
      institution: "Arpan Public School",
      logo: "/aps_logo.png",
      color: "#3b82f6",
      icon: "📖",
      breakdown: [
        { label: "11th", score: 75, weight: "First Year" },
        { label: "12th", score: 87, weight: "Final Year" }
      ],
      description: "Steady Growth & Improvement",
      details: "Showed consistent improvement from 11th to 12th grade, demonstrating adaptability and commitment to academic excellence."
    },
    {
      id: "higher",
      category: "HIGHER STUDIES",
      cgpa: 91,
      displayScore: "91%",
      period: "2020-21",
      institution: "NP Boys Sr Sec School",
      logo: "/np_logo.png",
      color: "#22c55e",
      icon: "📚",
      breakdown: [
        { label: "10th", score: 91, weight: "Class Performance" }
      ],
      description: "Strong Foundation & Excellence",
      details: "Achieved excellent marks in the 10th standard, demonstrating strong academic fundamentals and dedication to studies."
    },
  ];

  // Skills data
  const skillsData = {
    Languages: ["C", "C++", "JavaScript", "Python"],
    Frontend: ["HTML", "CSS", "Tailwind CSS", "React.js", "Next.js"],
    Backend: ["Express.js", "Django", "Node.js"],
    // "ML/AI": ["TensorFlow", "PyTorch", "OpenCV", "YOLO", "Scikit-learn"],
    Databases: ["MongoDB", "MySQL", "PostgreSQL"],
    Soft_Skills: [ "Problem-Solving", "Team Player", "Quick Learner", "Adaptability"],
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        {/* TITLE */}
        <motion.h2
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-title"
        >
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Resume
          </span>
        </motion.h2>

        {/* DOWNLOAD BUTTON */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-download-top"
        >
          <a href="/resume.pdf" download className="download-btn">
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>

        {/* PROFILE BOX */}
        {/* <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="profile-box"
        >
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="profile-name"
          >
            Bhaumik Jangid
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="profile-info"
          >
            📚 B.Tech — Computer Science & Engineering<br />
            📍 Saharanpur, Uttar Pradesh, India<br />
            📩 bhaumikjangid@gmail.com | 📱 +91 7678126653
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="profile-summary"
          >
            Passionate AI engineer experienced in Computer Vision, Deep Learning,
            and end-to-end AI deployment. Skilled in Python, TensorFlow, PyTorch,
            and always driven to build impactful solutions.
          </motion.p>
        </motion.div> */}

        {/* EDUCATION SECTION */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-section-block"
        >
          <div className="resume-heading">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="icon-box education-icon"
            >
              <GraduationCap className="icon" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Educational Journey
            </motion.h3>
          </div>

          {/* EDUCATION CARDS */}
          <div className="education-cards-grid">
            {educationData.map((edu, idx) => (
              <motion.div
                key={edu.id}
                className={`education-card-main ${expandedCard === edu.id ? "expanded" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                onClick={() => setExpandedCard(expandedCard === edu.id ? null : edu.id)}
              >
                {/* Card Header with College Logo */}
                <div className="card-header" style={{ borderColor: edu.color }}>
                  <div className="logo-container" style={{ borderColor: edu.color }}>
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="college-logo border-radius-full"
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M12 2l9 5v8c0 7-9 10-9 10s-9-3-9-10V7l9-5z'/%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <div className="card-title-section">
                    <h4>{edu.category}</h4>
                    <p className="card-period">{edu.period}</p>
                  </div>
                  <div className="card-score" style={{ color: edu.color }}>
                    {edu.displayScore}
                  </div>
                </div>

                {/* Institution Row */}
                <div className="card-institution-row">
                  <span className="institution-label">Institute:</span>
                  <span className="institution-name">{edu.institution}</span>
                </div>

                {/* Description */}
                <div className="card-description">
                  {edu.description}
                </div>

                {/* Performance Breakdown */}
                <div className="card-breakdown">
                  <p className="breakdown-title">Performance Breakdown:</p>
                  <div className="breakdown-items">
                    {edu.breakdown.map((item, i) => {
                      // Calculate percentage based on whether it's a CGPA or percentage
                      const isGPA = item.score <= 10;
                      const percentage = isGPA ? (item.score / 10) * 100 : item.score;

                      return (
                        <div key={i} className="breakdown-item">
                          <span className="breakdown-label">{item.label}</span>
                          <div className="breakdown-bar">
                            <motion.div
                              className="breakdown-fill"
                              style={{ backgroundColor: edu.color }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${percentage}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                            />
                          </div>
                          <span className="breakdown-score">
                            {isGPA ? `${item.score}` : `${item.score}%`}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Expand Button */}
                <motion.button
                  className="expand-btn"
                  animate={{ rotate: expandedCard === edu.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setExpandedCard(expandedCard === edu.id ? null : edu.id)}
                  style={{ color: edu.color }}
                >
                  <ChevronDown size={20} />
                </motion.button>

                {/* Expandable Details */}
                <motion.div
                  className="card-details-expanded"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: expandedCard === edu.id ? 1 : 0,
                    height: expandedCard === edu.id ? "auto" : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="expanded-content">
                    <p>{edu.details}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SKILLS */}
        {/* <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-skills"
        >
          <div className="resume-heading">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="icon-box skills-icon"
            >
              <Layers className="icon" />
            </motion.div>
            <h3>Skills</h3>
          </div>

          <div className="skills-categories">
            {Object.entries(skillsData).map(([category, skills], catIdx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: catIdx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="skill-category"
              >
                <h4 className="category-title">{category}</h4>
                <div className="skill-tags">
                  {skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: catIdx * 0.1 + i * 0.06, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="skill-chip"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}