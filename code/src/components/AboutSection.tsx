
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
    <section id="about" className="section-padding bg-gradient-to-b from-gray-900 to-portfolio-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about creating exceptional digital experiences through innovative web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a Senior Technical Lead based in India with over 9 years of hands-on experience in web development. I specialize in building robust, scalable, and high-performing applications that address real-world business challenges.
              </p>
              <p className="text-lg leading-relaxed">
                My career has been shaped by a passion for continuous learning and a drive for innovation. I take pride in bridging the gap between complex technical architectures and intuitive, user-friendly experiences—ensuring every solution is both technically sound and easy to use.
              </p>
              <p className="text-lg leading-relaxed">
                Beyond coding, I actively mentor aspiring developers, contribute to open-source initiatives, and stay deeply engaged with emerging technologies, industry trends, and best practices.
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
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl glass-effect p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">MV</span>
                </div>
                <p className="text-gray-400">Professional Photo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="glass-effect border-gray-700 hover-lift">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-3">{highlight.title}</h3>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
