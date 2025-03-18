import { CircleCheck, ArrowRight, Users, Upload, ShieldCheck } from "lucide-react"; // Icons

export default function Test() {
  const steps = [
    { icon: <Users size={30} />, title: "Sign Up", desc: "Create your free account in just a few clicks." },
    { icon: <Upload size={30} />, title: "Add Assets", desc: "Easily upload or import your assets for tracking." },
    { icon: <ShieldCheck size={30} />, title: "Monitor & Secure", desc: "Track performance and ensure security." },
    { icon: <CircleCheck size={30} />, title: "Optimize", desc: "Gain insights and improve asset utilization." },
  ];

  return (
    <section className="py-10 mb-30 text-center border-1 border-[#00509D] rounded-3xl">
      <p className="text-blue-400 font-semibold mb-10 uppercase tracking-wider">HOW IT WORKS</p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {steps.map((step, i) => (
          <div key={i} className="p-6 bg-white/3 hover:bg-transparent border-0 border-transparent hover:border-1 hover:border-white/7 rounded-xl shadow-md transition-all duration-300">
            <div className="flex items-center justify-center text-blue-300 mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold text-white">{step.title}</h3>
            <p className="text-gray-100 mt-2">{step.desc}</p>
            {i < steps.length - 1 && <ArrowRight size={24} className="text-gray-100 mt-4 mx-auto hidden md:block" />}
          </div>
        ))}
      </div>
    </section>
  );
}
