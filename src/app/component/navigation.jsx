"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navigation({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "impact", label: "Our Impact" },
    { id: "objectives", label: "Objectives" },
    { id: "services", label: "Services" },
    { id: "arrogyaDhan", label: "AarogyaDhan" },  // Add AarogyaDhan
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 60;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Image src="https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1mVOolZKrBAan0liRZoh25vKJT83XwkbFYQ7I" alt="LIVO Foundation Logo" width={120} height={80} className="w-[100px] sm:w-[120px] h-auto" priority />
            <Image src="https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1nXbvAYt2bOKkEz3IciJBo26URH89l1jLqugG" alt="Aarogyadhan Logo" width={120} height={80} className="w-[100px] sm:w-[120px] h-auto" priority />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-1.5 rounded-md text-[14px] font-semibold transition ${
                  activeSection === item.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 text-gray-700"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-[14px] font-medium transition ${
                  activeSection === item.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
