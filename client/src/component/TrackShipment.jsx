import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const TrackShipment = () => {
  const navigate = useNavigate();

  return (
    <section className="relative z-30 -mt-20 px-4 sm:px-6">
      <div
        className="
          max-w-4xl mx-auto
          bg-white rounded-2xl
          shadow-[0_20px_50px_-15px_#b21f2d40]
          p-5 sm:p-6 md:p-8
          overflow-hidden
        "
      >
        {/* FUEL NEWS MARQUEE */}
        <div className="relative overflow-hidden mb-5 border-b border-[#b21f2d30] pb-3">
          <div
            className="
              flex gap-6 whitespace-nowrap
              font-semibold text-xs sm:text-sm
              text-[#140826]
              animate-marquee
              hover:[animation-play-state:paused]
            "
          >
            <span className="text-[#b21f2d]">Fuel News :</span>

            <span className="text-[#b21f2d]">DHL - 28.75%</span>
            <span className="text-[#140826]">FEDEX - 31.50%</span>
            <span className="text-[#140826]">UPS - 31.00%</span>
            <span className="text-[#b21f2d]">ARAMEX - 34.00%</span>

            {/* repeat for loop */}
            <span className="text-[#b21f2d]">DHL - 28.75%</span>
            <span className="text-[#140826]">FEDEX - 31.50%</span>
            <span className="text-[#140826]">UPS - 31.00%</span>
            <span className="text-[#b21f2d]">ARAMEX - 34.00%</span>
          </div>
        </div>

        {/* SEARCH + BUTTON */}
        <div className="flex flex-col md:flex-row gap-4">
          <div
            className="
              flex items-center w-full
              border rounded-lg
              px-4 py-3
              bg-[#b21f2d15]
              border-transparent
              focus-within:border-[#b21f2d]
              transition-all
            "
          >
            <FiSearch className="text-[#b21f2d] mr-3" size={18} />
            <input
              type="text"
              placeholder="Track Your Shipment"
              className="
                w-full bg-transparent outline-none
                text-[#140826] text-sm
                placeholder:text-[#14082680]
              "
            />
          </div>

          <button
            onClick={() => navigate("/")}
            className="
              bg-[#b21f2d] hover:bg-[#9b1b26]
              text-white font-semibold
              px-10 py-3
              rounded-lg
              transition-all duration-300
              hover:scale-105
              active:scale-95
            "
          >
            Track
          </button>
        </div>
      </div>

      {/* MARQUEE ANIMATION */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 18s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default TrackShipment;
