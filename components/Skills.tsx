import { useEffect, useRef } from "react";

interface Skill {
  name: string;
  icon: string;
}

const skillsData: Skill[] = [
  { name: "Python", icon: "🐍" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "⚙️" },
  // { name: "MongoDB", icon: "🍃" },
  { name: "Solidity", icon: "◇" },
  // { name: "Web3", icon: "🔗" },
  { name: "JavaScript", icon: "JS" },
  { name: "PostgreSQL", icon: "🐘" },
];

export default function SkillsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let position = 0;
    const speed = 0.5; // Adjust for slower/faster movement

    const animate = () => {
      position -= speed;

      // Reset position when scrolled past the first set of cards
      const cardWidth = 180; // Approximate card width with gap
      const totalWidth = cardWidth * skillsData.length;

      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }

      carousel.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="skills-carousel" className="py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none">
            {/* <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent dark:hidden"></div> */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b] to-transparent hidden dark:block"></div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none">
            {/* <div className="absolute inset-0 bg-gradient-to-l from-white to-transparent dark:hidden"></div> */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#0b0b0b] to-transparent hidden dark:block"></div>
          </div>

          {/* Moving Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 py-4"
            style={{
              willChange: "transform",
            }}
          >
            {/* Render skills multiple times for seamless loop */}
            {[...skillsData, ...skillsData].map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 card rounded-xl p-6 duration-300 flex flex-col items-center justify-center gap-3 cursor-pointer group"
              >
                {/* Icon */}
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>

                {/* Name */}
                <p className="font-semibold text-gray-900 dark:text-white text-center text-sm">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
