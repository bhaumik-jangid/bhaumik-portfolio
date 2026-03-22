import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import "./EducationTimeline.css";

export function EducationTimeline() {
  const educationData = [
    {
      id: 1,
      degree: "Secondary (10th)",
      school: "NP Boys Sr Sec School",
      period: "2020 – 2021",
      marks: "85%",
      icon: "🎓",
      description: "Foundation year focusing on core academics",
    },
    {
      id: 2,
      degree: "Higher Secondary (12th)",
      school: "Arpan Public School",
      period: "2021 – 2023",
      marks: "87%",
      icon: "📚",
      description: "Advanced studies with specialization in Science",
    },
    {
      id: 3,
      degree: "B.Tech in Computer Science & Engineering",
      school: "LoveLy Professional University",
      period: "2023 – 2027",
      marks: "8.0 GPA",
      icon: "💻",
      description: "Pursuing degree with focus on AI & Machine Learning",
      current: true,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="education-timeline" className="education-timeline-section">
      <div className="timeline-container">
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="timeline-header"
        >
          <h2>
            My <span className="gradient-text">Education Journey</span>
          </h2>
          <p className="timeline-subtitle">Building foundations for excellence</p>
        </motion.div>

        {/* TIMELINE */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="timeline-wrapper"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"} ${
                edu.current ? "current" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="timeline-dot">
                <motion.div
                  className="dot-inner"
                  whileInView={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.8, repeat: edu.current ? Infinity : 0 }}
                  viewport={{ once: true }}
                />
                {edu.current && <div className="dot-pulse" />}
              </div>

              {/* Card content */}
              <motion.div
                className="timeline-card"
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,229,255,0.2)" }}
              >
                <div className="card-header">
                  <span className="card-icon">{edu.icon}</span>
                  <div className="card-title-group">
                    <h3>{edu.degree}</h3>
                    {edu.current && <span className="current-badge">Current</span>}
                  </div>
                </div>

                <div className="card-body">
                  <p className="school-name">{edu.school}</p>
                  <p className="period">{edu.period}</p>
                  <p className="description">{edu.description}</p>
                </div>

                <div className="card-footer">
                  <div className="marks-badge">
                    <span className="marks-label">Marks/GPA:</span>
                    <span className="marks-value">{edu.marks}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* VERTICAL LINE INDICATOR */}
        <div className="timeline-line" />
      </div>
    </section>
  );
}