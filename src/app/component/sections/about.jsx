"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function AboutSection() {
  const sectionRef = useRef(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const aboutImages = [
    {
      src: "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1AApJyL1gwqDHaUZoxjvt0Pp3SlXzWIEu5KcM",
      alt: "LIVO Foundation community helping families",
    },
    {
      src: "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1yKT5BO9eiIqaF14h2AbxfXHVZCszLRlGNYM9",
      alt: "Healthcare support for underprivileged communities",
    },
    {
      src: "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1W5HEbwVD2yPs87SXI5m3YxQcAjEthpzqnHog",
      alt: "Medical treatment and healthcare services",
    },
    {
      src: "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1AApJyL1gwqDHaUZoxjvt0Pp3SlXzWIEu5KcM",
      alt: "Community health camps and medical checkups",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("animate-in")
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [aboutImages.length])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full scroll-mt-28 py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-50/20 to-background overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-2 bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent leading-tight">
            About LIVO Foundation
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A non-profit organization transforming healthcare access, nutrition,
            and dignity for underprivileged communities across India.
          </p>
        </div>

        {/* About Info + Slideshow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-14">
          {/* Text Content */}
          <div className="space-y-4">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              LIVO Foundation works to ensure healthcare is not a privilege but
              a right. We empower marginalized communities through medical
              support, nutrition programs, and dignity-driven social
              initiatives.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Our mission is to build a compassionate ecosystem that bridges
              healthcare disparities and creates sustainable impact across rural
              and urban areas.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-3">
              <div className="flex flex-col items-center justify-center p-3 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 shadow-sm">
                <p className="text-xl font-bold text-primary">50,000+</p>
                <p className="text-xs text-gray-700 mt-1 font-medium text-center">
                  Lives Impacted
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-3 h-20 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20 shadow-sm">
                <p className="text-xl font-bold text-accent">15+</p>
                <p className="text-xs text-gray-700 mt-1 font-medium text-center">
                  Years of Service
                </p>
              </div>
            </div>
          </div>

          {/* Slideshow */}
          <div className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-md border border-blue-100">
            {aboutImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
