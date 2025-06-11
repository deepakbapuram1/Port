"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Code,
  BookOpen,
  CheckCircle,
  Shield,
  Navigation,
  Award,
  Trophy,
  Target,
  Briefcase,
  Rocket,
  FileText,
  Star,
  ExternalLink,
  Calendar,
  MapPin,
} from "lucide-react"
import { useState, useRef } from "react"

const experiences = [
  {
    title: "Software Engineer Trainee",
    company: "Cisco Systems India",
    location: "Bangalore",
    period: "Aug 2024 – Present",
    achievements: [
      { text: "Built demo networks using the CONP tool", icon: User },
      { text: "Automated UI tests using Java + Selenium + TestNG", icon: Code },
      { text: "Trained in Effective Communication & Emotional Intelligence", icon: BookOpen },
      { text: "CCNA Certified + Python training completed", icon: CheckCircle },
    ],
  },
]

const projects = [
  {
    title: "Face Mask Recognition System",
    description: "ML-based Python application to detect mask usage in real time",
    details: "Full project cycle: data collection, model training, deployment",
    tech: ["Python", "OpenCV", "TensorFlow", "Machine Learning"],
    links: ["View Code", "Live Demo"],
    icon: Shield,
  },
  {
    title: "Automated Zebra Crossing Safety System",
    description: "Arduino-powered smart crossing for pedestrians",
    details: "Reacts to real-time traffic signals for pole control",
    tech: ["Arduino", "IoT", "Sensors", "C++"],
    links: ["View Code", "Demo Video"],
    icon: Navigation,
  },
]

const certifications = [
  { text: "Cisco Certified Network Associate (CCNA)", icon: Award, year: "2024" },
  { text: 'Python - "Programming for Everybody" by Coursera', icon: Code, year: "2023" },
  { text: "Automation Testing – Simplilearn", icon: Target, year: "2023" },
]

const achievements = [
  { text: "Google Cloud Qwiklabs challenges — earned swags", icon: Trophy, year: "2023" },
  { text: 'TCS iON "Career Edge" lockdown course', icon: BookOpen, year: "2022" },
  { text: "Ranked 3287 in PrepInsta's PrepSat Jobathon", icon: Target, year: "2023" },
]

export function ExperienceSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white overflow-hidden">
      <motion.div className="container mx-auto px-6" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8" style={{ fontFamily: '"Oswald", sans-serif' }}>
            Experience & Projects
          </h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "300px" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3
            className="text-4xl font-bold mb-12 flex items-center gap-3"
            style={{ fontFamily: '"Oswald", sans-serif' }}
          >
            <div className="p-3 bg-white/10 rounded-full">
              <Briefcase className="h-8 w-8" />
            </div>
            Professional Journey
          </h3>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 mb-6">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-white text-2xl mb-2">{exp.title}</CardTitle>
                      <div className="flex items-center gap-2 text-white/70 mb-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-white/50">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {exp.achievements.map((achievement, i) => {
                      const IconComponent = achievement.icon
                      return (
                        <motion.div
                          key={i}
                          className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -2 }}
                        >
                          <div className="p-2 bg-white/10 rounded-full flex-shrink-0">
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <span className="text-white/80">{achievement.text}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3
            className="text-4xl font-bold mb-12 flex items-center gap-3"
            style={{ fontFamily: '"Oswald", sans-serif' }}
          >
            <div className="p-3 bg-white/10 rounded-full">
              <Rocket className="h-8 w-8" />
            </div>
            Featured Projects
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              const isActive = activeProject === index

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveProject(isActive ? null : index)}
                  className="cursor-pointer group"
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-white/10 rounded-full">
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                        </div>
                        <ExternalLink className="h-5 w-5 text-white/50 group-hover:text-white transition-colors" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80 mb-4">{project.description}</p>
                      <p className="text-white/60 text-sm mb-4">{project.details}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-white/70 border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-2">
                        {project.links.map((link) => (
                          <Badge
                            key={link}
                            className="bg-white text-black hover:bg-white/90 transition-colors cursor-pointer"
                          >
                            {link}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Certifications & Achievements Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-3xl font-bold mb-8 flex items-center gap-3"
              style={{ fontFamily: '"Oswald", sans-serif' }}
            >
              <div className="p-2 bg-white/10 rounded-full">
                <FileText className="h-6 w-6" />
              </div>
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                    className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/10 rounded-full">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white/90">{cert.text}</p>
                        <p className="text-white/50 text-sm">{cert.year}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-3xl font-bold mb-8 flex items-center gap-3"
              style={{ fontFamily: '"Oswald", sans-serif' }}
            >
              <div className="p-2 bg-white/10 rounded-full">
                <Star className="h-6 w-6" />
              </div>
              Achievements
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                    className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/10 rounded-full">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white/90">{achievement.text}</p>
                        <p className="text-white/50 text-sm">{achievement.year}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
