import React from "react";
import {
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  GraduationCap,
  Code2,
} from "lucide-react";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";

import Header from "./components/Header";
import "./App.css";

const skills = [
  { name: "React.js", category: "Frontend", icon: FaReact },
  { name: "JavaScript", category: "Frontend", icon: FaJs },
  { name: "HTML5", category: "Frontend", icon: FaHtml5 },
  { name: "CSS3", category: "Frontend", icon: FaCss3Alt },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss },
  { name: "Node.js", category: "Backend", icon: FaNodeJs },
  { name: "Express.js", category: "Backend", icon: SiExpress },
  { name: "REST APIs", category: "Backend", icon: Code2 },
  { name: "MongoDB", category: "Database", icon: SiMongodb },
  { name: "MySQL", category: "Database", icon: SiMysql },
  { name: "Git", category: "Tools", icon: FaGitAlt },
  { name: "Postman", category: "Tools", icon: SiPostman },
  { name: "C#", category: "Other", icon: Code2 },
  { name: "Python", category: "Other", icon: FaPython },
];

const projects = [
  {
    number: "01",
    name: "Brahmapurna Home Kitchen",
    description:
      "A MERN-stack food ordering website featuring food listings, category filtering, and a user-friendly interface.",
    technologies: ["React", "Express", "MongoDB", "Node.js"],
    initials: "BK",
    color: "gold",
    github:
      "https://github.com/SanikaShetye/Brahmapurna-Home-Kitchen",
  },
  {
    number: "02",
    name: "VisionStrike / VioloTrack",
    description:
      "A computer-vision project for helmet detection, triple-riding detection, and vehicle license plate recognition.",
    technologies: ["Python", "YOLOv8", "OpenCV", "EasyOCR"],
    initials: "VS",
    color: "blue",
    github: "https://github.com/SanikaShetye",
  },
  {
    number: "03",
    name: "ParivaarVault",
    description:
      "A family vault web application concept for organizing important documents, memories, and family information.",
    technologies: ["React", "Tailwind CSS", "Express", "MongoDB"],
    initials: "PV",
    color: "purple",
    github: "https://github.com/SanikaShetye",
  },
];

function App() {
  return (
    <>
      <Header />

      <main>
        {/* HOME */}
        <section id="home" className="hero section-container">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="gold-dot"></span>
              HELLO, I'M SANIKA
            </p>

            <h1>
              Building digital
              <br />
              experiences with
              <br />
              <span>code &amp; creativity.</span>
            </h1>

            <h2 className="hero-role">FULL STACK DEVELOPER</h2>

            <p className="hero-description">
              I'm an MCA graduate passionate about building responsive web
              applications and practical digital solutions using React,
              JavaScript, Node.js, and databases.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                Explore My Work <ArrowRight size={19} />
              </a>

              <a href="#contact" className="secondary-button">
                <Mail size={19} /> Contact Me
              </a>
            </div>

            <div className="social-links">
              <span>LET'S CONNECT</span>

              <div className="social-icons">
                <a
                  href="https://github.com/SanikaShetye"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={22} />
                </a>

                <a
                  href="mailto:sanika.shetye26@gmail.com"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-orbit">
              <div className="portrait-ring">
                <img
                  src="/Sanika_Shetye_Profile.jpeg"
                  alt="Sanika Shetye"
                  className="profile-image"
                />
              </div>
            </div>

            <div className="floating-card developer-card">
              <span className="floating-icon">
                <Code2 size={23} />
              </span>
              <div>
                <strong>Developer</strong>
                <p>Building with purpose</p>
              </div>
            </div>

            <div className="floating-card graduate-card">
              <span className="floating-icon">
                <GraduationCap size={23} />
              </span>
              <div>
                <strong>MCA Graduate</strong>
                <p>University of Mumbai</p>
              </div>
            </div>

            <p className="hero-note">
              Learn.
              <br />
              Build.
              <br />
              Evolve.
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section-container content-section">
          <p className="eyebrow">01 / ABOUT ME</p>

          <h2 className="section-title">
            Turning ideas into <span>digital solutions.</span>
          </h2>

          <div className="about-content">
            <p>
              I'm an MCA graduate from Finolex Academy of Management &amp;
              Technology, University of Mumbai. I enjoy building practical
              applications, learning new technologies, and solving problems
              through code.
            </p>

            <div className="about-detail">
              <MapPin size={20} />
              <span>Ratnagiri, Maharashtra, India</span>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section-container content-section">
          <p className="eyebrow">02 / MY SKILLS</p>

          <div className="section-heading-row">
            <h2 className="section-title">Technologies I Work With</h2>
            <p className="section-subtitle">
              Tools and technologies I use to build amazing things.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => {
              const SkillIcon = skill.icon;

              return (
                <div className="skill-card" key={skill.name}>
                  <SkillIcon className="skill-icon" />

                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.category}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section-container content-section">
          <p className="eyebrow">03 / FEATURED PROJECTS</p>

          <div className="section-heading-row">
            <h2 className="section-title">Some of My Work</h2>
            <p className="section-subtitle">
              Real projects. Practical solutions.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-logo ${project.color}`}>
                  {project.initials}
                </div>

                <div className="project-content">
                  <p className="project-number">
                    PROJECT {project.number}
                  </p>

                  <h3>{project.name}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.github}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <ExternalLink size={19} />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section-container contact-section">
          <div>
            <p className="eyebrow">04 / GET IN TOUCH</p>

            <h2 className="section-title">
              Let's Work <span>Together</span>
            </h2>
          </div>

          <div className="contact-message">
            <p>Have an opportunity or project in mind?</p>
            <p>I'd love to connect.</p>
          </div>

          <a
            href="mailto:sanika.shetye26@gmail.com"
            className="primary-button"
          >
            <Mail size={19} />
            Email Me
            <ArrowRight size={19} />
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} Sanika Shetye. Built with React.
        </p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;