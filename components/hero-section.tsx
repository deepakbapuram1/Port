"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BackgroundPaths } from "@/components/ui/background-paths"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 100, damping: 10 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 10 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setMousePosition({ x: clientX, y: clientY })
      mouseX.set(clientX)
      mouseY.set(clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const rotateX = useTransform(springY, [0, window.innerHeight], [2, -2])
  const rotateY = useTransform(springX, [0, window.innerWidth], [-2, 2])

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 opacity-5">
        <BackgroundPaths title="" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl w-full">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Profile Photo - Clean Positioning */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <motion.div
                className="relative"
                style={{ rotateX, rotateY }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 100 }}
              >
                {/* Clean Border */}
                <div className="absolute -inset-2 rounded-full border border-white/20" />

                <Avatar className="h-64 w-64 border-2 border-white/30">
                  <AvatarImage src="/deepak-profile.png" alt="Deepak Bapuram" />
                  <AvatarFallback className="text-4xl bg-white/10 text-white">DB</AvatarFallback>
                </Avatar>
              </motion.div>
            </div>

            {/* Text Content */}
            <div className="lg:col-span-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1
                  className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6"
                  style={{ fontFamily: '"Oswald", sans-serif' }}
                >
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Hi,
                  </motion.span>{" "}
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    I'm
                  </motion.span>{" "}
                  <motion.span
                    className="inline-block bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    Deepak
                  </motion.span>
                </h1>

                {/* Clean Line */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-white via-white/50 to-transparent mb-8"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />

                <motion.h2
                  className="text-2xl md:text-3xl font-light mb-8 text-white/80"
                  style={{ fontFamily: '"Oswald", sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  Engineer • Photographer • Cricketer • Dancer
                </motion.h2>

                <motion.p
                  className="text-lg md:text-xl mb-12 text-white/70 leading-relaxed max-w-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                >
                  I engineer robust network automation at Cisco and bring creativity into everything I do from building
                  efficient systems to framing a perfect shot. Where logic meets passion.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg font-semibold relative overflow-hidden group"
                    style={{ fontFamily: '"Oswald", sans-serif' }}
                  >
                    <span className="relative z-10">Explore My Work</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/90 to-white"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <ArrowDown className="h-6 w-6 text-white/50" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
