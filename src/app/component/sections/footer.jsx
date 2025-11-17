"use client"

import { useEffect, useRef, useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { toast } from "react-hot-toast"

export default function FooterSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || "Failed to send message")
      }

      const data = await response.json()
      toast.success(data.message || "Thank You! We will contact you soon!")
      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", message: "" })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      setError(err.message || "Failed to send message. Please try again.")
      toast.error(err.message || "Failed to send message.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-background via-blue-50/20 to-background overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="px-5 py-2 rounded-full bg-primary/10 text-primary text-sm md:text-base font-bold tracking-wide">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-2 bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent leading-tight">
            Contact LIVO Foundation
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions or want to support our mission? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
          {/* Contact Info */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-5 text-gray-900">
              Contact Information
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value:
                    "18, Yashwant Nagar, Range Hill Road, Opp. to Bank of Baroda, Shivajinagar, Pune, Maharashtra - 411007",
                },
                { icon: Phone, label: "Phone", value: "+91 9145078001" },
                { icon: Mail, label: "Email", value: "livofoundation@gmail.com" },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/60 hover:bg-white transition-all duration-300 border border-blue-100"
                  >
                    <div className="p-2 rounded-md bg-gradient-to-br from-primary/20 to-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">{item.label}</p>
                      <p className="text-sm text-gray-900 font-medium">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <button
                    key={i}
                    className="p-2 rounded-md bg-gradient-to-br from-primary/20 to-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`p-6 md:p-8 rounded-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 shadow-md transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">
              Send Us a Message
            </h3>

            {submitted && (
              <div className="mb-4 flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-800 text-sm font-medium">
                  Message sent successfully!
                </p>
              </div>
            )}

            {error && (
              <div className="mb-4 flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <p className="text-red-800 text-sm font-medium">{error}</p>
              </div>
            )}

            <div className="space-y-4">
              {[
                { label: "Full Name *", type: "text", name: "name", placeholder: "Your full name" },
                { label: "Email Address *", type: "email", name: "email", placeholder: "your@email.com" },
                { label: "Phone Number *", type: "tel", name: "phone", placeholder: "+91 XXXXX XXXXX" },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-sm md:text-base font-semibold mb-1 text-gray-800">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={formData[field.name]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.name]: e.target.value })
                    }
                    placeholder={field.placeholder}
                    required
                    disabled={loading}
                    className="w-full px-3 py-2 rounded-md bg-white border border-blue-100 focus:border-primary focus:outline-none transition-all duration-300 text-sm md:text-base"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm md:text-base font-semibold mb-1 text-gray-800">
                  Message *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message here..."
                  rows={4}
                  required
                  disabled={loading}
                  className="w-full px-3 py-2 rounded-md bg-white border border-blue-100 focus:border-primary focus:outline-none transition-all duration-300 text-sm md:text-base resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 md:py-3.5 font-semibold text-white rounded-md bg-gradient-to-r from-primary to-blue-700 hover:shadow-md hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-60 text-sm md:text-base"
              >
                {loading ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-200 pt-6 text-center text-gray-600 text-sm md:text-base">
          <p>
            © 2018 <span className="text-primary font-semibold">LIVO Foundation</span>. All
            rights reserved. | Transforming Lives Through Healthcare
          </p>
        </div>
      </div>
    </section>
  )
}
