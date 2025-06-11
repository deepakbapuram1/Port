"use client"

import type React from "react"
import { SiGmail } from "react-icons/si"
import { Github, Linkedin, Instagram, Phone, FileText } from "lucide-react"
import { useAnimate } from "framer-motion"

export const ClipPathLinks = () => {
  return (
    <div className="divide-y border divide-white/20 border-white/20 bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden">
      <div className="grid grid-cols-2 divide-x divide-white/20">
        <LinkBox Icon={SiGmail} href="mailto:deepakbapuram2001@gmail.com" />
        <LinkBox Icon={Phone} href="tel:+919885413899" />
      </div>
      <div className="grid grid-cols-2 divide-x divide-white/20">
        <LinkBox Icon={Github} href="https://github.com/deepakbapuram" />
        <LinkBox Icon={Linkedin} href="https://linkedin.com/in/bapuramdeepak" />
      </div>
      <div className="grid grid-cols-2 divide-x divide-white/20">
        <LinkBox Icon={Instagram} href="https://www.instagram.com/deepak_bapu_ram" />
        <LinkBox
          Icon={FileText}
          href="https://drive.google.com/file/d/1CwmHaJxXutvQ632-TYhf-ei7UH59HI4K/view?usp=drive_link"
        />
      </div>
    </div>
  )
}

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)"
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)"
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)"
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)"

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
}

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
}

interface LinkBoxProps {
  Icon: React.ComponentType<{ className?: string }>
  href: string
  imgSrc?: string
  className?: string
}

const LinkBox: React.FC<LinkBoxProps> = ({ Icon, href, imgSrc, className }) => {
  const [scope, animate] = useAnimate()

  const getNearestSide = (e: React.MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect()

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as const,
    }
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as const,
    }
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as const,
    }
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as const,
    }

    const sortedProximity = [proximityToLeft, proximityToRight, proximityToTop, proximityToBottom].sort(
      (a, b) => a.proximity - b.proximity,
    )

    return sortedProximity[0].side
  }

  const handleMouseEnter = (e: React.MouseEvent) => {
    const side = getNearestSide(e)
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    })
  }

  const handleMouseLeave = (e: React.MouseEvent) => {
    const side = getNearestSide(e)
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    })
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36 text-white bg-transparent hover:bg-white/5 transition-colors duration-300"
    >
      {imgSrc ? (
        <img
          src={imgSrc || "/placeholder.svg"}
          alt="custom icon"
          className={className ?? "max-h-10 sm:max-h-16 md:max-h-20 object-contain"}
        />
      ) : (
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      )}

      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-white text-black transition-colors duration-300"
      >
        {imgSrc ? (
          <img
            src={imgSrc || "/placeholder.svg"}
            alt="custom icon hover"
            className={className ?? "max-h-10 sm:max-h-16 md:max-h-20 object-contain"}
          />
        ) : (
          <Icon className="text-xl sm:text-3xl md:text-4xl" />
        )}
      </div>
    </a>
  )
}
