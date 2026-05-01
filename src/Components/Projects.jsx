import React from 'react'

export const Projects = () => {
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
  return (
    <div>
          <section
        id="projects"
        className="w-full reveal  py-20 bg-white dark:bg-gray-900"
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
    </div>
  )
}

export default Projects