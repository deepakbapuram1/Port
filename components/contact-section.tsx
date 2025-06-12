"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ClipPathLinks } from "@/components/ui/clip-path-links"
import { useRef } from "react"

export function ContactSection() {
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
            Let's Connect
          </h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
            Ready to collaborate or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Interactive Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <ClipPathLinks />
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-white/60">
            Feel free to reach out through any of the channels above.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}