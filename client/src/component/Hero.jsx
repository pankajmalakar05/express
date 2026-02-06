import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import image2 from "../assets/express-images/image2.jpg";
import image3 from "../assets/express-images/image3.jpg";
import image4 from "../assets/express-images/image4.avif";

const slides = [
  {
    id: 1,
    tag: "01. AIR FREIGHT",
    title: "Fast and safe",
    highlight: "transport",
    subtitle: "your product",
    image: image4,
  },
  {
    id: 2,
    tag: "02. SEA FREIGHT",
    title: "Reliable ocean",
    highlight: "shipping",
    subtitle: "solutions",
    image: image3,
  },
  {
    id: 3,
    tag: "03. ROAD FREIGHT",
    title: "Quick and secure",
    highlight: "road",
    subtitle: "transport",
    image: image2,
  },
];

const HeroSlider = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* IMAGE */}
      <img
        key={active}
        src={slides[active].image}
        alt=""
        className="
          absolute inset-0 w-full h-full object-cover
          scale-110 animate-[zoomFade_5s_ease-in-out_forwards]
        "
      />

      {/* OVERLAY – SAME AS NAVBAR THEME */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#140826]/10 via-[#140826]/10 to-[#b21f2d]/10" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6">
        <div
          key={active}
          className="
            bg-white/10 backdrop-blur-xl
            border border-white/20
            p-6 sm:p-8 lg:p-10
            rounded-2xl
            max-w-full sm:max-w-xl
            animate-[slideFade_1s_ease-out]
          "
        >
          <p className="tracking-[3px] text-xs sm:text-sm font-semibold mb-3 text-[#b21f2d]">
            {slides[active].tag}
          </p>

          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            {slides[active].title}{" "}
            <span className="text-[#b21f2d]">
              {slides[active].highlight}
            </span>
            <br />
            {slides[active].subtitle}
          </h1>

          <button
            onClick={() => navigate("/rate")}
            className="
              group mt-6 inline-flex items-center gap-2
              bg-[#b21f2d] hover:bg-[#9e1b27]
              text-white font-bold
              px-6 py-3 rounded-lg
              shadow-xl hover:shadow-2xl
              transition-all duration-300
              hover:scale-105
            "
          >
            Rate Calculator
            <FiArrowRight className="group-hover:translate-x-1 transition" />
          </button>
        </div>
      </div>

      {/* SLIDE INDICATORS */}
      <div className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300
              ${
                active === i
                  ? "bg-[#b21f2d] text-white scale-110 shadow-xl"
                  : "border border-white text-white hover:bg-[#b21f2d] hover:border-[#b21f2d]"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* ARROWS */}
      <div className="absolute right-4 sm:right-10 bottom-6 sm:top-1/2 sm:-translate-y-1/2 flex gap-3 z-20">
        <button
          onClick={() =>
            setActive((active - 1 + slides.length) % slides.length)
          }
          className="
            w-11 h-11 rounded-full
            bg-white/90 text-[#140826]
            flex items-center justify-center
            hover:bg-[#b21f2d] hover:text-white
            transition-all duration-300
            hover:scale-110
            shadow-lg
          "
        >
          <FiChevronLeft size={22} />
        </button>

        <button
          onClick={() =>
            setActive((active + 1) % slides.length)
          }
          className="
            w-11 h-11 rounded-full
            bg-white/90 text-[#140826]
            flex items-center justify-center
            hover:bg-[#b21f2d] hover:text-white
            transition-all duration-300
            hover:scale-110
            shadow-lg
          "
        >
          <FiChevronRight size={22} />
        </button>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes zoomFade {
            from { transform: scale(1.2); opacity: 0.4; }
            to { transform: scale(1); opacity: 1; }
          }

          @keyframes slideFade {
            from { transform: translateX(-40px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSlider;
