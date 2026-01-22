import React, { useState, useEffect } from "react";
import swiggyImg from "./assets/images/projectsImages/swiggyCloneImg.JPG";
import excelCloneImg from "./assets/images/projectsImages/excel-cloneImg.PNG";
import notera from "./assets/images/projectsImages/notera.png";
import pdfUrlPath from "./assets/documents/Vishnu Nair Mern Stack 2yr+ experience.pdf";
import vidybackLogo from "./assets/images/vidyback logo.png";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Download,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("work");
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cursorRef = React.useRef(null);

  const portfolioData = {
    name: "Vishnu Nair",
    title: "Software Engineer",
    location: "Mumbai, India",
    email: "vishnuna26@gmail.com",
    github: "https://github.com/vish-n-u",
    linkedin: "https://www.linkedin.com/in/vishnu-nair-%F0%9F%9B%A9%EF%B8%8F-439472204/",

    projects: [
      {
        id: 1,
        title: "Notera",
        type: "Mobile Application",
        year: "2024",
        description: "A hands-free note-taking Android app with AI-powered transcription and smart organization. 50+ installs on Play Store.",
        image: notera,
        tech: ["Kotlin", "Jetpack Compose", "Firebase", "OpenAI API"],
        video: "https://www.youtube.com/watch?v=delR6mivhLw",
        link: "https://play.google.com/store/apps/details?id=com.myapp.ridescribe&hl=en_IN",
        colorScheme: {
          bg: "#FFE5B4",
          text: "#8B4513",
          accent: "#FF8C00"
        }
      },
      {
        id: 2,
        title: "Swiggy Clone",
        type: "Web Application",
        year: "2023",
        description: "Full-stack food delivery platform with microservices architecture and real-time order tracking",
        image: swiggyImg,
        tech: ["React", "Node.js", "MongoDB", "AWS"],
        github: "https://github.com/vish-n-u/foodVillaApp",
        live: "https://rapidosh.in/",
        video: "https://www.youtube.com/watch?v=Tpbe2MsCvZo",
        colorScheme: {
          bg: "#FFD6E8",
          text: "#C41E3A",
          accent: "#FF1744"
        }
      },
      {
        id: 3,
        title: "Excel Clone",
        type: "Web Application",
        year: "2023",
        description: "Interactive spreadsheet application with formula engine and data visualization",
        image: excelCloneImg,
        tech: ["Vanilla JS", "HTML5", "CSS3"],
        github: "https://github.com/vish-n-u/Excel-clone-",
        live: "https://excel-clone12.netlify.app/",
        colorScheme: {
          bg: "#E1CCFF",
          text: "#4A148C",
          accent: "#7B1FA2"
        }
      },
    ],

    experience: [
      {
        company: "KNTECHNOLABS",
        position: "Software Developer",
        duration: "Jan 2024 - Present",
        achievements: [
          "Improved API performance by 30%",
          "Reduced bundle size by 33%",
          "Integrated social media APIs",
        ]
      },
      {
        company: "Toriox OPC",
        position: "Intern",
        duration: "Nov 2023 - Jan 2024",
        achievements: [
          "Developed with Next.js",
          "Collaborated on features",
        ]
      },
    ],

    skills: ["React.js", "TypeScript", "Node.js", "MongoDB", "GraphQL", "Kotlin", "AWS", "Docker"]
  };

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    const mousePosition = { x: 0, y: 0 };
    const cursorPosition = { x: 0, y: 0 };
    const speed = 0.15; // Adjust this for faster/slower following (0.1 = slow, 0.3 = fast)
    let animationFrameId;

    const handleMouseMove = (e) => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
    };

    const animate = () => {
      // Smooth interpolation (lerp)
      cursorPosition.x += (mousePosition.x - cursorPosition.x) * speed;
      cursorPosition.y += (mousePosition.y - cursorPosition.y) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorPosition.x}px`;
        cursorRef.current.style.top = `${cursorPosition.y}px`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    // Smooth scroll behavior
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDark ? 'bg-stone-900' : 'bg-stone-50'}`}>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className={`hidden lg:block fixed w-2 h-2 rounded-full pointer-events-none z-50 ${isDark ? 'bg-stone-100' : 'bg-stone-900'}`}
        style={{
          transform: "translate(-50%, -50%)",
          willChange: "left, top",
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${
        isDark
          ? 'bg-stone-900/80 border-stone-700'
          : 'bg-stone-50/80 border-stone-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6 flex justify-between items-center">
          <div className={`text-lg sm:text-xl font-medium tracking-tight ${isDark ? 'text-stone-100' : 'text-stone-900'}`}>
            {portfolioData.name}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {["about", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm uppercase tracking-wider transition-colors ${
                  activeSection === item
                    ? `${isDark ? 'text-stone-100' : 'text-stone-900'} font-medium`
                    : `${isDark ? 'text-stone-400 hover:text-stone-100' : 'text-stone-500 hover:text-stone-900'}`
                }`}
              >
                {item}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDark
                  ? 'hover:bg-stone-800'
                  : 'hover:bg-stone-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={20} className="text-stone-100" />
              ) : (
                <Moon size={20} className="text-stone-900" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDark
                  ? 'hover:bg-stone-800'
                  : 'hover:bg-stone-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={20} className="text-stone-100" />
              ) : (
                <Moon size={20} className="text-stone-900" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDark
                  ? 'hover:bg-stone-800 text-stone-100'
                  : 'hover:bg-stone-200 text-stone-900'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t transition-colors duration-300 ${
            isDark ? 'border-stone-700 bg-stone-900/95' : 'border-stone-200 bg-stone-50/95'
          }`}>
            <div className="px-4 py-4 space-y-3">
              {["about", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-4 text-sm uppercase tracking-wider transition-colors rounded-lg ${
                    activeSection === item
                      ? `${isDark ? 'text-stone-100 bg-stone-800' : 'text-stone-900 bg-stone-200'} font-medium`
                      : `${isDark ? 'text-stone-400 hover:text-stone-100 hover:bg-stone-800' : 'text-stone-500 hover:text-stone-900 hover:bg-stone-200'}`
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24">
        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            {/* Text Content */}
            <div>
              <h1 className={`text-3xl sm:text-5xl lg:text-7xl font-light tracking-tight mb-4 sm:mb-8 leading-tight sm:leading-none transition-colors duration-300 ${
                isDark ? 'text-stone-100' : 'text-stone-900'
              }`}>
                Software Engineer
                <br />
                building digital
                <br />
                experiences
              </h1>
              <p className={`text-base sm:text-xl max-w-2xl font-light mb-6 sm:mb-8 transition-colors duration-300 ${
                isDark ? 'text-stone-400' : 'text-stone-600'
              }`}>
                Specializing in scalable web and mobile applications with a focus on
                performance and user experience.
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:gap-3 group ${
                  isDark
                    ? 'bg-stone-100 text-stone-900 hover:bg-stone-200'
                    : 'bg-stone-900 text-stone-50 hover:bg-stone-800'
                }`}
              >
                Get in touch
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-12 sm:py-24 px-4 sm:px-6 lg:px-12 transition-colors duration-300 ${
        isDark ? 'bg-stone-800' : 'bg-stone-100'
      }`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-sm uppercase tracking-wider mb-8 sm:mb-16 transition-colors duration-300 ${
            isDark ? 'text-stone-500' : 'text-stone-500'
          }`}>
            About
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16">
            {/* Left Column */}
            <div>
              {/* Text Content */}
              <div className="space-y-6 sm:space-y-8">
                <h3 className={`text-2xl sm:text-4xl font-light tracking-tight mb-4 sm:mb-8 leading-snug transition-colors duration-300 ${
                  isDark ? 'text-stone-100' : 'text-stone-900'
                }`}>
                  I'm a software engineer based in Mumbai, specializing in building
                  exceptional digital experiences.
                </h3>
                <p className={`text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed font-light transition-colors duration-300 ${
                  isDark ? 'text-stone-400' : 'text-stone-600'
                }`}>
                  With over 2 years of experience, I focus on creating scalable web
                  and mobile applications that solve real-world problems.
                </p>
                <p className={`text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed font-light transition-colors duration-300 ${
                  isDark ? 'text-stone-400' : 'text-stone-600'
                }`}>
                  Currently working at KuchNaya Technolabs, where I am working on our flagship product
                  <span className="inline-flex items-center gap-1 mx-1" style={{ verticalAlign: 'middle' }}>
                    <strong><em>"VidyBack</em></strong>
                    <img src={vidybackLogo} alt="VidyBack" className="inline h-5 w-5 rounded" style={{ verticalAlign: 'middle' }} />
                  "</span>.
                </p>

                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = pdfUrlPath;
                    link.download = "Vishnu_Nair_Resume.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-colors duration-300 ${
                    isDark
                      ? 'bg-stone-100 text-stone-900 hover:bg-stone-200'
                      : 'bg-stone-900 text-stone-50 hover:bg-stone-800'
                  }`}
                >
                  <Download size={16} />
                  Resume
                </button>
              </div>
            </div>

            {/* Right Column - Skills & Experience */}
            <div className="space-y-8 sm:space-y-12">
              {/* Skills */}
              <div>
                <h4 className={`text-xs uppercase tracking-wider mb-4 sm:mb-6 transition-colors duration-300 ${
                  isDark ? 'text-stone-500' : 'text-stone-500'
                }`}>
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {portfolioData.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-colors duration-300 ${
                        isDark
                          ? 'bg-stone-700 text-stone-100'
                          : 'bg-stone-200 text-stone-900'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h4 className={`text-xs uppercase tracking-wider mb-4 sm:mb-6 transition-colors duration-300 ${
                  isDark ? 'text-stone-500' : 'text-stone-500'
                }`}>
                  Experience
                </h4>
                <div className="space-y-6 sm:space-y-8">
                  {portfolioData.experience.map((exp, idx) => (
                    <div key={idx} className={`border-l-2 pl-4 sm:pl-6 transition-colors duration-300 ${
                      isDark ? 'border-stone-600' : 'border-stone-300'
                    }`}>
                      <div className={`text-base sm:text-lg font-medium transition-colors duration-300 ${
                        isDark ? 'text-stone-100' : 'text-stone-900'
                      }`}>
                        {exp.position}
                      </div>
                      <div className={`text-xs sm:text-sm mb-2 sm:mb-3 transition-colors duration-300 ${
                        isDark ? 'text-stone-400' : 'text-stone-600'
                      }`}>
                        {exp.company} · {exp.duration}
                      </div>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {exp.achievements.map((achievement, aidx) => (
                          <li
                            key={aidx}
                            className={`text-xs sm:text-sm flex items-start gap-2 transition-colors duration-300 ${
                              isDark ? 'text-stone-400' : 'text-stone-600'
                            }`}
                          >
                            <span className={`mt-1 transition-colors duration-300 ${
                              isDark ? 'text-stone-600' : 'text-stone-400'
                            }`}>—</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-sm uppercase tracking-wider mb-8 sm:mb-16 transition-colors duration-300 ${
            isDark ? 'text-stone-500' : 'text-stone-500'
          }`}>
            Projects
          </h2>

          <div className="space-y-16 sm:space-y-32">
            {portfolioData.projects.map((project, index) => (
              <div
                key={project.id}
                className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center"
                style={{
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                }}
              >
                {/* Project Image */}
                <div
                  className="relative aspect-[16/10] w-full sm:max-w-md rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: isDark
                        ? `linear-gradient(135deg, ${project.colorScheme.accent}00 0%, ${project.colorScheme.accent}60 100%)`
                        : `linear-gradient(135deg, ${project.colorScheme.bg}00 0%, ${project.colorScheme.bg}80 100%)`,
                    }}
                  />
                </div>

                {/* Project Info */}
                <div className={index % 2 === 0 ? "lg:pl-12" : "lg:pr-12"}>
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <span
                      className="text-xs uppercase tracking-wider font-medium"
                      style={{ color: project.colorScheme.accent }}
                    >
                      {project.type}
                    </span>
                    <span className={`text-xs transition-colors duration-300 ${isDark ? 'text-stone-500' : 'text-stone-400'}`}>
                      {project.year}
                    </span>
                  </div>

                  <h3 className={`text-3xl sm:text-5xl font-light tracking-tight mb-4 sm:mb-6 transition-colors duration-300 ${
                    isDark ? 'text-stone-100' : 'text-stone-900'
                  }`}>
                    {project.title}
                  </h3>

                  <p className={`text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed font-light transition-colors duration-300 ${
                    isDark ? 'text-stone-400' : 'text-stone-600'
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs uppercase tracking-wider rounded-full border transition-colors duration-300"
                        style={{
                          borderColor: project.colorScheme.accent,
                          color: project.colorScheme.accent,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider hover:gap-3 transition-all group ${
                          isDark ? 'text-stone-100' : 'text-stone-900'
                        }`}
                      >
                        Play Store
                        <ArrowUpRight
                          size={14}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform sm:hidden"
                        />
                        <ArrowUpRight
                          size={16}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform hidden sm:block"
                        />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider hover:gap-3 transition-all group ${
                          isDark ? 'text-stone-100' : 'text-stone-900'
                        }`}
                      >
                        View Live
                        <ArrowUpRight
                          size={14}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform sm:hidden"
                        />
                        <ArrowUpRight
                          size={16}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform hidden sm:block"
                        />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider hover:gap-3 transition-all group ${
                          isDark ? 'text-stone-100' : 'text-stone-900'
                        }`}
                      >
                        GitHub
                        <ArrowUpRight
                          size={14}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform sm:hidden"
                        />
                        <ArrowUpRight
                          size={16}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform hidden sm:block"
                        />
                      </a>
                    )}
                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider hover:gap-3 transition-all group ${
                          isDark ? 'text-stone-100' : 'text-stone-900'
                        }`}
                      >
                        Demo
                        <ArrowUpRight
                          size={14}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform sm:hidden"
                        />
                        <ArrowUpRight
                          size={16}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform hidden sm:block"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-sm uppercase tracking-wider mb-8 sm:mb-16 transition-colors duration-300 ${
            isDark ? 'text-stone-500' : 'text-stone-500'
          }`}>
            Get in Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-start">
            <div>
              <h3 className={`text-3xl sm:text-5xl font-light tracking-tight mb-4 sm:mb-8 leading-tight transition-colors duration-300 ${
                isDark ? 'text-stone-100' : 'text-stone-900'
              }`}>
                Let's work
                <br />
                together
              </h3>
              <p className={`text-base sm:text-lg font-light leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-stone-400' : 'text-stone-600'
              }`}>
                I'm always interested in hearing about new projects and
                opportunities. Feel free to reach out.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <button
                onClick={() => window.location.href = `mailto:${portfolioData.email}`}
                className="group block text-left cursor-pointer w-full"
              >
                <div className={`text-xs uppercase tracking-wider mb-2 transition-colors duration-300 ${
                  isDark ? 'text-stone-500' : 'text-stone-500'
                }`}>
                  Email
                </div>
                <div className={`text-lg sm:text-2xl transition-colors flex items-center gap-2 break-all ${
                  isDark
                    ? 'text-stone-100 group-hover:text-stone-400'
                    : 'text-stone-900 group-hover:text-stone-600'
                }`}>
                  {portfolioData.email}
                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0 hidden sm:block"
                  />
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0 sm:hidden"
                  />
                </div>
              </button>

              <div className={`pt-4 sm:pt-6 border-t transition-colors duration-300 ${
                isDark ? 'border-stone-700' : 'border-stone-200'
              }`}>
                <div className={`text-xs uppercase tracking-wider mb-3 sm:mb-4 transition-colors duration-300 ${
                  isDark ? 'text-stone-500' : 'text-stone-500'
                }`}>
                  Social
                </div>
                <div className="flex gap-5 sm:gap-6">
                  <a
                    href={portfolioData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors duration-300 ${
                      isDark
                        ? 'text-stone-100 hover:text-stone-400'
                        : 'text-stone-900 hover:text-stone-600'
                    }`}
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href={portfolioData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors duration-300 ${
                      isDark
                        ? 'text-stone-100 hover:text-stone-400'
                        : 'text-stone-900 hover:text-stone-600'
                    }`}
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <button
                    onClick={() => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.email}`,
      "_blank"
    );
  }}
                    className={`transition-colors duration-300 cursor-pointer ${
                      isDark
                        ? 'text-stone-100 hover:text-stone-400'
                        : 'text-stone-900 hover:text-stone-600'
                    }`}
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 sm:py-12 px-4 sm:px-6 lg:px-12 border-t transition-colors duration-300 ${
        isDark ? 'border-stone-700' : 'border-stone-200'
      }`}>
        <div className={`max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-xs sm:text-sm transition-colors duration-300 ${
          isDark ? 'text-stone-500' : 'text-stone-500'
        }`}>
          <div>© {new Date().getFullYear()} Vishnu Nair</div>
          <div className="text-xs uppercase tracking-wider">
            Mumbai, India
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
