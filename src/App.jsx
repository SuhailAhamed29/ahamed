import { useState, useEffect } from "react";
import "./App.css";

function Hero() {
  const japaneseName = "ダニシャ・スハイル";
  const englishName = "Suhail Ahamed";

  const [jpIndex, setJpIndex] = useState(0);
  const [enIndex, setEnIndex] = useState(0);
  const [showEnglish, setShowEnglish] = useState(false);

  // Type Japanese name first
  useEffect(() => {
    if (jpIndex < japaneseName.length) {
      const t = setTimeout(() => setJpIndex((prev) => prev + 1), 120);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setShowEnglish(true), 400);
      return () => clearTimeout(t);
    }
  }, [jpIndex, japaneseName.length]);

  // Then type English name
  useEffect(() => {
    if (showEnglish && enIndex < englishName.length) {
      const t = setTimeout(() => setEnIndex((prev) => prev + 1), 120);
      return () => clearTimeout(t);
    }
  }, [showEnglish, enIndex, englishName.length]);

  return (
    <section className="section hero">
      <div className="section-inner">
        <p className="terminal-line">
          <span className="prompt">&gt;_</span> Hello I'm
        </p>

        <div className="hero-names">
          <div className="hero-name hero-name-jp">
            {japaneseName.slice(0, jpIndex)}
            <span className="cursor" />
          </div>

          {showEnglish && (
            <div className="hero-name hero-name-en">
              {englishName
                .slice(0, enIndex)
                .split("")
                .map((char, index) => (
                  <span
                    key={index}
                    className="flicker-letter"
                    style={{ animationDelay: `${index * 40}ms` }}
                  >
                    {char}
                  </span>
                ))}
            </div>
          )}
        </div>

        <p className="hero-subtitle">
          I develop and contribute to Open Source Full Stack apps and specialize
          in CyberSecurity...
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section">
      <div className="section-inner">
        <h2>About me</h2>
        <p>
          Experienced in desktop support, cybersecurity, and full-stack
          development with skills in networking, Linux, Python, and JavaScript.
          Holds certifications in React.js, Python, and Agile.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    "Linux",
    "Python",
    "JavaScript",
    "Git",
    "GitHub",
    "React",
    "Django",
    "MySQL",
  ];

  return (
    <section className="section">
      <div className="section-inner">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill} className="skill-pill">
              <span className="skill-dot" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section">
      <div className="section-inner">
        <h2>Experience</h2>

        <div className="experience-grid">
          {/* Job 1 */}
          <div className="card">
            <h3>
              Associate Engineer | Inspirisys Solutions Limited{" "}
              <span className="client">
                (Client: Vidal Health / Bajaj Finserv)
              </span>
            </h3>
            <p className="time-range">02/2025 – Present</p>
            <ul>
              <li>
                Played a major role in the migration project from Vidal Health
                to Bajaj Finserv, ensuring smooth transition of IT
                infrastructure.
              </li>
              <li>
                Migrated 100+ laptops from the old domain to the new domain,
                maintaining user data integrity.
              </li>
              <li>
                Handled infra clearance activities, including taking backups of
                resigned users’ data, converting OST to PST, and storing
                securely in the backup server.
              </li>
              <li>
                Performed basic switch configurations and network
                troubleshooting to resolve connectivity issues.
              </li>
              <li>
                Provided hardware support for both laptops and desktops,
                ensuring system readiness and performance.
              </li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="card">
            <h3>Desktop Support Engineer | Unique Technologies Pvt Ltd</h3>
            <p className="time-range">01/2024 - 02/2025</p>
            <ul>
              <li>
                Managed and supported 150+ desktops/laptops, performing
                updates, security patches, and pre-exam readiness checks.
              </li>
              <li>
                Conducted mock test setups before examinations to validate
                system performance and minimize risks.
              </li>
              <li>
                Provided L1 support, resolving hardware, software, network, and
                printer issues under strict timelines.
              </li>
              <li>
                Coordinated with exam staff to ensure smooth exam delivery,
                achieving 100% uptime with minimal disruptions.
              </li>
            </ul>
          </div>

          {/* Job 3 */}
          <div className="card">
            <h3>Cyber Security Intern | Internz Learn</h3>
            <ul>
              <li>
                Gained an understanding of firewalls, VPNs, and secure network
                configurations.
              </li>
              <li>
                Explored ethical hacking techniques like DoS attacks and SQL
                injection.
              </li>
              <li>
                Studied OSI model, DHCP, VLAN configurations, and STP in
                networking.
              </li>
              <li>
                Understood the TCP 3-way handshake and its role in establishing
                secure connections.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section">
      <div className="section-inner">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="card project-card">
            <h3>Project 1</h3>
            <p>Describe your project here. Tech stack, what it solves, etc.</p>
          </div>
          <div className="card project-card">
            <h3>Project 2</h3>
            <p>Describe your project here. You can add links later.</p>
          </div>
          <div className="card project-card">
            <h3>Project 3</h3>
            <p>Another project placeholder. Edit this card anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const [hovered, setHovered] = useState(null);

  // Map each achievement to an image name in /public
  const previewImages = {
    cyber: "/cert-cybersecurity.png",
    python: "/cert-python.png",
    agile: "/cert-agile.png",
    react: "/cert-react.png",
  };

  return (
    <section className="section">
      <div className="section-inner">
        <h2>Achievements</h2>

        <div className="achievement-preview">
          {hovered ? (
            <img
              src={previewImages[hovered]}
              alt={`${hovered} certificate`}
            />
          ) : (
            <p>Hover over an achievement to preview the certificate.</p>
          )}
        </div>

        <ul className="achievements-list">
          <li
            onMouseEnter={() => setHovered("cyber")}
            onMouseLeave={() => setHovered(null)}
          >
            Cyber Security Training &amp; Internship
          </li>
          <li
            onMouseEnter={() => setHovered("python")}
            onMouseLeave={() => setHovered(null)}
          >
            Python Certification
          </li>
          <li
            onMouseEnter={() => setHovered("agile")}
            onMouseLeave={() => setHovered(null)}
          >
            Agile Program
          </li>
          <li
            onMouseEnter={() => setHovered("react")}
            onMouseLeave={() => setHovered(null)}
          >
            React.js Certification
          </li>
        </ul>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
    </div>
  );
}
