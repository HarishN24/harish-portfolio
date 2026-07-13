import { motion } from "framer-motion";

const skills = [
  "Core Java",
  "Advanced Java",
  "Spring",
  "Spring Boot",
  "Spring Security",
  "Hibernate",
  "Spring Data JPA",
  "REST API",
  "JWT Authentication",
  "React JS",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "MySQL",
  "Git",
  "GitHub",
  "Maven",
  "Postman",
  "Swagger",
  "VS Code",
  "Eclipse IDE",
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#0f1115] text-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-yellow-400"
        >
          Technical Skills
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 mb-12">
          Technologies and tools that I use to build full stack applications.
        </p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="bg-[#1f2937] rounded-xl p-6 text-center shadow-lg border border-gray-700 hover:border-yellow-400 transition"
            >

              <h3 className="text-lg font-semibold">
                {skill}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;