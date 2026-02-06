import { motion } from "framer-motion";
import { FiDownload, FiFileText, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import image19 from "../../assets/express-images/image19.jpg";


const documents = [
  "Annexure A",
  "Commercial Invoice",
  "Packing List",
  "Invoice",
  "Footwear Declaration",
  "US Checklist",
  "Quota Charge Statement",
  "GR Waiver Form (for Free Trade Sample)",
  "SDF Form",
  "Annexure I for Drawback",
  "GR Waiver Form (for Repair & Return)",
  "Indemnity",
];

const resources = [
  { name: "Know Your Customer (KYC)", path: "/kyc" },
  { name: "Metric Conversion", path: "/metric-conversion" },
  { name: "Currency Calculator", path: "/currency-exchange" },
  { name: "Document Download", path: "/documents" },
];

const DocumentDownload = () => {
  return (
    <section className="overflow-hidden bg-[#f6f8f7]">

           <div className="relative h-[45vh] flex items-center justify-center">
              <div className="absolute inset-0 bg-gray-300">
                <img src={image19} className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-[#140826]/60" />
      
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center px-4 text-white"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                  Document <span className="text-[#b21f2d]">Download</span>
                </h1>{" "}
                <p className="max-w-3xl mx-auto text-white/90">
                  Easily download all required shipping and compliance documents.
                </p>
              </motion.div>
            </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-4 gap-14">
        {/* DOCUMENT LIST */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <h2 className="text-3xl font-extrabold mb-10 text-[#b21f2d]">
            Other Documents
          </h2>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FiFileText className="text-2xl text-[#0e061a]" />
                  <h3 className="font-semibold text-[#0a0413] text-sm">
                    {doc}
                  </h3>
                </div>

                <a
                  href={`/documents/${doc}.pdf`}
                  download
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0c0516] hover:gap-3 transition-all"
                >
                  Download <FiDownload />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RESOURCES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-6 h-fit border"
        >
          <h3 className="text-xl font-bold mb-6 text-[#b21f2d]">
            Resources
          </h3>

          <ul className="space-y-4">
            {resources.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 6 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={item.path}
                  className="flex items-center justify-between px-4 py-3 bg-[#f6f8f7] rounded-lg font-medium text-gray-700 hover:bg-[#b21f2d] hover:text-white transition"
                >
                  {item.name}
                  <FiArrowRight />
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default DocumentDownload;
