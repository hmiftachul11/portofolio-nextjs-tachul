"use client"

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Github, Linkedin, ExternalLink, Code, Trophy, Briefcase, GraduationCap, MapPin } from 'lucide-react';

const PortfolioLanding = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = (speed: number) => ({
    transform: `translateY(${scrollY * speed}px)`,
  });

  const experiences = [
    {
      company: "PT. Astra International Tbk",
      role: "Frontend Developer",
      period: "Apr 2024 - present",
      highlights: [
        "Developed multiple frontend applications using React.js with TypeScript",
        "Built scalable web applications using Next.js with TypeScript",
        "Integrated AI Large Language Models (LLM) to enhance applications",
        "Implemented MobX for efficient state management"
      ]
    },
    {
      company: "PT. Bahasa Kinerja Utama",
      role: "Frontend Developer",
      period: "Jan 2024 - Jul 2025",
      highlights: [
        "Developed AI solutions for transcription and emotion analytics",
        "Implemented WebSocket for real-time data transmission",
        "Built communication apps with real-time language translation",
        "Led React 19 (Vite) development for STS project"
      ]
    },
    {
      company: "PT. Nugroho Globalindo Perkasa",
      role: "Full Stack Developer",
      period: "Jun 2024 - Aug 2024",
      highlights: [
        "Developed advanced e-commerce application using Next.js 14",
        "Integrated PostgreSQL with Drizzle ORM",
        "Built comprehensive payment gateway",
        "Created distinctive Auction feature"
      ]
    }
  ];

  const achievements = [
    {
      title: "Most Innovative sUSDe Rewards",
      event: "Ethena Hackathon",
      date: "Dec 2024",
      type: "Winner"
    },
    {
      title: "Coinbase Developer Platform - AgentKit Pool Prize",
      event: "AI Agentic Hackathon",
      date: "Feb 2025",
      type: "Pool Prize Winner"
    },
    {
      title: "Cross Chain DEX - 5th Place",
      event: "Espresso Hackathon",
      date: "Apr 2025",
      type: "5th Place"
    }
  ];

  const technologies = [
    "React.js", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Golang",
    "Redux", "MobX", "WebSocket", "Tailwind CSS", "Material UI", "Radix UI",
    "PostgreSQL", "MongoDB", "GraphQL", "REST API", "AI/LLM Integration"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 w-full"
          style={parallaxStyle(0.5)}
        >
          <div 
            className="w-full h-[120%] bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`
            }}
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Miftachul Huda
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Frontend Developer
          </p>
          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
            Crafting innovative web applications with React, Next.js, and cutting-edge technologies. 
            Multiple hackathon winner with expertise in AI integration and real-time applications.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="mailto:hmiftchul11@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-gray-900">
              <a href="#projects" className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                View Projects
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://linkedin.com/in/miftachul-huda" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/miftachul-huda" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="tel:085258166766" className="text-gray-400 hover:text-white transition-colors">
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative py-20 overflow-hidden">
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">International Achievements</h2>
            <p className="text-xl text-gray-300">Recognized globally for innovation and technical excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gray-800/90 backdrop-blur-sm border-gray-700 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    <Badge variant="secondary" className="bg-yellow-400 text-gray-900">
                      {achievement.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-lg">{achievement.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {achievement.event} • {achievement.date}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 w-full"
          style={parallaxStyle(0.2)}
        >
          <div 
            className="w-full h-[120%] bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Briefcase className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-300">Building innovative solutions across diverse industries</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gray-800/90 backdrop-blur-sm border-gray-700 hover:border-blue-400 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-white text-xl">{exp.company}</CardTitle>
                      <CardDescription className="text-blue-400 text-lg font-semibold">
                        {exp.role}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="border-gray-500 text-gray-300 w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Code className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technologies & Skills</h2>
            <p className="text-xl text-gray-300">Expertise in modern web development stack</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-purple-600/20 text-purple-300 border border-purple-500/30 px-4 py-2 text-sm hover:bg-purple-600/30 transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-gray-800/90 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-8 h-8 text-green-400" />
                  <CardTitle className="text-white text-2xl">Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">Sebelas Maret University (UNS)</h3>
                  <p className="text-gray-300">2020 - 2024 • GPA: 3.66</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">SYNRGY Academy by BCA</h4>
                  <p className="text-gray-300 text-sm">Frontend Developer Scholarship Awardee (2021)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/90 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-8 h-8 text-cyan-400" />
                  <CardTitle className="text-white text-2xl">Get In Touch</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <a 
                    href="mailto:hmiftchul11@gmail.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    hmiftchul11@gmail.com
                  </a>
                  <a 
                    href="tel:085258166766"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    085258166766
                  </a>
                </div>
                
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm mb-4">
                    Ready to collaborate on your next project? Let&apos;s build something amazing together.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Mail className="w-4 h-4 mr-2" />
                    Start a Conversation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Miftachul Huda. Crafted with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioLanding;