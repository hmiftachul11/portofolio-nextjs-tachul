"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Code,
  Trophy,
  Briefcase,
  GraduationCap,
  MapPin,
  Star,
  Sparkles,
} from "lucide-react"

const PortfolioLanding = () => {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    // Observe all sections
    const sections = document.querySelectorAll("[data-section]")
    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      observer.disconnect()
    }
  }, [])

  const parallaxStyle = (speed: number, axis: "x" | "y" = "y") => {
    if (axis === "x") {
      return {
        transform: `translateX(${scrollY * speed}px)`,
      }
    }
    return {
      transform: `translateY(${scrollY * speed}px)`,
    }
  }

  const mouseParallaxStyle = (intensity: number) => ({
    transform: `translate(${mousePosition.x * intensity}px, ${mousePosition.y * intensity}px)`,
  })

  const fadeInStyle = (sectionId: string, delay = 0) => ({
    opacity: visibleSections.has(sectionId) ? 1 : 0,
    transform: visibleSections.has(sectionId) ? "translateY(0)" : "translateY(50px)",
    transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
  })

  const experiences = [
    {
      company: "PT. Astra International Tbk",
      role: "Frontend Developer",
      period: "Apr 2024 - present",
      highlights: [
        "Developed multiple frontend applications using React.js with TypeScript",
        "Built scalable web applications using Next.js with TypeScript",
        "Integrated AI Large Language Models (LLM) to enhance applications",
        "Implemented MobX for efficient state management",
      ],
    },
    {
      company: "PT. Bahasa Kinerja Utama",
      role: "Frontend Developer",
      period: "Jan 2024 - Jul 2025",
      highlights: [
        "Developed AI solutions for transcription and emotion analytics",
        "Implemented WebSocket for real-time data transmission",
        "Built communication apps with real-time language translation",
        "Led React 19 (Vite) development for STS project",
      ],
    },
    {
      company: "PT. Nugroho Globalindo Perkasa",
      role: "Full Stack Developer",
      period: "Jun 2024 - Aug 2024",
      highlights: [
        "Developed advanced e-commerce application using Next.js 14",
        "Integrated PostgreSQL with Drizzle ORM",
        "Built comprehensive payment gateway",
        "Created distinctive Auction feature",
      ],
    },
  ]

  const achievements = [
    {
      title: "Most Innovative sUSDe Rewards",
      event: "Ethena Hackathon",
      date: "Dec 2024",
      type: "Winner",
    },
    {
      title: "Coinbase Developer Platform - AgentKit Pool Prize",
      event: "AI Agentic Hackathon",
      date: "Feb 2025",
      type: "Pool Prize Winner",
    },
    {
      title: "Cross Chain DEX - 5th Place",
      event: "Espresso Hackathon",
      date: "Apr 2025",
      type: "5th Place",
    },
  ]

  const technologies = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Vue.js",
    "Golang",
    "Redux",
    "MobX",
    "WebSocket",
    "Tailwind CSS",
    "Material UI",
    "Radix UI",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "REST API",
    "AI/LLM Integration",
  ]

  // Floating particles component
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            ...parallaxStyle(0.1 + Math.random() * 0.3),
          }}
        />
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section with Advanced Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layer 1 - Slowest */}
        <div className="absolute inset-0 z-0 w-full" style={parallaxStyle(0.1)}>
          <div
            className="w-full h-[150%] bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`,
            }}
          />
        </div>

        {/* Background Layer 2 - Medium Speed */}
        <div className="absolute inset-0 z-1 w-full opacity-30" style={parallaxStyle(0.3)}>
          <div className="w-full h-[130%] bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
        </div>

        {/* Floating Particles */}
        <FloatingParticles />

        {/* Geometric Shapes with Mouse Parallax */}
        <div className="absolute inset-0 z-2 pointer-events-none">
          <div
            className="absolute top-20 left-20 w-32 h-32 border border-blue-400/20 rotate-45"
            style={mouseParallaxStyle(10)}
          />
          <div
            className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
            style={mouseParallaxStyle(-15)}
          />
          <div
            className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rotate-12"
            style={mouseParallaxStyle(8)}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div style={mouseParallaxStyle(5)}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse-glow">
              Miftachul Huda
            </h1>
            <div className="relative inline-block">
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">Frontend Developer</p>
              <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
          </div>

          <div style={mouseParallaxStyle(-3)}>
            <p className="text-lg mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting innovative web applications with React, Next.js, and cutting-edge technologies. Multiple
              hackathon winner with expertise in AI integration and real-time applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12" style={mouseParallaxStyle(2)}>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
            >
              <a href="mailto:hmiftchul11@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-border text-foreground hover:bg-accent hover:text-accent-foreground transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <a href="#projects" className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                View Projects
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6" style={mouseParallaxStyle(-2)}>
            <a
              href="https://linkedin.com/in/miftachul-huda"
              className="text-muted-foreground hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/miftachul-huda"
              className="text-muted-foreground hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="tel:085258166766"
              className="text-muted-foreground hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" data-section className="relative py-20 overflow-hidden bg-background">
        {/* Parallax Background Elements */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-400/5 to-orange-400/5 rounded-full blur-3xl"
          style={parallaxStyle(0.2)}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-yellow-500/5 to-amber-500/5 rounded-full blur-3xl"
          style={parallaxStyle(-0.15)}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16" style={fadeInStyle("achievements")}>
            <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-500 dark:text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">International Achievements</h2>
            <p className="text-xl text-muted-foreground">Recognized globally for innovation and technical excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} style={fadeInStyle("achievements", index * 200)}>
                <Card className="bg-card/90 backdrop-blur-sm border-border hover:border-yellow-500 dark:hover:border-yellow-400 transition-all duration-500 transform hover:scale-105 hover:rotate-1 group">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="w-5 h-5 text-yellow-500 dark:text-yellow-400 group-hover:animate-bounce" />
                      <Badge
                        variant="secondary"
                        className="bg-yellow-500 dark:bg-yellow-400 text-yellow-50 dark:text-yellow-900"
                      >
                        {achievement.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-card-foreground text-lg group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                      {achievement.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {achievement.event} • {achievement.date}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" data-section className="relative py-20 overflow-hidden bg-muted/30 dark:bg-muted/10">
        <div className="absolute inset-0 z-0 w-full" style={parallaxStyle(0.15)}>
          <div
            className="w-full h-[120%] bg-cover bg-center opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`,
            }}
          />
        </div>

        {/* Animated Background Shapes */}
        <div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"
          style={parallaxStyle(0.25)}
        />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl"
          style={parallaxStyle(-0.2)}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16" style={fadeInStyle("experience")}>
            <Briefcase className="w-12 h-12 mx-auto mb-4 text-blue-500 dark:text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h2>
            <p className="text-xl text-muted-foreground">Building innovative solutions across diverse industries</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} style={fadeInStyle("experience", index * 300)}>
                <Card className="bg-card/90 backdrop-blur-sm border-border hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-500 transform hover:scale-[1.02] group">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-card-foreground text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {exp.company}
                        </CardTitle>
                        <CardDescription className="text-blue-500 dark:text-blue-400 text-lg font-semibold">
                          {exp.role}
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-border text-muted-foreground w-fit group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors"
                      >
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 group-hover:text-foreground transition-colors">
                          <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:animate-pulse" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" data-section className="py-20 bg-background relative overflow-hidden">
        {/* Floating Tech Icons Background */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          {[...Array(15)].map((_, i) => (
            <Code
              key={i}
              className="absolute w-8 h-8 text-purple-500"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
                ...parallaxStyle(0.05 + Math.random() * 0.1),
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16" style={fadeInStyle("technologies")}>
            <Code className="w-12 h-12 mx-auto mb-4 text-purple-500 dark:text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technologies & Skills</h2>
            <p className="text-xl text-muted-foreground">Expertise in modern web development stack</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3" style={fadeInStyle("technologies", 300)}>
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-purple-500/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 dark:border-purple-400/20 px-4 py-2 text-sm hover:bg-purple-500/20 dark:hover:bg-purple-400/20 transition-all duration-300 cursor-default transform hover:scale-110 hover:rotate-1"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Contact Section */}
      <section id="contact" data-section className="py-20 bg-muted/30 dark:bg-muted/10 relative overflow-hidden">
        {/* Parallax Background Gradients */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5"
          style={parallaxStyle(0.1)}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div style={fadeInStyle("contact")}>
              <Card className="bg-card/90 backdrop-blur-sm border-border hover:border-green-500 dark:hover:border-green-400 transition-all duration-500 transform hover:scale-105 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="w-8 h-8 text-green-500 dark:text-green-400 group-hover:animate-bounce" />
                    <CardTitle className="text-card-foreground text-2xl">Education</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      Sebelas Maret University (UNS)
                    </h3>
                    <p className="text-muted-foreground">2020 - 2024 • GPA: 3.66</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-500 dark:text-green-400 mb-2">SYNRGY Academy by BCA</h4>
                    <p className="text-muted-foreground text-sm">Frontend Developer Scholarship Awardee (2021)</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div style={fadeInStyle("contact", 200)}>
              <Card className="bg-card/90 backdrop-blur-sm border-border hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-500 transform hover:scale-105 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-8 h-8 text-cyan-500 dark:text-cyan-400 group-hover:animate-pulse" />
                    <CardTitle className="text-card-foreground text-2xl">Get In Touch</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <a
                      href="mailto:hmiftchul11@gmail.com"
                      className="flex items-center gap-3 text-muted-foreground hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 transform hover:translate-x-2"
                    >
                      <Mail className="w-5 h-5" />
                      hmiftchul11@gmail.com
                    </a>
                    <a
                      href="tel:085258166766"
                      className="flex items-center gap-3 text-muted-foreground hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 transform hover:translate-x-2"
                    >
                      <Phone className="w-5 h-5" />
                      085258166766
                    </a>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-muted-foreground text-sm mb-4">
                      Ready to collaborate on your next project? Let&apos;s build something amazing together.
                    </p>
                    <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                      <Mail className="w-4 h-4 mr-2" />
                      Start a Conversation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 bg-background/95 backdrop-blur-sm border-t border-border overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5"
          style={parallaxStyle(0.05)}
        />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <p className="text-muted-foreground">© 2025 Miftachul Huda. Crafted with React & Tailwind CSS.</p>
          <div className="flex justify-center gap-2 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3 text-yellow-400 animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PortfolioLanding
