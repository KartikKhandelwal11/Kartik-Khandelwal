import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import certificate_2 from "../Assets/Certificates/certificate_2.png";
import certificate_3 from "../Assets/Certificates/certificate_3.png";
import certificate_4 from "../Assets/Certificates/certificate_4.png";
import certificate_5 from "../Assets/Certificates/certificate_5.png";
import certificate_6 from "../Assets/Certificates/certificate_6.png";
import certificate_7 from "../Assets/Certificates/certificate_7.png";

const Certificates = () => {
  const certificates = [
    { id: 1, image: certificate_4, title: "Web Development" },
    { id: 2, image: certificate_3, title: "React Development" },
    { id: 3, image: certificate_2, title: "JavaScript" },
    { id: 4, image: certificate_5, title: "TypeScript" },
    { id: 5, image: certificate_6, title: "Node.js" },
    { id: 6, image: certificate_7, title: "Full Stack Development" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".certificate-card");
    const angle = 360 / cards.length;
    const radius = isMobile ? 200 : 350;

    cards.forEach((card, index) => {
      const rotation = angle * index + currentIndex * -angle;
      const radian = (rotation * Math.PI) / 180;
      const x = Math.sin(radian) * radius;
      const z = Math.cos(radian) * radius;
      const scale = z < 0 ? 0.6 : 1;
      const opacity = z < 0 ? 0.5 : 1;

      (card as HTMLElement).style.transform = 
        `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${rotation}deg) scale(${scale})`;
      (card as HTMLElement).style.opacity = opacity.toString();
      (card as HTMLElement).style.zIndex = Math.round(z).toString();
    });
  }, [currentIndex, isMobile]);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative py-6 md:py-10 overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#120B2E] to-[#0A0A0A]">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-0"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 blur-[100px] rounded-full"></div>
            <h2 className="relative flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-3xl md:text-5xl font-bold">
              <div className="relative">
                <span className="absolute -inset-1 bg-white/20 blur-md rounded-lg"></span>
                <span className="relative text-white">My</span>
              </div>
              <div className="relative">
                <span className="absolute -inset-1 bg-purple-600/20 blur-md rounded-lg"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                  Certificates
                </span>
              </div>
            </h2>
          </div>
          <div className="mt-8 relative">
            <span className="absolute -left-4 -top-4 w-3 h-3 bg-cyan-500 rounded-full animate-ping"></span>
            <span className="absolute -right-4 -bottom-4 w-3 h-3 bg-violet-500 rounded-full animate-ping"></span>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A showcase of my professional certifications and accomplishments
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative" style={{ perspective: "2000px" }}>
          <div ref={carouselRef} className="relative h-[300px] md:h-[350px] transform-style-3d">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="certificate-card absolute left-1/2 top-1/2 w-[200px] md:w-[350px] transition-all duration-500"
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full rounded-xl shadow-lg border-2 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                  style={{
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                  }}
                />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-purple-400" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-purple-400" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
