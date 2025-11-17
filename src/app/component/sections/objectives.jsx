"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  CheckCircle2,
  BookOpen,
  Stethoscope,
  Users,
  Lightbulb,
  DollarSign,
  Handshake,
  Scale,
  Building2,
} from "lucide-react"

export default function ObjectivesSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const objectives = [
    {
      id: 1,
      icon: BookOpen,
      title: "Healthcare Education & Training",
      description:
        "Run institutes, counseling, and research centers to empower communities with healthcare knowledge.",
      fullText:
        "We promote healthcare education through institutes, counseling centers, research hubs, and distance learning programs.",
      image:
        "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1UDZZfIqxIpuSeNAPk0rfCdQMb5coYDzWKjHG",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      icon: Scale,
      title: "Non-Commercial Operations",
      description:
        "All initiatives are non-profit, ensuring ethical and transparent community-driven operations.",
      fullText:
        "All activities are conducted on a non-commercial basis, prioritizing community welfare over profit.",
      image:
        "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1zURcGqHHgMqYZ59Azlx7LCTb0XhctyuB284i",
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      icon: Users,
      title: "Workshops & Conferences",
      description:
        "Organize educational seminars, awareness workshops, and healthcare conferences nationwide.",
      fullText:
        "We conduct workshops, competitions, and conferences to promote community healthcare awareness.",
      image:
        "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1ADUDZp1gwqDHaUZoxjvt0Pp3SlXzWIEu5KcM",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      icon: Lightbulb,
      title: "Innovation & Incubation",
      description:
        "Support healthcare innovation and startups through incubation and development programs.",
      fullText:
        "We run training centers and incubation programs for healthcare software and hardware innovation.",
      image:
        "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1kHDXxLt8bewUh19xrpF6Oj5BYKNqfWGXu7di",
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 5,
      icon: DollarSign,
      title: "Finance & Fundraising",
      description:
        "Ensure transparent fund management and responsible allocation for sustainable healthcare.",
      fullText:
        "We raise funds responsibly, manage financial resources, and ensure sustainable healthcare initiatives.",
      image:
        "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1iANspXPQbdyqkpvc84gVYh09nZofxL5UHrum",
      color: "from-red-500 to-red-600",
    },
    {
      id: 6,
      icon: Handshake,
      title: "Asset & Charity Management",
      description:
        "Manage properties and contributions to support educational and social welfare programs.",
      fullText:
        "We manage and allocate resources to charitable and welfare organizations responsibly.",
      image:
        "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1FKTMClisFNL9CoRPq7u85Uie2dpIvkzGhD0s",
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 7,
      icon: Scale,
      title: "Dispute Resolution & Partnerships",
      description:
        "Collaborate with associations and resolve disputes to further our healthcare mission.",
      fullText:
        "We engage in partnerships and resolve member disputes through transparent dialogue.",
      image:
        "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1rDVKqrVGdfXEBVzuP5qpoHm3n4SY9lDcjT7e",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: 8,
      icon: Building2,
      title: "PPP Model Implementation",
      description:
        "Partner with government bodies for healthcare projects under Aarogya Aadhar PPP model.",
      fullText:
        "We collaborate in PPP (Public-Private Partnership) models for government healthcare projects.",
      image:
        "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X13Tqwp6LLhaCruXEyjZIixbvYnHSfoQedm2l0",
      color: "from-cyan-500 to-cyan-600",
    },
  ]

  return (
    <section
      id="objectives"
      ref={sectionRef}
      className="relative w-full scroll-mt-28 py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-50/30 to-background overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">
            Our Foundation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2 bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent">
            8 Core Objectives & Mission
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive initiatives transforming lives through healthcare, education, and community empowerment.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {objectives.map((objective, index) => {
            const Icon = objective.icon
            return (
              <div
                key={objective.id}
                className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-blue-100 hover:border-primary/50 h-64 cursor-pointer ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
              >
                <Image
                  src={objective.image}
                  alt={objective.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className={`absolute top-4 right-4 p-2 rounded-lg bg-gradient-to-br ${objective.color}`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-base font-semibold mb-1">{objective.title}</h3>
                  <p className="text-xs sm:text-sm text-white/90 line-clamp-3 leading-relaxed">{objective.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Detailed Overview */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100/40 rounded-2xl p-6 md:p-8 border border-blue-200 shadow-sm mb-10">
          <h3 className="text-xl md:text-2xl font-bold mb-8 text-gray-900 text-center">
            Detailed Objectives Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {objectives.map((objective, index) => {
              const Icon = objective.icon
              return (
                <div
                  key={objective.id}
                  className={`flex items-start gap-3 p-3 rounded-xl bg-white border border-blue-200 hover:border-primary/50 hover:shadow-md transition-all duration-300 ${
                    isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 60}ms` : "0ms" }}
                >
                  <div className={`flex-shrink-0 p-2 rounded-md bg-gradient-to-br ${objective.color}`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                      {objective.title}
                    </h4>
                    <p className="text-xs text-gray-700 leading-relaxed">{objective.fullText}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[ 
            { label: "Healthcare Programs", value: "50+", icon: Stethoscope },
            { label: "Training Centers", value: "15+", icon: BookOpen },
            { label: "Communities Served", value: "100+", icon: Users },
            { label: "Lives Transformed", value: "50,000+", icon: CheckCircle2 },
          ].map((stat, index) => {
            const StatIcon = stat.icon
            return (
              <div
                key={index}
                className={`p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center transition-all duration-500 hover:shadow-md hover:scale-105 ${
                  isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? `${(index + 8) * 80}ms` : "0ms" }}
              >
                <StatIcon className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-xl md:text-2xl font-bold text-primary mb-0.5">{stat.value}</p>
                <p className="text-xs md:text-sm text-gray-600 font-semibold">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
