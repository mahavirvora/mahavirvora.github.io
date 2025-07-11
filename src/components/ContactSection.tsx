
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formUrl = "https://docs.google.com/forms/d/e/1XIXz8KBQOiydwxnVW24B1ZyngR3RoaVdu8CGJ_v55Kc/formResponse";

    const formDataToSend = new FormData();
    formDataToSend.append("entry.465740589", formData.name);    // Name
    formDataToSend.append("entry.1122199151", formData.email);   // Email
    formDataToSend.append("entry.1683567598", formData.subject); // Subject
    formDataToSend.append("entry.563925830", formData.message); // Message

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend
      });

      toast.success("Message sent successfully! I'll get back to you soon.", {
        duration: 4000,
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "voramahavir@gmail.com",
      href: "mailto:voramahavir@gmail.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/mahavir-vora"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-gray-900 to-portfolio-darker">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to discuss your next project? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, innovative projects, 
                and potential collaborations. Whether you're looking for a technical lead, 
                need development expertise, or want to explore how we can work together, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="glass-effect border-gray-700 hover-lift">
                  <CardContent className="p-6">
                    <a 
                      href={method.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 text-white hover:text-blue-400 transition-colors duration-200"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <method.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{method.title}</h4>
                        <p className="text-gray-400">{method.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Availability */}
            {/* <Card className="glass-effect border-gray-700">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Current Availability</h4>
                <p className="text-gray-400">
                  I'm currently available for new projects and consulting opportunities. 
                  Let's discuss how I can help bring your vision to life.
                </p>
                <div className="mt-4 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">Available for new projects</span>
                </div>
              </CardContent>
            </Card> */}
          </div>

          {/* Contact Form */}
          <Card className="glass-effect border-gray-700">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 resize-none"
                    placeholder="Tell me about your project or how I can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
