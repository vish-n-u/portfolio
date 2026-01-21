import React, { useState, useEffect } from "react";
import swiggyImg from "./assets/images/projectsImages/swiggyCloneImg.JPG";
import excelCloneImg from "./assets/images/projectsImages/excel-cloneImg.PNG";
import notera from "./assets/images/projectsImages/notera.png";
import pdfUrlPath from "./assets/Vishnu_Nair_2yr_exp_AI_Fullstack_Developer_Mumbai.pdf";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  ChevronDown,
  Menu,
  X,
  MapPin,
  Download,
  Phone,
  Video,
  Briefcase,
  Award,
  Zap,
  Users,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const portfolioData = {
    name: "Vishnu Nair",
    title: "Software Engineer",
    tagline: "Building scalable applications that solve real-world problems",
    location: "Mumbai, Maharashtra",
    email: "vishnuna26@gmail.com",
    phone: "+91 9920439118",
    github: "https://github.com/vish-n-u",
    linkedin: "https://www.linkedin.com/in/vishnu-nair-%F0%9F%9B%A9%EF%B8%8F-439472204/",

    highlights: [
      { icon: Zap, label: "30% API Performance Boost", color: "text-emerald-500" },
      { icon: Award, label: "33% Bundle Size Reduction", color: "text-blue-500" },
      { icon: Users, label: "2+ Years Experience", color: "text-purple-500" },
      { icon: Briefcase, label: "10+ Projects Delivered", color: "text-orange-500" },
    ],

    skills: {
      "Frontend": ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "WebAssembly"],
      "Backend": ["Node.js", "Express.js", "GraphQL", "RESTful APIs"],
      "Database": ["MongoDB", "MySQL", "Firebase"],
      "Mobile": ["Kotlin", "Jetpack Compose", "Android Studio"],
      "DevOps & Tools": ["AWS S3", "Docker", "Git", "Vite"],
    },

    projects: [
      {
        id: 1,
        title: "Notera",
        description: "A hands-free note-taking Android app with real-time AI transcription and smart organization.",
        image: notera,
        tech: ["Kotlin", "Jetpack Compose", "Firebase", "OpenAI API"],
        video: "https://www.youtube.com/watch?v=delR6mivhLw",
        highlights: ["Voice-to-text conversion", "AI-powered organization", "Real-time sync"],
      },
      {
        id: 2,
        title: "Swiggy Clone",
        description: "Full-stack food delivery platform with microservices architecture and real-time order tracking.",
        image: swiggyImg,
        tech: ["React", "Redux", "Node.js", "MongoDB", "AWS", "Nginx"],
        github: "https://github.com/vish-n-u/foodVillaApp",
        live: "https://rapidosh.in/",
        video: "https://www.youtube.com/watch?v=Tpbe2MsCvZo",
        highlights: ["Microservices architecture", "Google OAuth", "AWS deployment"],
      },
      {
        id: 3,
        title: "Excel Clone",
        description: "Interactive spreadsheet application with formula engine and data visualization capabilities.",
        image: excelCloneImg,
        tech: ["Vanilla JS", "HTML5", "CSS3"],
        github: "https://github.com/vish-n-u/Excel-clone-",
        live: "https://excel-clone12.netlify.app/",
        highlights: ["Formula engine", "Cell formatting", "Data export"],
      },
    ],

    experience: [
      {
        company: "KNTECHNOLABS",
        position: "Software Developer",
        duration: "Jan 2024 - Present",
        icon: Briefcase,
        highlights: [
          "Improved API performance by 30% through optimization and caching strategies",
          "Reduced bundle size by 33% using vite-bundle-visualizer and code splitting",
          "Integrated social media APIs (Facebook, Instagram, TikTok, LinkedIn, Pinterest)",
          "Implemented GraphQL APIs for Shopify and Etsy integrations",
          "Built features using React, TypeScript, WebAssembly, and Service Workers",
        ],
      },
      {
        company: "Toriox OPC",
        position: "Intern",
        duration: "Nov 2023 - Jan 2024",
        icon: Users,
        highlights: [
          "Developed responsive website using Next.js and modern UI practices",
          "Collaborated with team on bug fixes and feature implementations",
        ],
      },
    ],
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              VN
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "projects", "experience", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-colors ${
                    activeSection === item
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-3 space-y-2">
              {["home", "about", "projects", "experience", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg capitalize font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
              Available for opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {portfolioData.name}
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-600 mb-4 font-medium">
            {portfolioData.title}
          </p>

          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            {portfolioData.tagline}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = pdfUrlPath;
                link.download = "Vishnu_Nair_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-300 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-700 hover:text-blue-600"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-700 hover:text-blue-600"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-700 hover:text-blue-600"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="text-gray-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16"></div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {portfolioData.highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <Icon className={`${item.color} mb-3`} size={32} />
                  <p className="text-gray-700 font-semibold text-sm">{item.label}</p>
                </div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - About Text */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Briefcase className="text-blue-600" size={28} />
                  Who I Am
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  I'm a passionate software engineer specializing in building scalable web and mobile applications.
                  With over 2 years of hands-on experience, I've worked on everything from API development to
                  full-stack applications.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  I love turning complex problems into simple, beautiful solutions. Whether it's optimizing
                  performance, integrating APIs, or crafting intuitive user experiences, I'm always excited
                  to take on new challenges.
                </p>
                <div className="flex items-center gap-2 text-gray-500 pt-4 border-t border-gray-200">
                  <MapPin size={20} className="text-blue-600" />
                  <span>{portfolioData.location}</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-4">What I Love</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-200">▹</span>
                    <span>Building products that make a real impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-200">▹</span>
                    <span>Exploring cutting-edge technologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-200">▹</span>
                    <span>Collaborating with talented teams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-200">▹</span>
                    <span>Continuous learning and growth</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Code className="text-purple-600" size={28} />
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {Object.entries(portfolioData.skills).map(([category, skills]) => (
                    <div key={category}>
                      <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-lg text-sm font-medium border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project) => (
              <div
                key={project.id}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4 space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-blue-600">✓</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Code size={16} />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">Live</span>
                      </a>
                    )}
                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Video size={16} />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16"></div>

          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-start gap-4 mb-4 md:mb-0">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {exp.position}
                        </h3>
                        <p className="text-lg text-gray-600 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                      {exp.duration}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1">▹</span>
                        <p className="text-gray-600 leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>

          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={`mailto:${portfolioData.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a
              href={`tel:${portfolioData.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              <Phone size={20} />
              Call Me
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} className="text-white" />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Vishnu Nair. Crafted with passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
