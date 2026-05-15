import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
} from "lucide-react";

function Contact() {

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {

  e.preventDefault();

  setIsSubmitting(true);

  try {

    await emailjs.send(

      "service_5ah537p",

      "template_ozs5tw6",

      {
        from_name: formState.name,

        from_email: formState.email,

        message: formState.message,
      },

      "iujnxuXqeGcyzezb0"
    );

    setSuccess(true);

setTimeout(() => {
  setSuccess(false);
}, 3000);

    setFormState({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {

    console.log(error);

    

  }

  setIsSubmitting(false);
};

  return (
    <section
      id="contact"
      className="relative py-24 px-6 overflow-hidden bg-[#050816]"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADING */}

        <div className="text-center mb-16">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black mb-5 text-white tracking-tight"
          >

            Ready to{" "}

            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">

              Scale?

            </span>

          </motion.h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">

            Let's build a futuristic digital experience
            for your business in Neemuch.

          </p>

        </div>

        {/* CONTENT */}

        <div className="grid lg:grid-cols-3 gap-12">

          {/* LEFT INFO */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >

            {/* PHONE */}

            <div className="flex items-start gap-5">

              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">

                <Phone size={24} />

              </div>

              <div>

                <h4 className="text-white font-bold text-lg">
                  Call Us
                </h4>

                <p className="text-gray-400">
                  +91 9425361458
                </p>

              </div>

            </div>

            {/* EMAIL */}

            <div className="flex items-start gap-5">

              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400">

                <Mail size={24} />

              </div>

              <div>

                <h4 className="text-white font-bold text-lg">
                  Email
                </h4>

                <p className="text-gray-400">
                  jjeetamsinghyadav@gmail.com
                </p>

              </div>

            </div>

            {/* LOCATION */}

            <div className="flex items-start gap-5">

              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">

                <MapPin size={24} />

              </div>

              <div>

                <h4 className="text-white font-bold text-lg">
                  Location
                </h4>

                <p className="text-gray-400">
                  Neemuch, Madhya Pradesh
                </p>

              </div>

            </div>

            {/* RESPONSE CARD */}

            <a
  href="https://wa.me/919425361458?text=Hello%20NeemuchStudio,%20I%20would%20like%20to%20ask%20a%20question%20regarding%20website%20development."
  target="_blank"
  rel="noopener noreferrer"
  className="block group"
>

  <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 hover:border-blue-500/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer">

    <h4 className="text-white font-bold mb-3 flex items-center gap-2">

      <MessageSquare
        size={20}
        className="text-blue-400 group-hover:rotate-6 transition-transform duration-300"
      />

      Fast Response

    </h4>

    <p className="text-sm text-gray-400 leading-relaxed">

      We usually respond within a few hours on WhatsApp.

    </p>

  </div>

</a>

          </motion.div>

          {/* FORM */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12"
          >

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* INPUTS */}

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  required
                  type="text"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      name: e.target.value,
                    })
                  }
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/10 text-white outline-none focus:border-blue-500"
                />

                <input
                  required
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      email: e.target.value,
                    })
                  }
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/10 text-white outline-none focus:border-blue-500"
                />

              </div>

              {/* TEXTAREA */}

              <textarea
                required
                rows="6"
                value={formState.message}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    message: e.target.value,
                  })
                }
                placeholder="Tell us about your project..."
                className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/10 text-white outline-none focus:border-blue-500 resize-none"
              />

              {/* BUTTON */}

             <div className="flex items-center gap-4">

  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    disabled={isSubmitting}
    type="submit"
    className="px-8 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg flex items-center justify-center gap-3"
  >

    {isSubmitting ? "Sending..." : "Send Proposal"}

    <Send
      size={20}
      className={isSubmitting ? "animate-pulse" : ""}
    />

  </motion.button>

  {

    success && (

      <p className="text-green-400 font-medium animate-pulse">

        Message Sent Successfully ✓

      </p>

    )

  }

</div>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Contact;