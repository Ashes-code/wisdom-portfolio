import { useState } from "react";
import "./App.css";
import logo from "./assets/mylogo.png";
import bannerimg from "./assets/Wisdom.jpg";
import location from "./assets/location.png";
import dot from "./assets/dot.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import x from "./assets/x.png";
import facebook from "./assets/facebook.png";
import aboutbanner from "./assets/potraitgreen.jpg";
import html from "./assets/html.png";
import css from "./assets/css.png";
import JS from "./assets/JS.png";
import bootstrap from "./assets/bootstrap.png";
import tailwind from "./assets/tailwind.png";
import react from "./assets/react.png";
import git from "./assets/git.png";
import librain from "./assets/librain.png";
import emine from "./assets/e-mine.png";
import bellefood from "./assets/belle-food.png";
import email from "./assets/mail.png";
import phone from "./assets/phone.png";
import menu from "./assets/menu.png";

function App() {
    const [togglehamburger, setTogglehamburger] = useState(false);
  
    const handleToggle = () => {
      setTogglehamburger((prev) => !prev);
    };
  return (
    <section className="bg-[#0F131C] font-outfit">
      <section>
        <div className="screen lg:flex  justify-between items-center py-8">
          <div className="text-center flex justify-between px-3 lg:px-0">
            <a href="/">
              <img src={logo} alt="Logo" className="flex h-12 md:14 lg:h-20 lg:hover:scale-125 transition-all" />
            </a>            
            <img src={menu} alt="hamburger menu icon" className='flex justify-end lg:hidden h-10 md:12' onClick={handleToggle} />
          </div>
          {togglehamburger && (
            <ul className="lg:hidden flex flex-col justify-between items-center bg-[#1F2937] text-gray-400 absolute top-20 left-0 w-full py-5 shadow-lg">
              <li className="text-lg font-semibold hover:text-white transition-all tracking-widest">
                <a href="#about">About</a>
              </li>
              <li className="text-lg font-semibold hover:text-white transition-all tracking-widest ">
                <a href="#projects">Projects</a>
              </li>
              <li className="text-lg font-semibold hover:text-white transition-all tracking-widest ">
                <a href="#contact">Contact</a>
              </li>
              <li className="text-lg font-bold bg-white text-blue-500 text-center hover:text-blue-700 py-2 px-6 rounded-md transition-all tracking-widest">
                <a href="/https://drive.google.com/file/d/1Zi74sfPphjh_SfH8cwq8Zo55GGTRom4F/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV</a>
              </li>
            </ul>
          )}
            <ul className="hidden lg:flex justify-between items-center text-gray-400 ">
            <li className="mx-6 text-lg font-semibold hover:text-white transition-all tracking-widest mt-5 lg:mt-0">
              <a href="#about">About</a>
            </li>
            <li className="mx-6 text-lg font-semibold hover:text-white transition-all tracking-widest mt-5 lg:mt-0">
              <a href="#projects">Projects</a>
            </li>
            <li className="mx-6 text-lg font-semibold hover:text-white transition-all tracking-widest mt-5 lg:mt-0">
              <a href="#contact">Contact</a>
            </li>
            <li className="mx-6 text-lg font-bold bg-white text-blue-500 text-center mt-5 lg:mt-0 hover:text-blue-700 py-2 px-6 rounded-md transition-all tracking-widest">
              <a href="https://drive.google.com/file/d/1Zi74sfPphjh_SfH8cwq8Zo55GGTRom4F/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="screen text-white">
        <div className="flex flex-col-reverse lg:flex-row justify-between py-16 mt-3 px-5 lg:px-0">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-5xl font-bold mb-8">
              Hello, I am{" "}
              <span className="text-blue-700 tracking-widest">Wisdom Ezeh</span>
            </h1>
            <p className="w-11/12">
              I am front-end web developer with a focus on creating and
              exception digital experiences, websites and webapps that are fast,
              accessible, visually appealing, and responsive. With ample
              experience with HTML, CSS, Tailwind, and React to create stunning
              and efficient innovations to solve problems.
            </p>
            <div className="mt-16">
              <div className="flex items-end mb-2 justify-start">
                <img src={location} alt="Location" className="flex h-7 mr-2" />
                Abia State, Nigeria
              </div>
              <div className="flex items-end justify-start">
                <img src={dot} alt="Availability" className="flex h-7 mr-2" />
                Available for new projects
              </div>
              <div className="flex mt-10">
                <a
                  href="https://github.com/Ashes-code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="Github account" className="h-12" />
                </a>

                <a
                  href="www.linkedin.com/in/wisdomezeh-ashdom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedin}
                    alt="Linkedin Account"
                    className="h-12 ml-8"
                  />
                </a>

                <a
                  href="https://x.com/WisdomEzeh60329"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={x} alt="X account" className="h-12 ml-8" />
                </a>

                <a
                  href="https://www.facebook.com/share/1Ane87maTJ/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={facebook}
                    alt="Facebook account"
                    className="h-12 ml-8"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div className="-mt-5 lg:-mt-0 mb-10 lg:mb-0">
              <img src={bannerimg} alt="" className="w-[65rem] rounded-md" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1d2435]">
        <div
          className="flex justify-center items-center mt-28 screen"
          id="about"
        >
          <h1 className="text-xl font-bold mb-12 text-blue-700 rounded-md bg-white py-2 px-4 mt-12 tracking-widest">
            About Me
          </h1>
        </div>
        <div className="screen flex flex-col lg:flex-row items-center lg:items-start gap-8 px-4 lg:p-6">
          <div className="flex-shrink-0">
            <img
              src={aboutbanner}
              alt="About me image"
              className="h-[20rem] lg:h-[30rem] rounded-lg"
            />
          </div>
          <div className="text-left max-w-2xl mb-5">
            <h1 className="text-4xl text-center tracking-widest font-bold mb-4 text-white">
              Curious about me?
            </h1>
            <p className="text-white leading-relaxed text-lg mt-4">
              A passionate Front-End Developer dedicated to crafting visually
              stunning, user-friendly websites and web applications. I have
              expertise in React, TailwindCSS, JavaScript, and other modern web
              technologies, I aim to deliver seamless digital experiences that
              solve real-world problems.
            </p>
            <p className="text-white leading-relaxed mt-4 text-lg">
              I thrive on creating intuitive designs and functionality, ensuring
              every project reflects a blend of creativity, performance, and
              accessibility. Whether it’s building responsive web pages, dynamic
              web apps, collaborating with a team, or building scalable
              interfaces, I approach every task with precision, a drive to meet
              deadlines, curiosity, and a drive to continuously improve.
            </p>
            <p className="text-white leading-relaxed mt-4 text-lg">
              When I’m not coding, you can find me exploring the latest trends
              in tech, reading books, or enjoying music that fuels my
              creativity. My love for continuous learning keeps me motivated to
              evolve as a developer and create solutions that make a difference.
              You can follow me on
              <span>
                <a
                  href="https://x.com/WisdomEzeh60329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline underline-offset-4"
                >
                  {" "}
                  Twitter,
                </a>
              </span>{" "}
              <span>
                <a
                  href="www.linkedin.com/in/wisdomezeh-ashdom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline underline-offset-4"
                >
                  LinkedIn,
                </a>
              </span>{" "}
              <span>
                <a
                  href="https://www.facebook.com/share/1Ane87maTJ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline underline-offset-4"
                >
                  Facebook.
                </a>
              </span>{" "}
              Check out my works on{" "}
              <span>
                <a
                  href="https://github.com/Ashes-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline underline-offset-4"
                >
                  Github.
                </a>
              </span>
            </p>
            <h3 className="text-2xl font-bold text-white mt-4 tracking-widest">
              Finally, what I bring to the table:
            </h3>
            <div className="text-white leading-relaxed mt-4 px-3 lg:px-0 text-lg">
              <ul className="list-disc">
                <li>
                  <span className="text-xl font-semibold">
                    Technical Expertise
                  </span>
                  : Proficient in HTML, CSS, JavaScript, Tailwind and frameworks
                  like React.
                </li>
                <li>
                  <span className="text-xl font-semibold">
                    Aesthetic Vision
                  </span>
                  : A strong sense of design, leveraging tools like TailwindCSS
                  to build clean, modern interfaces.
                </li>
                <li>
                  <span className="text-xl font-semibold">
                    Problem-Solving Skills
                  </span>
                  : An analytical mind to debug and optimize code efficiently.
                </li>
                <li>
                  <span className="text-xl font-semibold">Adaptability</span>: A
                  commitment to staying updated with emerging technologies and
                  industry practices.
                </li>
                <li>
                  <span className="text-xl font-semibold">Soft Skills</span>:
                  Effective communication, team collaboration, time management,
                  creativity, critical thinking, resilience, and a growth
                  mindset ensure I excel in dynamic and collaborative
                  environments.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="screen">
        <div className="flex justify-center items-center mt-28 screen flex-col">
          <h1 className="text-xl font-bold mb-5 text-blue-700 rounded-md bg-white py-2 px-4 mt-12 tracking-widest">
            Skills
          </h1>
          <p className="text-white text-lg font-bold mb-8 text-center px-5 lg:px-0">
            The skills and technologies I am really good at:
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mb-20">
          <div className="flex items-center flex-col">
            <img src={html} alt="html5 image" />
            <p className="text-white font-semibold">HTML5</p>
          </div>
          <div className="flex items-center flex-col">
            <img src={css} alt="css3 image" />
            <p className="text-white font-semibold">CSS3</p>
          </div>
          <div className="flex items-center flex-col">
            <img src={bootstrap} alt="bootstrap image" />
            <p className="text-white font-semibold">BOOTSTRAP</p>
          </div>
          <div className="flex items-center flex-col">
            <img src={JS} alt="javascript image" />
            <p className="text-white font-semibold">JAVASCRIPT</p>
          </div>
          <div className="flex items-center flex-col">
            <img src={tailwind} alt="tailwind image" />
            <p className="text-white font-semibold">TAILWIND</p>
          </div>
          <div className="flex items-center flex-col">
            <img src={react} alt="react image" />
            <p className="text-white font-semibold">REACT</p>
          </div>
          <div className="flex items-center flex-col">
            <img src={git} alt="git image" />
            <p className="text-white font-semibold">GIT</p>
          </div>
          <div className="flex items-center flex-col">
            <img src={github} alt="github image" />
            <p className="text-white font-semibold">GITHUB</p>
          </div>
        </div>
      </section>

      <section className="bg-[#1d2435]">
        <div
          className="flex justify-center items-center mt-28 screen flex-col screen"
          id="projects"
        >
          <h1 className="text-xl font-bold mb-5 text-blue-700 rounded-md bg-white py-2 px-4 mt-12 tracking-widest">
            Projects
          </h1>
          <p className="text-white text-lg text-center font-bold mb-8 px-5 lg:px-0">
            Some of the noteworthy projects I have built:
          </p>
        </div>
        <div className="text-white screen pb-4 px-3 lg:px-0">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center bg-[#2b4973] py-10 rounded-xl my-10 px-5">
            <div className="bg-gray-800 rounded-lg flex flex-col justify-center py-8 px-6 lg:mr-2">
              <h2 className="text-2xl font-bold mb-4">LiBrain</h2>
              <p className="text-white mb-4">
                LiBrain is an online bookstore offering a curated selection of
                books across various genres. The platform provides users with an
                intuitive browsing experience, detailed book descriptions, and
                seamless purchasing options, making it a go-to destination for
                book enthusiasts.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
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
              </div>
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
                  className="rounded-lg w-full h-full hover:scale-105 transition-all"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center justify-center bg-[#2b4973] py-10 rounded-xl my-10 px-5">
            <div className="bg-gray-800 rounded-lg flex flex-col justify-center py-8 px-6 lg:mr-2">
              <h2 className="text-2xl font-bold mb-4">E-mine</h2>
              <p className="text-white mb-4">
                E-mine is an e-commerce platform designed to offer users access
                to a wide range of products at competitive prices. The website
                features a clean and modern interface, with categories to help
                users discover the latest trends and enjoy unbeatable discounts.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
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
              </div>
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
                  className="rounded-lg w-full h-full hover:scale-105 transition-all"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center justify-center bg-[#2b4973] py-10 rounded-xl my-10 px-5">
            <div className="bg-gray-800 rounded-lg flex flex-col justify-center py-8 px-6 lg:mr-2">
              <h2 className="text-2xl font-bold mb-4">Belle-Food</h2>
              <p className="text-white mb-4">
                Belle-Food is a user-friendly food ordering platform that allows
                customers to browse a diverse menu, add items to their cart, and
                place orders for delivery. With a focus on local cuisine, the
                platform features dishes like Ofe Riro, Pounded Yam, and Okra
                Soup, catering to diverse culinary preferences.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
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
              </div>
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
                  className="rounded-lg w-full hover:scale-105 transition-all"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-[#0F131C] px-4 sm:px-6 lg:px-12 py-10">
        <div
          className="flex flex-col justify-center items-center mt-16 lg:mt-28 screen"
          id="contact"
        >
          <h1 className="text-xl font-bold mb-5 text-blue-700 rounded-md bg-white py-2 px-4 tracking-widest">
            Get in Touch
          </h1>
          <p className="text-white text-lg font-bold mb-9 text-center lg:w-[50rem]">
            What’s next? Feel free to reach out to me if you are looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>
        <div className="flex flex-col items-center text-center pb-12 gap-6">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-white flex items-center">
            <img src={email} alt="Email Icon" className="h-8 mr-3" />
            wisdomcezeh@gmail.com
          </h1>
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-white flex items-center">
            <img src={phone} alt="Phone Icon" className="h-8 mr-3" />
            +234 7072967842
          </h1>
        </div>
        <div>
          <p className="text-white text-lg font-semibold text-center mb-4">
            You can also find me on these platforms:
          </p>
          <div className="flex justify-center gap-x-6 mt-3 pb-8">
            <a
              href="https://github.com/Ashes-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="Github account" className="h-8" />
            </a>
            <a
              href="www.linkedin.com/in/wisdomezeh-ashdom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="Linkedin Account" className="h-8" />
            </a>
            <a
              href="https://x.com/WisdomEzeh60329"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={x} alt="X account" className="h-8" />
            </a>
            <a
              href="https://www.facebook.com/share/1Ane87maTJ/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook account" className="h-8" />
            </a>
          </div>
          <p className="text-center text-white">
            &copy; {new Date().getFullYear()}
            <span className="text-[#1D4ED8]"> Ezeh Wisdom</span>
          </p>
        </div>
      </section>

    </section>
  );
}

export default App;
