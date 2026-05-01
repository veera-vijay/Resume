import React, { useState, useEffect } from "react";
import resume from "./vijay resume.pdf";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import { Experience } from "./Components/Experience";
import Contact from "./Components/Contact";
import Resume from "./Resume";
import Footer from "./Components/Footer";


export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
 
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

  // Scroll Spy Logic navbar
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
      // 30% 
      { threshold: 0.3 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

 

 

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white dark:bg-gray-900 overflow-x-hidden text-gray-800 dark:text-gray-100 transition-colors duration-300 ">
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
                  {/* <span className="relative inline-block"> */}
                  {item}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 dark:bg-green-400 transition-all duration-300 ease-out group-hover:w-full ${
                      activeSection === item.toLowerCase() ? "w-full" : ""
                    }`}
                  ></span>
                  {/* </span> */}
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
        className=" reveal flex items-center justify-center pt-16 relative overflow-hidden "
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
            {/* Hire Me Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="relative group overflow-hidden bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-xl w-36 sm:w-40 md:w-44 py-2.5 sm:py-3"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Hire Me
                <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>

            {/* Download CV Button */}
            <button className="relative group overflow-hidden border-2 border-green-600 text-green-600 dark:text-green-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 hover:text-white hover:border-transparent hover:scale-105 hover:shadow-xl w-36 sm:w-40 md:w-44 py-2.5 sm:py-3">
              <span className="relative z-10 flex items-center justify-center gap-2">
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
                className="relative hover:bg-gradient-to-r from-green-600 via-blue-600 to-purple-800 flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base transition-all duration-300 hover:scale-105 bg-gray-600 text-white "
              >
                <img
                  width="18"
                  height="18"
                  src="https://img.icons8.com/ios-filled/50/filled-message.png"
                  alt="email"
                  className=" brightness-0 invert dark:brightness-0  dark:invert w-4 h-4 sm:w-5 sm:h-5"
                />
                <span>veera53631@gmail.com</span>
              </a>
            </div>

            <div className="group relative">
              <a
                href="https://github.com/veera-vijay"
                target="_blank"
                rel="noopener noreferrer"
                className="relative  hover:bg-gradient-to-r from-green-600 via-blue-600 to-purple-800 flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base transition-all duration-300 hover:scale-105 bg-gray-600 text-white "
              >
                <img
                  width="28"
                  height="28"
                  src="https://img.icons8.com/sf-black-filled/64/github.png"
                  alt="github"
                  className="  brightness-0 invert dark:brightness-0  dark:invert w-4 h-4 sm:w-5 sm:h-5"
                />
                <span>github.com/veera-vijay</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Experience></Experience>
      <Contact></Contact>
      <Resume></Resume>
      <Footer> </Footer>

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




