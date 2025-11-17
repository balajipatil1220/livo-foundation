import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HeroSection({ onExplore }) {
  const canvasRef = useRef(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const imageContainerRef = useRef(null)

  const backgroundImages = [
    "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1HhY8finaF68vfqDZSxUEheygkXYHG712CTcK",
    "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1jLwMKBIC841JQ6Ddji39PXqBzFstvphywkWL",
    "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1I67RQIUJusUjvRqmlx7ZdoQ3NEGwbSC5kKt2",
    "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1cE6EArz4xbNSaOjAwTldgE5B2LRskJuoQhGI",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Main container */}
      <div className="relative z-0 w-[90%] max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-center items-center text-center px-4 sm:px-8 py-12">
        
        {/* Background images */}
        <div ref={imageContainerRef} className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Healthcare background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10" />

        {/* Canvas effect */}
        <canvas ref={canvasRef} className="absolute inset-0 opacity-30 z-10 pointer-events-none" />

        {/* Foreground content */}
        <div className="relative z-20 max-w-3xl mx-auto text-white px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-xl">
            Power of Healthcare Transformation
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto font-medium drop-shadow-md">
            Delivering accessible healthcare, nutrition, and empowerment to underserved communities across India — one life at a time.
          </p>

          <button
            onClick={onExplore}
            className="group px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-primary rounded-lg font-semibold hover:shadow-lg hover:shadow-white/40 transition-all duration-300 flex items-center gap-1.5 text-sm sm:text-base mx-auto"
          >
            Explore Our Services
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </button>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-6">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
