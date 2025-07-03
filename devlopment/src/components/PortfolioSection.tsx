
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Frontend', 'Full Stack', '.NET', 'React'];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and payment integration",
      category: "Full Stack",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "photo-1486312338219-ce68d2c6f44d",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Enterprise Dashboard",
      description: "Real-time analytics dashboard built with React and .NET Core API",
      category: ".NET",
      tags: [".NET Core", "React", "SignalR", "SQL Server"],
      image: "photo-1461749280684-dccba630e2f6",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern animations and interactions",
      category: "Frontend",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "photo-1487058792275-0ad4aaf24ca7",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates",
      category: "Full Stack",
      tags: ["React", "Firebase", "Material-UI", "PWA"],
      image: "photo-1488590528505-98d2b5aba04b",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "Educational platform with course management and progress tracking",
      category: ".NET",
      tags: [".NET", "Angular", "Entity Framework", "Azure"],
      image: "photo-1581091226825-a6a2a5aee158",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts",
      category: "React",
      tags: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      image: "photo-1649972904349-6e44c42644a7",
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter || project.tags.includes(activeFilter));

  return (
    <section id="portfolio" className="section-padding bg-portfolio-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of projects that demonstrate my expertise in modern web development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="glass-effect border-gray-700 hover-lift group overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=600&q=80`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 space-x-2">
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-800 text-blue-300 rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
