import React, { useState, useEffect } from "react";
import resume from "./vijay resume.pdf"

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isHovering, setIsHovering] = useState(false);
  // Scroll Animation - Reveal sections when visible
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale",
    );

    const revealOnScroll = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger once on load

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);
  // Scroll Animation - Right to Left
  useEffect(() => {
    const slideElements = document.querySelectorAll(".slide-in-right");

    const slideOnScroll = () => {
      slideElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", slideOnScroll);
    slideOnScroll(); // Trigger once on load

    return () => window.removeEventListener("scroll", slideOnScroll);
  }, []);

  const [isMarqueeActive, setIsMarqueeActive] = useState(true);
  // DARK MODE - Load saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    const isDark = savedTheme === "false";

    setDarkMode(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // DARK MODE - Apply theme when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  // Scroll Spy Logic
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "Mini e-commerce site with product display and shopping cart.",
      tech: ["Javascript", "Tailwind CSS", "React"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
      githubLink: "https://github.com/veera-vijay",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "Check weather of any city with live data using OpenWeather API.",
      tech: ["Javascript", "Tailwind CSS", "React"],
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Personal portfolio website to showcase my skills and projects.",
      tech: ["Javascript", "Tailwind CSS", "React"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      githubLink: "#",
    },
  ];

  // Experience Data
  const experiences = [
    {
      id: 1,
      title: "MERN Stack Developer",
      company: "Silicon craft  Pvt Ltd",
      duration: "6 Months",
      description:
        "Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Built RESTful APIs, implemented JWT authentication, and optimized database queries. Collaborated with cross-functional teams to deliver scalable solutions.",
     
    },
    {
      id: 2,
      title: "Automation Testing Course",
      company: "Qspider ",
      duration: "6 Months ",
      description:
        "Completed comprehensive automation testing course covering Selenium WebDriver, TestNG, JUnit, Cucumber, and Jenkins. Learned to write test scripts, perform regression testing, and integrate testing with CI/CD pipelines.",
     
    },
  ];

  // Familiar With Skills
  const familiarSkills = [
    { name: "Next.js" ,icon:( <img width="48" height="48"  className="dark:brightness-0 dark:invert"  src="https://img.icons8.com/hatch/64/triangle.png" alt="triangle"/> )},
   
    {
      name: "Tailwind CSS",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/fluency/48/tailwind_css.png"
          alt="tailwind_css"
        />
      )
    },
    { name: "Sql", icon: <img width="48" height="48" src="https://img.icons8.com/fluency/48/sql.png" alt="sql"/> },
    {
      name: "Bootstrap",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/bootstrap--v2.png"
          alt="bootstrap--v2"
        />
      ),
      
    },
   
    {
      name: "Redux Toolkit",
      icon:<img width="48" height="48" src="https://img.icons8.com/color/48/redux.png" alt="redux"/>
    
    },

    { name: "Axios", icon: "📡", color: "from-green-500 to-emerald-500" },

    { name: "JWT & OTP", icon: "🔐", color: "from-yellow-500 to-orange-500" },

    {
      name: "Git & GitHub",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/sf-regular/48/github.png"
          alt="github"
          className="dark:brightness-0 dark:invert "
         
        />
      )
     
    },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white dark:bg-gray-900   overflow-x-hidden text-gray-800 dark:text-gray-100 transition-colors duration-300 ">
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 transition-colors duration-300 z-50 shadow-md">
        <div className="max-w-[1200px] mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <span className="text-white text-base font-bold">
                  &lt;/&gt;
                </span>
              </div>
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                VeeraVijay
              </span>
            </div>

            {/* Desktop Menu - Visible on md, lg and above */}
            <div className="hidden lg:flex items-center gap-4 lg:gap-6 xl:gap-8  md:hidden sm:hidden">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
                "Resume",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative group transition-all duration-300 ease-in-out hover:scale-105 text-sm font-medium ${
                    activeSection === item.toLowerCase()
                      ? "text-green-600 dark:text-green-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span className="relative inline-block">
                    {item}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 dark:bg-green-400 transition-all duration-300 ease-out group-hover:w-full ${
                        activeSection === item.toLowerCase() ? "w-full" : ""
                      }`}
                    ></span>
                  </span>
                </button>
              ))}

              {/* Dark Mode Toggle Button - Desktop */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-all duration-300"
              >
                {darkMode ? (
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/android/24/sun.png"
                    alt="sun"
                    className="brightness-0 invert w-5 h-5"
                  />
                ) : (
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/external-gradak-royyan-wijaya/24/external-dark-gradak-weather-solidarity-gradak-royyan-wijaya.png"
                    alt="moon"
                    className="w-5 h-5"
                  />
                )}
              </button>
            </div>

            {/* Mobile Menu Button - Visible only on mobile (below md) */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {darkMode ? (
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/android/24/sun.png"
                    alt="sun"
                    className="brightness-0 invert w-5 h-5"
                  />
                ) : (
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/external-gradak-royyan-wijaya/24/external-dark-gradak-weather-solidarity-gradak-royyan-wijaya.png"
                    alt="moon"
                    className="w-5 h-5"
                  />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="focus:outline-none"
              >
                {isMenuOpen ? (
                  <span className="text-black dark:text-white text-2xl font-bold">
                    ✕
                  </span>
                ) : (
                  <img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/ios/50/menu--v7.png"
                    alt="menu"
                    className="dark:brightness-0 dark:invert cursor-pointer"
                  />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-2">
                {[
                  "Home",
                  "About",
                  "Skills",
                  "Projects",
                  "Experience",
                  "Contact",
                  "Resume",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-left transition-all duration-300"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* hero sectioṇ */}
      <section
        id="home"
        className="slide-in-right reveal flex items-center justify-center pt-16 relative overflow-hidden "
      >
        <div className="px-4 text-center w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Hi, I'm VeeraVijay B
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4">
            <span className="relative bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              MERN Stack Developer (Fresher)
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 px-4">
            Passionate about building modern web applications. Looking for my
            first opportunity as a MERN Stack Developer.
          </p>

          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-2">
            <button
              onClick={() => scrollToSection("contact")}
              className="relative group overflow-hidden bg-gradient-to-r from-green-600 to-blue-600 text-white px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span className="relative  z-10 flex items-center gap-2">
                Hire Me{"   "}
                <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            <button className="relative group overflow-hidden border-2 border-green-600 text-green-600 dark:text-green-400 px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 hover:text-white hover:border-transparent hover:scale-105 hover:shadow-xl">
              <span className="relative z-10 flex items-center gap-2 ">
                <a href={resume} download="veeravijay-resume">
                  Download CV
                </a>
                <span className="text-lg group-hover:translate-y-1 transition-transform duration-300">
                  📄
                </span>
              </span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 sm:mt-12 px-4 mb-4">
            <div className="group relative">
              <a
                href="mailto:veera53631@gmail.com"
                className="relative hover:bg-gradient-to-r from-green-600 via-blue-600 to-purple-800 flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base transition-all duration-300 hover:scale-105 "
              >
                <img
                  width="18"
                  height="18"
                  src="https://img.icons8.com/ios-filled/50/filled-message.png"
                  alt="email"
                  className=" dark:brightness-0  dark:invert w-4 h-4 sm:w-5 sm:h-5"
                />
                <span>veera53631@gmail.com</span>
              </a>
            </div>

            <div className="group relative">
              <a
                href="https://github.com/veera-vijay"
                target="_blank"
                rel="noopener noreferrer"
                className="relative  hover:bg-gradient-to-r from-green-600 via-blue-600 to-purple-800 flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base transition-all duration-300 hover:scale-105"
              >
                <img
                  width="28"
                  height="28"
                  src="https://img.icons8.com/sf-black-filled/64/github.png"
                  alt="github"
                  className=" dark:brightness-0  dark:invert w-4 h-4 sm:w-5 sm:h-5"
                />
                <span>github.com/veera-vijay</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Full Width */}
      <section
        id="about"
        className="w-full slide-in-right reveal py-16 sm:py-20 bg-white dark:bg-gray-900"
      >
        <div className="  max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            <span className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent animate-gradient">
              About Me
            </span>
          </h2>

          <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg">
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a{" "}
              <span className="font-bold text-gray-800 dark:text-white">
                recent graduate
              </span>{" "}
              with a Master of Computer Application passionate about web
              development. I have strong knowledge in{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                MERN stack{" "}
              </span>
              and have built several projects during my college journey. I'm
              actively looking for my first job as a
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                {"  "} MERN Stack Developer{" "}
              </span>
              where I can contribute my skills and grow professionally.
            </p>

            <div className="mt-8 p-4 sm:p-6 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl">
              <h3 className="font-bold text-xl sm:text-2xl mb-4 flex justify-center items-center gap-2">
                <span className="text-3xl">🎓</span>
                <span className="bg-gradient-to-r text-center from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Education
                </span>
              </h3>
              <div className="space-y-2 text-center">
                <p className="text-base sm:text-lg">
                  <strong className="text-gray-800 dark:text-white">
                    MCA - Master of Computer Application
                  </strong>
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2 text-sm sm:text-base">
                    🏫 Anna University
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2 text-sm sm:text-base">
                    📅 2023 - 2025
                  </p>
                </div>
                <p className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold">
                  CGPA: 8.1/10
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Full Width */}
      <section
        id="skills"
        className="slide-in-right py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden"
      >
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center -mt-16 mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Skills & Expertise
            </span>
          </h2>

          {/* Core Technologies */}
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 1. HTML/CSS Card - 92% Green Gradient */}
              <div className="group relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3">
                    <span className="text-5xl animate-bounce">
                      <img
                        width="44"
                        height="44"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULAqpPbzPpjFbCJjzBP9lpsFH7foH-ynhxg&s"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="relative w-28 h-28 mb-3 mx-auto">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 112 112"
                    >
                      <defs>
                        <linearGradient
                          id="gradient1"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#213ba3">
                            <animate
                              attributeName="stop-color"
                              values="#1340a2"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </stop>
                          <stop offset="100%" stopColor="#d31c15">
                            <animate
                              attributeName="stop-color"
                              values="#d74420"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </stop>
                        </linearGradient>
                        <filter id="glow1">
                          <feGaussianBlur
                            stdDeviation="4"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="#eeeff6"
                        strokeWidth="6"
                        fill="none"
                        className="dark:stroke-gray-700"
                      />
                      <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="url(#gradient1)"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="314.16"
                        strokeDashoffset={314.16 * (1 - 0.92)}
                        strokeLinecap="round"
                        filter="url(#glow1)"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="314.16"
                          to={314.16 * (1 - 0.92)}
                          dur="1.5s"
                          fill="freeze"
                        />
                      </circle>
                      <circle
                        cx="56"
                        cy="56"
                        r="54"
                        fill="none"
                        stroke="url(#gradient1)"
                        strokeWidth="1"
                        strokeDasharray="10 20"
                        opacity="0.3"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 56 56"
                          to="360 56 56"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent ">
                        92%
                      </span>
                      <span className="text-[10px] text-green-600 dark:text-green-400  mt-0.5">
                        Expert
                      </span>
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-gray-800 dark:text-white">
                    HTML5 & CSS3
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Markup & Styling
                  </p>
                </div>
              </div>

              {/* 2. JavaScript Card - 88% Blue Gradient */}
              <div className="group relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3">
                    <span className="text-5xl">
                      <img
                        width="44"
                        height="44"
                        src="https://img.icons8.com/plasticine/100/javascript-logo.png"
                        alt="javascript-logo"
                      />
                    </span>
                  </div>

                  <div className="relative w-28 h-28 mb-3 mx-auto">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 112 112"
                    >
                      <defs>
                        {/* Yellow Gradient - Updated */}
                        <linearGradient
                          id="gradient2"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#e6d72c">
                            <animate
                              attributeName="stop-color"
                              values="#e6d72c"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </stop>
                          <stop offset="100%" stopColor="#f8ef38">
                            <animate
                              attributeName="stop-color"
                              values="#f9ed62"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </stop>
                        </linearGradient>

                        {/* Yellow Glow */}
                        <filter id="glow2">
                          <feGaussianBlur
                            stdDeviation="4"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Background Circle - Changed to gray */}
                      <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="#e5e7eb"
                        strokeWidth="6"
                        fill="none"
                        className="dark:stroke-gray-700"
                      />

                      {/* Yellow Progress Circle */}
                      <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="url(#gradient2)"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="314.16"
                        strokeDashoffset={314.16 * (1 - 0.88)}
                        strokeLinecap="round"
                        filter="url(#glow2)"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="314.16"
                          to={314.16 * (1 - 0.88)}
                          dur="1.5s"
                          fill="freeze"
                        />
                      </circle>

                      {/* Yellow Rotating Ring */}
                      <circle
                        cx="56"
                        cy="56"
                        r="54"
                        fill="none"
                        stroke="url(#gradient2)"
                        strokeWidth="1"
                        strokeDasharray="15 15"
                        opacity="0.3"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="360 56 56"
                          to="0 56 56"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>

                    {/* Center Text - Yellow Gradient */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent ">
                        88%
                      </span>
                      <span className="text-[10px] text-yellow-600 dark:text-yellow-400 mt-0.5">
                        Advanced
                      </span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-gray-800 dark:text-white">
                    JavaScript
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Core Language
                  </p>
                </div>
              </div>

              {/* 3. Tailwind CSS Card - 90% Green Gradient */}
              <div className="group relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3">
                    <span className="text-5xl">
                      <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/fluency/48/tailwind_css.png"
                        alt="tailwind_css"
                      />
                    </span>
                  </div>

                  <div className="relative w-28 h-28 mb-3 mx-auto">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 112 112"
                    >
                      <defs>
                        {/* Blue Gradient */}
                        <linearGradient
                          id="gradient3"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#3B82F6">
                            <animate
                              attributeName="stop-color"
                              values="#3B82F6;#60A5FA;#2563EB;#3B82F6"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </stop>
                          <stop offset="100%" stopColor="#60A5FA">
                            <animate
                              attributeName="stop-color"
                              values="#60A5FA;#2563EB;#3B82F6;#60A5FA"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </stop>
                        </linearGradient>

                        {/* Blue Glow Effect */}
                        <filter id="glow3">
                          <feGaussianBlur
                            stdDeviation="4"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Background Circle */}
                      <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="#e5e7eb"
                        strokeWidth="6"
                        fill="none"
                        className="dark:stroke-gray-700"
                      />

                      {/* Blue Progress Circle */}
                      <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="url(#gradient3)"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="314.16"
                        strokeDashoffset={314.16 * (1 - 0.9)}
                        strokeLinecap="round"
                        filter="url(#glow3)"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="314.16"
                          to={314.16 * (1 - 0.9)}
                          dur="1.5s"
                          fill="freeze"
                        />
                      </circle>

                      {/* Blue Rotating Ring */}
                      <circle
                        cx="56"
                        cy="56"
                        r="54"
                        fill="none"
                        stroke="url(#gradient3)"
                        strokeWidth="1"
                        strokeDasharray="10 20"
                        opacity="0.3"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 56 56"
                          to="360 56 56"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>

                    {/* Center Text - Blue colors */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent ">
                        90%
                      </span>
                      <span className="text-[10px] text-blue-600 dark:text-blue-400 mt-0.5">
                        Expert
                      </span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-gray-800 dark:text-white">
                    Tailwind CSS
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Utility Framework
                  </p>
                </div>
              </div>

              {/* 4. React.js Card - 83% Purple Gradient */}
              <div className="group relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 ">
                    <span className="text-5xl">
                      <img
                        width="44"
                        height="44"
                        src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
                        alt="react"
                        className="transition-all duration-300 group-hover:scale-110"
                      />
                    </span>
                  </div>

                  <div className="relative w-28 h-28 mb-3 mx-auto">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 112 112"
                    >
                      <defs>
                        {/* React Blue Gradient - Official Color #61DAFB */}
                        <linearGradient
                          id="reactGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#61DAFB">
                            <animate
                              attributeName="stop-color"
                              values="#61DAFB;#00D8FF;#4FA8D6;#61DAFB"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </stop>
                          <stop offset="100%" stopColor="#00D8FF">
                            <animate
                              attributeName="stop-color"
                              values="#00D8FF;#4FA8D6;#61DAFB;#00D8FF"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </stop>
                        </linearGradient>

                        {/* Blue Glow Effect */}
                        <filter id="reactGlow">
                          <feGaussianBlur
                            stdDeviation="4"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Background Circle */}
                      <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="#e5e7eb"
                        strokeWidth="6"
                        fill="none"
                        className="dark:stroke-gray-700"
                      />

                      {/* React Blue Progress Circle */}
                      <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="url(#reactGradient)"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="314.16"
                        strokeDashoffset={314.16 * (1 - 0.83)}
                        strokeLinecap="round"
                        filter="url(#reactGlow)"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="314.16"
                          to={314.16 * (1 - 0.83)}
                          dur="1.5s"
                          fill="freeze"
                        />
                      </circle>

                      {/* Rotating Ring */}
                      <circle
                        cx="56"
                        cy="56"
                        r="54"
                        fill="none"
                        stroke="url(#reactGradient)"
                        strokeWidth="1"
                        strokeDasharray="12 18"
                        opacity="0.3"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="360 56 56"
                          to="0 56 56"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>

                    {/* Center Text - Blue Gradient */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ">
                        83%
                      </span>
                      <span className="text-[10px] text-cyan-600 dark:text-cyan-400 mt-0.5">
                        Advanced
                      </span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-gray-800 dark:text-white">
                    React.js
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    UI Library
                  </p>
                </div>
              </div>

              {/* 5. TypeScript Card - 82% Blue Gradient */}
              <div className="group relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3">
                    <span className="text-5xl">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                        width="48"
                        height="48"
                        alt="TypeScript"
                      />
                    </span>
                  </div>

                  <div className="relative w-28 h-28 mb-3 mx-auto">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 112 112"
                    >
                      <defs>
                        {/* TypeScript Blue Gradient */}
                        <linearGradient
                          id="gradient5"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#3178C6">
                            <animate
                              attributeName="stop-color"
                              values="#3178C6;#3B82F6;#2563EB;#3178C6"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </stop>
                          <stop offset="100%" stopColor="#3B82F6">
                            <animate
                              attributeName="stop-color"
                              values="#3B82F6;#2563EB;#3178C6;#3B82F6"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </stop>
                        </linearGradient>

                        {/* Blue Glow */}
                        <filter id="glow5">
                          <feGaussianBlur
                            stdDeviation="4"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="#e5e7eb"
                        strokeWidth="6"
                        fill="none"
                        className="dark:stroke-gray-700"
                      />

                      {/* Blue Progress Circle */}
                      <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="url(#gradient5)"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="314.16"
                        strokeDashoffset={314.16 * (1 - 0.82)}
                        strokeLinecap="round"
                        filter="url(#glow5)"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="314.16"
                          to={314.16 * (1 - 0.82)}
                          dur="1.5s"
                          fill="freeze"
                        />
                      </circle>

                      {/* Rotating Blue Ring */}
                      <circle
                        cx="56"
                        cy="56"
                        r="54"
                        fill="none"
                        stroke="url(#gradient5)"
                        strokeWidth="1"
                        strokeDasharray="8 22"
                        opacity="0.3"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 56 56"
                          to="360 56 56"
                          dur="3.5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>

                    {/* Center Text - Blue */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                        82%
                      </span>
                      <span className="text-[10px] text-blue-600 dark:text-blue-400">
                        Advanced
                      </span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-gray-800 dark:text-white">
                    TypeScript
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Typed JavaScript
                  </p>
                </div>
              </div>
              {/* 6. Node.js Card - 85% Green Gradient */}
              <div className="group relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 ">
                    <span className="text-5xl">
                      <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/fluency/48/node-js.png"
                        alt="node-js"
                        className="transition-all duration-300 group-hover:scale-110"
                      />
                    </span>
                  </div>

                  <div className="relative w-28 h-28 mb-3 mx-auto">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 112 112"
                    >
                      <defs>
                        {/* Node.js Green Gradient - Official Color #339933 */}
                        <linearGradient
                          id="gradient6"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#339933">
                            <animate
                              attributeName="stop-color"
                              values="#339933;#22C55E;#059669;#339933"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </stop>
                          <stop offset="100%" stopColor="#22C55E">
                            <animate
                              attributeName="stop-color"
                              values="#22C55E;#059669;#339933;#22C55E"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </stop>
                        </linearGradient>

                        {/* Green Glow Effect */}
                        <filter id="glow6">
                          <feGaussianBlur
                            stdDeviation="4"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Background Circle */}
                      <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="#e5e7eb"
                        strokeWidth="6"
                        fill="none"
                        className="dark:stroke-gray-700"
                      />

                      {/* Green Progress Circle */}
                      <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="url(#gradient6)"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="314.16"
                        strokeDashoffset={314.16 * (1 - 0.85)}
                        strokeLinecap="round"
                        filter="url(#glow6)"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="314.16"
                          to={314.16 * (1 - 0.85)}
                          dur="1.5s"
                          fill="freeze"
                        />
                      </circle>

                      {/* Rotating Green Ring */}
                      <circle
                        cx="56"
                        cy="56"
                        r="54"
                        fill="none"
                        stroke="url(#gradient6)"
                        strokeWidth="1"
                        strokeDasharray="10 20"
                        opacity="0.3"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="360 56 56"
                          to="0 56 56"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>

                    {/* Center Text - Green Gradient */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent ">
                        85%
                      </span>
                      <span className="text-[10px] text-green-600 dark:text-green-400 mt-0.5">
                        Advanced
                      </span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-gray-800 dark:text-white">
                    Node.js
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Backend Runtime
                  </p>
                </div>
              </div>

              {/* 7. Express.js Card - 85% Pink Gradient */}
              <div className="group relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 animate-pulse">
                    <span className="text-5xl inline-block transition-all duration-300 group-hover:scale-110">
                      <img
                        width="40"
                        height="40"
                        src="https://img.icons8.com/office/40/express-js.png"
                        alt="express-js"
                      />
                    </span>
                  </div>

                  <div className="relative w-28 h-28 mb-3 mx-auto">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 112 112"
                    >
                      <defs>
                        {/* Express Pink Gradient */}
                        <linearGradient
                          id="gradient7"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#EC4899">
                            <animate
                              attributeName="stop-color"
                              values="#EC4899;#F472B6;#BE185D;#EC4899"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </stop>
                          <stop offset="100%" stopColor="#F472B6">
                            <animate
                              attributeName="stop-color"
                              values="#F472B6;#BE185D;#EC4899;#F472B6"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </stop>
                        </linearGradient>

                        {/* Pink Glow Effect */}
                        <filter id="glow7">
                          <feGaussianBlur
                            stdDeviation="4"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Background Circle */}
                      <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="#e5e7eb"
                        strokeWidth="6"
                        fill="none"
                        className="dark:stroke-gray-700"
                      />

                      {/* Pink Progress Circle */}
                      <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="url(#gradient7)"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="314.16"
                        strokeDashoffset={314.16 * (1 - 0.85)}
                        strokeLinecap="round"
                        filter="url(#glow7)"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="314.16"
                          to={314.16 * (1 - 0.85)}
                          dur="1.5s"
                          fill="freeze"
                        />
                      </circle>

                      {/* Rotating Pink Ring */}
                      <circle
                        cx="56"
                        cy="56"
                        r="54"
                        fill="none"
                        stroke="url(#gradient7)"
                        strokeWidth="1"
                        strokeDasharray="12 18"
                        opacity="0.3"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 56 56"
                          to="360 56 56"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>

                    {/* Center Text - Pink Gradient */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent ">
                        85%
                      </span>
                      <span className="text-[10px] text-pink-600 dark:text-pink-400 mt-0.5">
                        Advanced
                      </span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-gray-800 dark:text-white">
                    Express.js
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    REST APIs
                  </p>
                </div>
              </div>
              {/* 8. MongoDB Card - 85% Green Gradient */}
              <div className="group relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3">
                    <span className="text-5xl animate-bounce">🍃</span>
                  </div>

                  <div className="relative w-28 h-28 mb-3 mx-auto">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 112 112"
                    >
                      <defs>
                        {/* Rotating Conic Gradient */}
                        <linearGradient
                          id="gradient8"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#0c9807">
                            <animate
                              attributeName="stop-color"
                              values="#732c2c;#4ecdc4;#45b7d1;#96ceb4;#ff6b6b"
                              dur="4s"
                              repeatCount="indefinite"
                            />
                          </stop>
                          <stop offset="50%" stopColor="#4ecdc4">
                            <animate
                              attributeName="stop-color"
                              values="#4ecdc4;#45b7d1;#96ceb4;#feca57;#4ecdc4"
                              dur="4s"
                              repeatCount="indefinite"
                            />
                          </stop>
                          <stop offset="100%" stopColor="#45b7d1">
                            <animate
                              attributeName="stop-color"
                              values="#45b7d1;#96ceb4;#feca57;#ff6b6b;#45b7d1"
                              dur="4s"
                              repeatCount="indefinite"
                            />
                          </stop>
                        </linearGradient>

                        {/* Shadow/Glow Effect */}
                        <filter id="glow8">
                          <feGaussianBlur
                            stdDeviation="4"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="#e5e7eb"
                        strokeWidth="6"
                        fill="none"
                        className="dark:stroke-gray-700"
                      />

                      {/* Animated Progress with Stroke Animation */}
                      <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="url(#gradient8)"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="314.16"
                        strokeDashoffset={314.16 * (1 - 0.85)}
                        strokeLinecap="round"
                        filter="url(#glow8)"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="314.16"
                          to={314.16 * (1 - 0.85)}
                          dur="2s"
                          fill="freeze"
                        />
                      </circle>

                      {/* Rotating Ring Effect */}
                      <circle
                        cx="56"
                        cy="56"
                        r="54"
                        fill="none"
                        stroke="url(#gradient8)"
                        strokeWidth="1"
                        strokeDasharray="10 20"
                        opacity="0.3"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 56 56"
                          to="360 56 56"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent ">
                        85%
                      </span>
                      <span className="text-[10px] text-green-600 dark:text-green-400 animate-pulse mt-0.5">
                        Advanced
                      </span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-gray-800 dark:text-white">
                    MongoDB
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    NoSQL Database
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Familiar With - Scrolling Cards */}
          <div className="relative mt-16 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-blue-50 dark:from-gray-800 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-purple-50 dark:from-gray-800 to-transparent pointer-events-none"></div>

            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white flex items-center justify-center gap-3">
              Also Familiar With
              <span className="text-3xl animate-bounce-fast">✨</span>
            </h3>

            <div className="w-full overflow-hidden">
              <div className="marquee">
                {/* Create multiple copies for seamless loop */}
                <div className="marquee__inner">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="marquee__group">
                      {familiarSkills.map((skill, idx) => (
                        <button
                          key={`${i}-${idx}`}
                          onClick={() => handleCardClick(skill.name)}
                          className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-200 dark:border-gray-700 flex-shrink-0"
                          style={{ width: "140px", height: "120px" }}
                        >
                          <div className="text-center">
                            <div className="text-3xl mb-2 flex justify-center">
                              {skill.icon}
                            </div>
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                              {skill.name}
                            </h4>
                          </div>
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            .marquee {
              width: 100%;
              overflow: hidden;
              position: relative;
            }
            .marquee__group:not(:last-child) {
              margin-right: 1rem;
            }

            .marquee__inner {
              display: flex;
              width: fit-content;
              animation: scroll-left 20s linear infinite;
            }

            .marquee__group {
              display: flex;
              gap: 1rem;
              flex-shrink: 0;
            }

            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            /* Pause on hover */
            .marquee:hover .marquee__inner {
              animation-play-state: paused;
            }
          `}</style>
        </div>{" "}
        {/* Closes max-w div */}
      </section>

      {/* Projects Section - Full Width */}
      <section
        id="projects"
        className="w-full slide-in-right  py-20 bg-white dark:bg-gray-900"
      >
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center -mt-14 mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              My Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white dark:bg-gray-800"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-300 dark:bg-gray-300 text-gray-600 dark:text-black  px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Full Width */}
      <section
        id="experience"
        className="w-full py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
      >
        {/* ========== ENHANCED ANIMATED BACKGROUND ELEMENTS ========== */}

        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 -left-40 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
        <div className="absolute top-0 -right-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slower animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slowest animation-delay-4000"></div>

        {/* Floating Particles */}
       
        {/* Rotating Geometric Shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 border-2 border-orange-500/20 rounded-2xl animate-rotate-slow pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 border-2 border-pink-500/20 rounded-full animate-rotate-reverse pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-500/20 rotate-45 animate-spin-slow pointer-events-none"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          {/* ========== ENHANCED TITLE SECTION ========== */}
          <div className="text-center mb-16">
            <div className="relative inline-block">
              {/* Animated Badge */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <span className="inline-block px-4 py-1 text-xs font-semibold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 rounded-full animate-pulse-slow">
                  ✨ MY JOURNEY ✨
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mt-4">
                <span className="bg-gradient-to-r from-orange-600 via-blue-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%]">
                  Work Experience & Certifications
                </span>
              </h2>

              {/* Animated Underline with Glow */}
              <div className="absolute -bottom-3 left-0 w-full">
                <div className="h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full animate-expand-width"></div>
                <div className="h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full animate-expand-width-delayed blur-sm opacity-50"></div>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mt-6 animate-fade-in-up animation-delay-300">
              My professional journey and learning path
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline Container */}
            <div className="relative">
              {/* Animated Timeline Line with Glow Effect */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-red-500 to-pink-500 transform md:-translate-x-1/2 animate-timeline-grow"></div>
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-red-500 to-pink-500 transform md:-translate-x-1/2 blur-md opacity-30 animate-timeline-grow"></div>

              {/* Flowing Light on Timeline */}
              <div className="absolute left-4 md:left-1/2 top-0 w-0.5 h-12 bg-white transform md:-translate-x-1/2 animate-flow-down blur-sm"></div>

              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative mb-16 animate-slide-in-up group ${
                    index % 2 === 0
                      ? "md:pr-[50%] md:text-right"
                      : "md:pl-[50%] md:ml-auto"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Enhanced Timeline Dot with Ripple Effect */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 z-20">
                    <div className="relative">
                      {/* Multiple Ripple Rings */}
                      <div className="absolute -inset-3 bg-orange-500 rounded-full animate-ripple"></div>
                      <div className="absolute -inset-2 bg-orange-500 rounded-full animate-ripple animation-delay-500"></div>
                      <div className="absolute -inset-1 bg-orange-500 rounded-full animate-ripple animation-delay-1000"></div>

                      {/* Rotating Ring */}
                      <div className="absolute -inset-4 border-4 rounded-full animate-rotate-slow"></div>

                      {/* Inner Dot with Glow */}
                      <div className="w-5 h-5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full shadow-lg animate-bounce-slow relative z-10">
                        <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>
                      </div>
                    </div>
                  </div>

                  {/* Content Card with Enhanced Effects */}
                  <div
                    className={`ml-12 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                    }`}
                  >
                    {/* ✅ HOVER EFFECT: Background turns BLACK on hover */}
                    {/* ✅ DARK MODE: Background changes appropriately */}
                    <div className="group/card relative overflow-hidden dark:bg-gray-900/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-3 border border-gray-200 dark:border-red-300/30 cursor-pointer hover:bg-black ">
                      {/* Animated Gradient Border */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 blur-xl -z-10"></div>

                      {/* Shimmer Effect */}
                      <div className="absolute -inset-full top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover/card:animate-shimmer"></div>

                      {/* Corner Decorations */}
                      <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-orange-500/10 to-transparent rounded-br-3xl opacity-0 group-hover/card:opacity-100 transition-all duration-500"></div>
                      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-pink-500/10 to-transparent rounded-tl-3xl opacity-0 group-hover/card:opacity-100 transition-all duration-500"></div>

                      {/* Magnetic Mouse Effect Area */}
                      <div className="relative z-10 transform transition-transform duration-300 group-hover/card:translate-x-1 group-hover/card:-translate-y-1">
                        {/* Icon with Enhanced Animation */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="text-5xl transform transition-all duration-700 group-hover/card:scale-150 group-hover/card:rotate-12 group-hover/card:animate-bounce group-hover/card:drop-shadow-2xl">
                            {exp.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover/card:text-white transition-all duration-500">
                            {exp.title}
                          </h3>
                        </div>

                        {/* Enhanced Tags with 3D Hover */}
                        <div className="flex flex-wrap gap-3 mb-4">
                          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-300 dark:bg-white/10 dark:text-gray-200 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 group-hover/card:bg-white/20 group-hover/card:text-white cursor-default">
                            {exp.company}
                          </span>
                          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-300 dark:bg-white/10 dark:text-gray-200 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 group-hover/card:bg-white/20 group-hover/card:text-white cursor-default">
                            <span className="text-lg">📅</span> {exp.duration}
                          </span>
                        </div>

                        {/* Description with Typing Effect on Hover */}
                        <div className="relative">
                          <p className="text-black dark:text-white text-left leading-relaxed relative z-10 transition-all duration-300 group-hover/card:tracking-wide group-hover/card:text-gray-200">
                            {exp.description}
                          </p>

                          {/* Animated Underline */}
                          {/* <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 group-hover/card:w-full transition-all duration-700"></div> */}

                          {/* Highlight Effect on Text */}
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-orange-500/0 to-pink-500/0 group-hover/card:via-orange-500/10 transition-all duration-700 rounded-lg pointer-events-none"></div>
                        </div>

                        {/* Progress Bar with Number Counter */}
                        <div className="mt-4 pt-2">
                          <div className="flex justify-between text-xs text-black dark:text-white mb-1 group-hover/card:text-black300">
                            <span>Experience level</span>
                            <span className="font-bold text-black dark:text-green-300  animate-counter">
                              100%
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-900 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-green-500 to-pink-500 rounded-full transform origin-left transition-all duration-1000 group-hover/card:w-full w-0"
                              style={{ width: "70%" }}
                            >
                              <div className="w-full h-full animate-shimmer-light"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          /* ========== CORE ANIMATIONS ========== */
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slide-in-up {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float-particle {
            0% {
              transform: translateY(0px) translateX(0px);
              opacity: 0;
            }
            25% {
              opacity: 0.8;
            }
            50% {
              transform: translateY(-40px) translateX(20px);
              opacity: 0.4;
            }
            75% {
              opacity: 0.6;
            }
            100% {
              transform: translateY(-80px) translateX(40px);
              opacity: 0;
            }
          }

          @keyframes float-slow {
            0%,
            100% {
              transform: translate(0px, 0px) rotate(0deg);
            }
            25% {
              transform: translate(20px, -20px) rotate(5deg);
            }
            50% {
              transform: translate(-10px, 30px) rotate(-3deg);
            }
            75% {
              transform: translate(30px, 10px) rotate(8deg);
            }
          }

          @keyframes float-slower {
            0%,
            100% {
              transform: translate(0px, 0px) rotate(0deg);
            }
            33% {
              transform: translate(-30px, 20px) rotate(-5deg);
            }
            66% {
              transform: translate(20px, -30px) rotate(5deg);
            }
          }

          @keyframes timeline-grow {
            from {
              transform: scaleY(0);
              transform-origin: top;
            }
            to {
              transform: scaleY(1);
              transform-origin: top;
            }
          }

          @keyframes expand-width {
            from {
              width: 0%;
              opacity: 0;
            }
            to {
              width: 100%;
              opacity: 1;
            }
          }

          @keyframes expand-width-delayed {
            0% {
              width: 0%;
              opacity: 0;
            }
            50% {
              width: 0%;
              opacity: 0;
            }
            100% {
              width: 100%;
              opacity: 1;
            }
          }

          @keyframes shimmer {
            0% {
              transform: translateX(-100%) skewX(-12deg);
            }
            100% {
              transform: translateX(100%) skewX(-12deg);
            }
          }

          @keyframes shimmer-light {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          @keyframes bounce-slow {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-6px);
            }
          }

          @keyframes pulse-slow {
            0%,
            100% {
              opacity: 0.6;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.05);
            }
          }

          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes ripple {
            0% {
              transform: scale(0.8);
              opacity: 0.8;
            }
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }

          @keyframes rotate-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes rotate-reverse {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }

          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes flow-down {
            0% {
              transform: translateY(0) translateX(-50%);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) translateX(-50%);
              opacity: 0;
            }
          }

          @keyframes counter {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* ========== ANIMATION CLASSES ========== */
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
            opacity: 0;
          }

          .animate-slide-in-up {
            animation: slide-in-up 0.6s ease-out forwards;
            opacity: 0;
          }

          .animate-float-particle {
            animation: float-particle 4s ease-in-out infinite;
          }

          .animate-float-slow {
            animation: float-slow 8s ease-in-out infinite;
          }

          .animate-float-slower {
            animation: float-slower 12s ease-in-out infinite;
          }

          .animate-float-slowest {
            animation: float-slow 15s ease-in-out infinite;
          }

          .animate-timeline-grow {
            animation: timeline-grow 1s ease-out forwards;
          }

          .animate-expand-width {
            animation: expand-width 0.8s ease-out forwards;
          }

          .animate-expand-width-delayed {
            animation: expand-width-delayed 1.2s ease-out forwards;
          }

          .group-hover\\:animate-shimmer {
            animation: shimmer 0.8s ease-in-out;
          }

          .animate-shimmer-light {
            animation: shimmer-light 1.5s ease-in-out infinite;
          }

          .animate-bounce-slow {
            animation: bounce-slow 2s ease-in-out infinite;
          }

          .animate-pulse-slow {
            animation: pulse-slow 2s ease-in-out infinite;
          }

          .animate-gradient {
            background-size: 200%;
            animation: gradient 3s ease infinite;
          }

          .animate-ripple {
            animation: ripple 1.5s ease-out infinite;
          }

          .animate-rotate-slow {
            animation: rotate-slow 10s linear infinite;
          }

          .animate-rotate-reverse {
            animation: rotate-reverse 8s linear infinite;
          }

          .animate-spin-slow {
            animation: spin-slow 6s linear infinite;
          }

          .animate-flow-down {
            animation: flow-down 3s linear infinite;
          }

          .animate-counter {
            animation: counter 0.5s ease-out forwards;
          }

          /* ========== DELAY CLASSES ========== */
          .animation-delay-200 {
            animation-delay: 0.2s;
          }

          .animation-delay-300 {
            animation-delay: 0.3s;
          }

          .animation-delay-500 {
            animation-delay: 0.5s;
          }

          .animation-delay-1000 {
            animation-delay: 1s;
          }

          .animation-delay-2000 {
            animation-delay: 2s;
          }

          .animation-delay-3000 {
            animation-delay: 3s;
          }

          .animation-delay-4000 {
            animation-delay: 4s;
          }

          /* ========== HOVER ENHANCEMENTS ========== */
          .group\\/card:hover .group-hover\\/card\\:w-full {
            width: 100%;
          }

          /* Progress bar animation on hover */
          .group/card:hover .w-0 {
            width: 100% !important;
          }

          /* Scroll-triggered animation support */
          @keyframes slide-in-left {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slide-in-right {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Mouse magnetic effect simulation */
          .group/card {
            transition: transform 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          }
        `}</style>

        {/* Intersection Observer Script for Scroll Animations */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.animate-slide-in-up, .animate-fade-in-up').forEach(el => {
    observer.observe(el);
  });
  
  // Progress bar trigger on hover
  const cards = document.querySelectorAll('.group\\/card');
  cards.forEach(card => {
    const progressBar = card.querySelector('.w-0');
    card.addEventListener('mouseenter', () => {
      if (progressBar) {
        progressBar.style.width = '100%';
      }
    });
  });
})();
`,
          }}
        />
      </section>

      {/* Contact Section - Full Width */}
      <section
        id="contact"
        className="w-full py-20 slide-in-right reveal bg-white dark:bg-gray-900 scroll-mt-20 reveal"
      >
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center -mt-14 reveal-left">
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient -mt-8">
              Get In Touch
            </span>
          </h2>
          <div className="max-w-5xl mx-auto mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info Card - Slides from left */}
              <div
                className="bg-gray-300 dark:bg-gray-800 rounded-2xl p-6 shadow-lg reveal-left"
                style={{ transitionDelay: "0.2s" }}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">📧</span>
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Contact Info
                  </span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-900 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/ios-filled/50/filled-message.png"
                        alt="email"
                        className="brightness-0 invert"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-black dark:text-white flex flex-start">
                        EMAIL
                      </p>
                      <p className="text-gray-900 dark:text-gray-300">
                        veera53631@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-900 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/material-rounded/24/call-female.png"
                        alt="phone"
                        className="brightness-0 invert"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-black dark:text-white flex flex-start">
                        PHONE
                      </p>
                      <p className="text-gray-900 dark:text-gray-300">
                        +91 63748 57553
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-900 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/ios-filled/50/marker.png"
                        alt="location"
                        className="brightness-0 invert"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-black dark:text-white  flex flex-start">
                        LOCATION
                      </p>
                      <p className="text-gray-900 dark:text-gray-300">
                        Chennai, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Card - Slides from right */}
              <div
                className="bg-gray-300 dark:bg-gray-800 rounded-2xl p-6 shadow-lg reveal-right"
                style={{ transitionDelay: "0.3s" }}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">💬</span>
                  <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    Send Message
                  </span>
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white dark:bg-gray-900 dark:text-white"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white dark:bg-gray-900 dark:text-white"
                  />
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white dark:bg-gray-900 dark:text-white resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-green-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 reveal-scale"
                    style={{ transitionDelay: "0.4s" }}
                  >
                    Send Message ✈️
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Resume Section - Full Width */}
      <section
        id="resume"
        className="w-full py-20 slide-in-right reveal bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
      >
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center -mt-16 mb-2">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Resume
            </span>
          </h2>
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white ">
              Download My Resume
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              View or download my complete resume with detailed information
              about my experience, skills, and projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* View Online Button - FIXED */}
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                View Online
              </a>

              {/* Download Button */}
              <a
                href={resume}
                download="Veeravijay_Resume.pdf"
                className="inline-flex items-center justify-center  gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Full Width */}

      <footer className="w-full bg-gray-800 dark:bg-gray-950 text-white py-6">
        <div className="  w-full px-2 text-center">
          <p className="text-sm sm:text-base">
            © 2026 Veeravijay | MERN Stack Developer Fresher
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(15deg);
          }
          75% {
            transform: rotate(-15deg);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes gradient-x {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes gradient-y {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes scroll-down {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 8s linear infinite;
        }
        .animate-gradient-y {
          animation: gradient-y 6s linear infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
          display: inline-block;
        }
        .animate-scroll-down {
          animation: scroll-down 1.5s ease-in-out infinite;
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default App;




