import React from 'react'

export const Experience = () => {
  // Experience Data
  const experiences = [
    {
      id: 2,
      title: "MERN Stack Developer",
      company: "Silicon craft  Pvt Ltd",
      duration: "6 Months",
      description:
        "Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Built RESTful APIs, implemented JWT authentication, and optimized database queries. Collaborated with cross-functional teams to deliver scalable solutions.",
    },
    {
      id: 3,
      title: "Automation Testing Course",
      company: "Qspider ",
      duration: "6 Months ",
      description:
        "Completed comprehensive automation testing course covering Selenium WebDriver, TestNG, JUnit, Cucumber, and Jenkins. Learned to write test scripts, perform regression testing, and integrate testing with CI/CD pipelines.",
    },
  ];

  return (
    <div>
      <section
        id="experience"
        className="w-full py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
      >
        {/* ========== ENHANCED ANIMATED BACKGROUND ELEMENTS ========== */}

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

              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative mb-16 animate-slide-in-up group ${
                    exp.id % 2 === 0
                      ? "md:pr-[50%] md:text-right"
                      : "md:pl-[50%] md:ml-auto"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Enhanced Timeline Dot with Ripple Effect */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 z-20">
                    <div className="relative">
                      {/* Inner Dot with Glow */}
                      <div className="w-5 h-5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full shadow-lg animate-bounce-slow relative z-10">
                        <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>
                      </div>
                    </div>
                  </div>

                  {/* Content Card with Enhanced Effects   padding within the cards */}
                  <div
                    className={`ml-12 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    }`}
                  >
                    {/*  HOVER EFFECT: Background turns BLACK on hover */}
                    {/*  DARK MODE: Background changes appropriately */}
                    <div className="group/card relative overflow-hidden dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-3 border border-gray-200 dark:border-red-300/30 cursor-pointer hover:bg-pink-300 bg-gray-300 ">
                      {/* Magnetic Mouse Effect Area */}
                      <div className="relative z-10 transform transition-transform duration-300 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 ">
                        {/* Icon with Enhanced Animation */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="text-5xl transform transition-all duration-700 group-hover/card:scale-150 group-hover/card:rotate-12 group-hover/card:animate-bounce group-hover/card:drop-shadow-2xl">
                            {exp.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white md:text-left  md:text-xl md:tracking-tighter  transition-all duration-500">
                            {exp.title}
                          </h3>
                        </div>

                        {/* Enhanced Tags with 3D Hover */}
                        <div className="flex flex-wrap gap-3 mb-4">
                          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-300   dark:bg-white/10 dark:text-gray-200 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 group-hover/card:bg-white cursor-default  dark:group-hover/card:bg-gray-800/50 ">
                            {exp.company}
                          </span>
                          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-300 dark:bg-white/10 dark:text-gray-200 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 group-hover/card:bg-white dark:group-hover/card:bg-gray-800/50  cursor-default">
                            <span className="text-lg">📅</span> {exp.duration}
                          </span>
                        </div>

                        {/* Description with Typing Effect on Hover */}
                        <div className="relative">
                          <p className="text-black dark:text-white text-left leading-relaxed relative z-10 transition-all duration-300  ">
                            {exp.description}
                          </p>

                          {/* Highlight Effect on Text */}
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-orange-500/0 to-pink-500/0 group-hover/card:via-orange-500/10 transition-all duration-700 rounded-lg pointer-events-none"></div>
                        </div>

                        {/* Progress Bar with Number Counter */}
                        <div className="mt-4 pt-2">
                          <div className="flex justify-between text-xs text-black dark:text-white mb-1 group-hover/card:text-black300 hover:text-white">
                            <span>Experience level</span>
                            <span className="font-bold text-black dark:text-green-300  hover:text-white animate-counter">
                              100%
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-900 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-300 to-blue-500 rounded-full transform origin-left transition-all duration-1000 group-hover/card:w-full w-0"
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
    </div>
  );
};

export default Experience