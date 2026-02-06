import { FiEdit3, FiLayers, FiTruck } from "react-icons/fi";
import image7 from "../assets/express-images/image7.jpg";

const steps = [
  {
    id: "01",
    title: "Enter Shipment Details",
    desc: "Provide shipment information including weight, size, and destination.",
    icon: <FiEdit3 size={36} />,
  },
  {
    id: "02",
    title: "Choose Your Service",
    desc: "Select air, sea, or road freight based on your delivery needs.",
    icon: <FiLayers size={36} />,
  },
  {
    id: "03",
    title: "Ready To Go Your Goods",
    desc: "Your shipment is prepared, dispatched, and tracked securely.",
    icon: <FiTruck size={36} />,
  },
];

const WorkProcess = () => {
  return (
    <section className="bg-[#f6f7fb] py-20 overflow-hidden">
      {/* HEADER */}
      <div className="text-center mb-16 px-4 animate-fadeIn">
        <p className="text-[#b21f2d] font-semibold tracking-widest mb-3">
          WORK PROCESS
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#140826]">
          Easy 3 Working Steps
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Simple, fast, and transparent logistics process to move your goods
          safely across the globe.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        {/* IMAGE */}
        <div className="relative animate-slideLeft">
          <div
            className="h-[420px] rounded-3xl 
                       bg-gradient-to-br from-[#140826] to-[#b21f2d]
                       shadow-2xl"
          >
            <img
              src={image7}
              className="w-full h-full object-cover rounded-3xl"
              alt=""
            />
          </div>
        </div>

        {/* STEPS */}
        <div className="space-y-10">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="group flex gap-6 items-start
                         p-6 rounded-2xl bg-white
                         shadow-lg hover:shadow-2xl
                         transition-all duration-300
                         animate-slideUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className="w-16 h-16 rounded-xl
                           bg-[#b21f2d]/10 flex items-center justify-center
                           text-[#b21f2d]
                           group-hover:bg-[#b21f2d]
                           group-hover:text-white
                           transition-all duration-300
                           group-hover:rotate-6 group-hover:scale-110"
              >
                {step.icon}
              </div>

              <div>
                <span className="text-sm font-bold text-[#b21f2d]">
                  STEP {step.id}
                </span>

                <h3 className="text-xl font-bold mt-1 mb-2 text-[#140826]">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
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
            animation: slideUp 0.9s ease forwards;
          }

          @keyframes slideLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-slideLeft {
            animation: slideLeft 1s ease forwards;
          }
        `}
      </style>
    </section>
  );
};

export default WorkProcess;
