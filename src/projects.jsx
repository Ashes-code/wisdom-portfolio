import { motion } from "framer-motion"; 
import scoutpro from "./assets/scoutpro.png";
import bellefood from "./assets/belle-food.png";
import librain from "./assets/librain.png";
import emine from "./assets/e-mine.png";


const Projects = () => {  

  return (
    <section className="bg-[#1d2435] pb-10 lg:pb-20">
      <div
        className="flex justify-center items-center flex-col container mx-auto"
        id="projects"
      >
        <h1 className="text-3xl font-bold mb-5 text-blue-700 rounded-md py-2 px-4 mt-12 tracking-widest">
          Projects
        </h1>
        <p className="text-white text-lg text-center font-bold px-5 lg:px-0">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <motion.div 
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        viewport={{ once: true }}
        className="text-white container mx-auto pb-4 px-3 lg:px-0 projects-section">
        <motion.div 
          initial= {{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} 
          className="flex flex-col-reverse lg:flex-row items-center justify-center bg-[#2b4973] py-10 rounded-xl px-5 project-card">
          <div className="bg-gray-800 rounded-lg flex flex-col justify-center py-8 px-6 lg:mr-2 animate">
            <h2 className="text-2xl font-bold mb-4">LiBrain</h2>
            <motion.p
              initial= {{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
               className="text-white mb-4">
              LiBrain is an online bookstore offering a curated selection of
              books across various genres. The platform provides users with an
              intuitive browsing experience, detailed book descriptions, and
              seamless purchasing options, making it a go-to destination for
              book enthusiasts.
            </motion.p>
            <motion.div initial= {{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="flex flex-wrap gap-2 mb-6">
              {[
                "Html",
                "Css",
                "JavaScript",
                "TailwindCSS",
                "Vercel",
                "Git",
                "GitHub",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-white px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            <a
              href="https://bookstore-li-brain.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center"
            >
              <span>Check it out</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
          <div className="flex justify-end ml-0 lg:ml-2 mb-5 lg:mb-0">
            <a
              href="https://bookstore-li-brain.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={librain}
                alt="Project preview"
                className="rounded-lg w-full h-full hover:scale-105 transition-all animate-two"
              />
            </a>
          </div>
        </motion.div>

        <motion.div
            initial= {{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col-reverse lg:flex-row items-center justify-center bg-[#2b4973] py-10 rounded-xl my-10 px-5 project-card">
          <div className="bg-gray-800 rounded-lg flex flex-col justify-center py-8 px-6 lg:mr-2 animate">
            <h2 className="text-2xl font-bold mb-4">E-mine</h2>
            <motion.p initial= {{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}className="text-white mb-4">
              E-mine is an e-commerce platform designed to offer users access
              to a wide range of products at competitive prices. The website
              features a clean and modern interface, with categories to help
              users discover the latest trends and enjoy unbeatable discounts.
            </motion.p>
            <motion.div initial= {{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="flex flex-wrap gap-2 mb-6">
              {[
                "Html",
                "Css",
                "JavaScript",
                "TailwindCSS",
                "Vercel",
                "Git",
                "GitHub",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-white px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            <a
              href="https://e-minestore.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center"
            >
              <span>Check it out</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
          <div className="flex justify-end ml-0 lg:ml-2 mb-5 lg:mb-0">
            <a
              href="https://e-minestore.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={emine}
                alt="Project preview"
                className="rounded-lg w-full h-full hover:scale-105 transition-all animate-two"
              />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial= {{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
            className="flex flex-col-reverse lg:flex-row items-center justify-center bg-[#2b4973] py-10 rounded-xl my-10 px-5 project-card">
          <div className="bg-gray-800 rounded-lg flex flex-col justify-center py-8 px-6 lg:mr-2 animate">
            <h2 className="text-2xl font-bold mb-4">scoutPRO</h2>
            <motion.p initial= {{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="text-white mb-4">
              scoutPRO is a powerful task management platform that aims to streamline football team&apos;s collaboration and simplify the way tasks are tracked and completed. It is designed with user-friendliness in mind and is tailored to enhance productivity within football teams of all sizes.
            </motion.p>
            <motion.div initial= {{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="flex flex-wrap gap-2 mb-6">
              {[
                "Html",
                "Css",
                "JavaScript",
                "TailwindCSS",
                "React",
                "GSAP",
                "Firebase",
                "Git",
                "GitHub",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-white px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            <a
              href="https://ashes-code.github.io/scoutPRO/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center"
            >
              <span>Check it out</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
          <div className="flex justify-end ml-0 lg:ml-2 mb-5 lg:mb-0">
            <a
              href="https://ashes-code.github.io/scoutPRO/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={scoutpro}
                alt="Project preview"
                className="rounded-lg w-full h-full hover:scale-105 transition-all animate-two"
              />
            </a>
          </div>
        </motion.div>

        <motion.div 
            initial= {{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col-reverse lg:flex-row items-center justify-center bg-[#2b4973] py-10 rounded-xl my-10 px-5 project-card">
          <div className="bg-gray-800 rounded-lg flex flex-col justify-center py-8 px-6 lg:mr-2 animate">
            <h2 className="text-2xl font-bold mb-4">Belle-Food</h2>
            <motion.p initial= {{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="text-white mb-4">
              Belle-Food is a user-friendly food ordering platform that allows
              customers to browse a diverse menu, add items to their cart, and
              place orders for delivery. With a focus on local cuisine, the
              platform features dishes like Ofe Riro, Pounded Yam, and Okra
              Soup, catering to diverse culinary preferences.
            </motion.p>
            <motion.div initial= {{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="flex flex-wrap gap-2 mb-6">
              {[
                "Html",
                "Css",
                "JavaScript",
                "TailwindCSS",
                "Vercel",
                "Git",
                "GitHub",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-white px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            <a
              href="https://belle-food.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center"
            >
              <span>Check it out</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
          <div className="flex justify-end ml-0 lg:ml-2 mb-5 lg:mb-0">
            <a
              href="https://belle-food.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={bellefood}
                alt="Project preview"
                className="rounded-lg w-full hover:scale-105 transition-all animate-two"
              />
            </a>
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Projects
