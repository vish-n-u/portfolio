import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import swiggyImg from "./assets/images/projectsImages/swiggyCloneImg.JPG";
import notepadImg from "./assets/images/projectsImages/notepad.PNG";
import youtubeImg from "./assets/images/projectsImages/youtube.png";
import backendImg from "./assets/images/projectsImages/backend.jpg";
import notera from "./assets/images/projectsImages/notera.png";
import excelCloneImg from "./assets/images/projectsImages/excel-cloneImg.PNG";
import pdfUrlPath from "./assets/Vishnu_Nair_2yr_exp_AI_Fullstack_Developer_Mumbai.pdf"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Briefcase,
  User,
  Award,
  ChevronDown,
  Menu,
  X,
  Calendar,
  MapPin,
  Sun,
  Moon,
  Download,
  Phone,
  File,
  Video,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const observerRef = useRef(null);

  // Sample data
  const portfolioData = {
    name: "Vishnu Nair",
    title: "Software Engineer",
    bio: "Passionate about solving real world problems.",
    location: "Mumbai, MA",
    email: "vishnuna26@gmail.com",
    github: "https://github.com/vish-n-u",
    linkedin:
      "https://www.linkedin.com/in/vishnu-nair-%F0%9F%9B%A9%EF%B8%8F-439472204/",

    skills: [
      "React",
      "Javascript",
      "MongoDB",
      "Node.js",
      "MySQL",
      "TypeScript",
      "Android",
      "Kotlin",
      "Jetpack Compose",
      "AWS",
      "Docker",
      "GraphQL",
      "Android Studio",
      "Mobile App Development",
    ],

    projects: [
      {
        id: 2,
        title: "Notera",
        description: "A real time hands free note creating android app.",
        image: notera,
        tech: [
          "Android Studio",
          "Kotlin",
          "Jetpack Compose",
          "Native Android",
          "Firebase Analytics",
          "Firebase Crashlytics",
          "OpenAi Api integrations",
        ],
        video: "https://www.youtube.com/watch?v=gFBa8hxmpFc",
        date: "2024",
        featured: true,
      },
      {
        id: 1,
        title: "Excel Clone App",
        description:
          "Interactive 3D product customization platform with real-time rendering, material selection, and AR preview capabilities.",
        image: excelCloneImg,
        tech: ["Vanilla.js", "Html", "Css"],
        github: "https://github.com/vish-n-u/Excel-clone-",
        live: "https://excel-clone12.netlify.app/",
        date: "2023",
        featured: true,
      },

      {
        id: 3,
        title: "Swiggy Clone App",
        description: "A full stack Swiggy Clone Application",
        image: swiggyImg,
        tech: [
          "React",
          "Redux",
          "Express",
          "Nodejs",
          "MongoDB",
          "Google OAuth",
          "JWT",
          "AWS",
          "Nginx",
          "Cloudflare",
          "GoDaddy",
        ],
        github: "https://github.com/vish-n-u/foodVillaApp",
        video: "https://www.youtube.com/watch?v=Tpbe2MsCvZo",
        live: "https://rapidosh.in/",
        date: "2023",
        featured: false,
      },
    ],
experience: [
  {
    company: "KN Technolabs",
    position: "Software Developer",
    duration: "Jan 2024 - Present",
    description:
      <p>Assisted with development of 'VidyBack', integrating new features with React and Nodejs to meet user needs and market trends. <br/>
      Built and optimized RESTful APIs and Firebase for real-time data sync and storage. <br/> 
      Enhanced performance through bug fixes, load time improvements, and component optimization.<br/>
       Collaborated on modern UI/UX, integrated OpenAI for intelligent content generation, and mentored interns to uphold development quality.</p>,
  },
  {
    company: "Toriox OPC",
    position: "Intern",
    duration: "2023 - 2024",
    description:
     <p>Collaborated with the team to design and launch a user-friendly website using Next.js.<br/>
      Assisted in debugging and improving software functionality alongside senior developers.</p>,
  },
]
  };

  useEffect(() => {
      const sections = document.querySelectorAll('section[id]');
      
      const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -80% 0px', // Trigger when section is 20% visible from top
        threshold: 0
      };
  
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, observerOptions);
  
      sections.forEach((section) => {
        observerRef.current.observe(section);
      });
  
      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }, []);

  // Three.js Scene Setup
 useEffect(() => {
  if (!mountRef.current) return;

  const testPerformance = (callback) => {
    let frames = 0;
    const start = performance.now();

    function testLoop() {
      frames++;
      const now = performance.now();
      if (now - start < 1000) {
        requestAnimationFrame(testLoop);
      } else {
        const fps = frames / ((now - start) / 1000);
        callback(fps);
      }
    }

    requestAnimationFrame(testLoop);
  };

  const initThreeScene = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 32, 32),
      new THREE.ConeGeometry(0.6, 1.2, 8),
      new THREE.TorusGeometry(0.6, 0.3, 16, 100),
    ];

    const materials = [
      new THREE.MeshPhongMaterial({
        color: isDarkMode ? 0x4f46e5 : 0x3b82f6,
        transparent: true,
        opacity: 0.8,
      }),
      new THREE.MeshPhongMaterial({
        color: isDarkMode ? 0x7c3aed : 0x8b5cf6,
        transparent: true,
        opacity: 0.8,
      }),
      new THREE.MeshPhongMaterial({
        color: isDarkMode ? 0x06b6d4 : 0x0ea5e9,
        transparent: true,
        opacity: 0.8,
      }),
      new THREE.MeshPhongMaterial({
        color: isDarkMode ? 0x8b5cf6 : 0xa855f7,
        transparent: true,
        opacity: 0.8,
      }),
    ];

    const meshes = [];
    for (let i = 0; i < 15; i++) {
      const geometry =
        geometries[Math.floor(Math.random() * geometries.length)];
      const material =
        materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
      };

      scene.add(mesh);
      meshes.push(mesh);
    }

    const ambientLight = new THREE.AmbientLight(
      isDarkMode ? 0x404040 : 0x606060,
      0.6
    );
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);

    scene.add(ambientLight);
    scene.add(directionalLight);

    camera.position.z = 10;

    const mouse = new THREE.Vector2();
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      meshes.forEach((mesh) => {
        mesh.rotation.x += mesh.userData.rotationSpeed.x;
        mesh.rotation.y += mesh.userData.rotationSpeed.y;
        mesh.rotation.z += mesh.userData.rotationSpeed.z;

        mesh.position.x += (mouse.x * 2 - mesh.position.x) * 0.02;
        mesh.position.y += (mouse.y * 2 - mesh.position.y) * 0.02;
      });

      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    sceneRef.current = { scene, camera, renderer, meshes };

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  };

  // Start test, then conditionally initialize
  testPerformance((fps) => {
    if (fps < 30) {
      console.warn("Low performance detected. Skipping Three.js.");
      // Optionally show fallback here
      mountRef.current.innerHTML =
        "<div style='text-align:center;color:gray;'>Visuals disabled for better performance</div>";
    } else {
      const cleanup = initThreeScene();
      return cleanup;
    }
  });
}, [isDarkMode]);

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
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = {
    bg: isDarkMode
      ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      : "bg-gradient-to-br from-blue-50 via-white to-purple-50",
    text: isDarkMode ? "text-white" : "text-gray-900",
    textSecondary: isDarkMode ? "text-gray-300" : "text-gray-600",
    textMuted: isDarkMode ? "text-gray-400" : "text-gray-500",
    card: isDarkMode
      ? "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-white/10"
      : "bg-white/70 border-gray-200/50 shadow-lg",
    nav: isDarkMode ? "bg-slate-900/95" : "bg-white/95",
    button: isDarkMode
      ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
    buttonOutline: isDarkMode
      ? "border-blue-400 hover:bg-blue-400/10"
      : "border-blue-600 hover:bg-blue-600/10",
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${themeClasses.bg} ${themeClasses.text}`}
    >
      {/* 3D Background */}
      <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? `${themeClasses.nav} backdrop-blur-sm shadow-lg`
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {portfolioData.name.split(" ")[0]}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "projects", "experience", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize hover:text-blue-400 transition-colors ${
                      activeSection === item
                        ? "text-blue-400"
                        : themeClasses.textSecondary
                    }`}
                  >
                    {item}
                  </button>
                )
              )}

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 ${themeClasses.buttonOutline} border`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 ${themeClasses.buttonOutline} border`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${themeClasses.nav} backdrop-blur-sm`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["home", "about", "projects", "experience", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`block px-3 py-2 text-base font-medium ${themeClasses.textSecondary} hover:text-blue-400 capitalize w-full text-left`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            {portfolioData.name}
          </h1>

          <p className="text-2xl p-5 md:text-3xl mb-8 font-light bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {portfolioData.title}
          </p>

          <p
            className={`text-lg mb-12 max-w-2xl mx-auto leading-relaxed ${themeClasses.textMuted}`}
          >
            {portfolioData.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className={`px-10 py-4 ${themeClasses.button} rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl text-white font-semibold`}
            >
              Explore My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-10 py-4 border-2 ${themeClasses.buttonOutline} rounded-full transition-all duration-300 font-semibold`}
            >
              Let's Connect
            </button>
            <button
              onClick={() => {
                // Assuming 'sample.pdf' is in the public folder
                const pdfUrl = pdfUrlPath;
                const link = document.createElement("a");
                link.href = pdfUrl;
                link.download = "Vishnu_Nair_2yr_exp_AI_Fullstack_Developer_Mumbai.pdf"; // Desired filename for download
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className={`px-10 py-4 ${themeClasses.card} rounded-full transition-all duration-300 hover:scale-105 border flex items-center space-x-2`}
            >
              <Download
                className={`hover:text-white hover:fill-white`}
                size={18}
              />
              <span>Resume</span>
            </button>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={portfolioData.github}
              className={`${themeClasses.textMuted} hover:text-blue-400 transition-colors transform hover:scale-125`}
            >
              <Github className=" hover:fill-white" size={28} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={portfolioData.linkedin}
              className={`${themeClasses.textMuted} hover:text-blue-400 transition-colors transform hover:scale-125`}
            >
              <Linkedin className=" hover:fill-blue-500" size={28} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`mailto:${portfolioData.email}`}
              className={`${themeClasses.textMuted} hover:text-blue-400 transition-colors transform hover:scale-125`}
            >
              <Mail className="hover:fill-none" size={28} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className={themeClasses.textMuted} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className={`${themeClasses.card} rounded-3xl p-8 backdrop-blur-sm border transform hover:scale-105 transition-all duration-300`}
              >
                <h3 className="text-3xl font-semibold mb-6 text-blue-400">
                  Skills & Technologies
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {portfolioData.skills.map((skill, index) => (
                    <div
                      key={index}
                      className={`${
                        isDarkMode
                          ? "bg-slate-800/50 border-white/10"
                          : "bg-gray-100 border-gray-200"
                      } rounded-xl px-4 py-3 text-sm text-center border hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`space-y-8 ${!isDarkMode ?`${themeClasses.card}  rounded-3xl p-8 backdrop-blur-sm border transform hover:scale-105 transition-all duration-300`:"" }`}>
              <p
                className={`text-xl font-semibold leading-relaxed ${themeClasses.textSecondary} ${isDarkMode?"text-purple-200":"text-violet-700"}`}
              >
                I'm a passionate developer who focuses on solving real world
                problems , Optimizing web apps and creating user required
                features.
              </p>

              <p 
                className={`text-xl font-semibold leading-relaxed ${themeClasses.textSecondary} ${isDarkMode?"text-purple-200":"text-violet-700"}`}
              >
                When I'm not pushing the boundaries of what's possible on the
                web, you'll find me experimenting with new technologies or
                building apps I think can solve niche real life problems.
              </p>

              <div
                className={`flex items-center space-x-4 ${themeClasses.textMuted} ${isDarkMode?"text-purple-200":"text-purple-700"}`}
              >
                <MapPin size={20} />
                <span className="text-lg">{portfolioData.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl p-5 font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {portfolioData.projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div
                  key={project.id}
                  className={`${themeClasses.card} rounded-3xl overflow-hidden border hover:border-blue-400/50 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl group`}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-blue-400">
                        {project.title}
                      </h3>
                      <span
                        className={`text-sm ${themeClasses.textMuted} flex items-center bg-blue-500/20 px-3 py-1 rounded-full`}
                      >
                        <Calendar size={14} className="mr-1" />
                        {project.date}
                      </span>
                    </div>

                    <p
                      className={`${themeClasses.textSecondary} mb-6 leading-relaxed text-lg`}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className={`bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full text-sm border border-blue-500/30 font-medium ${isDarkMode?"text-purple-200":"text-blue-700"}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {index == 0 ? (
                      <div className="flex space-x-4">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.video}
                          className={`flex items-center ${themeClasses.textMuted} hover:text-blue-400 transition-colors font-medium`}
                        >
                          <Video size={18} className="mr-2 hover:fill-white" />
                          View Video
                        </a>
                      </div>
                    ) : (
                      <div className="flex space-x-4">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.github}
                          className={`flex items-center ${themeClasses.textMuted} hover:text-blue-400 transition-colors font-medium`}
                        >
                          <Code size={18} className="mr-2 hover:fill-white" />
                          View Code
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.live}
                          className={`flex items-center ${themeClasses.textMuted} hover:text-blue-400 transition-colors font-medium`}
                        >
                          <ExternalLink
                            size={18}
                            className="mr-2 hover:fill-white"
                          />
                          Live Demo
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.projects
              .filter((p) => !p.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className={`${themeClasses.card} rounded-2xl overflow-hidden border hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl`}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-blue-400">
                        {project.title}
                      </h3>
                      <span
                        className={`text-xs ${themeClasses.textMuted} flex items-center`}
                      >
                        <Calendar size={12} className="mr-1" />
                        {project.date}
                      </span>
                    </div>

                    <p
                      className={`${themeClasses.textSecondary} text-sm mb-4 leading-relaxed`}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className={`bg-gradient-to-r from-blue-500/20 to-purple-500/20  px-4 py-2 rounded-full text-sm border border-blue-500/30 font-medium ${isDarkMode?"text-purple-200":"text-blue-700"}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.github}
                        className={`flex items-center ${themeClasses.textMuted} hover:text-blue-400 transition-colors text-sm`}
                      >
                        <Code size={16} className="mr-1 hover:fill-white" />
                        Code
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.live}
                        className={`flex items-center ${themeClasses.textMuted} hover:text-blue-400 transition-colors text-sm`}
                      >
                        <ExternalLink
                          size={16}
                          className="mr-1  hover:fill-white"
                        />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <div
                key={index}
                className={`${themeClasses.card} rounded-3xl p-10 border hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">
                      {exp.position}
                    </h3>
                    <p className={`text-xl ${themeClasses.textSecondary} mb-3`}>
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className={`text-sm ${themeClasses.textMuted} ${
                      isDarkMode ? "bg-slate-700/50" : "bg-gray-200"
                    } px-4 py-2 rounded-full font-medium`}
                  >
                    {exp.duration}
                  </span>
                </div>
                <p
                  className={`${themeClasses.textSecondary} leading-relaxed text-lg`}
                >
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl p-5 font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>

          <p
            className={`text-2xl mb-16 max-w-3xl mx-auto ${themeClasses.textSecondary} ${!isDarkMode ?`${themeClasses.card}  rounded-3xl p-8 backdrop-blur-sm border transform hover:scale-105 transition-all duration-300`:"" } ${isDarkMode?"text-purple-200":"text-blue-700"}`}
          >
            Ready to bring your ideas to life? I'm always excited to work on
            innovative projects and collaborate with creative minds.
          </p>

          <div className="flex w-full justify-center mb-12">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`mailto:${portfolioData.email}`}
              className={`flex items-center  justify-center px-16 py-6 ${themeClasses.button} rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl text-white font-semibold text-lg`}
            >
              <Mail size={24} className="mr-3 hover:fill-none" />
              Send Email
            </a>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={portfolioData.github}
              className={`p-4 ${themeClasses.card} rounded-2xl border transition-all duration-300 transform hover:scale-110 hover:shadow-xl`}
            >
              <Github size={32} className=" hover:fill-white" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={portfolioData.linkedin}
              className={`p-4 ${themeClasses.card} rounded-2xl border transition-all duration-300 transform hover:scale-110 hover:shadow-xl`}
            >
              <Linkedin size={32} className=" hover:fill-blue-500" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 text-center ${
          themeClasses.textMuted
        } border-t relative z-10 ${
          isDarkMode ? "border-white/10" : "border-gray-200"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm">
            Crafted with ❤️ using React, Three.js, and creative passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
