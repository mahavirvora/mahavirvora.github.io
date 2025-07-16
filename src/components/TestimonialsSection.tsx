
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ushma Nair",
      role: "Project Manager",
      company: "Encora",
      content: "Ridiculously efficient’ is the phrase that comes to mind when I think about Mahavir. I had the pleasure of working with him for few years at the Encora Company, collaborating on several project teams. I was particularly impressed by his ability to handle even the toughest clients effortlessly. That skill often takes years to develop among customer service professionals, but it seemed to come perfectly naturally to him. Mahavir's ability to juggle multiple projects was unlike any I’ve seen before and made a dramatic difference in the productivity level of our team. He would be an asset to any team.",
      rating: 5,
      avatar: "UN"
    },
    {
      id: 2,
      name: "Chandan Kotak",
      role: "SSE",
      company: "",
      content: "Having had the honor of collaborating closely with Mahavir at BrillBrains Technolabs, I am enthusiastic in endorsing his remarkable proficiency in PHP, CodeIgniter, and Angular. His skillfulness in effectively addressing intricate issues and his eagerness to welcome novel obstacles underscore his flexibility. Mahavir's consistent commitment to honing fresh abilities not only demonstrates his dedication but also establishes him as an indispensable resource for any undertaking.",
      rating: 5,
      avatar: "CK"
    },
    {
      id: 3,
      name: "Parth Modi",
      role: "SSE",
      company: "Encora",
      content: "Mahavir is one of the best Team Leaders I ever worked with in my career. During the past 2 years, I had the pleasure of working on the same project where he is leading the entire project. His ability to lead multiple projects simultaneously is commendable. He always keeps the team motivated and shares his precious knowledge. He is the go-to guy for all my project related queries. His calm yet focused and genial nature makes him a valuable asset to our team. I wish him all the success in all his future endeavors.",
      rating: 5,
      avatar: "PM"
    },
    {
      id: 4,
      name: "Darshit Shah",
      role: "Senior QA",
      company: "Encora",
      content: "Mahavir is a very productive front end developer and does his best to get the job done. He is committed and dedicated to his work. His devotion and commitment to helping both clients and co-workers find solutions to problems will no doubt be greatly valued anywhere he goes. I highly recommend Mahavir as a valuable member of any development team.",
      rating: 5,
      avatar: "DS"
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
    <section id="testimonials" className="section-padding dark:bg-portfolio-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What colleagues say about working with me
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
                  <span className="text-foreground font-bold text-lg">{currentTestimonial.avatar}</span>
                </div>
                <div className="text-left">
                  <h4 className="text-foreground font-semibold text-lg">{currentTestimonial.name}</h4>
                  <p className="text-muted-foreground">{currentTestimonial.role}</p>
                  <p className="text-primary text-sm">{currentTestimonial.company}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full border-gray-600 text-gray-300 hover:bg-muted hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full border-gray-600 text-gray-300 hover:bg-muted hover:text-foreground"
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
