import React from 'react'


export const Skills = () => {
  // Familiar With Skills
  const familiarSkills = [
    {
      name: "Next.js",
      icon: (
        <img
          width="48"
          height="48"
          className="dark:brightness-0 dark:invert"
          src="https://img.icons8.com/hatch/64/triangle.png"
          alt="triangle"
        />
      ),
    },

    {
      name: "Tailwind CSS",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/fluency/48/tailwind_css.png"
          alt="tailwind_css"
        />
      ),
    },
    {
      name: "Sql",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/fluency/48/sql.png"
          alt="sql"
        />
      ),
    },
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
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/redux.png"
          alt="redux"
        />
      ),
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
      ),
    },
  ];
  return (
    <div>
      <section
        id="skills"
        className="reveal py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden"
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
    </div>
  );
};

export default Skills