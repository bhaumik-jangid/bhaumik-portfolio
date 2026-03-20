import { motion } from "motion/react";
import { Download, GraduationCap, Laptop, Layers } from "lucide-react";
import "./Resume.css";

export function Resume() {
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
        <motion.div
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
            📩 bhaumikjangid@gmail.com | 📱 +91 8758209508
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
        </motion.div>

        {/* EDUCATION */}
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
              Education
            </motion.h3>
          </div>

          <div className="resume-list">
            {[
              {
                degree: "B.Tech in Computer Science & Engineering",
                school: "LoveLy Professional University",
                period: "2023 – 2027",
                detail: "Current GPA: 8.0",
              },
              {
                degree: "Higher Secondary (12th)",
                school: "Arpan Public School",
                period: "2021 – 2023",
                detail: "87%",
              },
              {
                degree: "Secondary (10th)",
                school: "NP Boys Sr Sec School",
                period: "2020 – 2021",
                detail: "85%",
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.18, duration: 0.6 }}
                viewport={{ once: true }}
                className="resume-card"
              >
                <h4>{edu.degree}</h4>
                <p className="resume-card-school">{edu.school}</p>
                <p className="resume-card-period">
                  {edu.period} — <span>{edu.detail}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PROJECTS */}
        {/* <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="resume-heading">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="icon-box project-icon"
            >
              <Laptop className="icon" />
            </motion.div>
            <h3>Projects</h3>
          </div>

          <ul className="project-list">
            {[
              "- Breast Cancer Detection using YOLO + Ensemble CNN",
              "- DocuChat – Document Q&A Chatbot (Gemini API)",
              "- Indian Sign Language Interpreter — in progress",
              "- Mental Health Analyzer using NLP",
            ].map((project, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {project}
              </motion.li>
            ))}
          </ul>
        </motion.div> */}

        {/* SKILLS */}
        <motion.div
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

          <div className="skill-tags">
            {[
              "Python","C","C++","Java","TensorFlow","PyTorch","OpenCV",
              "Scikit-learn","YOLO","Streamlit","React","MySQL",
              "MongoDB","NLP","ML","DL","XAI","Creativity","Teamwork"
            ].map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                viewport={{ once: true }}
                className="skill-chip"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
