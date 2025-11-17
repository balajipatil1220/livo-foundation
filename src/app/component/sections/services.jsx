"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Heart,
  Users,
  Apple,
  Flower2,
  PawPrint,
  Stethoscope,
} from "lucide-react";

export default function ServicesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("animate-in");
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: "Healthcare Financial Support",
      description:
        "Offering financial assistance for emergency treatments and medical care to underprivileged families.",
      icon: Heart,
      image: "/healthcare.png",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Healthcare CSR Activities",
      description:
        "Organizing community health camps, awareness drives, and preventive healthcare programs.",
      icon: Users,
      image: "/community-health-camp-medical-checkup-poor-people-.jpg",
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "Nutrition Program",
      description:
        "Implementing school meal and nutrition support programs to fight malnutrition.",
      icon: Apple,
      image: "/children-eating-nutritious-meal-school-poor-commun.jpg",
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 4,
      title: "AarogyaPado (Female Hygiene)",
      description:
        "Distributing sanitary pads and conducting hygiene education to empower young girls and women.",
      icon: Flower2,
      image: "/sanitaryprogram.jpg",
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 5,
      title: "Animal Health",
      description:
        "Delivering veterinary health care and welfare services for community animals.",
      icon: PawPrint,
      image: "/animalservice.png",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 6,
      title: "Healthcare Services",
      description:
        "Providing a wide range of essential healthcare services and wellness programs.",
      icon: Stethoscope,
      image: "/healthcareservices.jpg",
      color: "from-cyan-500 to-cyan-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full scroll-mt-28 py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-50/20 to-background overflow-hidden"
    >
      {/* Soft background accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2 bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent">
            Our Services & Programs
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Compassion-driven initiatives transforming healthcare, nutrition,
            and community well-being across India.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-blue-100 hover:border-primary/50 h-64 cursor-pointer`}
                style={{
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                {/* Image and Overlay */}
                <div className="relative h-full bg-gradient-to-br from-blue-100 to-blue-50">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Icon */}
                  <div
                    className={`absolute top-4 right-4 p-2 rounded-lg bg-gradient-to-br ${service.color}`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-base font-semibold mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}