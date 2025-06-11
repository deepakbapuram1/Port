"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Globe, Smartphone, Settings, GitBranch, Brain, GraduationCap, Briefcase, Zap } from "lucide-react"
import { useRef, useState } from "react"

const skills = [
  { name: "Python", icon: Code, category: "Languages", color: "from-white/20 to-white/10" },
  { name: "Java", icon: Code, category: "Languages", color: "from-white/25 to-white/15" },
  { name: "JavaScript", icon: Code, category: "Languages", color: "from-white/30 to-white/20" },
  { name: "SQL", icon: Code, category: "Languages", color: "from-white/20 to-white/10" },
  { name: "HTML5", icon: Smartphone, category: "Frontend", color: "from-white/25 to-white/15" },
  { name: "CSS3", icon: Smartphone, category: "Frontend", color: "from-white/30 to-white/20" },
  { name: "Networking", icon: Globe, category: "Infrastructure", color: "from-white/20 to-white/10" },
  { name: "CCNA", icon: Globe, category: "Infrastructure", color: "from-white/25 to-white/15" },
  { name: "Selenium", icon: Settings, category: "Automation", color: "from-white/30 to-white/20" },
  { name: "TestNG", icon: Settings, category: "Automation", color: "from-white/20 to-white/10" },
  { name: "Git", icon: GitBranch, category: "Tools", color: "from-white/25 to-white/15" },
  { name: "Agile", icon: Brain, category: "Methodology", color: "from-white/30 to-white/20" },
]

export function AboutSection() {
  const sectionRef = useRef(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white overflow-hidden">
      <motion.div className="container mx-auto px-6" style={{ opacity, scale }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8" style={{ fontFamily: '"Oswald", sans-serif' }}>
            About Me
          </h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Education & Current Role Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardHeader className="text-slate-100">
                <CardTitle className="text-2xl flex items-center gap-3" style={{ fontFamily: '"Oswald", sans-serif' }}>
                  <div className="p-2 bg-white/10 rounded-full">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-lg mb-2 text-gray-50">B.Tech in Electronics & Communication</h3>
                <p className="mb-2 text-white">JNTU Anantapur</p>
                <p className="text-sm text-white">Aug 2019 – Jun 2023 | First Class</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardHeader className="text-white">
                <CardTitle className="text-2xl flex items-center gap-3" style={{ fontFamily: '"Oswald", sans-serif' }}>
                  <div className="p-2 bg-white/10 rounded-full">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  Current Role
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-lg mb-2 text-white">Software Engineer Trainee</h3>
                <p className="mb-2 text-white">Cisco Systems India, Bangalore</p>
                <p className="text-sm text-white">Aug 2024 – Present</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3
            className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3"
            style={{ fontFamily: '"Oswald", sans-serif' }}
          >
            <div className="p-3 bg-white/10 rounded-full">
              <Zap className="h-8 w-8" />
            </div>
            Technical Skills
          </h3>

          {/* Clean Skills Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                const isHovered = hoveredSkill === skill.name

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className="group cursor-pointer"
                  >
                    <div
                      className={`
                      relative p-6 rounded-xl bg-gradient-to-br ${skill.color} 
                      border border-white/10 backdrop-blur-sm
                      hover:border-white/30 transition-all duration-300
                      ${isHovered ? "shadow-lg shadow-white/10" : ""}
                    `}
                    >
                      {/* Subtle Highlight */}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-white/5"
                        animate={{
                          opacity: isHovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      <div className="relative z-10 text-center">
                        <div className="mb-4 flex justify-center">
                          <div className="p-3 bg-white/10 rounded-full">
                            <IconComponent className="h-6 w-6" />
                          </div>
                        </div>

                        <h4 className="font-semibold text-lg mb-1">{skill.name}</h4>
                        <p className="text-xs text-white/60 uppercase tracking-wider">{skill.category}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: '"Oswald", sans-serif' }}>
              My Philosophy
            </h3>
            <p className="text-xl text-white/80 leading-relaxed">
              Technology is not just about code and systems—it's about creating solutions that make a difference. I
              believe in the power of continuous learning, creative problem-solving, and building bridges between
              technical excellence and human needs.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
