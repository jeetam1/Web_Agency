import React, { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  ExternalLink,
  Github,
  Layers,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    title: "Iron Paradise Gym",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Tailwind", "Framer"],
  },

  {
    title: "The Royal Tadka",
    category: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
    tags: ["Next.js", "GSAP", "Sanity"],
  },

  {
    title: "Shree Jewels",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
    tags: ["Shopify", "React", "Redux"],
  },

  {
    title: "City Care Hospital",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1000&auto=format&fit=crop",
    tags: ["Firebase", "React", "Tailwind"],
  },
];

const categories = [
  "All",
  "Business",
  "Restaurant",
  "E-Commerce",
  "Healthcare",
];

function Portfolio() {

  const [activeTab, setActiveTab] =
    useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter(
          (p) => p.category === activeTab
        );

  return (
    <section
      id="portfolio"
      className="py-28 px-6 bg-[#050816] relative overflow-hidden"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}

        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-10 mb-20">

          <div className="max-w-2xl">

            <motion.h2
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight"
            >

              Proven{" "}

              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">

                Results

              </span>

            </motion.h2>

            <p className="text-gray-400 text-lg">

              Modern websites built for local
              businesses in Neemuch.

            </p>

          </div>

          {/* FILTER BUTTONS */}

          <div className="flex flex-wrap gap-3 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-xl">

            {categories.map((cat) => (

              <button
                key={cat}
                onClick={() =>
                  setActiveTab(cat)
                }
                className={`px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >

                {cat}

              </button>

            ))}

          </div>

        </div>

        {/* PROJECT GRID */}

        <motion.div
          layout
          className="grid md:grid-cols-2 gap-10"
        >

          <AnimatePresence>

            {filteredProjects.map(
              (project) => (

                <motion.div
                  layout
                  key={project.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="group rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-500"
                >

                  {/* IMAGE */}

                  <div className="relative h-[320px] overflow-hidden">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

                    {/* TAGS */}

                    <div className="absolute top-5 left-5 flex flex-wrap gap-2">

                      {project.tags.map((tag) => (

                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg bg-black/50 border border-white/10 text-[10px] uppercase tracking-widest text-white"
                        >

                          {tag}

                        </span>

                      ))}

                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="p-8">

                    <div className="flex items-center gap-2 text-blue-400 text-xs uppercase tracking-[3px] font-bold mb-4">

                      <Layers size={14} />

                      {project.category}

                    </div>

                    <h3 className="text-3xl font-bold text-white mb-8 group-hover:text-blue-400 transition-colors">

                      {project.title}

                    </h3>

                    {/* BUTTONS */}

                    <div className="flex gap-4">

                      <button className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white text-black font-bold hover:bg-blue-500 hover:text-white transition-all">

                        Live Demo

                        <ExternalLink size={18} />

                      </button>

                      <button className="w-14 h-14 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">

                        <Github size={22} />

                      </button>

                    </div>

                  </div>

                </motion.div>

              )
            )}

          </AnimatePresence>

        </motion.div>

        {/* VIEW ALL */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-20 text-center"
        >

          <button className="inline-flex items-center gap-4 text-gray-400 font-bold hover:text-white transition-all group">

            Explore All Case Studies

            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">

              <ArrowRight size={18} />

            </div>

          </button>

        </motion.div>

      </div>

    </section>
  );
}

export default Portfolio;