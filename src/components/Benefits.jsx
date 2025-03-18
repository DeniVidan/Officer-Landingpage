import { motion } from "framer-motion";
import { Search, BarChart, RefreshCcw, Lock } from "lucide-react"; // Import Lucide icons

export default function Benefits() {
  const features = [
    { icon: <Search size={30} className="text-[#66A3FE] opacity-70" />, title: "Real-time Tracking", desc: "Monitor assets in real-time with instant updates." },
    { icon: <BarChart size={30} className="text-[#66A3FE] opacity-70" />, title: "Advanced Analytics", desc: "Gain deep insights into your asset performance." },
    { icon: <RefreshCcw size={30} className="text-[#66A3FE] opacity-70" />, title: "Automated Audits", desc: "Streamline compliance with zero manual effort." },
    { icon: <Lock size={30} className="text-[#66A3FE] opacity-70" />, title: "Enterprise Security", desc: "Protect your data with military-grade encryption." },
  ];

  return (
    <section className="relative py-24 mt-20 bg-transparent text-white text-center overflow-hidden">
      {/* Background Gradient Overlay */}

      <h2 className="text-3xl md:text-5xl font-extrabold mb-10 title-font">
        Why Choose <span className="text-[#007BCC]">Officer?</span>
      </h2>
      <button className="mb-10 px-6 py-3 bg-[white] text-[#007BCC] rounded-full">
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" className="inline h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="#007BCC">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6l6 6-6 6" />
          </svg>
        </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 text-start font-[CreatoDisplayRegular]">
        {features.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ backgroundColor:"#66a3fe10" }}
            className="p-6 rounded-xl border-1 border-[#66A3FE]/30 shadow-lg"
          >
            <div className="flex justify-start">{item.icon}</div>
            <h3 className="text-xl font-semibold mt-4 title-font">{item.title}</h3>
            <p className="mt-2 text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
