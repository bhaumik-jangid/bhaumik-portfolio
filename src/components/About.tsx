import { useEffect, useRef, useState } from "react";
import {
  Code,
  Timer,
  Cpu,
  Trophy,
  Gamepad2,
} from "lucide-react";

import "./About.css";

export function About() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [titleVisible, setTitleVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const [extraVisible, setExtraVisible] = useState(false);
  const [hobbiesVisible, setHobbiesVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const extraRef = useRef<HTMLDivElement>(null);

  /* ===== TITLE REVEAL ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setTitleVisible(true),
      { threshold: 0.5 }
    );
    const intro = document.querySelector(".about-intro-screen");
    if (intro) observer.observe(intro);
    return () => observer.disconnect();
  }, []);

  /* ===== IMAGE SCROLL ===== */
  useEffect(() => {
    const NAVBAR_HEIGHT = 80;
    const IMAGE_STOP_OFFSET = 60;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = Math.max(0, NAVBAR_HEIGHT + IMAGE_STOP_OFFSET - rect.top);
      const progress = Math.min(scrolled / (window.innerHeight * 0.25), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===== WHO AM I REVEAL (whole box + then typing) ===== */
  useEffect(() => {
    let triggered = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;

          // after 4s: show WHO AM I card (whole box)
          setTimeout(() => {
            setInfoVisible(true);

            // after card is visible: start typing on title
            setTimeout(() => {
              const el = document.querySelector(".whoami-title");
              el?.classList.add("type");
            }, 200);
          }, 1000); // 4 seconds AFTER scrolled into view
        }
      },
      { threshold: 0.7 }
    );

    if (infoRef.current) observer.observe(infoRef.current);
    return () => observer.disconnect();
  }, []);

  /* ===== EXTRA REVEAL ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setExtraVisible(true),
      { threshold: 0.3 }
    );
    if (extraRef.current) observer.observe(extraRef.current);
    return () => observer.disconnect();
  }, []);

  /* ===== HOBBIES REVEAL ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setHobbiesVisible(true),
      { threshold: 0.3 }
    );
    const hobbiesElement = document.querySelector(".about-hobbies");
    if (hobbiesElement) observer.observe(hobbiesElement);
    return () => observer.disconnect();
  }, []);

  /* ===== COUNTERS ===== */
  const counters = [
    { icon: Code, label: "Projects Completed", value: 4 },
    { icon: Timer, label: "Years Experience in coding", value: 2 },
    { icon: Cpu, label: "Technologies Mastered", value: 6 },
    { icon: Trophy, label: "LeetCode Solved", value: 300 },
  ];

  const [countValues, setCountValues] = useState(counters.map(() => 0));

  useEffect(() => {
    if (!extraVisible) return;

    counters.forEach((counter, index) => {
      let start = 0;
      const end = counter.value;
      const interval = setInterval(() => {
        start++;
        setCountValues((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
        if (start === end) clearInterval(interval);
      }, 1500 / counter.value);
    });
  }, [extraVisible]);

  /* ===== IMAGE + TEXT ===== */
  const getImageWidth = () =>
    scrollProgress < 0.2 ? 100 :
    scrollProgress < 0.6 ? 100 - ((scrollProgress - 0.4) / 0.2) * 50 :
    50;

  const NAVBAR_HEIGHT = 80;

  const getImageTransform = () =>
    scrollProgress < 0.2
      ? `translateY(${100 - (scrollProgress / 0.2) * 100 + NAVBAR_HEIGHT}px)`
      : `translateY(${NAVBAR_HEIGHT}px)`;

  const getTextOpacity = () =>
    scrollProgress < 0.4 ? 0 :
    scrollProgress < 0.6 ? (scrollProgress - 0.4) / 0.2 :
    1;

  return (
    <section id="about" className="about-wrapper">
      {/* INTRO TITLE */}
      <div className={`about-intro-screen ${titleVisible ? "show-title" : ""}`}>
        <h1>
          About <span className="grad">me?</span>
        </h1>
      </div>

      {/* MAIN SCROLL AREA */}
      <div ref={containerRef} className="about-scroll">
        <div className="about-sticky">
          {/* IMAGE */}
          <div
            className="about-image"
            style={{ width: `${getImageWidth()}%`, transform: getImageTransform() }}
          >
            <img src="./temp.jpg" alt="Profile" />
          </div>

          {/* INFO PANEL */}
          <div
            ref={infoRef}
            className={`about-info ${infoVisible ? "info-show" : ""}`}
            style={{
              // WHOLE BOX HIDDEN UNTIL infoVisible === true
              opacity: infoVisible ? getTextOpacity() : 0,
              width: infoVisible
                ? getImageWidth() > 60
                  ? "0%"
                  : "50%"
                : "0%"
            }}
          >
            <div className="info-inner">
              <h2 className="whoami-title">
                <span>Who am I?</span>
              </h2>

              <p>
                I’m Bhaumik Jangid, a tech-driven learner passionate about building real-world solutions.
                I enjoy exploring AI, machine learning, and innovative software development.
                I’m eager to contribute my skills and grow in a challenging professional environment.
              </p>

              <p>
                Beyond code, I enjoy exploring design, experimenting with motion and interaction,
                blending creativity with technical precision. My goal is to build solutions that not only perform — but also inspire.
              </p>

              <p>
                4th-year B.Tech AI Engineering student with hands-on experience in ML & DL Projects.
                Proficient in Python, PyTorch, TensorFlow, and data preprocessing. Seeking internship opportunities to contribute to impactful AI solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* EXTRA SECTION */}
      <div ref={extraRef} className={`about-extra ${extraVisible ? "extra-show" : ""}`}>
        <div className="about-counters">
          {counters.map((c, i) => (
            <div key={i} className="counter-box">
              <c.icon size={42} className="counter-icon" />
              <h3>{countValues[i]}+</h3>
              <p>{c.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* HOBBIES SECTION */}
      <div className={`about-hobbies ${hobbiesVisible ? "hobbies-show" : "hobbies-hidden"}`}>
        <h2>Hobbies</h2>
        <div className="hobby-grid">
          <div className="hobby">🎧 Listening to Music</div>
          <div className="hobby">📷 Photography</div>
          <div className="hobby">🎮 Gaming</div>
          <div className="hobby">🏀 Sports & Fitness</div>
        </div>
      </div>
    </section>
  );
}
