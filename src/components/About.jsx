import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-20 bg-[#111827] text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-yellow-400"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-lg text-gray-300 leading-8 text-center"
        >
          I am a Computer Science and Engineering graduate passionate
          about Java Full Stack Development.

          I have hands-on experience building web applications using
          Java, Spring Boot, React JS, MySQL, REST APIs,
          Spring Security, JWT Authentication, and Hibernate.

          I enjoy solving real-world problems, learning new
          technologies, and building scalable applications.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-6 mt-12">

          <div className="bg-[#1f2937] rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-yellow-400">
              3+
            </h3>
            <p className="mt-2 text-gray-300">
              Projects
            </p>
          </div>

          <div className="bg-[#1f2937] rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-400">
              7+
            </h3>
            <p className="mt-2 text-gray-300">
              Technologies
            </p>
          </div>

          <div className="bg-[#1f2937] rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-green-400">
              2
            </h3>
            <p className="mt-2 text-gray-300">
              Certifications
            </p>
          </div>

          <div className="bg-[#1f2937] rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-pink-400">
              2025
            </h3>
            <p className="mt-2 text-gray-300">
              Graduate
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;