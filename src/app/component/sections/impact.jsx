import { useEffect, useRef, useState } from "react"
import { Heart, Users, Apple, Flower2, PawPrint, Stethoscope, Building2 } from "lucide-react"

function CounterStat({ value, label, icon: Icon, delay = 0 }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) setIsVisible(true)
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return
    const numericValue = Number.parseInt(value.replace(/\D/g, ""))
    const duration = 2000
    const steps = 60
    const stepValue = numericValue / steps
    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      setCount(Math.floor(stepValue * currentStep))
      if (currentStep >= steps) {
        setCount(numericValue)
        clearInterval(timer)
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isVisible, value])

  const suffix = value.replace(/\d/g, "")

  return (
    <div
      ref={ref}
      className="group p-3 rounded-lg bg-gradient-to-br from-white to-blue-50 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 text-center flex-1 min-w-[120px] sm:min-w-[140px] md:min-w-[160px]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-2 inline-block p-2 rounded-md bg-gradient-to-br from-primary/15 to-primary/10 group-hover:from-primary/25 group-hover:to-primary/15 transition-all duration-300">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <p className="text-xl md:text-2xl font-bold text-primary mb-0.5">
        {count}{suffix}
      </p>
      <p className="text-xs md:text-sm text-gray-600 font-semibold">{label}</p>
    </div>
  )
}

export default function ImpactSection() {
  const sectionRef = useRef(null)

  const impactStats = [
    { label: "Lives Impacted", value: "10000+", icon: Heart },
    { label: "Health Camps", value: "150+", icon: Stethoscope },
    { label: "Free Surgery & Treatment", value: "10000+", icon: Building2 },
    { label: "Pads Distributed", value: "500000+", icon: Flower2 },
    { label: "Animals Treated", value: "1000+", icon: PawPrint },
    { label: "Years of Service", value: "+6", icon: Users },
    { label: "Healthcare Support", value: "10000+", icon: Heart },
    { label: "Nutrition Programs", value: "500+", icon: Apple },
    { label: "Community Empowerment", value: "1000+", icon: Users },
  ]

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="relative w-full scroll-mt-28 py-16 md:py-20 px-4 bg-gradient-to-b from-background via-blue-50/30 to-background overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">
            Our Achievement
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2 bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent">
            Our Impact & Reach
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming lives through healthcare, nutrition, and community empowerment across India.
          </p>
        </div>

        {/* Responsive Two Rows */}
        <div className="flex flex-col items-center gap-6">
          {/* Row 1: 5 cards (wrap on smaller screens) */}
          <div className="flex flex-wrap justify-center md:justify-between w-full max-w-6xl gap-x-3 gap-y-6">
            {impactStats.slice(0, 5).map((stat, index) => (
              <CounterStat key={index} {...stat} delay={index * 100} />
            ))}
          </div>

          {/* Row 2: 4 cards (wrap on smaller screens) */}
          <div className="flex flex-wrap justify-center md:justify-between w-full max-w-5xl gap-x-3 gap-y-6">
            {impactStats.slice(5, 9).map((stat, index) => (
              <CounterStat key={index + 5} {...stat} delay={(index + 5) * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
