"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import DotPattern from "@/components/ui/dot-pattern-1"
import { useRef } from "react"
import { Quote } from "lucide-react"

export function QuoteSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95])

  return (
    <section ref={sectionRef} className="py-32 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div className="relative flex flex-col items-center" style={{ opacity, scale }}>
          {/* Background Pattern */}
          <DotPattern width={12} height={12} className="fill-white/10" />

          {/* Clean Corner Elements */}
          <div className="absolute -left-2 -top-2 w-4 h-4 bg-white" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white" />
          <div className="absolute -right-2 -top-2 w-4 h-4 bg-white" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white" />

          <div className="relative z-20 max-w-6xl mx-auto text-center py-20">
            <motion.div className=""
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                  <Quote className="h-12 w-12" />
                </div>
              </div>

              <p className="text-lg text-white/60 mb-12 uppercase tracking-widest">Philosophy</p>

              <div className="overflow-hidden">
                <motion.blockquote
                  className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                  style={{ fontFamily: '"Oswald", sans-serif' }}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, type: "spring", stiffness: 50 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    <span className="inline-block font-light text-white/90">"Every line of </span>
                    <span className="inline-block font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      code I write
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block font-light text-white/90">is a step towards </span>
                    <span className="inline-block font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      building
                    </span>
                  </div>

                  <div>
                    <span className="inline-block font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      something impactful
                    </span>
                    <span className="inline-block font-light text-white/90">."</span>
                  </div>
                </motion.blockquote>
              </div>

              {/* Decorative Line */}
              <motion.div
                className="mt-12 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 2, delay: 1 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
