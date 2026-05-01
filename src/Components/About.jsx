import React from 'react'

export const About = () => {
  return (
    <div>
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

          <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg ">
            <p className="text-base sm:text-left text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
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
    </div>
  );
}
export default About