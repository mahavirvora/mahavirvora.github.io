
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      title: "Technical Leadership",
      description: "Leading cross-functional teams to deliver high-quality web applications and mentor junior developers."
    },
    {
      title: "Modern Tech Stack",
      description: "Expertise in Angular, React, TypeScript, .NET, Node.js, and cloud technologies for scalable solutions."
    },
    {
      title: "Performance Focus",
      description: "Optimizing applications for speed, accessibility, and user experience across all devices."
    },
    {
      title: "Continuous Learning",
      description: "Staying current with industry trends and best practices to deliver cutting-edge solutions."
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating exceptional digital experiences through innovative web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm an Engineering Manager based in India with over 9 years of experience in web development. I focus on building strong, scalable, and high-performing applications that solve real business problems.
              </p>
              <p className="text-lg leading-relaxed">
                Throughout my career, I've been driven by a love for learning and a desire to create new and better solutions. I enjoy making complex technical systems simple and user-friendly, so anyone can use them with ease.
              </p>
              <p className="text-lg leading-relaxed">
                Besides coding, I mentor new developers, contribute to open-source projects, and keep up with the latest technologies, trends, and best practices in the industry.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Angular', 'JavaScript', 'TypeScript', 'React', 'React-native', '.NET', 'Node.js', 'PHP', 'Codeigniter', 'Azure', 'SQL Server'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="relative max-w-[420px] mx-auto">
            <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl glass-effect flex items-center justify-center">
              <img src="mahavirvora.png" alt="Mahavir Vora Profile" className="object-cover" />
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="glass-effect border-gray-700 hover-lift">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
