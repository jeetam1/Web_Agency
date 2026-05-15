import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe, Zap } from "lucide-react";

function Hero() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#050816]">

      {/* BACKGROUND GLOW */}

      <div className="absolute inset-0 z-0">

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full"
        />

      </div>

      {/* CONTENT */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center relative z-10"
      >

        {/* BADGE */}

        {/* <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-[2px] uppercase mb-8 backdrop-blur-md"
        >

          <Sparkles size={14} />

          <span>Neemuch's Premium Agency</span>

        </motion.div> */}

        <motion.div
  variants={itemVariants}
  className="flex justify-center md:justify-start md:pl-[220px] mt-14 mb-10"
>

  <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md max-w-full">

    <Sparkles
      size={16}
      className="text-blue-400 flex-shrink-0"
    />

    <span className="text-blue-400 text-[10px] sm:text-xs md:text-sm font-bold tracking-[1px] sm:tracking-[3px] md:tracking-[4px] uppercase leading-none whitespace-nowrap text-center">

      Neemuch's Premium Agency

    </span>

  </div>

</motion.div>

        {/* HEADING */}

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight text-white mb-8"
        >

          We Build

          <br />

          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">

            Digital Futures

          </span>

        </motion.h1>

        {/* SUBTEXT */}

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12"
        >

          Elevating local brands in Neemuch with modern,
          responsive and futuristic websites.

        </motion.p>

        {/* BUTTONS */}

        <motion.div
  variants={itemVariants}
  className="flex flex-col sm:flex-row gap-6 justify-center items-center"
>

  <a
    href="https://ml-portfolio122.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="px-10 py-5 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
  >

    Explore Work →

  </a>

  <a
    href="#contact"
    className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white font-bold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center"
  >

    Contact Us

  </a>

</motion.div>

        {/* TRUST BADGES */}

        <motion.div
          variants={itemVariants}
          className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-10 md:gap-20 opacity-60"
        >

          <div className="flex items-center gap-2">
            <Globe size={20} />
            <span className="font-bold tracking-widest text-sm">
              GLOBAL STANDARD
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Zap size={20} />
            <span className="font-bold tracking-widest text-sm">
              99+ PERFORMANCE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Sparkles size={20} />
            <span className="font-bold tracking-widest text-sm">
              PIXEL PERFECT
            </span>
          </div>

        </motion.div>

      </motion.div>

      {/* SCROLL INDICATOR */}

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2"
      >

        <div className="w-1 h-2 bg-blue-500 rounded-full" />

      </motion.div>

    </section>
  );
}

export default Hero;