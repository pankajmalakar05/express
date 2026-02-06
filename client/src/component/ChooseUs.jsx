import { motion } from "framer-motion";
import {
  FaGlobe,
  FaClock,
  FaHeadset,
  FaBoxOpen,
  FaCogs,
  FaAward,
} from "react-icons/fa";

const chooseUsData = [
  {
    icon: <FaGlobe />,
    title: "Global Network",
    desc: "Worldwide logistics network with trusted partners across continents.",
  },
  {
    icon: <FaClock />,
    title: "Right Time Delivery",
    desc: "We ensure your shipments arrive safely and always on schedule.",
  },
  {
    icon: <FaHeadset />,
    title: "24-Hour Support",
    desc: "Our expert support team is available 24/7 for your assistance.",
  },
  {
    icon: <FaBoxOpen />,
    title: "Special Shipments",
    desc: "Handling fragile, oversized & high-value goods with care.",
  },
  {
    icon: <FaCogs />,
    title: "Bespoke Solutions",
    desc: "Customized logistics solutions designed for your business.",
  },
  {
    icon: <FaAward />,
    title: "Esteemed Company",
    desc: "Trusted by top companies with years of industry excellence.",
  },
];

const ChooseUs = () => {
  return (
    <section className="py-24 bg-[#f6f7fb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#b21f2d] tracking-widest font-semibold mb-3">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d051a]">
            Some Reasons to{" "}
            <span className="text-[#b21f2d]">Choose Us</span>
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {chooseUsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                group relative bg-white rounded-2xl p-10
                shadow-lg hover:shadow-[0_25px_60px_-20px_#b21f2d80]
                border border-gray-100
                transition-all duration-500 overflow-hidden
              "
            >
              {/* HOVER OVERLAY */}
              <div
                className="
                  absolute inset-0 bg-[#0d051a]
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                "
              />

              {/* ICON */}
              <div
                className="
                  relative z-10 w-20 h-20 rounded-xl
                  bg-[#b21f2d15]
                  flex items-center justify-center
                  text-[#b21f2d] text-4xl mb-6
                  group-hover:bg-[#b21f2d]
                  group-hover:text-white
                  group-hover:rotate-6 group-hover:scale-110
                  transition-all duration-500
                "
              >
                {item.icon}
              </div>

              {/* CONTENT */}
              <div className="relative z-10">
                <h3
                  className="
                    text-xl font-bold mb-3 text-[#0d051a]
                    group-hover:text-white transition
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-gray-600 leading-relaxed
                    group-hover:text-white/90 transition
                  "
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ChooseUs;
