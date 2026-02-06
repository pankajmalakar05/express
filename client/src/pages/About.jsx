import { FiTruck, FiGlobe, FiShield } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import image6 from "../assets/express-images/image6.jpg";
import logo2 from "../assets/express-images/logo2.jpeg";

const About = () => {
  const location = useLocation();
  const showHero = location.pathname === "/about";

  return (
    <section className="bg-[#f6f7fb] overflow-hidden">
      {/* HERO */}
      {showHero && (
        <div className="relative h-[45vh] flex items-center justify-center overflow-hidden">
          <img
            src={logo2}
            alt="About background"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* BRAND OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#140826]/80 via-[#140826]/10 to-[#b21f2d]/10" />

          <h1 className="relative z-10 text-white text-4xl sm:text-5xl font-extrabold tracking-wide animate-fadeIn">
            About Us
          </h1>
        </div>
      )}

      {/* CONTENT */}
      <div
        className={`max-w-7xl mx-auto px-4 ${
          showHero ? "py-16" : "py-8"
        } grid lg:grid-cols-2 gap-12 items-center`}
      >
        <div className="animate-slideUp">
          <p className="text-[#b21f2d] font-semibold tracking-widest mb-3">
            WHO WE ARE
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#140826]">
            We provide fast & reliable logistics solutions
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            We are a professional logistics company offering air, sea, and road
            freight services across the globe.
          </p>

          <p className="text-gray-600 leading-relaxed">
            With modern technology, expert teams, and trusted partners, we help
            businesses grow by simplifying transportation.
          </p>
        </div>

        <div className="relative animate-slideUp delay-200">
          <div className="h-72 sm:h-80 rounded-2xl bg-gradient-to-br from-[#140826] to-[#b21f2d] shadow-2xl" />
          <img
            src={image6}
            alt="About Us"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* FEATURES */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CARD */}
          <div className="group bg-white p-8 rounded-2xl text-center shadow-lg
                          hover:shadow-2xl transition-all duration-300
                          animate-scaleIn">
            <div
              className="w-16 h-16 mx-auto mb-4 rounded-xl
                         bg-[#b21f2d]/10 flex items-center justify-center
                         text-[#b21f2d]
                         group-hover:bg-[#b21f2d]
                         group-hover:text-white
                         transition-all duration-300
                         group-hover:scale-110 group-hover:rotate-6"
            >
              <FiTruck size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-[#140826]">
              Fast Delivery
            </h3>
            <p className="text-gray-600 text-sm">
              Quick and safe transportation for all types of cargo worldwide.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-2xl text-center shadow-lg
                          hover:shadow-2xl transition-all duration-300
                          animate-scaleIn delay-150">
            <div
              className="w-16 h-16 mx-auto mb-4 rounded-xl
                         bg-[#b21f2d]/10 flex items-center justify-center
                         text-[#b21f2d]
                         group-hover:bg-[#b21f2d]
                         group-hover:text-white
                         transition-all duration-300
                         group-hover:scale-110 group-hover:-rotate-6"
            >
              <FiGlobe size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-[#140826]">
              Global Network
            </h3>
            <p className="text-gray-600 text-sm">
              Connected with trusted partners across multiple countries.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-2xl text-center shadow-lg
                          hover:shadow-2xl transition-all duration-300
                          animate-scaleIn delay-300">
            <div
              className="w-16 h-16 mx-auto mb-4 rounded-xl
                         bg-[#b21f2d]/10 flex items-center justify-center
                         text-[#b21f2d]
                         group-hover:bg-[#b21f2d]
                         group-hover:text-white
                         transition-all duration-300
                         group-hover:scale-110 group-hover:rotate-12"
            >
              <FiShield size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-[#140826]">
              Secure Service
            </h3>
            <p className="text-gray-600 text-sm">
              Your shipments are protected with strict safety standards.
            </p>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }

          @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slideUp {
            animation: slideUp 1s ease forwards;
          }

          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-scaleIn {
            animation: scaleIn 0.8s ease forwards;
          }

          .delay-150 { animation-delay: 0.15s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
        `}
      </style>
    </section>
  );
};

export default About;
