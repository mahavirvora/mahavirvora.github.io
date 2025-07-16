
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Frontend', 'Full Stack', '.NET', 'Angular', 'React', 'PHP', 'Node.js', 'FinTech', 'E-commerce'];

  const projects = [
    {
      id: 1,
      title: "NFM Sales App",
      description: "Suite of multiple Angular applications for in-store sales operations, packaged with .NET and WPF containers for Microsoft Surface deployment.",
      category: "Full Stack",
      tags: ["Angular", ".NET", "WPF", "Azure", "E-commerce"],
      image: "photo-1486312338219-ce68d2c6f44d",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Quantamize – FinTech Platform",
      description: "Financial services platform developed using DotNetNuke for modern investment management. Focused on performance optimization and modular feature development.",
      category: ".NET",
      tags: ["DotNetNuke", ".NET", "SQL Server", "FinTech"],
      image: "photo-1461749280684-dccba630e2f6",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "AssetMark Advisor Dashboard",
      description: "Real-time wealth management dashboard with reusable React components and API integrations.",
      category: "Frontend",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "photo-1487058792275-0ad4aaf24ca7",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "Save Day Platform",
      description: "Financial wellness web app built with AngularJS, Node.js, and Java backend services.",
      category: "Frontend",
      tags: ["AngularJS", "Node.js", "MongoDB", "Express"],
      image: "photo-1488590528505-98d2b5aba04b",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 5,
      title: "Say Dil Se Admin Panel",
      description: "Backend and admin panel for a card sharing mobile app, built using CodeIgniter and AngularJS APIs.",
      category: "Full Stack",
      tags: ["PHP", "CodeIgniter", "MySQL", "AngularJS"],
      image: "photo-1486312338219-ce68d2c6f44d",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 6,
      title: "Unique MEP Invoicing System",
      description: "Role-based invoicing and project management portal developed with PHP CodeIgniter.",
      category: "Full Stack",
      tags: ["PHP", "CodeIgniter", "Bootstrap", "MySQL"],
      image: "photo-1461749280684-dccba630e2f6",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 7,
      title: "Awesomefab Shopping Platform",
      description: "E-commerce admin panel enhancements and inventory workflows using CodeIgniter.",
      category: "Full Stack",
      tags: ["PHP", "CodeIgniter", "MySQL", "E-commerce"],
      image: "photo-1488590528505-98d2b5aba04b",
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-foreground'
                  : 'border-gray-600 text-gray-300 hover:bg-muted hover:text-foreground'
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
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 space-x-2">
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-white text-foreground hover:bg-white hover:text-gray-900">
                      View Code
                    </Button>
                  </div>
                </div> */}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-muted text-blue-300 rounded text-xs font-medium">
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
