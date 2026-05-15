function Footer() {

  const currentYear =
    new Date().getFullYear();

  return (
    <footer className="bg-[#050816] border-t border-white/10 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TOP */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 mb-20">

          {/* BRAND */}

          <div className="lg:col-span-2">

            <h2 className="text-5xl font-black text-white leading-tight mb-6">

              NEEMUCH

              <br />

              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">

                WEBSTUDIO

              </span>

            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">

              Building premium websites for
              modern businesses in Neemuch.

            </p>

            {/* SOCIALS */}

            <div className="flex gap-4 mt-10">

  {/* Instagram */}

  <a
    href="https://instagram.com/jeetam_singh_yadav"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-pink-500 hover:text-white cursor-pointer transition-all duration-300"
  >

    IG

  </a>

  {/* LinkedIn */}

  <a
    href="https://linkedin.com/in/jeetamsinghyadav"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white cursor-pointer transition-all duration-300"
  >

    IN

  </a>

  {/* Twitter/X */}

  <a
    href="https://x.com/jeetam12"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white cursor-pointer transition-all duration-300"
  >

    TW

  </a>

  {/* GitHub */}

  <a
    href="https://github.com/jeetam1"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black cursor-pointer transition-all duration-300"
  >

    GH

  </a>

</div>
</div>

          {/* LINKS */}

          <div>

            <h3 className="text-white font-bold uppercase tracking-[3px] text-sm mb-8">

              Quick Links

            </h3>

            <div className="flex flex-col gap-5">

              <a href="#" className="text-gray-400 hover:text-white transition">
                Home
              </a>

              <a href="#services" className="text-gray-400 hover:text-white transition">
                Services
              </a>

              <a href="#portfolio" className="text-gray-400 hover:text-white transition">
                Portfolio
              </a>

              <a href="#pricing" className="text-gray-400 hover:text-white transition">
                Pricing
              </a>

            </div>

          </div>

          {/* NEWSLETTER */}

          <div>

            <h3 className="text-white font-bold uppercase tracking-[3px] text-sm mb-8">

              Newsletter

            </h3>

            <p className="text-gray-400 text-sm mb-6">

              Get website and SEO insights.

            </p>

            <input
              type="email"
              placeholder="email@address.com"
              className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-5 text-white outline-none mb-4"
            />

            <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold hover:scale-[1.02] transition">

              Subscribe

            </button>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-6 items-center">

          <p className="text-gray-500 text-sm">

            © {currentYear}

            <span className="text-white">
              {" "}Neemuch WebStudio
            </span>

            . All rights reserved.

          </p>

          <div className="flex items-center gap-6 text-xs text-gray-500">

            <div className="flex items-center gap-2">

              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

              Systems Operational

            </div>

            <div>
              Built with React & Tailwind
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;