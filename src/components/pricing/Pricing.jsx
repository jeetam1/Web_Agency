import React from "react";

import { motion } from "framer-motion";

import {
  Check,
  Zap,
  Crown,
  Rocket,
} from "lucide-react";

const plans = [
  {
    title: "Starter",

    price: "₹4,999",

    icon: (
      <Zap
        className="text-blue-400"
        size={24}
      />
    ),

    desc:
      "Perfect for local shops & personal brands.",

    features: [
      "Single Page Design",
      "Mobile Responsive",
      "Basic SEO",
      "Contact Form",
      "7-Day Delivery",
    ],

    recommended: false,
  },

  {
    title: "Business",

    price: "₹14,999",

    icon: (
      <Rocket
        className="text-purple-400"
        size={24}
      />
    ),

    desc:
      "Best for Restaurants, Gyms & Clinics.",

    features: [
      "Up to 5 Pages",
      "Advanced UI Animations",
      "Google Business Setup",
      "WhatsApp Integration",
      "Speed Optimization",
    ],

    recommended: true,
  },

  {
    title: "Premium",

    price: "₹29,999",

    icon: (
      <Crown
        className="text-yellow-400"
        size={24}
      />
    ),

    desc:
      "Full-scale E-Commerce & Custom Apps.",

    features: [
      "Unlimited Pages",
      "Payment Gateway",
      "Custom CMS Dashboard",
      "Priority Support",
      "Full SEO Package",
    ],

    recommended: false,
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-28 px-6 bg-[#050816] overflow-hidden"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}

        <div className="text-center mb-20">

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
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >

            Transparent{" "}

            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">

              Pricing

            </span>

          </motion.h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">

            Invest in a premium website
            that helps your business grow.

          </p>

        </div>

        {/* PRICING GRID */}

        <div className="grid md:grid-cols-3 gap-8 items-stretch">

          {plans.map((plan, index) => (

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
              className={`relative flex flex-col rounded-[2.5rem] p-10 border transition-all duration-500 ${
                plan.recommended
                  ? "bg-gradient-to-b from-blue-500/10 to-purple-500/10 border-blue-500/40 shadow-[0_20px_50px_rgba(59,130,246,0.12)]"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >

              {/* BADGE */}

              {plan.recommended && (

                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-black px-6 py-2 rounded-full uppercase tracking-[3px] shadow-lg">

                  Most Popular

                </div>

              )}

              {/* ICON */}

              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 mb-8 mx-auto">

                {plan.icon}

              </div>

              {/* TITLE */}

              <h3 className="text-3xl font-bold text-white text-center mb-3">

                {plan.title}

              </h3>

              {/* DESCRIPTION */}

              <p className="text-gray-500 text-sm text-center mb-8 leading-relaxed">

                {plan.desc}

              </p>

              {/* PRICE */}

              <div className="flex items-end justify-center gap-1 mb-10">

                <span className="text-5xl font-black text-white">

                  {plan.price}

                </span>

                <span className="text-gray-500 text-sm mb-1">

                  /project

                </span>

              </div>

              {/* FEATURES */}

              <div className="space-y-4 mb-10 flex-1">

                {plan.features.map(
                  (feature, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-3 text-gray-300"
                    >

                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">

                        <Check
                          size={12}
                          className="text-blue-400"
                        />

                      </div>

                      <span className="text-sm">

                        {feature}

                      </span>

                    </div>

                  )
                )}

              </div>

              {/* BUTTON */}

              <button
                className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${
                  plan.recommended
                    ? "bg-white text-black hover:scale-[1.02]"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                }`}
              >

                {plan.recommended
                  ? "Get Started"
                  : "Choose Plan"}

              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Pricing;