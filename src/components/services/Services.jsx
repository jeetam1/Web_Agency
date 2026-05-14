import React from "react";

import { motion } from "framer-motion";

import {
  Monitor,
  Utensils,
  Dumbbell,
  HeartPulse,
  ShoppingBag,
  Search,
  Smartphone,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Business Websites",

    desc:
      "Corporate-grade websites for local brands and startups.",

    icon: <Monitor size={28} />,

    color:
      "from-blue-500 to-cyan-400",
  },

  {
    title: "Restaurant & Cafe",

    desc:
      "Digital menus and reservation systems for food businesses.",

    icon: <Utensils size={28} />,

    color:
      "from-orange-500 to-red-400",
  },

  {
    title: "Gym & Fitness",

    desc:
      "Modern fitness portals and membership systems.",

    icon: <Dumbbell size={28} />,

    color:
      "from-purple-500 to-pink-400",
  },

  {
    title: "Hospital & Clinic",

    desc:
      "Secure appointment booking and healthcare websites.",

    icon: <HeartPulse size={28} />,

    color:
      "from-green-500 to-emerald-400",
  },

  {
    title: "E-Commerce Stores",

    desc:
      "Scalable online stores with payment integration.",

    icon: <ShoppingBag size={28} />,

    color:
      "from-blue-600 to-indigo-400",
  },

  {
    title: "SEO Optimization",

    desc:
      "Improve Google rankings and local business visibility.",

    icon: <Search size={28} />,

    color:
      "from-yellow-500 to-orange-400",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative py-28 px-6 bg-[#050816] overflow-hidden"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}

        <div className="text-center mb-20">

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6"
          >

            <ShieldCheck size={14} />

            Our Expertise

          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
            className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6"
          >

            Solutions Built For{" "}

            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">

              Modern Growth

            </span>

          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >

            We build premium digital
            experiences that drive trust,
            visibility and growth.

          </motion.p>

        </div>

        {/* SERVICES GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all duration-500 overflow-hidden"
            >

              {/* HOVER GLOW */}

              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* ICON */}

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-[1px] mb-8`}>

                <div className="w-full h-full rounded-2xl bg-[#050816] flex items-center justify-center text-white">

                  {service.icon}

                </div>

              </div>

              {/* TITLE */}

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">

                {service.title}

              </h3>

              {/* DESCRIPTION */}

              <p className="text-gray-400 leading-relaxed mb-8">

                {service.desc}

              </p>

              {/* LINK */}

              <div className="flex items-center gap-2 text-sm font-bold text-white/40 group-hover:text-blue-400 transition-all uppercase tracking-widest">

                Learn More

                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />

              </div>

              {/* NUMBER */}

              <div className="absolute -bottom-4 -right-4 text-8xl font-black text-white/[0.03] select-none pointer-events-none">

                0{index + 1}

              </div>

            </motion.div>

          ))}

        </div>

        {/* FEATURE BAR */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="mt-20 p-8 rounded-[2rem] bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10 backdrop-blur-xl flex flex-wrap justify-center gap-10 md:gap-20"
        >

          <div className="flex items-center gap-3">

            <Smartphone className="text-blue-400" />

            <span className="text-gray-300 font-bold">

              Mobile Ready

            </span>

          </div>

          <div className="flex items-center gap-3">

            <ShieldCheck className="text-purple-400" />

            <span className="text-gray-300 font-bold">

              Secure Hosting

            </span>

          </div>

          <div className="flex items-center gap-3">

            <Search className="text-green-400" />

            <span className="text-gray-300 font-bold">

              SEO Included

            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Services;