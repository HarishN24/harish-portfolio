import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
} from "lucide-react";

import { CONTACT } from "../data/portfolioData";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#0f1115] px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-yellow-400 text-lg mb-3">
            Hello 👋 I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Harish
            <span className="text-blue-400">
              {" "}Neelapala
            </span>
          </h1>
          <h2>
  Java Full Stack Developer
</h2>

          <div className="text-2xl md:text-3xl font-semibold mt-6 text-gray-300">

            <TypeAnimation
              sequence={[
                "Java Full Stack Developer",
                2000,
                "Spring Boot Developer",
                2000,
                "React JS Developer",
                2000,
                "Backend Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

          </div>

          <p className="mt-6 text-gray-400 leading-8 max-w-xl">

            Computer Science Engineering graduate passionate about building
            scalable web applications using Java, Spring Boot, React JS, and MySQL.

          </p>

          <div className="flex items-center gap-2 mt-6 text-gray-400">

            <MapPin size={18} />

            Hyderabad, Telangana

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-8">
            
            <a
              href="/Harish_Neelapala_Resume.pdf"
              download
              className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-gray-700 px-6 py-3 rounded-lg hover:border-blue-400 hover:text-blue-400 transition"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-gray-700 px-6 py-3 rounded-lg hover:border-blue-400 hover:text-blue-400 transition"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 border border-gray-700 px-6 py-3 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              <Mail size={18} />
              Email
            </a>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <img
            src="/profile.jpg"
            alt="Harish"
            className="w-80 h-80 rounded-full border-4 border-yellow-400 object-cover shadow-2xl"
          />

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;