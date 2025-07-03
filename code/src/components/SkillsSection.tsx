
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('#skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "Angular", level: 95 },
        { name: "React", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 98 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: ".NET Core", level: 80 },
        { name: "Node.js", level: 85 },
        { name: "C#", level: 90 },
        { name: "SQL Server", level: 88 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Azure", level: 85 },
        { name: "Git", level: 95 },
        { name: "Docker", level: 75 },
        { name: "REST APIs", level: 92 },
        { name: "AI", level: 90 }
      ]
    }
  ];

  const SkillBar = ({ skill, index }: { skill: { name: string; level: number }; index: number }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-blue-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 0.1}s`
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-portfolio-dark to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Expertise across the full stack with a focus on modern technologies and best practices
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.title} className="glass-effect border-gray-700 hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      index={categoryIndex * 5 + skillIndex} 
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Agile/Scrum', 'Team Leadership', 'Code Review', 'Performance Optimization',
              'Security Best Practices', 'CI/CD', 'Testing', 'Architecture Design',
              'Mentoring', 'Technical Documentation'
            ].map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm font-medium glass-effect hover:scale-105 transition-transform duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
