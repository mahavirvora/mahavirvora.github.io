
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Solutions",
      content: "Mahavir's technical expertise and leadership skills are exceptional. He delivered our e-commerce platform ahead of schedule and exceeded all performance requirements. His attention to detail and ability to communicate complex concepts clearly made him invaluable to our team.",
      rating: 5,
      avatar: "SJ"
    },
    {
      id: 2,
      name: "David Chen",
      role: "CTO",
      company: "StartupXYZ",
      content: "Working with Mahavir was a game-changer for our startup. His full-stack expertise helped us build a scalable architecture from day one. He's not just a great developer but also an excellent mentor who helped elevate our entire development team.",
      rating: 5,
      avatar: "DC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Project Director",
      company: "Digital Innovations Ltd",
      content: "Mahavir consistently delivers high-quality solutions with remarkable efficiency. His deep understanding of both frontend and backend technologies, combined with his problem-solving skills, makes him one of the best developers I've worked with.",
      rating: 5,
      avatar: "ER"
    },
    {
      id: 4,
      name: "Michael Thompson",
      role: "Senior Developer",
      company: "CloudTech Systems",
      content: "As a colleague, Mahavir is someone you can always count on. His code reviews are thorough, his technical insights are valuable, and his collaborative approach makes every project better. He's truly a senior developer in every sense.",
      rating: 5,
      avatar: "MT"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-portfolio-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            What colleagues and clients say about working with me
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="glass-effect border-gray-700 overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              {/* Quote */}
              <div className="mb-8">
                <svg className="w-12 h-12 text-blue-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                  "{currentTestimonial.content}"
                </blockquote>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 mx-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{currentTestimonial.avatar}</span>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold text-lg">{currentTestimonial.name}</h4>
                  <p className="text-gray-400">{currentTestimonial.role}</p>
                  <p className="text-blue-400 text-sm">{currentTestimonial.company}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
